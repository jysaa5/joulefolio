import { render, screen } from "@testing-library/react";

import Text from "./Text";

describe("Text", () => {
  it("renders as a paragraph with default size and tone", () => {
    render(<Text>Portfolio summary</Text>);

    const text = screen.getByText("Portfolio summary");

    expect(text.tagName).toBe("P");
    expect(text).toHaveClass("text-base", "text-(--color-foreground)");
  });

  it("renders the requested element with custom size and tone", () => {
    render(
      <Text as="strong" size="xl" tone="accent">
        High priority
      </Text>,
    );

    const text = screen.getByText("High priority");

    expect(text.tagName).toBe("STRONG");
    expect(text).toHaveClass("text-xl", "text-black");
  });

  it("supports muted text styling", () => {
    render(
      <Text as="span" size="sm" tone="muted">
        Updated 2 minutes ago
      </Text>,
    );

    expect(screen.getByText("Updated 2 minutes ago")).toHaveClass(
      "text-sm",
      "text-(--color-muted-foreground)",
    );
  });

  it("merges custom className and passes through html attributes", () => {
    render(
      <Text className="tracking-tight" data-testid="custom-text" id="summary">
        Summary
      </Text>,
    );

    const text = screen.getByTestId("custom-text");

    expect(text).toHaveAttribute("id", "summary");
    expect(text).toHaveClass("tracking-tight");
    expect(text).toHaveTextContent("Summary");
  });
});
