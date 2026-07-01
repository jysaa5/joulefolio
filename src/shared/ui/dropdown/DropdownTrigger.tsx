"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

import { useDropdownContext } from "./dropdown-context";
import DropdownChevron from "./DropdownChevron";

type DropdownTriggerProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  icon?: ReactNode;
  iconClassName?: string;
  showChevron?: boolean;
};

export default function DropdownTrigger({
  children,
  className,
  icon,
  iconClassName,
  showChevron = true,
  type = "button",
  ...props
}: DropdownTriggerProps) {
  const { anchorId, contentId } = useDropdownContext("DropdownTrigger");

  return (
    <button
      style={{ anchorName: `--${anchorId}` }}
      aria-controls={contentId}
      aria-haspopup="menu"
      className={cn(
        "inline-flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium transition hover:bg-black/5",
        className,
      )}
      id={anchorId}
      popoverTarget={contentId}
      type={type}
      {...props}
    >
      <span>{children}</span>
      {showChevron
        ? (icon ?? <DropdownChevron className={iconClassName} />)
        : null}
    </button>
  );
}
