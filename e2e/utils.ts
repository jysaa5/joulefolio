import type { Page } from "@playwright/test";

export async function gotoLocalizedPath(
  page: Page,
  baseURL: string,
  locale: string,
  path: string,
) {
  const { hostname } = new URL(baseURL);

  await page.context().addCookies([
    {
      name: "NEXT_LOCALE",
      value: locale,
      domain: hostname,
      path: "/",
    },
  ]);

  await page.goto(path);
}

export function formatMessage(
  template: string,
  values: Record<string, string | number>,
) {
  return template.replace(/\{(\w+)\}/g, (_, key: string) =>
    String(values[key]),
  );
}
