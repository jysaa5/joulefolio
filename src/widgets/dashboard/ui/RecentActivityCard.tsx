import Card from "@/shared/ui/card/Card";

type RecentActivityCardProps = {
  items: string[];
};

export default function RecentActivityCard({ items }: RecentActivityCardProps) {
  return (
    <Card padding="lg">
      <h2 className="text-lg font-semibold text-(--color-foreground)">
        Recent Activity
      </h2>
      <ul className="mt-4 space-y-2 text-sm text-(--color-muted-foreground)">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Card>
  );
}
