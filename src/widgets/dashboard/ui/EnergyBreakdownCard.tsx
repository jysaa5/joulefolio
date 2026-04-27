import { useTranslations } from "next-intl";

type EnergyBreakdownCardProps = {
  consumed: number;
  stored: number;
  availableToTrade: number;
};

export default function EnergyBreakdownCard({
  consumed,
  stored,
  availableToTrade,
}: EnergyBreakdownCardProps) {
  const t = useTranslations("dashboard.energyBreakdown");
  const total = consumed + stored + availableToTrade;

  const items = [
    {
      label: t("items.consumed.label"),
      value: consumed,
      description: t("items.consumed.description"),
    },
    {
      label: t("items.stored.label"),
      value: stored,
      description: t("items.stored.description"),
    },
    {
      label: t("items.availableToTrade.label"),
      value: availableToTrade,
      description: t("items.availableToTrade.description"),
    },
  ];

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground">{t("title")}</h2>
      <p className="mt-1 text-sm text-muted-foreground">{t("description")}</p>

      <div className="mt-6 space-y-4">
        {items.map((item) => {
          const width = total > 0 ? (item.value / total) * 100 : 0;

          return (
            <div key={item.label}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <p className="text-sm font-semibold text-foreground">
                  {item.value.toFixed(1)} kWh
                </p>
              </div>

              <div className="mt-2 h-2 rounded-full bg-border">
                <div
                  className="h-2 rounded-full bg-foreground"
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
