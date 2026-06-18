import { Trade } from "@/entities/trade/model/types";
import { asISODateString } from "@/shared/lib/date/types";
import AvailableEnergyCard from "@/widgets/trade/ui/AvailableEnergyCard";
import TradeForm from "@/widgets/trade/ui/TradeForm";
import TradeList from "@/widgets/trade/ui/TradeList";
import { userById } from "@/shared/mock/userMock";
import { useTranslations } from "next-intl";

export default function TradePage() {
  const t = useTranslations("trade");
  const trades: Trade[] = [
    {
      id: "1",
      counterparty: userById["user-1"],
      amount: 3,
      amountUnit: "kWh",
      status: "completed" as const,
      unitPrice: 0,
      totalPrice: 0,
      currency: "KRW",
      createdAt: asISODateString("2026-04-14T00:00:00.000Z"),
    },
    {
      id: "2",
      counterparty: userById["user-4"],
      amount: 2,
      amountUnit: "kWh",
      status: "pending" as const,
      unitPrice: 0,
      totalPrice: 0,
      currency: "KRW",
      createdAt: asISODateString("2026-04-14T00:00:00.000Z"),
    },
  ];

  return (
    <main className="mx-auto max-w-4xl px-6 py-8">
      <h1 className="text-2xl font-bold text-foreground">{t("title")}</h1>

      <section className="mt-6">
        <AvailableEnergyCard value={6.3} />
      </section>

      <section className="mt-6">
        <TradeForm />
      </section>

      <section className="mt-6">
        <TradeList trades={trades} />
      </section>
    </main>
  );
}
