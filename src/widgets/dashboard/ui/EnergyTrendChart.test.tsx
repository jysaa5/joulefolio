import { render, screen } from "@/tests/test-utils";
import { vi } from "vitest";

import EnergyTrendChart from "./EnergyTrendChart";
import { userById } from "@/shared/mock/userMock";

vi.mock("recharts", () => {
  const Mock = ({
    children,
    ...props
  }: React.PropsWithChildren<Record<string, unknown>>) => (
    <div data-props={JSON.stringify(props)}>{children}</div>
  );

  return {
    ResponsiveContainer: Mock,
    LineChart: Mock,
    CartesianGrid: Mock,
    XAxis: Mock,
    YAxis: Mock,
    Tooltip: Mock,
    Legend: Mock,
    Line: ({ name, dataKey }: { name: string; dataKey: string }) => (
      <div data-testid={`line-${dataKey}`}>{name}</div>
    ),
  };
});

describe("EnergyTrendChart", () => {
  it("renders translated summary totals and chart series labels", () => {
    render(
      <EnergyTrendChart
        series={{
          owner: userById["user-2"],
          period: "daily",
          unit: "kWh",
          points: [
            { time: "08:00", generatedKwh: 3.2, consumedKwh: 1.1 },
            { time: "12:00", generatedKwh: 5.4, consumedKwh: 2.6 },
          ],
        }}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Energy Trend" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Compare generated and consumed energy throughout the day",
      ),
    ).toBeInTheDocument();
    expect(screen.getByText("8.6 kWh")).toBeInTheDocument();
    expect(screen.getByText("3.7 kWh")).toBeInTheDocument();
    expect(screen.getByTestId("line-generatedKwh")).toHaveTextContent(
      "Generated",
    );
    expect(screen.getByTestId("line-consumedKwh")).toHaveTextContent(
      "Consumed",
    );
  });
});
