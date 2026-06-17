import type { Trade } from "@/entities/trade/model/types";
import { userById } from "@/shared/mock/userMock";

export const trades: Trade[] = [
  {
    id: "1",
    counterparty: userById["user-1"],
    amount: 3,
    price: 4500,
    status: "completed",
    createdAt: "2026-04-14",
  },
  {
    id: "2",
    counterparty: userById["user-4"],
    amount: 2,
    price: 3000,
    status: "pending",
    createdAt: "2026-04-14",
  },
];
