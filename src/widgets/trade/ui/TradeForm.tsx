"use client";

import Button from "@/shared/ui/button/Button";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/shared/ui";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function TradeForm() {
  const t = useTranslations("trade.form");
  const [amount, setAmount] = useState(0);
  const targets = [t("targets.alice"), t("targets.bob")];
  const [selectedTarget, setSelectedTarget] = useState(targets[0]);

  const pricePerKwh = 1000;
  const totalPrice = amount * pricePerKwh;

  return (
    <section
      className="rounded-2xl border border-border bg-card p-6 shadow-sm"
      data-testid="trade-form-card"
    >
      <h2 className="text-lg font-semibold text-foreground">{t("title")}</h2>

      <div className="mt-4">
        <label className="text-sm text-muted-foreground">
          {t("targetLabel")}
        </label>
        <div className="mt-2">
          <Dropdown className="flex w-full">
            <DropdownTrigger
              aria-label={t("targetLabel")}
              className="flex w-full items-center justify-between rounded-lg border border-border bg-background px-3 py-2 text-sm text-foreground"
              data-testid="trade-target-select"
            >
              <span>{selectedTarget}</span>
            </DropdownTrigger>
            <DropdownContent
              aria-label={t("targetLabel")}
              className="mt-1 min-w-0"
              style={{ width: "anchor-size(width)" }}
            >
              {targets.map((target) => (
                <DropdownItem
                  key={target}
                  aria-pressed={selectedTarget === target}
                  className="justify-between"
                  disabled={selectedTarget === target}
                  onClick={() => setSelectedTarget(target)}
                >
                  <span>{target}</span>
                </DropdownItem>
              ))}
            </DropdownContent>
          </Dropdown>
        </div>
      </div>

      <div className="mt-4">
        <label className="text-sm text-muted-foreground">
          {t("amountLabel", { unit: t("kwh") })}
        </label>
        <input
          data-testid="trade-amount-input"
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-2 w-full rounded-lg border border-border p-2 bg-background"
        />
      </div>

      <div
        className="mt-4 rounded-lg bg-background p-4"
        data-testid="trade-estimated-price"
      >
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
