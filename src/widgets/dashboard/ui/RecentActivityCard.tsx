import Card from "@/shared/ui/card/Card";

type ActivityItem = {
  id: string;
  type: "trade" | "community";
  title: string;
  description: string;
  time: string;
};

type RecentActivityCardProps = {
  items: ActivityItem[];
};

export default function RecentActivityCard({ items }: RecentActivityCardProps) {
  return (
    <Card padding="lg">
      <h2 className="text-lg font-semibold text-foreground">Recent Activity</h2>
      <p className="mt-1 text-sm text-muted-foreground">
        Latest trade and community updates
      </p>

      <ul className="mt-6 space-y-4">
        {items.map((item) => (
          <li key={item.id} className="rounded-xl border border-border p-4">
            <div className="flex items-center justify-between gap-4">
              <p className="text-sm font-medium text-foreground">
                {item.title}
              </p>
              <span className="text-xs text-muted-foreground">{item.time}</span>
            </div>

            <p className="mt-2 text-sm text-muted-foreground">
              {item.description}
            </p>
          </li>
        ))}
      </ul>
    </Card>
  );
}
