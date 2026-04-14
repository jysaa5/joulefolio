import type { EnergySummary } from "@/entities/energy/model/types";
import { energySummary } from "@/shared/mock/energyMock";
import EnergyMetricCard from "@/widgets/dashboard/ui/EnergyMetricCard";
import PortfolioSummaryCard from "@/widgets/dashboard/ui/PortfolioSummaryCard";
import QuickActionCard from "@/widgets/dashboard/ui/QuickActionCard";
import RecentActivityCard from "@/widgets/dashboard/ui/RecentActivityCard";

export default function DashboardPage() {
  const summary: EnergySummary = energySummary;
  const totalAsset = summary.surplus + summary.battery;

  const recentActivities = ["Sold 3.0 kWh to Alice", "Stored 2.0 kWh in battery", "Generated 24.3 kWh today"];

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <h1 className="text-2xl font-bold tracking-tight">Joulefolio Dashboard</h1>

      <section className="mt-8">
        <PortfolioSummaryCard totalAsset={totalAsset} />
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <EnergyMetricCard label="Generated" value={summary.generated} description="Total energy generated today" />
        <EnergyMetricCard label="Consumed" value={summary.consumed} description="Total energy consumed today" />
        <EnergyMetricCard label="Surplus" value={summary.surplus} description="Available energy for trade or storage" />
        <EnergyMetricCard label="Battery" value={summary.battery} description="Stored energy asset" />
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        <QuickActionCard href="/trade" title="Trade Energy" description="Sell or share your surplus energy with others." buttonText="Go to Trade" />
        <RecentActivityCard items={recentActivities} />
      </section>
    </main>
  );
}
