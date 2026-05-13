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
  const t = useTranslations("dashboard");
  const summary: EnergySummary = energySummary;
  const totalAsset = summary.surplus + summary.battery;
  const todayEarning = 3.2;

  const activityItems = [
    {
      id: "1",
      type: "trade" as const,
      title: t("recentActivity.items.soldEnergy.title", {
        amount: "3.0",
        name: "Alice",
      }),
      description: t("recentActivity.items.soldEnergy.description"),
      time: t("recentActivity.items.soldEnergy.time", { value: 2 }),
    },
    {
      id: "2",
      type: "community" as const,
      title: t("recentActivity.items.newCommunityPost.title", {
        name: "Minho",
      }),
      description: t("recentActivity.items.newCommunityPost.description", {
        name: "Minho",
      }),
      time: t("recentActivity.items.newCommunityPost.time", { value: 4 }),
    },
    {
      id: "3",
      type: "trade" as const,
      title: t("recentActivity.items.storedEnergy.title", { amount: "2.0" }),
      description: t("recentActivity.items.storedEnergy.description"),
      time: t("recentActivity.items.storedEnergy.time", { value: 6 }),
    },
  ];

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
          testId="metric-generated"
          label={t("metrics.generated.label")}
          value={summary.generated}
          description={t("metrics.generated.description")}
        />
        <EnergyMetricCard
          testId="metric-consumed"
          label={t("metrics.consumed.label")}
          value={summary.consumed}
          description={t("metrics.consumed.description")}
        />
        <EnergyMetricCard
          testId="metric-surplus"
          label={t("metrics.surplus.label")}
          value={summary.surplus}
          description={t("metrics.surplus.description")}
        />
        <EnergyMetricCard
          testId="metric-battery"
          label={t("metrics.battery.label")}
          value={summary.battery}
          description={t("metrics.battery.description")}
        />
      </section>

      <section className="mt-8">
        <EnergyTrendChart data={energyTrendData} />
      </section>

      <section className="mt-8 grid gap-4 lg:grid-cols-2">
        <EnergyBreakdownCard consumed={12} stored={6} availableToTrade={6.3} />
        <QuickActionCard
          href="/trade"
          title={t("quickAction.tradeEnergy.title")}
          description={t("quickAction.tradeEnergy.description")}
          buttonText={t("quickAction.tradeEnergy.button")}
        />
      </section>

      <section className="mt-8">
        <RecentActivityCard items={activityItems} />
      </section>
    </main>
  );
}
