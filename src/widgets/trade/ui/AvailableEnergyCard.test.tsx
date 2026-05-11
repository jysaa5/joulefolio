import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

import AvailableEnergyCard from "./AvailableEnergyCard";

import enMessages from "@/i18n/messages/en.json";

function renderWithIntl(ui: ReactNode) {
  return render(
    <NextIntlClientProvider locale="en" messages={enMessages}>
      {ui}
    </NextIntlClientProvider>,
  );
}

describe("AvailableEnergyCard", () => {
  it("renders translated labels and formatted energy value", () => {
    renderWithIntl(<AvailableEnergyCard value={18.4} />);

    expect(screen.getByText("Available Energy")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "18.4 kWh" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Ready for trading or sharing"),
    ).toBeInTheDocument();
  });
});
