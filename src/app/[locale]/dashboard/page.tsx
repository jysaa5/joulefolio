import type { EnergySummary } from "@/entities/energy/model/types";
import { energySummary } from "@/shared/mock/energyMock";
import { energyTrendData } from "@/shared/mock/energyTrendMock";
import EnergyBreakdownCard from "@/widgets/dashboard/ui/EnergyBreakdownCard";
import EnergyMetricCard from "@/widgets/dashboard/ui/EnergyMetricCard";
import EnergyTrendChart from "@/widgets/dashboard/ui/EnergyTrendChart";
import PortfolioSummaryCard from "@/widgets/dashboard/ui/PortfolioSummaryCard";
import QuickActionCard from "@/widgets/dashboard/ui/QuickActionCard";
import RecentActivityCard from "@/widgets/dashboard/ui/RecentActivityCard";
import { useTranslations } from "next-intl";

export default function DashboardPage() {
  const summary: EnergySummary = energySummary;
  const totalAsset = summary.surplus + summary.battery;
  const todayEarning = 3.2;

  const activityItems = [
    {
      id: "1",
      type: "trade" as const,
      title: "Sold 3.0 kWh to Alice",
      description:
        "Your surplus energy was successfully traded this afternoon.",
      time: "2h ago",
    },
    {
      id: "2",
      type: "community" as const,
      title: "New community post from Minho",
      description: "Minho shared today's solar production update.",
      time: "4h ago",
    },
    {
      id: "3",
      type: "trade" as const,
      title: "Stored 2.0 kWh in battery",
      description: "A portion of today's surplus energy has been saved.",
      time: "6h ago",
    },
  ];

  const t = useTranslations("dashboard");

  return (
    <main className="mx-auto max-w-6xl px-6 py-8">
      <h1 className="text-2xl font-bold tracking-tight">{t("title")}</h1>

      <section className="mt-8">
        <PortfolioSummaryCard
          totalAsset={totalAsset}
          todayEarning={todayEarning}
        />
      </section>

      <section className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <EnergyMetricCard
          label="Generated"
          value={summary.generated}
          description="Total energy generated today"
        />
        <EnergyMetricCard
          label="Consumed"
          value={summary.consumed}
          description="Total energy consumed today"
        />
        <EnergyMetricCard
          label="Surplus"
          value={summary.surplus}
          description="Available energy for trade or storage"
        />
        <EnergyMetricCard
          label="Battery"
          value={summary.battery}
          description="Stored energy asset"
        />
      </section>

      <section className="mt-8">
        <EnergyTrendChart data={energyTrendData} />
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        <EnergyBreakdownCard consumed={12} stored={6} availableToTrade={6.3} />
        <QuickActionCard
          href="/trade"
          title="Trade Energy"
          description="Sell or share your surplus energy with others."
          buttonText="Go to Trade"
        />
      </section>

      <section className="mt-8">
        <RecentActivityCard items={activityItems} />
      </section>
    </main>
  );
}
