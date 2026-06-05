import { vi } from "vitest";

import { render, screen } from "@/tests/test-utils";

import AppHeader from "./AppHeader";

const replaceMock = vi.fn();

vi.mock("@/i18n/config/navigation", () => ({
  Link: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
  usePathname: () => "/dashboard",
  useRouter: () => ({
    replace: replaceMock,
  }),
}));

describe("AppHeader", () => {
  beforeEach(() => {
    replaceMock.mockClear();
  });

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

  it("renders the locale dropdown with both language options", () => {
    render(<AppHeader />);

    const menu = screen.getByRole("menu", { hidden: true });

    expect(
      screen.getByRole("button", { name: "Language: EN" }),
    ).toBeInTheDocument();
    expect(menu).toHaveAttribute("aria-label", "Select language");
    expect(
      screen.getByRole("menuitem", { hidden: true, name: /English/i }),
    ).toBeDisabled();
    expect(
      screen.getByRole("menuitem", { hidden: true, name: /한국어/i }),
    ).toBeInTheDocument();
  });
});
