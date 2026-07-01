import { cn } from "@/shared/lib/cn";

type DropdownChevronProps = {
  className?: string;
};

export default function DropdownChevron({ className }: DropdownChevronProps) {
  return (
    <svg
      aria-hidden="true"
      className={cn("size-4 shrink-0 transition-transform", className)}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.8}
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}
