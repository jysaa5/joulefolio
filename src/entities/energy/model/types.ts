/**
 * generated: 생산한 에너지
 * consumed: 사용한 에너지
 * surplus: 남는 에너지 (generated - consumed)
 * battery: 저장된 에너지
 */
export type EnergySummary = {
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
