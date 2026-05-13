import type { ReactElement } from "react";
import { render as rtlRender } from "@testing-library/react";
import type { RenderOptions } from "@testing-library/react";

import { TestProvider } from "./provider";

type CustomRenderOptions = Omit<RenderOptions, "wrapper"> & {
  locale?: string;
  messages?: Record<string, unknown>;
};

export function render(
  ui: ReactElement,
  { locale, messages, ...options }: CustomRenderOptions = {},
) {
  return rtlRender(ui, {
    wrapper: ({ children }) => (
      <TestProvider locale={locale} messages={messages}>
        {children}
      </TestProvider>
    ),
    ...options,
  });
}

export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
