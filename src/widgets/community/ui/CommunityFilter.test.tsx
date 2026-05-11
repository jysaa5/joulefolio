import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { NextIntlClientProvider } from "next-intl";
import { vi } from "vitest";

import CommunityFilter from "./CommunityFilter";

import enMessages from "@/i18n/messages/en.json";

function renderWithIntl(ui: ReactNode) {
  return render(
    <NextIntlClientProvider locale="en" messages={enMessages}>
      {ui}
    </NextIntlClientProvider>,
  );
}

describe("CommunityFilter", () => {
  it("renders all translated filter buttons and highlights the selected one", () => {
    renderWithIntl(<CommunityFilter selected="friends" onChange={vi.fn()} />);

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

    renderWithIntl(<CommunityFilter selected="all" onChange={onChange} />);

    await user.click(screen.getByRole("button", { name: "Local" }));
    await user.click(screen.getByRole("button", { name: "Reviews" }));

    expect(onChange).toHaveBeenNthCalledWith(1, "local");
    expect(onChange).toHaveBeenNthCalledWith(2, "review");
  });
});
