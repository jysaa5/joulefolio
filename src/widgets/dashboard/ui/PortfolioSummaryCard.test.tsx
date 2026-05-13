import { render, screen } from "@/tests/test-utils";
import PortfolioSummaryCard from "./PortfolioSummaryCard";

describe("PortfolioSummaryCard", () => {
  it("renders asset total, earnings, and default description", () => {
    render(<PortfolioSummaryCard totalAsset={123.4} todayEarning={5.6} />);

    expect(screen.getByText("Energy Portfolio")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: /123\.4 kWh/i }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Total energy available for use, storage, or trade"),
    ).toBeInTheDocument();
    expect(screen.getByText("+5.6 kWh")).toBeInTheDocument();
    expect(screen.getByText("Portfolio Status")).toBeInTheDocument();
    expect(screen.getByText("Stable")).toBeInTheDocument();
  });

  it("renders a custom description when provided", () => {
    render(
      <PortfolioSummaryCard
        totalAsset={42.0}
        todayEarning={1.2}
        description="Custom energy summary"
      />,
    );

    expect(screen.getByText("Custom energy summary")).toBeInTheDocument();
  });

  it("renders a portfolio status when provided", () => {
    render(
      <PortfolioSummaryCard
        totalAsset={42.0}
        todayEarning={1.2}
        currentStatus="High production"
      />,
    );

    expect(screen.getByText("High production")).toBeInTheDocument();
  });
});
