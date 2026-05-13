import { render, screen } from "@/tests/test-utils";
import RecentActivityCard from "./RecentActivityCard";

describe("RecentActivityCard", () => {
  it("renders translated heading and activity items", () => {
    render(
      <RecentActivityCard
        items={[
          {
            id: "1",
            type: "trade",
            title: "Sold 3.2 kWh to Alice",
            description:
              "Your surplus energy was successfully traded this afternoon.",
            time: "2h ago",
          },
          {
            id: "2",
            type: "community",
            title: "New community post from Minho",
            description: "Minho shared today's solar production update.",
            time: "4h ago",
          },
        ]}
      />,
    );

    expect(
      screen.getByRole("heading", { name: "Recent Activity" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Latest trade and community updates"),
    ).toBeInTheDocument();
    expect(screen.getByText("Sold 3.2 kWh to Alice")).toBeInTheDocument();
    expect(screen.getByText("2h ago")).toBeInTheDocument();
    expect(
      screen.getByText("New community post from Minho"),
    ).toBeInTheDocument();
    expect(screen.getByText("4h ago")).toBeInTheDocument();
  });
});
