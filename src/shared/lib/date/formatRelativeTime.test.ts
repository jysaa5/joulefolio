import { formatRelativeTime } from "./formatRelativeTime";

describe("formatRelativeTime", () => {
  const now = new Date("2026-05-11T00:00:00.000Z");

  it("formats minute-based differences under one hour", () => {
    expect(
      formatRelativeTime(new Date("2026-05-11T00:30:00.000Z"), "en", now),
    ).toBe("in 30 minutes");

    expect(
      formatRelativeTime(new Date("2026-05-10T23:30:00.000Z"), "en", now),
    ).toBe("30 minutes ago");
  });

  it("switches to hours at one hour and days at one day", () => {
    expect(
      formatRelativeTime(new Date("2026-05-11T01:00:00.000Z"), "en", now),
    ).toBe("in 1 hour");

    expect(
      formatRelativeTime(new Date("2026-05-12T00:00:00.000Z"), "en", now),
    ).toBe("tomorrow");
  });

  it("switches to weeks and months at the expected thresholds", () => {
    expect(
      formatRelativeTime(new Date("2026-05-17T00:00:00.000Z"), "en", now),
    ).toBe("in 6 days");

    expect(
      formatRelativeTime(new Date("2026-05-18T00:00:00.000Z"), "en", now),
    ).toBe("next week");

    expect(
      formatRelativeTime(new Date("2026-05-25T00:00:00.000Z"), "en", now),
    ).toBe("in 2 weeks");

    expect(
      formatRelativeTime(new Date("2026-06-10T00:00:00.000Z"), "en", now),
    ).toBe("next month");
  });

  it("switches to years at one year", () => {
    expect(
      formatRelativeTime(new Date("2026-12-11T00:00:00.000Z"), "en", now),
    ).toBe("in 7 months");

    expect(
      formatRelativeTime(new Date("2027-05-11T00:00:00.000Z"), "en", now),
    ).toBe("next year");
  });

  it("accepts ISO string input", () => {
    expect(formatRelativeTime("2026-05-10T00:00:00.000Z", "en", now)).toBe(
      "yesterday",
    );
  });
});
