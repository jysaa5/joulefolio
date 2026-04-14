type EnergyMetricCardProps = {
  label: string;
  value: number;
  unit?: string;
  description?: string;
};

export default function EnergyMetricCard({ label, value, unit = "kWh", description }: EnergyMetricCardProps) {
  return (
    <div className="rounded-2xl border p-4 shadow-sm">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold">
        {value.toFixed(1)} {unit}
      </p>
      {description ? <p className="mt-1 text-sm text-gray-400">{description}</p> : null}
    </div>
  );
}
