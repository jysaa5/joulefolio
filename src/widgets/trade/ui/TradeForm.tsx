"use client";

import Button from "@/shared/ui/button/Button";
import { useState } from "react";

export default function TradeForm() {
  const [amount, setAmount] = useState(0);

  const pricePerKwh = 1000;
  const totalPrice = amount * pricePerKwh;

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground">Trade Energy</h2>

      {/* 대상 */}
      <div className="mt-4">
        <label className="text-sm text-muted-foreground">Select Target</label>
        <select className="mt-2 w-full rounded-lg border border-border p-2 bg-background">
          <option>Alice</option>
          <option>Bob</option>
        </select>
      </div>

      {/* 거래량 */}
      <div className="mt-4">
        <label className="text-sm text-muted-foreground">Amount (kWh)</label>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
          className="mt-2 w-full rounded-lg border border-border p-2 bg-background"
        />
      </div>

      {/* 예상 금액 */}
      <div className="mt-4 rounded-lg bg-background p-4">
        <p className="text-sm text-muted-foreground">Estimated Price</p>
        <p className="mt-1 text-xl font-semibold text-foreground">
          ₩ {totalPrice.toLocaleString()}
        </p>
      </div>

      {/* 버튼 */}
      <button className="mt-6 w-full rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background">
        Request Trade
      </button>
      <Button className="mt-4 w-full" variant="secondary">
        Request Trade
      </Button>
    </section>
  );
}
