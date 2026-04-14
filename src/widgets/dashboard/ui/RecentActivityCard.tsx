type RecentActivityCardProps = {
  items: string[];
};

export default function RecentActivityCard({ items }: RecentActivityCardProps) {
  return (
    <section className="rounded-2xl border border-(--color-border) bg-(--color-card) p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-(--color-foreground)">Recent Activity</h2>
      <ul className="mt-4 space-y-2 text-sm text-(--color-muted-foreground)">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}
