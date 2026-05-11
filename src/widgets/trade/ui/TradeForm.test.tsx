import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NextIntlClientProvider } from "next-intl";

import TradeForm from "./TradeForm";

import enMessages from "@/i18n/messages/en.json";

function renderWithIntl(ui: ReactNode) {
  return render(
    <NextIntlClientProvider locale="en" messages={enMessages}>
      {ui}
    </NextIntlClientProvider>,
  );
}

describe("TradeForm", () => {
  it("renders translated form controls and default estimated price", () => {
    renderWithIntl(<TradeForm />);

    expect(
      screen.getByRole("heading", { name: "Trade Energy" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Select Target")).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Alice" })).toBeInTheDocument();
    expect(screen.getByRole("option", { name: "Bob" })).toBeInTheDocument();
    expect(screen.getByText("Amount (kWh)")).toBeInTheDocument();
    expect(screen.getByText("Estimated Price")).toBeInTheDocument();
    expect(screen.getByText("₩ 0")).toBeInTheDocument();
    expect(
      screen.getAllByRole("button", { name: "Request Trade" }),
    ).toHaveLength(2);
  });

  it("updates the estimated price when the amount changes", async () => {
    const user = userEvent.setup();

    renderWithIntl(<TradeForm />);

    const input = screen.getByRole("spinbutton");

    await user.clear(input);
    await user.type(input, "12");

    expect(screen.getByDisplayValue(12)).toBeInTheDocument();
    expect(screen.getByText("₩ 12,000")).toBeInTheDocument();
  });
});
