import { Card } from "@/shared/ui";

type PortfolioSummaryCardProps = {
  totalAsset: number;
  description?: string;
};

export default function PortfolioSummaryCard({
  totalAsset,
  description = "Total energy asset",
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
    </Card>
  );
}
