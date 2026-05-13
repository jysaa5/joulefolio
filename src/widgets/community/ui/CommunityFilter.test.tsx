import { render, screen } from "@/tests/test-utils";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";

import CommunityFilter from "./CommunityFilter";

describe("CommunityFilter", () => {
  it("renders all translated filter buttons and highlights the selected one", () => {
    render(<CommunityFilter selected="friends" onChange={vi.fn()} />);

    expect(screen.getByRole("button", { name: "All" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Friends" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Local" })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Reviews" })).toBeInTheDocument();

    expect(screen.getByRole("button", { name: "Friends" })).toHaveClass(
      "border-foreground",
      "bg-foreground",
      "text-background",
    );
    expect(screen.getByRole("button", { name: "All" })).toHaveClass(
      "border-border",
      "text-muted-foreground",
    );
  });

  it("calls onChange with the clicked category", async () => {
    const user = userEvent.setup();
    const onChange = vi.fn();

    render(<CommunityFilter selected="all" onChange={onChange} />);

    await user.click(screen.getByRole("button", { name: "Local" }));
    await user.click(screen.getByRole("button", { name: "Reviews" }));

    expect(onChange).toHaveBeenNthCalledWith(1, "local");
    expect(onChange).toHaveBeenNthCalledWith(2, "review");
  });
});
