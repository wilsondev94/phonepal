"use client";

import { useModalStore } from "@/hooks/useModalStore";
import { cn } from "@/lib/utils";

export function CustomOverlay({ className }: { className?: string }) {
  const { openAuthModal } = useModalStore();

  return (
    openAuthModal && (
      <div
        className={cn(
          "absolute inset-0 z-[200] bg-black/50 w-full h-auto transform transition-all duration-700",
          openAuthModal
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none transition-none",
          className
        )}
      />
    )
  );
}
