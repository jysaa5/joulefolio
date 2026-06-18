import { EnergyTrendSeries } from "@/entities/energy/model/types";
import { userById } from "@/shared/mock/userMock";

export const energyTrendSeries: EnergyTrendSeries = {
  owner: userById["user-2"],
  period: "daily",
  unit: "kWh",
  points: [
    { time: "06:00", generatedKwh: 0.4, consumedKwh: 0.8 },
    { time: "09:00", generatedKwh: 2.1, consumedKwh: 1.4 },
    { time: "12:00", generatedKwh: 4.8, consumedKwh: 2.2 },
    { time: "15:00", generatedKwh: 5.2, consumedKwh: 2.6 },
    { time: "18:00", generatedKwh: 2.6, consumedKwh: 3.1 },
    { time: "21:00", generatedKwh: 0.7, consumedKwh: 2.4 },
  ],
};
