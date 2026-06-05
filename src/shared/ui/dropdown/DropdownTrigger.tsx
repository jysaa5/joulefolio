"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

import { useDropdownContext } from "./dropdown-context";

type DropdownTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
};

export default function DropdownTrigger({
  children,
  className,
  type = "button",
  ...props
}: DropdownTriggerProps) {
  const { anchorId, contentId } = useDropdownContext("DropdownTrigger");

  return (
    <button
      style={{ anchorName: `--${anchorId}` }}
      aria-controls={contentId}
      aria-haspopup="menu"
      className={cn("inline-flex items-center", className)}
      id={anchorId}
      popoverTarget={contentId}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
