import { render, screen } from "@/tests/test-utils";
import EnergyMetricCard from "./EnergyMetricCard";

describe("EnergyMetricCard", () => {
  it("renders the metric with localized kwh unit and description", () => {
    render(
      <EnergyMetricCard
        label="Generated"
        value={24.6}
        description="Total energy generated today"
      />,
    );

    expect(screen.getByText("Generated")).toBeInTheDocument();
    expect(screen.getByText("24.6 kWh")).toBeInTheDocument();
    expect(
      screen.getByText("Total energy generated today"),
    ).toBeInTheDocument();
  });

  it("renders a custom unit without localization", () => {
    render(<EnergyMetricCard label="Revenue" value={42} unit="USD" />);

    expect(screen.getByText("42.0 USD")).toBeInTheDocument();
  });
});
