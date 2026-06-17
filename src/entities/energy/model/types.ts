import type { User } from "@/entities/user/model/types";

export type EnergyPeriod = "daily";

/**
 * generated: 생산한 에너지
 * consumed: 사용한 에너지
 * surplus: 남는 에너지 (generated - consumed)
 * battery: 저장된 에너지
 */
export type EnergySummary = {
  owner: User;
  period: EnergyPeriod;
  generated: number;
  consumed: number;
  surplus: number;
  battery: number;
};

export type EnergyTrendPoint = {
  time: string;
  generated: number;
  consumed: number;
};

export type EnergyTrendSeries = {
  owner: User;
  period: EnergyPeriod;
  points: EnergyTrendPoint[];
};
