import { energySummary } from "@/shared/mock/energyMock";

export default function DashboardPage() {
  const totalAsset = energySummary.surplus + energySummary.battery;

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold">Joulefolio Dashboard</h1>

      <section className="mt-6 rounded-xl border p-4">
        <h2 className="text-lg font-semibold">Energy Portfolio</h2>
        <p className="mt-2 text-3xl font-bold">{totalAsset.toFixed(1)} kWh</p>
        <p className="text-sm text-gray-500">Total energy asset</p>
      </section>

      <section className="mt-6 grid gap-4 md:grid-cols-2">
        <div className="rounded-xl border p-4">
          <p className="text-sm text-gray-500">Generated</p>
          <p className="text-2xl font-semibold">{energySummary.generated} kWh</p>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-gray-500">Consumed</p>
          <p className="text-2xl font-semibold">{energySummary.consumed} kWh</p>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-gray-500">Surplus</p>
          <p className="text-2xl font-semibold">{energySummary.surplus} kWh</p>
        </div>

        <div className="rounded-xl border p-4">
          <p className="text-sm text-gray-500">Battery</p>
          <p className="text-2xl font-semibold">{energySummary.battery} kWh</p>
        </div>
      </section>
    </main>
  );
}
