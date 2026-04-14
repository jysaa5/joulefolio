import Link from "next/link";

type QuickActionCardProps = {
  href: string;
  title: string;
  description: string;
  buttonText: string;
};

export default function QuickActionCard({ href, title, description, buttonText }: QuickActionCardProps) {
  return (
    <section className="rounded-2xl border p-6 shadow-sm">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p className="mt-2 text-sm text-gray-500">{description}</p>
      <Link href={href} className="mt-4 inline-flex rounded-lg border px-4 py-2 text-sm font-medium">
        {buttonText}
      </Link>
    </section>
  );
}
