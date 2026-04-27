import { useTranslations } from "next-intl";

export default function CommunityCtaCard() {
  const t = useTranslations("community.cta");

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground">{t("title")}</h2>
      <p className="mt-2 text-sm text-muted-foreground">{t("description")}</p>

      <button
        type="button"
        className="mt-5 w-full rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background transition hover:opacity-80"
      >
        {t("button")}
      </button>
    </section>
  );
}
