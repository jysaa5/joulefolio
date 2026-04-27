import { Trade } from "@/entities/trade/model/types";
import AvailableEnergyCard from "@/widgets/trade/ui/AvailableEnergyCard";
import TradeForm from "@/widgets/trade/ui/TradeForm";
import TradeList from "@/widgets/trade/ui/TradeList";
import { useTranslations } from "next-intl";

export default function TradePage() {
  const t = useTranslations("trade");
  const trades: Trade[] = [
    {
      id: "1",
      targetName: "Alice",
      amount: 3,
      status: "completed" as const,
      price: 0,
      createdAt: "",
    },
    {
      id: "2",
      targetName: "Bob",
      amount: 2,
      status: "pending" as const,
      price: 0,
      createdAt: "",
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
