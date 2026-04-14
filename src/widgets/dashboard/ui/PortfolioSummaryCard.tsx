type PortfolioSummaryCardProps = {
  totalAsset: number;
  description?: string;
};

export default function PortfolioSummaryCard({ totalAsset, description = "Total energy asset" }: PortfolioSummaryCardProps) {
  return (
    <section className="rounded-2xl bg-linear-to-r from-green-50 to-emerald-50 p-6 shadow-sm">
      <p className="text-sm text-gray-500">Energy Portfolio</p>
      <h2 className="mt-2 text-4xl font-bold text-gray-900">{totalAsset.toFixed(1)} kWh</h2>
      <p className="mt-1 text-sm text-gray-400">{description}</p>
    </section>
  );
}
