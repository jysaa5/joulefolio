export type Trade = {
  id: string;
  targetName: string;
  amount: number; // kWh
  price: number;
  status: "pending" | "completed" | "cancelled";
  createdAt: string;
};
