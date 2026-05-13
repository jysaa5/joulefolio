import { render, screen } from "@/tests/test-utils";

import AppHeader from "./AppHeader";

describe("AppHeader", () => {
  it("renders the brand link and primary navigation items", () => {
    render(<AppHeader />);

    expect(screen.getByRole("link", { name: "Joulefolio" })).toHaveAttribute(
      "href",
      "/",
    );
    expect(screen.getByRole("link", { name: "Dashboard" })).toHaveAttribute(
      "href",
      "/dashboard",
    );
    expect(screen.getByRole("link", { name: "Trade" })).toHaveAttribute(
      "href",
      "/trade",
    );
    expect(screen.getByRole("link", { name: "Community" })).toHaveAttribute(
      "href",
      "/community",
    );
  });
});
