"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import { BackLink } from "./BackLink";
import type { SerializedMdx } from "@/lib/blog";

type BlogDetailClientProps = {
  titleEn: string;
  titleKo: string;
  excerptEn: string;
  excerptKo: string;
  contentEn: SerializedMdx;
  contentKo: SerializedMdx;
  image: string;
  category: string;
  tags: string[];
  date: string;
};

export function BlogDetailClient({
  titleEn,
  titleKo,
  excerptEn,
  excerptKo,
  contentEn,
  contentKo,
  image,
  category,
  tags,
  date,
}: BlogDetailClientProps) {
  const [language, setLanguage] = useState<"en" | "ko">("en");
  const [theme, setTheme] = useState<"dark" | "light">("light");

  const title = language === "ko" ? titleKo : titleEn;
  const excerpt = language === "ko" ? excerptKo : excerptEn;
  const content = useMemo(
    () => (language === "ko" ? contentKo : contentEn),
    [contentEn, contentKo, language]
  );

  const isDark = theme === "dark";

  return (
    <main className={isDark ? "min-h-screen bg-slate-950 text-white" : "min-h-screen bg-white text-slate-900"}>
      <section className="pt-28 pb-16 px-6">
        <div className="container mx-auto max-w-4xl space-y-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className={isDark ? "text-xs uppercase tracking-[0.2em] text-slate-400" : "text-xs uppercase tracking-[0.2em] text-slate-500"}>
                Language
              </span>
              <div className={isDark ? "inline-flex rounded-full bg-white/5 p-1 border border-white/10" : "inline-flex rounded-full bg-slate-100 p-1 border border-slate-200"}>
                <button
                  type="button"
                  onClick={() => setLanguage("ko")}
                  className={
                    language === "ko"
                      ? isDark
                        ? "px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-white/10"
                        : "px-4 py-1.5 rounded-full text-sm font-semibold text-slate-900 bg-white shadow-sm"
                      : isDark
                      ? "px-4 py-1.5 rounded-full text-sm text-white/70 hover:text-white"
                      : "px-4 py-1.5 rounded-full text-sm text-slate-500 hover:text-slate-700"
                  }
                >
                  🇰🇷 한국어
                </button>
                <button
                  type="button"
                  onClick={() => setLanguage("en")}
                  className={
                    language === "en"
                      ? isDark
                        ? "px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-white/10"
                        : "px-4 py-1.5 rounded-full text-sm font-semibold text-slate-900 bg-white shadow-sm"
                      : isDark
                      ? "px-4 py-1.5 rounded-full text-sm text-white/70 hover:text-white"
                      : "px-4 py-1.5 rounded-full text-sm text-slate-500 hover:text-slate-700"
                  }
                >
                  🇦🇺 English
                </button>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <span className={isDark ? "text-xs uppercase tracking-[0.2em] text-slate-400" : "text-xs uppercase tracking-[0.2em] text-slate-500"}>
                Theme
              </span>
              <div className={isDark ? "inline-flex rounded-full bg-white/5 p-1 border border-white/10" : "inline-flex rounded-full bg-slate-100 p-1 border border-slate-200"}>
                <button
                  type="button"
                  onClick={() => setTheme("light")}
                  className={
                    theme === "light"
                      ? isDark
                        ? "px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-white/10"
                        : "px-4 py-1.5 rounded-full text-sm font-semibold text-slate-900 bg-white shadow-sm"
                      : isDark
                      ? "px-4 py-1.5 rounded-full text-sm text-white/70 hover:text-white"
                      : "px-4 py-1.5 rounded-full text-sm text-slate-500 hover:text-slate-700"
                  }
                >
                  ☀️ Light
                </button>
                <button
                  type="button"
                  onClick={() => setTheme("dark")}
                  className={
                    theme === "dark"
                      ? isDark
                        ? "px-4 py-1.5 rounded-full text-sm font-semibold text-white bg-white/10"
                        : "px-4 py-1.5 rounded-full text-sm font-semibold text-slate-900 bg-white shadow-sm"
                      : isDark
                      ? "px-4 py-1.5 rounded-full text-sm text-white/70 hover:text-white"
                      : "px-4 py-1.5 rounded-full text-sm text-slate-500 hover:text-slate-700"
                  }
                >
                  🌙 Dark
                </button>
              </div>
            </div>
          </div>

          <div className={isDark ? "flex items-center justify-between text-sm text-slate-400" : "flex items-center justify-between text-sm text-slate-500"}>
            <BackLink
              fallbackHref="/?view=blog"
              label="Back to previous page"
              storageKey="blog:return"
            />
            <span>{date}</span>
          </div>

          <div className="space-y-2">
            <h1 className="text-4xl md:text-6xl font-bold">{title}</h1>
            <p className={isDark ? "text-lg text-slate-400" : "text-lg text-slate-600"}>{excerpt}</p>
          </div>

          <div className={isDark ? "relative aspect-video rounded-3xl overflow-hidden border border-white/10 bg-white/5" : "relative aspect-video rounded-3xl overflow-hidden border border-slate-200 bg-slate-50"}>
            <Image src={image} alt={title} fill className="object-cover" priority />
            <div className={isDark ? "absolute inset-0 bg-linear-to-tr from-slate-950/70 via-transparent to-slate-950/10" : "absolute inset-0 bg-linear-to-tr from-white/60 via-transparent to-white/10"} />
          </div>

          <div className={isDark ? "space-y-6 text-lg leading-relaxed text-slate-300" : "space-y-6 text-lg leading-relaxed text-slate-700"}>
            <MDXRemote {...content} />
          </div>

          <div className="space-y-3 pt-2">
            <p className={isDark ? "text-sm uppercase tracking-[0.2em] text-purple-300" : "text-sm uppercase tracking-[0.2em] text-purple-600"}>
              {category}
            </p>
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className={
                    isDark
                      ? "px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-purple-200"
                      : "px-4 py-2 bg-purple-50 border border-purple-100 rounded-full text-sm text-purple-700"
                  }
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
