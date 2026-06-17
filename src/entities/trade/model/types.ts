import type { User } from "@/entities/user/model/types";

export type TradeStatus = "pending" | "completed" | "cancelled";

export type Trade = {
  id: string;
  counterparty: User;
  amount: number; // kWh
  price: number;
  status: TradeStatus;
  createdAt: string;
};
