import { render, screen } from "@/tests/test-utils";
import AvailableEnergyCard from "./AvailableEnergyCard";

describe("AvailableEnergyCard", () => {
  it("renders translated labels and formatted energy value", () => {
    render(<AvailableEnergyCard value={18.4} />);

    expect(screen.getByText("Available Energy")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "18.4 kWh" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Ready for trading or sharing"),
    ).toBeInTheDocument();
  });
});
