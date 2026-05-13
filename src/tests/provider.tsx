import type { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NextIntlClientProvider } from "next-intl";

import enMessages from "@/i18n/messages/en.json";

type TestProviderProps = {
  children: ReactNode;
  locale?: string;
  messages?: Record<string, unknown>;
};

export function TestProvider({
  children,
  locale = "en",
  messages = enMessages,
}: TestProviderProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
      },
    },
  });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </NextIntlClientProvider>
  );
}
