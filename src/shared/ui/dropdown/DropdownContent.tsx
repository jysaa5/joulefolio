"use client";

import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

import { useDropdownContext } from "./dropdown-context";

type DropdownContentProps = HTMLAttributes<HTMLDivElement> & {
  children: ReactNode;
};

export default function DropdownContent({
  children,
  className,
  role = "menu",
  ...props
}: DropdownContentProps) {
  const { anchorId, contentId } = useDropdownContext("DropdownContent");

  return (
    <div
      style={{
        inset: "auto",
        margin: "0",
        positionAnchor: `--${anchorId}`,
        positionArea: "bottom span-right",
        positionTryFallbacks: [
          "top span-right",
          "bottom span-left",
          "top span-left",
        ].join(", "),
      }}
      className={cn(
        "mt-2 min-w-48 rounded-xl border border-(--color-border) bg-(--color-card) p-1 text-(--color-foreground) shadow-lg outline-none",
        "open:grid",
        className,
      )}
      id={contentId}
      popover="auto"
      role={role}
      {...props}
    >
      {children}
    </div>
  );
}
