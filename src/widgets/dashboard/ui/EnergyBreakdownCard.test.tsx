import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

import EnergyBreakdownCard from "./EnergyBreakdownCard";

import enMessages from "@/i18n/messages/en.json";

function renderWithIntl(ui: ReactNode) {
  return render(
    <NextIntlClientProvider locale="en" messages={enMessages}>
      {ui}
    </NextIntlClientProvider>,
  );
}

describe("EnergyBreakdownCard", () => {
  it("renders translated labels, descriptions, values, and progress widths", () => {
    const { container } = renderWithIntl(
      <EnergyBreakdownCard consumed={12.5} stored={7.5} availableToTrade={5} />,
    );

    expect(
      screen.getByRole("heading", { name: "Energy Breakdown" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("How your energy is currently allocated"),
    ).toBeInTheDocument();
    expect(screen.getByText("Consumed")).toBeInTheDocument();
    expect(screen.getByText("Stored")).toBeInTheDocument();
    expect(screen.getByText("Available to Trade")).toBeInTheDocument();
    expect(screen.getByText("12.5 kWh")).toBeInTheDocument();
    expect(screen.getByText("7.5 kWh")).toBeInTheDocument();
    expect(screen.getByText("5.0 kWh")).toBeInTheDocument();

    const bars = container.querySelectorAll('[style*="width:"]');

    expect(bars).toHaveLength(3);
    expect(bars[0]).toHaveAttribute("style", "width: 50%;");
    expect(bars[1]).toHaveAttribute("style", "width: 30%;");
    expect(bars[2]).toHaveAttribute("style", "width: 20%;");
  });

  it("renders zero-width progress bars when total energy is zero", () => {
    const { container } = renderWithIntl(
      <EnergyBreakdownCard consumed={0} stored={0} availableToTrade={0} />,
    );

    const bars = container.querySelectorAll('[style*="width:"]');

    expect(bars).toHaveLength(3);
    bars.forEach((bar) => expect(bar).toHaveAttribute("style", "width: 0%;"));
  });
});
