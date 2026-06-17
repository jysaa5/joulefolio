import { Trade } from "@/entities/trade/model/types";
import { useTranslations } from "next-intl";

type Props = {
  trades: Trade[];
};

export default function TradeList({ trades }: Props) {
  const t = useTranslations("trade.list");

  return (
    <section
      className="rounded-2xl border border-border bg-card p-6 shadow-sm"
      data-testid="trade-history-card"
    >
      <h2 className="text-lg font-semibold text-foreground">{t("title")}</h2>

      <ul className="mt-4 space-y-3">
        {trades.map((trade) => (
          <li
            key={trade.id}
            className="flex items-center justify-between rounded-lg border border-border p-4"
            data-testid={`trade-history-item-${trade.id}`}
          >
            <div>
              <p className="text-sm font-medium text-foreground">
                {trade.counterparty.name}
              </p>
              <p className="text-xs text-muted-foreground">
                {trade.amount} {trade.amountUnit}
              </p>
            </div>

            <span className="text-xs text-muted-foreground">
              {t(`status.${trade.status}`)}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
