import { EnergySummary } from "@/entities/energy/model/types";
import { userById } from "@/shared/mock/userMock";

export const energySummary: EnergySummary = {
  owner: userById["user-2"],
  period: "daily",
  unit: "kWh",
  generatedKwh: 24.3,
  consumedKwh: 15.1,
  surplusKwh: 9.2,
  batteryKwh: 6.5,
};
