import { useTranslations } from "next-intl";

const rankingItems = [
  { rank: 1, name: "Jiyeon", carbonSaved: 12.4 },
  { rank: 2, name: "Alice", carbonSaved: 9.8 },
  { rank: 3, name: "Minho", carbonSaved: 8.1 },
];

export default function CommunityRankingCard() {
  const t = useTranslations("community.ranking");

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground">{t("title")}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{t("description")}</p>

      <ul className="mt-5 space-y-3">
        {rankingItems.map((item) => (
          <li
            key={item.rank}
            className="flex items-center justify-between rounded-xl border border-border p-3"
          >
            <div>
              <p className="text-sm font-medium text-foreground">
                #{item.rank} {item.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {t("carbonSaved")}
              </p>
            </div>

            <p className="text-sm font-semibold text-foreground">
              {item.carbonSaved.toFixed(1)} kg
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
