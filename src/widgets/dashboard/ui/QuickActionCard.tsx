import Card from "@/shared/ui/card/Card";
import Link from "next/link";

type QuickActionCardProps = {
  href: string;
  title: string;
  description: string;
  buttonText: string;
};

export default function QuickActionCard({
  href,
  title,
  description,
  buttonText,
}: QuickActionCardProps) {
  return (
    <Card padding="lg" data-testid="quick-action-card">
      <h2 className="text-lg font-semibold text-(--color-foreground)">
        {title}
      </h2>
      <p className="mt-2 text-sm text-(--color-muted-foreground)">
        {description}
      </p>
      <Link
        href={href}
        data-testid="quick-action-link"
        className="mt-4 inline-flex items-center rounded-lg bg-black px-4 py-2 text-sm font-medium text-white transition hover:bg-gray-800"
      >
        {buttonText}
      </Link>
    </Card>
  );
}
