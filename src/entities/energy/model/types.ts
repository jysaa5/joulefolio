import type { User } from "@/entities/user/model/types";

export type EnergyPeriod = "daily";
export type EnergyUnit = "kWh";

/**
 * generatedKwh: 생산한 에너지
 * consumedKwh: 사용한 에너지
 * surplusKwh: 남는 에너지 (generated - consumed)
 * batteryKwh: 저장된 에너지
 */
export type EnergySummary = {
  owner: User;
  period: EnergyPeriod;
  unit: EnergyUnit;
  generatedKwh: number;
  consumedKwh: number;
  surplusKwh: number;
  batteryKwh: number;
};

export type EnergyTrendPoint = {
  time: string;
  generatedKwh: number;
  consumedKwh: number;
};

export type EnergyTrendSeries = {
  owner: User;
  period: EnergyPeriod;
  unit: EnergyUnit;
  points: EnergyTrendPoint[];
};
