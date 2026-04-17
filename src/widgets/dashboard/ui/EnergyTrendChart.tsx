"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

type EnergyTrendPoint = {
  time: string;
  generated: number;
  consumed: number;
};

type EnergyTrendChartProps = {
  data: EnergyTrendPoint[];
};

export default function EnergyTrendChart({ data }: EnergyTrendChartProps) {
  const totalGenerated = data.reduce((sum, item) => sum + item.generated, 0);
  const totalConsumed = data.reduce((sum, item) => sum + item.consumed, 0);

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            Energy Trend
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            Compare generated and consumed energy throughout the day
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:min-w-60">
          <div className="rounded-xl border border-border p-3">
            <p className="text-xs text-muted-foreground">Generated</p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              {totalGenerated.toFixed(1)} kWh
            </p>
          </div>
          <div className="rounded-xl border border-border p-3">
            <p className="text-xs text-muted-foreground">Consumed</p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              {totalConsumed.toFixed(1)} kWh
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <CartesianGrid stroke="var(--border)" strokeDasharray="3 3" />
            <XAxis
              dataKey="time"
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              axisLine={{ stroke: "var(--border)" }}
              tickLine={{ stroke: "var(--border)" }}
            />
            <YAxis
              tick={{ fill: "var(--muted-foreground)", fontSize: 12 }}
              axisLine={{ stroke: "var(--border)" }}
              tickLine={{ stroke: "var(--border)" }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "var(--card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
                color: "var(--foreground)",
              }}
              labelStyle={{ color: "var(--foreground)" }}
            />
            <Legend
              wrapperStyle={{
                color: "var(--foreground)",
                paddingTop: "12px",
              }}
            />
            <Line
              type="monotone"
              dataKey="generated"
              name="Generated"
              stroke="#10b981"
              strokeWidth={3}
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="consumed"
              name="Consumed"
              stroke="#3b82f6"
              strokeWidth={3}
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
