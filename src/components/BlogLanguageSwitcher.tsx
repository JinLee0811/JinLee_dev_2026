"use client";

import { useMemo, useState } from "react";
import { MDXRemote } from "next-mdx-remote";
import type { SerializedMdx } from "@/lib/blog";

type BlogLanguageSwitcherProps = {
  titleEn: string;
  titleKo: string;
  excerptEn: string;
  excerptKo: string;
  contentEn: SerializedMdx;
  contentKo: SerializedMdx;
};

export function BlogLanguageSwitcher({
  titleEn,
  titleKo,
  excerptEn,
  excerptKo,
  contentEn,
  contentKo,
}: BlogLanguageSwitcherProps) {
  const [language, setLanguage] = useState<"en" | "ko">("en");

  const content = useMemo(
    () => (language === "ko" ? contentKo : contentEn),
    [contentEn, contentKo, language]
  );

  return (
    <div className="space-y-6">
      <div className="flex flex-wrap items-center gap-2 text-sm text-slate-400">
        <span>Language</span>
        <button
          type="button"
          onClick={() => setLanguage("ko")}
          className={`rounded-full border px-3 py-1 ${
            language === "ko"
              ? "border-purple-400 text-white"
              : "border-white/10 text-white/60"
          }`}
        >
          🇰🇷 한국어
        </button>
        <button
          type="button"
          onClick={() => setLanguage("en")}
          className={`rounded-full border px-3 py-1 ${
            language === "en"
              ? "border-purple-400 text-white"
              : "border-white/10 text-white/60"
          }`}
        >
          🇦🇺 English
        </button>
      </div>

      <div className="space-y-2">
        <h1 className="text-4xl md:text-6xl font-bold">
          {language === "ko" ? titleKo : titleEn}
        </h1>
        <p className="text-lg text-slate-400">
          {language === "ko" ? excerptKo : excerptEn}
        </p>
      </div>

      <div className="space-y-6 text-lg leading-relaxed text-slate-300">
        <MDXRemote {...content} />
      </div>
    </div>
  );
}
