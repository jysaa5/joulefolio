import { render, screen } from "@/tests/test-utils";

import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "./index";

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
