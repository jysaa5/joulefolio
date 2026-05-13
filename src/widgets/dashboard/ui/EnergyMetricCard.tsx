import Card from "@/shared/ui/card/Card";
import { useTranslations } from "next-intl";

type EnergyMetricCardProps = {
  testId?: string;
  label: string;
  value: number;
  unit?: string;
  description?: string;
};

export default function EnergyMetricCard({
  testId,
  label,
  value,
  unit = "kWh",
  description,
}: EnergyMetricCardProps) {
  const t = useTranslations("dashboard.units");

  return (
    <Card
      padding="md"
      className="transition hover:shadow-md"
      data-testid={testId}
    >
      <p className="text-sm text-(--color-muted-foreground)">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-(--color-foreground)">
        {value.toFixed(1)} {unit === "kWh" ? t("kwh") : unit}
      </p>
      {description ? (
        <p className="mt-1 text-sm text-(--color-muted-foreground)">
          {description}
        </p>
      ) : null}
    </Card>
  );
}
