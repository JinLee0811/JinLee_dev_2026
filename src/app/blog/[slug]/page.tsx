import Image from "next/image";
import { notFound } from "next/navigation";
import { blogPosts } from "@/data/blogPosts";
import { BlogLanguageSwitcher } from "../../../components/BlogLanguageSwitcher";
import { BackLink } from "../../../components/BackLink";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function BlogDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const post = blogPosts.find((item) => item.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="mb-10 flex items-center justify-between text-sm text-slate-400">
            <BackLink
              fallbackHref="/?view=blog"
              label="Back to previous page"
              storageKey="blog:return"
            />
            <span>{post.date}</span>
          </div>

          <div className="space-y-6">
            <div className="space-y-3">
              <p className="text-sm uppercase tracking-[0.2em] text-purple-300">
                {post.category}
              </p>
              <div className="flex flex-wrap gap-3">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-purple-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5">
              <Image
                src={post.image}
                alt={post.titleEn}
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-linear-to-tr from-slate-950/70 via-transparent to-slate-950/10" />
            </div>

            <BlogLanguageSwitcher
              titleEn={post.titleEn}
              titleKo={post.titleKo}
              excerptEn={post.excerptEn}
              excerptKo={post.excerptKo}
              contentEn={post.contentEn}
              contentKo={post.contentKo}
            />
          </div>
        </div>
      </section>
    </main>
  );
}
