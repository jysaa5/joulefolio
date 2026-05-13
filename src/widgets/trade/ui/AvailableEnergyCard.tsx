import { useTranslations } from "next-intl";

type Props = {
  value: number;
};

export default function AvailableEnergyCard({ value }: Props) {
  const t = useTranslations("trade.availableEnergy");

  return (
    <section
      className="rounded-2xl border border-border bg-card p-6 shadow-sm"
      data-testid="available-energy-card"
    >
      <p className="text-sm text-muted-foreground">{t("label")}</p>
      <h2 className="mt-2 text-3xl font-bold text-foreground">
        {value.toFixed(1)} {t("kwh")}
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">{t("description")}</p>
    </section>
  );
}
