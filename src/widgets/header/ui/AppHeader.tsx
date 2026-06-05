"use client";

import { useLocale, useTranslations } from "next-intl";

import { Link, usePathname, useRouter } from "@/i18n/config/navigation";
import {
  Dropdown,
  DropdownContent,
  DropdownItem,
  DropdownTrigger,
} from "@/shared/ui";

const navItems = [
  { href: "/dashboard", labelKey: "dashboard" },
  { href: "/trade", labelKey: "trade" },
  { href: "/community", labelKey: "community" },
] as const;

const localeOptions = [
  { value: "en", label: "English" },
  { value: "ko", label: "한국어" },
] as const;

export default function AppHeader() {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  return (
    <header className="border-b border-border bg-background">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-bold tracking-tight text-foreground"
        >
          Joulefolio
        </Link>

        <nav className="flex items-center gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition hover:text-foreground"
            >
              {t(`common.${item.labelKey}`)}
            </Link>
          ))}

          <Dropdown>
            <DropdownTrigger className="rounded-lg border border-border px-3 py-2 text-sm font-medium text-foreground transition hover:bg-black/5">
              {t("header.languageTrigger", {
                locale: locale.toUpperCase(),
              })}
            </DropdownTrigger>
            <DropdownContent
              aria-label={t("header.languageMenu")}
              className="mt-0"
            >
              {localeOptions.map((option) => (
                <DropdownItem
                  key={option.value}
                  aria-pressed={locale === option.value}
                  className="justify-between gap-4"
                  disabled={locale === option.value}
                  onClick={() =>
                    router.replace(pathname, { locale: option.value })
                  }
                >
                  <span>{option.label}</span>
                  <span className="text-xs text-muted-foreground">
                    {option.value.toUpperCase()}
                  </span>
                </DropdownItem>
              ))}
            </DropdownContent>
          </Dropdown>
        </nav>
      </div>
    </header>
  );
}
