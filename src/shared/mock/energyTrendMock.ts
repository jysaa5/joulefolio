import { EnergyTrendSeries } from "@/entities/energy/model/types";
import { userById } from "@/shared/mock/userMock";

export const energyTrendSeries: EnergyTrendSeries = {
  owner: userById["user-2"],
  period: "daily",
  points: [
    { time: "06:00", generated: 0.4, consumed: 0.8 },
    { time: "09:00", generated: 2.1, consumed: 1.4 },
    { time: "12:00", generated: 4.8, consumed: 2.2 },
    { time: "15:00", generated: 5.2, consumed: 2.6 },
    { time: "18:00", generated: 2.6, consumed: 3.1 },
    { time: "21:00", generated: 0.7, consumed: 2.4 },
  ],
};
