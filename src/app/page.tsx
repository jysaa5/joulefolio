import Link from 'next/link';


export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-10">
      <h1 className="text-2xl font-bold">Joulefolio</h1>

      <Link href="/dashboard">→ Dashboard</Link>
      <Link href="/trade">→ Trade</Link>
      <Link href="/community">→ Community</Link>
    </div>
  );
  
}
