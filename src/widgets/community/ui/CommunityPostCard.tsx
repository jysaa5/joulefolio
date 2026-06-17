import { formatRelativeTime } from "@/shared/lib/date/formatRelativeTime";
import type { Post } from "@/entities/post/model/types";
import { useLocale, useTranslations } from "next-intl";

type Props = {
  post: Post;
};

export default function CommunityPostCard({ post }: Props) {
  const locale = useLocale();
  const t = useTranslations("community.post");
  const relativeCreatedAt = formatRelativeTime(post.createdAt, locale);

  return (
    <article className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="font-semibold text-foreground">{post.author.name}</p>
          <p className="text-sm text-muted-foreground">{relativeCreatedAt}</p>
        </div>

        <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          {t(`categories.${post.category}`)}
        </span>
      </div>

      <p className="mt-4 text-sm leading-6 text-foreground">{post.content}</p>

      <div className="mt-5 grid gap-3 sm:grid-cols-2">
        {post.generatedKwh !== undefined ? (
          <div className="rounded-xl border border-border p-3">
            <p className="text-xs text-muted-foreground">{t("generated")}</p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              {post.generatedKwh.toFixed(1)} kWh
            </p>
          </div>
        ) : null}

        {post.savedCarbonKg !== undefined ? (
          <div className="rounded-xl border border-border p-3">
            <p className="text-xs text-muted-foreground">{t("savedCarbon")}</p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              {post.savedCarbonKg.toFixed(1)} kg
            </p>
          </div>
        ) : null}
      </div>

      <div className="mt-5 flex items-center gap-4 text-sm text-muted-foreground">
        <button type="button" className="hover:text-foreground">
          ♥ {post.likes}
        </button>
        <button type="button" className="hover:text-foreground">
          {t("comment")} {post.comments}
        </button>
        <button type="button" className="ml-auto hover:text-foreground">
          {t("addFriend")}
        </button>
      </div>
    </article>
  );
}
