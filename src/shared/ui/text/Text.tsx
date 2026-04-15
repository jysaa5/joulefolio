import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

type TextElement = "p" | "span" | "strong";
type TextTone = "default" | "muted" | "accent";
type TextSize = "sm" | "md" | "lg" | "xl";

type TextProps = HTMLAttributes<HTMLElement> & {
  as?: TextElement;
  children: ReactNode;
  tone?: TextTone;
  size?: TextSize;
};

const toneClassName: Record<TextTone, string> = {
  default: "text-(--color-foreground)",
  muted: "text-(--color-muted-foreground)",
  accent: "text-black",
};

const sizeClassName: Record<TextSize, string> = {
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
};

export default function Text({
  as: Component = "p",
  children,
  className,
  size = "md",
  tone = "default",
  ...props
}: TextProps) {
  return (
    <Component className={cn(sizeClassName[size], toneClassName[tone], className)} {...props}>
      {children}
    </Component>
  );
}
