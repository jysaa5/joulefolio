import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

import CommunityRankingCard from "./CommunityRankingCard";

import enMessages from "@/i18n/messages/en.json";

function renderWithIntl(ui: ReactNode) {
  return render(
    <NextIntlClientProvider locale="en" messages={enMessages}>
      {ui}
    </NextIntlClientProvider>,
  );
}

describe("CommunityRankingCard", () => {
  it("renders translated heading, description, and ranking items", () => {
    renderWithIntl(<CommunityRankingCard />);

    expect(
      screen.getByRole("heading", { name: "Green Ranking" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Top carbon savers this month"),
    ).toBeInTheDocument();

    expect(screen.getByText("#1 Jiyeon")).toBeInTheDocument();
    expect(screen.getByText("#2 Alice")).toBeInTheDocument();
    expect(screen.getByText("#3 Minho")).toBeInTheDocument();

    expect(screen.getByText("12.4 kg")).toBeInTheDocument();
    expect(screen.getByText("9.8 kg")).toBeInTheDocument();
    expect(screen.getByText("8.1 kg")).toBeInTheDocument();
    expect(screen.getAllByText("Carbon saved")).toHaveLength(3);
  });
});
