export type TradeStatus = "pending" | "completed" | "cancelled";

export type Trade = {
  id: string;
  targetName: string;
  amount: number; // kWh
  price: number;
  status: TradeStatus;
  createdAt: string;
};
