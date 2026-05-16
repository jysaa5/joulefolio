import { expect, test } from "@playwright/test";
import en from "../src/i18n/messages/en.json";
import ko from "../src/i18n/messages/ko.json";
import { formatMessage, gotoLocalizedPath } from "./utils";

const dashboardCases = [
  {
    locale: "en",
    dict: en,
  },
  {
    locale: "ko",
    dict: ko,
  },
] as const;

for (const { locale, dict } of dashboardCases) {
  const messages = {
    title: dict.dashboard.title,
    energyPortfolio: dict.dashboard.energyPortfolio,
    stable: dict.dashboard.statuses.stable,
    generated: dict.dashboard.metrics.generated.label,
    consumed: dict.dashboard.metrics.consumed.label,
    surplus: dict.dashboard.metrics.surplus.label,
    battery: dict.dashboard.metrics.battery.label,
    energyTrend: dict.dashboard.energyTrend.title,
    energyBreakdown: dict.dashboard.energyBreakdown.title,
    availableToTrade:
      dict.dashboard.energyBreakdown.items.availableToTrade.label,
    recentActivity: dict.dashboard.recentActivity.title,
    soldEnergy: formatMessage(
      dict.dashboard.recentActivity.items.soldEnergy.title,
      {
        amount: "3.0",
        name: "Alice",
      },
    ),
    newCommunityPost: formatMessage(
      dict.dashboard.recentActivity.items.newCommunityPost.title,
      { name: "Minho" },
    ),
    storedEnergy: formatMessage(
      dict.dashboard.recentActivity.items.storedEnergy.title,
      { amount: "2.0" },
    ),
    tradeTitle: dict.trade.title,
    availableEnergy: dict.trade.availableEnergy.label,
  };

  test.describe(`Dashboard page (${locale})`, () => {
    test("renders the dashboard summary, metrics, and recent activity", async ({
      page,
      baseURL,
    }) => {
      await gotoLocalizedPath(page, baseURL!, locale, "/dashboard");

      const generatedMetricCard = page.getByTestId("metric-generated");
      const consumedMetricCard = page.getByTestId("metric-consumed");
      const surplusMetricCard = page.getByTestId("metric-surplus");
      const batteryMetricCard = page.getByTestId("metric-battery");
      const availableToTradeItem = page.getByTestId(
        "energy-breakdown-item-available-to-trade",
      );
      const recentActivityCard = page.getByTestId("recent-activity-card");
      const soldEnergyItem = page.getByTestId("recent-activity-item-1");
      const newCommunityPostItem = page.getByTestId("recent-activity-item-2");
      const storedEnergyItem = page.getByTestId("recent-activity-item-3");

      await expect(
        page.getByRole("heading", { level: 1, name: messages.title }),
      ).toBeVisible();

      await expect(page.getByText(messages.energyPortfolio)).toBeVisible();
      await expect(page.getByText("15.7 kWh")).toBeVisible();
      await expect(page.getByText("+3.2 kWh")).toBeVisible();
      await expect(page.getByText(messages.stable)).toBeVisible();

      await expect(
        generatedMetricCard.getByText(messages.generated, { exact: true }),
      ).toBeVisible();
      await expect(generatedMetricCard.getByText("24.3 kWh")).toBeVisible();
      await expect(
        consumedMetricCard.getByText(messages.consumed, { exact: true }),
      ).toBeVisible();
      await expect(consumedMetricCard.getByText("15.1 kWh")).toBeVisible();
      await expect(
        surplusMetricCard.getByText(messages.surplus, { exact: true }),
      ).toBeVisible();
      await expect(surplusMetricCard.getByText("9.2 kWh")).toBeVisible();
      await expect(
        batteryMetricCard.getByText(messages.battery, { exact: true }),
      ).toBeVisible();
      await expect(batteryMetricCard.getByText("6.5 kWh")).toBeVisible();

      await expect(
        page.getByRole("heading", { level: 2, name: messages.energyTrend }),
      ).toBeVisible();
      await expect(page.getByText("15.8 kWh")).toBeVisible();
      await expect(page.getByText("12.5 kWh")).toBeVisible();

      await expect(
        page.getByRole("heading", { level: 2, name: messages.energyBreakdown }),
      ).toBeVisible();
      await expect(
        availableToTradeItem.getByText(messages.availableToTrade, {
          exact: true,
        }),
      ).toBeVisible();
      await expect(availableToTradeItem.getByText("6.3 kWh")).toBeVisible();

      await expect(
        page.getByRole("heading", { level: 2, name: messages.recentActivity }),
      ).toBeVisible();
      await expect(recentActivityCard).toBeVisible();
      await expect(soldEnergyItem.getByText(messages.soldEnergy)).toBeVisible();
      await expect(
        newCommunityPostItem.getByText(messages.newCommunityPost),
      ).toBeVisible();
      await expect(
        storedEnergyItem.getByText(messages.storedEnergy),
      ).toBeVisible();
    });

    test("navigates to the trade page from the quick action card", async ({
      page,
      baseURL,
    }) => {
      await gotoLocalizedPath(page, baseURL!, locale, "/dashboard");

      await page.getByTestId("quick-action-link").click();

      await expect(page).toHaveURL(/\/trade$/);
      await expect(
        page.getByRole("heading", { level: 1, name: messages.tradeTitle }),
      ).toBeVisible();
      await expect(page.getByText(messages.availableEnergy)).toBeVisible();
    });
  });
}
