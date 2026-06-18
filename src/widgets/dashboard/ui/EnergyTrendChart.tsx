"use client";

import type { EnergyTrendSeries } from "@/entities/energy/model/types";
import { useTranslations } from "next-intl";
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

type EnergyTrendChartProps = {
  series: EnergyTrendSeries;
};

export default function EnergyTrendChart({ series }: EnergyTrendChartProps) {
  const t = useTranslations("dashboard.energyTrend");
  const { points, unit } = series;
  const totalGenerated = points.reduce(
    (sum, item) => sum + item.generatedKwh,
    0,
  );
  const totalConsumed = points.reduce((sum, item) => sum + item.consumedKwh, 0);

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h2 className="text-lg font-semibold text-foreground">
            {t("title")}
          </h2>
          <p className="mt-1 text-sm text-muted-foreground">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 sm:min-w-60">
          <div className="rounded-xl border border-border p-3">
            <p className="text-xs text-muted-foreground">{t("generated")}</p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              {totalGenerated.toFixed(1)} {unit === "kWh" ? t("kwh") : unit}
            </p>
          </div>
          <div className="rounded-xl border border-border p-3">
            <p className="text-xs text-muted-foreground">{t("consumed")}</p>
            <p className="mt-1 text-lg font-semibold text-foreground">
              {totalConsumed.toFixed(1)} {unit === "kWh" ? t("kwh") : unit}
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 h-80 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={points}>
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
              dataKey="generatedKwh"
              name={t("generated")}
              stroke="#10b981"
              strokeWidth={3}
              dot={{ r: 3 }}
              activeDot={{ r: 6 }}
            />
            <Line
              type="monotone"
              dataKey="consumedKwh"
              name={t("consumed")}
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
