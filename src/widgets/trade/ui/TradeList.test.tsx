import { render, screen } from "@/tests/test-utils";
import TradeList from "./TradeList";
import type { Trade } from "@/entities/trade/model/types";

describe("TradeList", () => {
  it("renders translated heading and each trade row", () => {
    const trades: Trade[] = [
      {
        id: "1",
        targetName: "Alice",
        amount: 3.2,
        price: 3200,
        status: "completed",
        createdAt: "2026-05-11T00:00:00.000Z",
      },
      {
        id: "2",
        targetName: "Bob",
        amount: 1.5,
        price: 1500,
        status: "pending",
        createdAt: "2026-05-11T01:00:00.000Z",
      },
    ];

    render(<TradeList trades={trades} />);

    expect(
      screen.getByRole("heading", { name: "Trade History" }),
    ).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("3.2 kWh")).toBeInTheDocument();
    expect(screen.getByText("Completed")).toBeInTheDocument();
    expect(screen.getByText("Bob")).toBeInTheDocument();
    expect(screen.getByText("1.5 kWh")).toBeInTheDocument();
    expect(screen.getByText("Pending")).toBeInTheDocument();
  });
});
