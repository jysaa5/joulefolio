"use client";

import type { ReactNode } from "react";
import { useId } from "react";

import { DropdownContext } from "./dropdown-context";

type DropdownProps = {
  children: ReactNode;
};

export default function Dropdown({ children }: DropdownProps) {
  const contentId = useId();
  const anchorId = `${contentId}-anchor`;

  return (
    <DropdownContext.Provider value={{ anchorId, contentId }}>
      <div className="relative inline-flex">{children}</div>
    </DropdownContext.Provider>
  );
}
