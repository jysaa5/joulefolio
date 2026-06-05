"use client";

import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

import { useDropdownContext } from "./dropdown-context";

type DropdownItemProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  closeOnSelect?: boolean;
};

export default function DropdownItem({
  children,
  className,
  closeOnSelect = true,
  type = "button",
  ...props
}: DropdownItemProps) {
  const { contentId } = useDropdownContext("DropdownItem");

  return (
    <button
      className={cn(
        "flex w-full items-center rounded-lg px-3 py-2 text-left text-sm transition hover:bg-black/5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black disabled:cursor-not-allowed disabled:opacity-50",
        className,
      )}
      popoverTarget={closeOnSelect ? contentId : undefined}
      popoverTargetAction={closeOnSelect ? "hide" : undefined}
      role="menuitem"
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
