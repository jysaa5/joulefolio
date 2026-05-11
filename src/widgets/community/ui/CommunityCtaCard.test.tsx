import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";

import CommunityCtaCard from "./CommunityCtaCard";

import enMessages from "@/i18n/messages/en.json";

function renderWithIntl(ui: ReactNode) {
  return render(
    <NextIntlClientProvider locale="en" messages={enMessages}>
      {ui}
    </NextIntlClientProvider>,
  );
}

describe("CommunityCtaCard", () => {
  it("renders translated title, description, and cta button", () => {
    renderWithIntl(<CommunityCtaCard />);

    expect(
      screen.getByRole("heading", { name: "Share your energy story" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Post your solar production, energy sharing, or carbon saving activity.",
      ),
    ).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Write Post" });

    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass(
      "w-full",
      "rounded-lg",
      "bg-foreground",
      "px-4",
      "py-2",
      "text-sm",
      "font-medium",
    );
  });
});
