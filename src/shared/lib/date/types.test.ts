import { asISODateString, toISODateString } from "./types";

describe("date types", () => {
  it("creates an ISODateString from a Date instance", () => {
    expect(toISODateString(new Date("2026-05-11T00:00:00.000Z"))).toBe(
      "2026-05-11T00:00:00.000Z",
    );
  });

  it("casts a trusted ISO formatted string", () => {
    expect(asISODateString("2026-05-11T00:00:00.000Z")).toBe(
      "2026-05-11T00:00:00.000Z",
    );
  });

  it("rejects invalid ISO formatted strings", () => {
    expect(() => asISODateString("2026-05-11")).toThrow(
      "Invalid ISO date string: 2026-05-11",
    );
  });
});
