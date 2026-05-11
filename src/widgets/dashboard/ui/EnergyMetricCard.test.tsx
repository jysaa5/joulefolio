import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

import EnergyMetricCard from "./EnergyMetricCard";

import enMessages from "@/i18n/messages/en.json";

function renderWithIntl(ui: ReactNode) {
  return render(
    <NextIntlClientProvider locale="en" messages={enMessages}>
      {ui}
    </NextIntlClientProvider>,
  );
}

describe("EnergyMetricCard", () => {
  it("renders the metric with localized kwh unit and description", () => {
    renderWithIntl(
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
    renderWithIntl(<EnergyMetricCard label="Revenue" value={42} unit="USD" />);

    expect(screen.getByText("42.0 USD")).toBeInTheDocument();
  });
});
