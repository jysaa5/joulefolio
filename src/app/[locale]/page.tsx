"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold text-foreground">Joulefolio</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">{t("welcome")}</p>

      <div className="mt-8 flex gap-4">
        <Link
          href={`/dashboard`}
          className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background"
        >
          {t("dashboard")}
        </Link>
        <Link
          href={`/trade`}
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground"
        >
          {t("trade")}
        </Link>
      </div>
    </main>
  );
}
