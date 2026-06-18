import type { ISODateString } from "./types";

const MINUTE_IN_MS = 60 * 1000;
const HOUR_IN_MS = 60 * MINUTE_IN_MS;
const DAY_IN_MS = 24 * HOUR_IN_MS;
const WEEK_IN_MS = 7 * DAY_IN_MS;
const MONTH_IN_MS = 30 * DAY_IN_MS;
const YEAR_IN_MS = 365 * DAY_IN_MS;

export function formatRelativeTime(
  value: ISODateString | Date,
  locale: string,
  now = new Date(),
) {
  const date = typeof value === "string" ? new Date(value) : value;
  const diff = date.getTime() - now.getTime();
  const absDiff = Math.abs(diff);
  const formatter = new Intl.RelativeTimeFormat(locale, { numeric: "auto" });

  if (absDiff < HOUR_IN_MS) {
    return formatter.format(Math.round(diff / MINUTE_IN_MS), "minute");
  }

  if (absDiff < DAY_IN_MS) {
    return formatter.format(Math.round(diff / HOUR_IN_MS), "hour");
  }

  if (absDiff < WEEK_IN_MS) {
    return formatter.format(Math.round(diff / DAY_IN_MS), "day");
  }

  if (absDiff < MONTH_IN_MS) {
    return formatter.format(Math.round(diff / WEEK_IN_MS), "week");
  }

  if (absDiff < YEAR_IN_MS) {
    return formatter.format(Math.round(diff / MONTH_IN_MS), "month");
  }

  return formatter.format(Math.round(diff / YEAR_IN_MS), "year");
}
