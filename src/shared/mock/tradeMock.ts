import type { Trade } from "@/entities/trade/model/types";
import { asISODateString } from "@/shared/lib/date/types";
import { userById } from "@/shared/mock/userMock";

export const trades: Trade[] = [
  {
    id: "1",
    counterparty: userById["user-1"],
    amount: 3,
    amountUnit: "kWh",
    unitPrice: 1500,
    totalPrice: 4500,
    currency: "KRW",
    status: "completed",
    createdAt: asISODateString("2026-04-14T00:00:00.000Z"),
  },
  {
    id: "2",
    counterparty: userById["user-4"],
    amount: 2,
    amountUnit: "kWh",
    unitPrice: 1500,
    totalPrice: 3000,
    currency: "KRW",
    status: "pending",
    createdAt: asISODateString("2026-04-14T00:00:00.000Z"),
  },
];
