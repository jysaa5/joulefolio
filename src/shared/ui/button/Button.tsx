import type { ButtonHTMLAttributes, ReactNode } from "react";

import { cn } from "@/shared/lib/cn";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
};

const variantClassName: Record<ButtonVariant, string> = {
  primary: "bg-black text-white hover:bg-gray-800",
  secondary:
    "bg-(--color-card) text-(--color-foreground) border border-(--color-border) hover:bg-black/5",
  ghost: "bg-transparent text-(--color-foreground) hover:bg-black/5",
};

const sizeClassName: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-sm",
  md: "px-4 py-2 text-sm",
  lg: "px-5 py-3 text-base",
};

export default function Button({
  children,
  className,
  size = "md",
  type = "button",
  variant = "primary",
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg font-medium transition disabled:cursor-not-allowed disabled:opacity-50",
        variantClassName[variant],
        sizeClassName[size],
        className,
      )}
      type={type}
      {...props}
    >
      {children}
    </button>
  );
}
