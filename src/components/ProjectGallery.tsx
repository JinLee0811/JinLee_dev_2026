"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";

type ProjectGalleryProps = {
  title: string;
  images: string[];
};

export function ProjectGallery({ title, images }: ProjectGalleryProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  useEffect(() => {
    if (activeIndex === null) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        close();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [activeIndex, close]);

  return (
    <>
      <div className="grid gap-6 md:grid-cols-2">
        {images.map((image, index) => (
          <button
            key={`${title}-gallery-${index}`}
            type="button"
            onClick={() => setActiveIndex(index)}
            className="relative aspect-video rounded-2xl overflow-hidden border border-white/10 bg-white/5 text-left group"
          >
            <Image
              src={image}
              alt={`${title} screenshot ${index + 1}`}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-linear-to-tr from-slate-950/60 via-transparent to-slate-950/10 opacity-70" />
          </button>
        ))}
      </div>

      {activeIndex !== null && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <div
            className="relative w-full max-w-5xl aspect-video rounded-2xl overflow-hidden border border-white/10 bg-black"
            onClick={(event) => event.stopPropagation()}
          >
            <Image
              src={images[activeIndex]}
              alt={`${title} preview ${activeIndex + 1}`}
              fill
              className="object-contain"
              priority
            />
            <button
              type="button"
              onClick={close}
              className="absolute top-4 right-4 rounded-full bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/20"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}
