type Props = {
  value: number;
};

export default function AvailableEnergyCard({ value }: Props) {
  return (
    <section className="rounded-2xl border border-border bg-card p-6 shadow-sm">
      <p className="text-sm text-muted-foreground">Available Energy</p>
      <h2 className="mt-2 text-3xl font-bold text-foreground">
        {value.toFixed(1)} kWh
      </h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Ready for trading or sharing
      </p>
    </section>
  );
}
