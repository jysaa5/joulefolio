type EnergyMetricCardProps = {
  label: string;
  value: number;
  unit?: string;
  description?: string;
};

export default function EnergyMetricCard({ label, value, unit = "kWh", description }: EnergyMetricCardProps) {
  return (
    <div className="rounded-2xl border border-(--color-border) bg-(--color-card) p-5 shadow-sm transition hover:shadow-md">
      <p className="text-sm text-(--color-muted-foreground)">{label}</p>

      <p className="mt-2 text-2xl font-semibold text-(--color-foreground)">
        {value.toFixed(1)} {unit}
      </p>
      {description ? <p className="mt-1 text-sm text-(--color-muted-foreground)">{description}</p> : null}
    </div>
  );
}
