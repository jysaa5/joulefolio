import { render, screen } from "@/tests/test-utils";
import CommunityCtaCard from "./CommunityCtaCard";

describe("CommunityCtaCard", () => {
  it("renders translated title, description, and cta button", () => {
    render(<CommunityCtaCard />);

    expect(
      screen.getByRole("heading", { name: "Share your energy story" }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(
        "Post your solar production, energy sharing, or carbon saving activity.",
      ),
    ).toBeInTheDocument();

    const button = screen.getByRole("button", { name: "Write Post" });

    expect(button).toHaveAttribute("type", "button");
    expect(button).toHaveClass(
      "w-full",
      "rounded-lg",
      "bg-foreground",
      "px-4",
      "py-2",
      "text-sm",
      "font-medium",
    );
  });
});
