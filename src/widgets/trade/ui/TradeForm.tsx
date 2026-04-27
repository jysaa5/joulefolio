"use client";

import Button from "@/shared/ui/button/Button";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function TradeForm() {
  const t = useTranslations("trade.form");
  const [amount, setAmount] = useState(0);

  const pricePerKwh = 1000;
  const totalPrice = amount * pricePerKwh;

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground">{t("title")}</h2>

      <div className="mt-4">
        <label className="text-sm text-muted-foreground">
          {t("targetLabel")}
        </label>
        <select className="mt-2 w-full rounded-lg border border-border p-2 bg-background">
          <option>{t("targets.alice")}</option>
          <option>{t("targets.bob")}</option>
        </select>
      </div>

      <div className="mt-4">
        <label className="text-sm text-muted-foreground">
          {t("amountLabel", { unit: t("kwh") })}
        </label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-2 w-full rounded-lg border border-border p-2 bg-background"
        />
      </div>

      <div className="mt-4 rounded-lg bg-background p-4">
        <p className="text-sm text-muted-foreground">{t("estimatedPrice")}</p>
        <p className="mt-1 text-xl font-semibold text-foreground">
          ₩ {totalPrice.toLocaleString()}
        </p>
      </div>

      <button className="mt-6 w-full rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background">
        {t("submit")}
      </button>
      <Button className="mt-4 w-full" variant="secondary">
        {t("submit")}
      </Button>
    </section>
  );
}
