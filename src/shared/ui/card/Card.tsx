import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

type CardPadding = "none" | "sm" | "md" | "lg";

type CardProps = HTMLAttributes<HTMLElement> & {
  as?: "article" | "div" | "section";
  children: ReactNode;
  padding?: CardPadding;
};

const paddingClassName: Record<CardPadding, string> = {
  none: "",
  sm: "p-4",
  md: "p-5",
  lg: "p-6",
};

export default function Card({
  as: Component = "section",
  children,
  className,
  padding = "lg",
  ...props
}: CardProps) {
  return (
    <Component
      className={cn(
        "rounded-2xl border border-(--color-border) bg-(--color-card) shadow-sm",
        paddingClassName[padding],
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
