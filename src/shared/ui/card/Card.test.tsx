import { render, screen } from "@/tests/test-utils";

import Card from "./Card";

describe("Card", () => {
  it("renders as a section with default padding classes", () => {
    render(<Card>Portfolio</Card>);

    const card = screen.getByText("Portfolio");

    expect(card.tagName).toBe("SECTION");
    expect(card).toHaveClass(
      "rounded-2xl",
      "border",
      "border-(--color-border)",
      "bg-(--color-card)",
      "shadow-sm",
      "p-6",
    );
  });

  it("renders the requested semantic element and padding size", () => {
    render(
      <Card as="article" padding="md">
        Community update
      </Card>,
    );

    const card = screen.getByText("Community update");

    expect(card.tagName).toBe("ARTICLE");
    expect(card).toHaveClass("p-5");
  });

  it("supports zero padding", () => {
    render(<Card padding="none">No padding</Card>);

    expect(screen.getByText("No padding")).not.toHaveClass("p-4", "p-5", "p-6");
  });

  it("merges custom className and passes through html attributes", () => {
    render(
      <Card className="ring-1" data-testid="custom-card" id="summary-card">
        Summary
      </Card>,
    );

    const card = screen.getByTestId("custom-card");

    expect(card).toHaveAttribute("id", "summary-card");
    expect(card).toHaveClass("ring-1");
    expect(card).toHaveTextContent("Summary");
  });
});
