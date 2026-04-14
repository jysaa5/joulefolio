type PortfolioSummaryCardProps = {
  totalAsset: number;
  description?: string;
};

export default function PortfolioSummaryCard({ totalAsset, description = "Total energy asset" }: PortfolioSummaryCardProps) {
  return (
    <section className="rounded-2xl border p-6 shadow-sm">
      <p className="text-sm text-gray-500">Energy Portfolio</p>
      <h2 className="mt-2 text-3xl font-bold">{totalAsset.toFixed(1)} kWh</h2>
      <p className="mt-1 text-sm text-gray-400">{description}</p>
    </section>
  );
}
