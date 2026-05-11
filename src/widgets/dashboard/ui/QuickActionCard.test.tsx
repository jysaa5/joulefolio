import { render, screen } from "@testing-library/react";

import QuickActionCard from "./QuickActionCard";

describe("QuickActionCard", () => {
  it("renders title, description, and action link", () => {
    render(
      <QuickActionCard
        href="/trade"
        title="Trade Energy"
        description="Sell or share your surplus energy with others."
        buttonText="Go to Trade"
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Trade Energy" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Sell or share your surplus energy with others."),
    ).toBeInTheDocument();
    expect(screen.getByRole("link", { name: "Go to Trade" })).toHaveAttribute(
      "href",
      "/trade",
    );
  });
});
