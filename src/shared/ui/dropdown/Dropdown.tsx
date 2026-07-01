"use client";

import type { ReactNode } from "react";
import { useId } from "react";

import { cn } from "@/shared/lib/cn";

import { DropdownContext } from "./dropdown-context";

type DropdownProps = {
  children: ReactNode;
  className?: string;
};

export default function Dropdown({ children, className }: DropdownProps) {
  const contentId = useId();
  const anchorId = `${contentId}-anchor`;

  return (
    <DropdownContext.Provider value={{ anchorId, contentId }}>
      <div className={cn("relative inline-flex", className)}>{children}</div>
    </DropdownContext.Provider>
  );
}
