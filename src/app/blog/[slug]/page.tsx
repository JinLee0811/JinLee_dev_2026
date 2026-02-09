import { notFound } from "next/navigation";
import { getPostBySlug } from "@/lib/blog";
import { BlogDetailClient } from "../../../components/BlogDetailClient";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <BlogDetailClient
      titleEn={post.titleEn}
      titleKo={post.titleKo}
      excerptEn={post.excerptEn}
      excerptKo={post.excerptKo}
      contentEn={post.contentEn}
      contentKo={post.contentKo}
      image={post.image}
      category={post.category}
      tags={post.tags}
      date={post.date}
    />
  );
}
