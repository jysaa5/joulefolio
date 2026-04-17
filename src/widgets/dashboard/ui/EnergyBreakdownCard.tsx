type EnergyBreakdownCardProps = {
  consumed: number;
  stored: number;
  availableToTrade: number;
};

export default function EnergyBreakdownCard({
  consumed,
  stored,
  availableToTrade,
}: EnergyBreakdownCardProps) {
  const total = consumed + stored + availableToTrade;

  const items = [
    {
      label: "Consumed",
      value: consumed,
      description: "Used for household consumption",
    },
    {
      label: "Stored",
      value: stored,
      description: "Saved in battery storage",
    },
    {
      label: "Available to Trade",
      value: availableToTrade,
      description: "Ready for selling or sharing",
    },
  ];

  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-foreground">
        Energy Breakdown
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        How your energy is currently allocated
      </p>

      <div className="mt-6 space-y-4">
        {items.map((item) => {
          const width = total > 0 ? (item.value / total) * 100 : 0;

          return (
            <div key={item.label}>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-foreground">
                    {item.label}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {item.description}
                  </p>
                </div>

                <p className="text-sm font-semibold text-foreground">
                  {item.value.toFixed(1)} kWh
                </p>
              </div>

              <div className="mt-2 h-2 rounded-full bg-border">
                <div
                  className="h-2 rounded-full bg-foreground"
                  style={{ width: `${width}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
