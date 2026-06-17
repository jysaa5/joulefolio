import type { User } from "@/entities/user/model/types";
import type { ISODateString } from "@/shared/lib/date/types";

export type TradeStatus = "pending" | "completed" | "cancelled";
export type EnergyUnit = "kWh";
export type Currency = "KRW";

export type Trade = {
  id: string;
  counterparty: User;
  amount: number;
  amountUnit: EnergyUnit;
  unitPrice: number;
  totalPrice: number;
  currency: Currency;
  status: TradeStatus;
  createdAt: ISODateString;
};
