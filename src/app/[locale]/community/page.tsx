"use client";

import { useMemo, useState } from "react";
import type { PostCategory } from "@/entities/post/model/types";
import { communityPosts } from "@/shared/mock/communityMock";
import CommunityCtaCard from "@/widgets/community/ui/CommunityCtaCard";
import CommunityFeed from "@/widgets/community/ui/CommunityFeed";
import CommunityFilter from "@/widgets/community/ui/CommunityFilter";
import CommunityRankingCard from "@/widgets/community/ui/CommunityRankingCard";
import { useTranslations } from "next-intl";

export default function CommunityPage() {
  const t = useTranslations("community");
  const [selectedCategory, setSelectedCategory] = useState<PostCategory>("all");

  const filteredPosts = useMemo(() => {
    if (selectedCategory === "all") {
      return communityPosts;
    }

    return communityPosts.filter((post) => post.category === selectedCategory);
  }, [selectedCategory]);

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">
            {t("title")}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <CommunityFilter
          selected={selectedCategory}
          onChange={setSelectedCategory}
        />
      </div>

      <section className="mt-8 grid gap-6 lg:grid-cols-[1fr_320px]">
        <CommunityFeed posts={filteredPosts} />

        <aside className="space-y-6">
          <CommunityCtaCard />
          <CommunityRankingCard />
        </aside>
      </section>
    </main>
  );
}
