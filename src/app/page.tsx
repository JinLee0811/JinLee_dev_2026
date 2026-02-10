import { getAllPosts } from "@/lib/blog";
import { HomeClient } from "@/components/HomeClient";

type HomePageProps = {
  searchParams?: Promise<{ view?: string }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const posts = await getAllPosts();

  const resolvedSearchParams = (await searchParams) ?? {};
  const view = resolvedSearchParams.view;
  const initialView =
    view === "projects" || view === "blog" || view === "qna" ? view : "home";

  return <HomeClient posts={posts} initialView={initialView} />;
}
