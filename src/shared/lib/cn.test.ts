import { cn } from "./cn";

describe("cn", () => {
  it("joins plain class names", () => {
    expect(cn("flex", "items-center", "gap-2")).toBe("flex items-center gap-2");
  });

  it("filters falsy values and supports conditional objects", () => {
    expect(
      cn("base", false && "hidden", null, undefined, {
        active: true,
        disabled: false,
      }),
    ).toBe("base active");
  });

  it("supports nested arrays of class values", () => {
    expect(cn(["px-4", ["py-2", { rounded: true }]])).toBe("px-4 py-2 rounded");
  });

  it("merges conflicting tailwind classes by keeping the last one", () => {
    expect(cn("p-2", "p-4", "text-sm", "text-lg")).toBe("p-4 text-lg");
  });
});
