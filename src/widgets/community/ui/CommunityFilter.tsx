"use client";

import type { PostCategory } from "@/entities/post/model/types";

type Props = {
  selected: PostCategory;
  onChange: (category: PostCategory) => void;
};

const filters: { label: string; value: PostCategory }[] = [
  { label: "All", value: "all" },
  { label: "Friends", value: "friends" },
  { label: "Local", value: "local" },
  { label: "Reviews", value: "review" },
];

export default function CommunityFilter({ selected, onChange }: Props) {
  return (
    <div className="flex flex-wrap gap-2">
      {filters.map((filter) => {
        const isActive = selected === filter.value;

        return (
          <button
            key={filter.value}
            type="button"
            onClick={() => onChange(filter.value)}
            className={[
              "rounded-full border px-4 py-2 text-sm font-medium transition",
              isActive
                ? "border-foreground bg-foreground text-background"
                : "border-border text-muted-foreground hover:text-foreground",
            ].join(" ")}
          >
            {filter.label}
          </button>
        );
      })}
    </div>
  );
}
