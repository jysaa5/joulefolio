"use client";

import { createContext, useContext } from "react";

type DropdownContextValue = {
  anchorId: string;
  contentId: string;
};

export const DropdownContext = createContext<DropdownContextValue | null>(null);

export function useDropdownContext(componentName: string) {
  const context = useContext(DropdownContext);

  if (!context) {
    throw new Error(`${componentName} must be used within Dropdown.`);
  }

  return context;
}
