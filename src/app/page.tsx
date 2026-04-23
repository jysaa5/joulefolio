import Link from "next/link";

export default function Home() {
  return (
    <main className="mx-auto max-w-6xl px-6 py-12">
      <h1 className="text-4xl font-bold text-foreground">Joulefolio</h1>
      <p className="mt-3 max-w-2xl text-muted-foreground">
        An energy portfolio platform for monitoring, storing, and trading
        surplus energy.
      </p>

      <div className="mt-8 flex gap-4">
        <Link
          href="/dashboard"
          className="rounded-lg bg-foreground px-4 py-2 text-sm font-medium text-background"
        >
          Go to Dashboard
        </Link>
        <Link
          href="/trade"
          className="rounded-lg border border-border px-4 py-2 text-sm font-medium text-foreground"
        >
          Explore Trade
        </Link>
      </div>
    </main>
  );
}
