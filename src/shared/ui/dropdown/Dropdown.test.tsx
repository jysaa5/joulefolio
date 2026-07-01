import { render, screen } from "@/tests/test-utils";
import userEvent from "@testing-library/user-event";

import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "./index";
import { vi } from "vitest";

describe("Dropdown", () => {
  it("wires the trigger and popover content together", () => {
    render(
      <Dropdown>
        <DropdownTrigger>Open menu</DropdownTrigger>
        <DropdownContent>Content</DropdownContent>
      </Dropdown>,
    );

    const trigger = screen.getByRole("button", { name: "Open menu" });
    const content = screen.getByRole("menu", { hidden: true });

    expect(trigger).toHaveAttribute("aria-haspopup", "menu");
    expect(trigger).toHaveAttribute("aria-controls", content.id);
    expect(trigger).toHaveAttribute("popovertarget", content.id);
    expect(content).toHaveAttribute("popover", "auto");
  });

  it("renders a chevron icon in the trigger", () => {
    render(
      <Dropdown>
        <DropdownTrigger>Actions</DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Rename</DropdownItem>
        </DropdownContent>
      </Dropdown>,
    );

    const trigger = screen.getByRole("button", { name: "Actions" });

    expect(trigger.querySelector("svg")).not.toBeNull();
  });

  it("hides the chevron when requested", () => {
    render(
      <Dropdown>
        <DropdownTrigger showChevron={false}>Actions</DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Rename</DropdownItem>
        </DropdownContent>
      </Dropdown>,
    );

    const trigger = screen.getByRole("button", { name: "Actions" });

    expect(trigger.querySelector("svg")).toBeNull();
  });

  it("renders a custom icon when provided", () => {
    render(
      <Dropdown>
        <DropdownTrigger icon={<span data-testid="custom-icon">▾</span>}>
          Actions
        </DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Rename</DropdownItem>
        </DropdownContent>
      </Dropdown>,
    );

    expect(screen.getByTestId("custom-icon")).toBeInTheDocument();
  });

  it("renders menu items that close the popover by default", () => {
    render(
      <Dropdown>
        <DropdownTrigger>Actions</DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Rename</DropdownItem>
        </DropdownContent>
      </Dropdown>,
    );

    const content = screen.getByRole("menu", { hidden: true });
    const item = screen.getByRole("menuitem", { hidden: true, name: "Rename" });

    expect(item).toHaveAttribute("popovertarget", content.id);
    expect(item).toHaveAttribute("popovertargetaction", "hide");
  });

  it("closes the popover explicitly when an item is clicked", async () => {
    const user = userEvent.setup();

    render(
      <Dropdown>
        <DropdownTrigger>Actions</DropdownTrigger>
        <DropdownContent>
          <DropdownItem>Rename</DropdownItem>
        </DropdownContent>
      </Dropdown>,
    );

    const content = screen.getByRole("menu", { hidden: true });
    const hidePopover = vi.fn();

    Object.defineProperty(content, "hidePopover", {
      configurable: true,
      value: hidePopover,
    });

    await user.click(
      screen.getByRole("menuitem", { hidden: true, name: "Rename" }),
    );

    expect(hidePopover).toHaveBeenCalledTimes(1);
  });

  it("allows keeping the popover open for an item", () => {
    render(
      <Dropdown>
        <DropdownTrigger>Filters</DropdownTrigger>
        <DropdownContent>
          <DropdownItem closeOnSelect={false}>Toggle</DropdownItem>
        </DropdownContent>
      </Dropdown>,
    );

    expect(
      screen.getByRole("menuitem", { hidden: true, name: "Toggle" }),
    ).not.toHaveAttribute("popovertarget");
  });
});
