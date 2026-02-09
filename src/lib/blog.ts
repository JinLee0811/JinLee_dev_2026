import fs from "fs/promises";
import path from "path";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";
import remarkGfm from "remark-gfm";

const postsDirectory = path.join(process.cwd(), "posts");

export type BlogFrontmatter = {
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
};

export type BlogIndexItem = {
  slug: string;
  titleEn: string;
  titleKo: string;
  excerptEn: string;
  excerptKo: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
  image: string;
};

export type SerializedMdx = Awaited<ReturnType<typeof serialize>>;

export type BlogPostDetail = BlogIndexItem & {
  contentEn: SerializedMdx;
  contentKo: SerializedMdx;
};

type PostFile = {
  slug: string;
  lang: "en" | "ko";
  frontmatter: BlogFrontmatter;
  content: string;
};

const parsePostFile = async (fileName: string): Promise<PostFile | null> => {
  if (!fileName.endsWith(".mdx")) {
    return null;
  }

  const match = fileName.match(/^(.*)\.(en|ko)\.mdx$/);
  if (!match) {
    return null;
  }

  const slug = match[1];
  const lang = match[2] as "en" | "ko";
  const filePath = path.join(postsDirectory, fileName);
  const raw = await fs.readFile(filePath, "utf8");
  const { content, data } = matter(raw);

  return {
    slug,
    lang,
    content,
    frontmatter: {
      title: String(data.title ?? ""),
      excerpt: String(data.excerpt ?? ""),
      date: String(data.date ?? ""),
      readTime: String(data.readTime ?? ""),
      category: String(data.category ?? ""),
      tags: Array.isArray(data.tags) ? data.tags.map(String) : [],
      image: String(data.image ?? ""),
    },
  };
};

const getPostFiles = async () => {
  try {
    return await fs.readdir(postsDirectory);
  } catch {
    return [];
  }
};

const toIndexItem = (en: PostFile, ko: PostFile): BlogIndexItem => ({
  slug: en.slug,
  titleEn: en.frontmatter.title,
  titleKo: ko.frontmatter.title,
  excerptEn: en.frontmatter.excerpt,
  excerptKo: ko.frontmatter.excerpt,
  date: en.frontmatter.date,
  readTime: en.frontmatter.readTime,
  category: en.frontmatter.category,
  tags: en.frontmatter.tags,
  image: en.frontmatter.image,
});

const sortByDateDesc = (posts: BlogIndexItem[]) =>
  [...posts].sort((a, b) => Date.parse(b.date) - Date.parse(a.date));

export const getAllPosts = async (): Promise<BlogIndexItem[]> => {
  const files = await getPostFiles();
  const parsed = (await Promise.all(files.map(parsePostFile))).filter(
    (post): post is PostFile => Boolean(post)
  );

  const grouped = parsed.reduce<Record<string, Partial<Record<"en" | "ko", PostFile>>>>(
    (acc, post) => {
      if (!acc[post.slug]) {
        acc[post.slug] = {};
      }
      acc[post.slug][post.lang] = post;
      return acc;
    },
    {}
  );

  const posts = Object.values(grouped)
    .map((group) => {
      const en = group.en;
      const ko = group.ko;
      if (!en || !ko) {
        return null;
      }
      return toIndexItem(en, ko);
    })
    .filter((post): post is BlogIndexItem => Boolean(post));

  return sortByDateDesc(posts);
};

export const getPostBySlug = async (slug: string): Promise<BlogPostDetail | null> => {
  const files = await getPostFiles();
  const parsed = (await Promise.all(files.map(parsePostFile))).filter(
    (post): post is PostFile => Boolean(post && post.slug === slug)
  );

  const en = parsed.find((post) => post.lang === "en");
  const ko = parsed.find((post) => post.lang === "ko");

  if (!en || !ko) {
    return null;
  }

  const [contentEn, contentKo] = await Promise.all([
    serialize(en.content, { mdxOptions: { remarkPlugins: [remarkGfm] } }),
    serialize(ko.content, { mdxOptions: { remarkPlugins: [remarkGfm] } }),
  ]);

  return {
    ...toIndexItem(en, ko),
    contentEn,
    contentKo,
  };
};
