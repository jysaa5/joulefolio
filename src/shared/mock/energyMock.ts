import { EnergySummary } from "@/entities/energy/model/types";
import { userById } from "@/shared/mock/userMock";

export const energySummary: EnergySummary = {
  owner: userById["user-2"],
  period: "daily",
  generated: 24.3,
  consumed: 15.1,
  surplus: 9.2,
  battery: 6.5,
};
