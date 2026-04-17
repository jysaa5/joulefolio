import { Card } from "@/shared/ui";

/**
 * currentStatus: Stable, High production, Balanced usage, Ready to trade
 */
type PortfolioSummaryCardProps = {
  totalAsset: number;
  todayEarning: number;
  description?: string;
  currentStatus?: string;
};

export default function PortfolioSummaryCard({
  totalAsset,
  todayEarning,
  description = "Total energy asset qavailable for use, storage, or trade",
  currentStatus = "Stable",
}: PortfolioSummaryCardProps) {
  return (
    <Card padding="lg">
      <p className="text-sm text-(--color-muted-foreground)">
        Energy Portfolio
      </p>
      <h2 className="mt-2 text-4xl font-bold text-(--color-foreground)">
        {totalAsset.toFixed(1)} kWh
      </h2>
      <p className="mt-1 text-sm text-(--color-muted-foreground)">
        {description}
      </p>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <div className="rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Today&apos;s Earning</p>
          <p className="mt-2 text-2xl font-semibold text-foreground">
            +{todayEarning.toFixed(1)} kWh
          </p>
        </div>
        <div className="rounded-xl border border-border p-4">
          <p className="text-sm text-muted-foreground">Portfolio Status</p>
          <p className="mt-2 text-2xl font-semibold text-foreground">
            {currentStatus}
          </p>
        </div>
      </div>
    </Card>
  );
}
