import { render, screen } from "@testing-library/react";

import Button from "./Button";

describe("Button", () => {
  it("renders with default type, variant, and size", () => {
    render(<Button>Save</Button>);

    const button = screen.getByRole("button", { name: "Save" });

    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass(
      "inline-flex",
      "items-center",
      "justify-center",
      "rounded-lg",
      "font-medium",
      "transition",
      "bg-black",
      "text-white",
      "px-4",
      "py-2",
      "text-sm",
    );
  });

  it("applies the requested variant and size classes", () => {
    render(
      <Button size="lg" variant="secondary">
        Trade
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Trade" });

    expect(button).toHaveClass(
      "bg-(--color-card)",
      "text-(--color-foreground)",
      "border",
      "border-(--color-border)",
      "px-5",
      "py-3",
      "text-base",
    );
  });

  it("allows overriding the type and passing through button props", () => {
    render(
      <Button disabled type="submit">
        Submit
      </Button>,
    );

    const button = screen.getByRole("button", { name: "Submit" });

    expect(button).toBeDisabled();
    expect(button).toHaveAttribute("type", "submit");
  });

  it("merges a custom className with component classes", () => {
    render(<Button className="w-full shadow-sm">Full width</Button>);

    expect(screen.getByRole("button", { name: "Full width" })).toHaveClass(
      "w-full",
      "shadow-sm",
    );
  });
});
