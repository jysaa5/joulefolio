import { expect, test } from "@playwright/test";
import en from "../src/i18n/messages/en.json";
import ko from "../src/i18n/messages/ko.json";

const baseUrl = process.env.PLAYWRIGHT_TEST_BASE_URL ?? "http://127.0.0.1:3000";

const tradeCases = [
  {
    locale: "en",
    dict: en,
  },
  {
    locale: "ko",
    dict: ko,
  },
] as const;

for (const { locale, dict } of tradeCases) {
  const tradeUrl = new URL(`/${locale}/trade`, baseUrl).toString();
  const messages = {
    title: dict.trade.title,
    availableEnergy: dict.trade.availableEnergy.label,
    availableEnergyDescription: dict.trade.availableEnergy.description,
    tradeEnergy: dict.trade.form.title,
    targetLabel: dict.trade.form.targetLabel,
    amountLabel: formatMessage(dict.trade.form.amountLabel, {
      unit: dict.trade.form.kwh,
    }),
    estimatedPrice: dict.trade.form.estimatedPrice,
    requestTrade: dict.trade.form.submit,
    tradeHistory: dict.trade.list.title,
    completed: dict.trade.list.status.completed,
    pending: dict.trade.list.status.pending,
  };

  test.describe(`Trade page (${locale})`, () => {
    test("renders available energy, trade form, and trade history", async ({
      page,
    }) => {
      await page.goto(tradeUrl);

      const availableEnergyCard = page.getByTestId("available-energy-card");
      const tradeFormCard = page.getByTestId("trade-form-card");
      const tradeHistoryCard = page.getByTestId("trade-history-card");
      const firstTradeHistoryItem = page.getByTestId("trade-history-item-1");
      const secondTradeHistoryItem = page.getByTestId("trade-history-item-2");

      await expect(
        page.getByRole("heading", { level: 1, name: messages.title }),
      ).toBeVisible();

      await expect(
        availableEnergyCard.getByText(messages.availableEnergy),
      ).toBeVisible();
      await expect(availableEnergyCard.getByText("6.3 kWh")).toBeVisible();
      await expect(
        availableEnergyCard.getByText(messages.availableEnergyDescription),
      ).toBeVisible();

      await expect(
        page.getByRole("heading", { level: 2, name: messages.tradeEnergy }),
      ).toBeVisible();
      await expect(tradeFormCard.getByText(messages.targetLabel)).toBeVisible();
      await expect(tradeFormCard.getByText(messages.amountLabel)).toBeVisible();
      await expect(
        tradeFormCard.getByText(messages.estimatedPrice),
      ).toBeVisible();
      await expect(tradeFormCard.getByText("₩ 0")).toBeVisible();
      await expect(
        page.getByRole("button", { name: messages.requestTrade }),
      ).toHaveCount(2);

      await expect(
        page.getByRole("heading", { level: 2, name: messages.tradeHistory }),
      ).toBeVisible();
      await expect(tradeHistoryCard).toBeVisible();
      await expect(
        firstTradeHistoryItem.getByText("Alice", { exact: true }),
      ).toBeVisible();
      await expect(firstTradeHistoryItem.getByText("3 kWh")).toBeVisible();
      await expect(
        firstTradeHistoryItem.getByText(messages.completed),
      ).toBeVisible();
      await expect(
        secondTradeHistoryItem.getByText("Bob", { exact: true }),
      ).toBeVisible();
      await expect(secondTradeHistoryItem.getByText("2 kWh")).toBeVisible();
      await expect(
        secondTradeHistoryItem.getByText(messages.pending),
      ).toBeVisible();
    });

    test("updates the estimated price when entering an amount", async ({
      page,
    }) => {
      await page.goto(tradeUrl);

      const targetSelect = page.getByTestId("trade-target-select");
      const amountInput = page.getByTestId("trade-amount-input");
      const estimatedPrice = page.getByTestId("trade-estimated-price");

      await expect(targetSelect).toHaveValue("Alice");
      await targetSelect.selectOption("Bob");
      await expect(targetSelect).toHaveValue("Bob");

      await amountInput.fill("4");
      await expect(amountInput).toHaveValue("4");
      await expect(estimatedPrice.getByText("₩ 4,000")).toBeVisible();

      await amountInput.fill("12.5");
      await expect(amountInput).toHaveValue("12.5");
      await expect(estimatedPrice.getByText("₩ 12,500")).toBeVisible();
    });
  });
}

function formatMessage(
  template: string,
  values: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    String(values[key]),
  );
}
