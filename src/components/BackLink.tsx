"use client";

import { useRouter } from "next/navigation";

type BackLinkProps = {
  fallbackHref: string;
  label: string;
  storageKey?: string;
};

export function BackLink({ fallbackHref, label, storageKey }: BackLinkProps) {
  const router = useRouter();

  const handleClick = () => {
    if (typeof window !== "undefined" && storageKey) {
      const stored = window.sessionStorage.getItem(storageKey);
      if (stored) {
        router.push(stored);
        return;
      }
    }
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }
    router.push(fallbackHref);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="text-purple-500 hover:text-purple-400 font-semibold"
    >
      ← {label}
    </button>
  );
}
