type EnergyMetricCardProps = {
  label: string;
  value: number;
  unit?: string;
  description?: string;
};

export default function EnergyMetricCard({ label, value, unit = "kWh", description }: EnergyMetricCardProps) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md">
      <p className="text-sm text-gray-500">{label}</p>
      <p className="mt-2 text-2xl font-semibold text-gray-900">
        {value.toFixed(1)} {unit}
      </p>
      {description ? <p className="mt-1 text-sm text-gray-400">{description}</p> : null}
    </div>
  );
}
