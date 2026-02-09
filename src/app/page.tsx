"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
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

export default function Home() {
  const [currentPage, setCurrentPage] = useState<NavigationPage>("home");
  const searchParams = useSearchParams();
  const router = useRouter();

  useEffect(() => {
    const view = searchParams.get("view");
    if (view === "blog" || view === "projects" || view === "home") {
      setCurrentPage(view);
    }
  }, [searchParams]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [currentPage]);

  useEffect(() => {
    const view = searchParams.get("view");
    if (currentPage === "home") {
      if (view) {
        router.replace("/");
      }
      return;
    }
    if (view !== currentPage) {
      router.replace(`/?view=${currentPage}`);
    }
  }, [currentPage, router, searchParams]);

  const renderPage = () => {
    switch (currentPage) {
      case "projects":
        return <AllProjects />;
      case "blog":
        return <BlogPage />;
      case "home":
      default:
        return (
          <>
            <AnimatedHero />
            <FeaturedProjects onViewAll={() => setCurrentPage("projects")} />
            <Experience />
            <Education />
            <BlogSection onViewAll={() => setCurrentPage("blog")} />
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
