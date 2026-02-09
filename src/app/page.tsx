import { getAllPosts } from "@/lib/blog";
import { HomeClient } from "@/components/HomeClient";

export default async function Home() {
  const posts = await getAllPosts();

  return <HomeClient posts={posts} />;
}
