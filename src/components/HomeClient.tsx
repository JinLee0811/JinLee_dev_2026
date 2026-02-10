"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Navigation, type NavigationPage } from "@/components/Navigation";
import { ScrollProgress } from "@/components/ScrollProgress";
import { CustomCursor } from "@/components/CustomCursor";
import { AnimatedHero } from "@/components/AnimatedHero";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Experience } from "@/components/Experience";
import { Education } from "@/components/Education";
import { BlogSection } from "@/components/BlogSection";
import { Footer } from "@/components/Footer";
import { AllProjects } from "@/components/AllProjects";
import { BlogPage } from "@/components/BlogPage";
import { QnAPage } from "@/components/QnAPage";
import type { BlogIndexItem } from "@/lib/blog";

type HomeClientProps = {
  posts: BlogIndexItem[];
  initialView: NavigationPage;
};

export function HomeClient({ posts, initialView }: HomeClientProps) {
  const [currentPage, setCurrentPage] = useState<NavigationPage>(initialView);
  const router = useRouter();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    if (currentPage === "home") {
      router.replace("/");
    } else {
      router.replace(`/?view=${currentPage}`);
    }
  }, [currentPage, router]);

  const renderPage = () => {
    switch (currentPage) {
      case "projects":
        return <AllProjects />;
      case "blog":
        return <BlogPage posts={posts} />;
      case "qna":
        return <QnAPage />;
      case "home":
      default:
        return (
          <>
            <AnimatedHero />
            <FeaturedProjects onViewAll={() => setCurrentPage("projects")} />
            <Experience />
            <Education />
            <BlogSection
              posts={posts}
              onViewAll={() => setCurrentPage("blog")}
            />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen">
      <CustomCursor />
      <ScrollProgress />
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  );
}
