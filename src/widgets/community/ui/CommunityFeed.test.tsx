import { render, screen, within } from "@/tests/test-utils";
import { vi } from "vitest";

import CommunityFeed from "./CommunityFeed";

import type { Post } from "@/entities/post/model/types";
import { asISODateString } from "@/shared/lib/date/types";
import { userById } from "@/shared/mock/userMock";

vi.mock("@/shared/lib/date/formatRelativeTime", () => ({
  formatRelativeTime: () => "2 hours ago",
}));

describe("CommunityFeed", () => {
  it("renders one post card per post", () => {
    const posts: Post[] = [
      {
        id: "1",
        author: userById["user-1"],
        content: "Sharing today's solar surplus with my neighbor.",
        generatedKwh: 5.1,
        savedCarbonKg: 2.3,
        likesCount: 24,
        commentsCount: 5,
        category: "friends",
        createdAt: asISODateString("2026-05-11T00:00:00.000Z"),
      },
      {
        id: "2",
        author: userById["user-2"],
        content: "Completed an energy sharing trade this morning.",
        savedCarbonKg: 1.7,
        likesCount: 18,
        commentsCount: 3,
        category: "review",
        createdAt: asISODateString("2026-05-10T22:00:00.000Z"),
      },
    ];

    render(<CommunityFeed posts={posts} />);

    const articles = screen.getAllByRole("article");
    const firstPost = articles[0];
    const secondPost = articles[1];

    expect(articles).toHaveLength(2);
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(
      screen.getByText("Sharing today's solar surplus with my neighbor."),
    ).toBeInTheDocument();
    expect(within(firstPost).getByText("Friends")).toBeInTheDocument();
    expect(within(firstPost).getByText("Generated")).toBeInTheDocument();
    expect(within(firstPost).getByText("5.1 kWh")).toBeInTheDocument();
    expect(within(firstPost).getByText("Carbon Saved")).toBeInTheDocument();
    expect(within(firstPost).getByText("2.3 kg")).toBeInTheDocument();
    expect(screen.getAllByText("2 hours ago")).toHaveLength(2);
    expect(
      within(secondPost).getByText(
        "Completed an energy sharing trade this morning.",
      ),
    ).toBeInTheDocument();
    expect(within(secondPost).getByText("Review")).toBeInTheDocument();
    expect(within(secondPost).queryByText("Generated")).not.toBeInTheDocument();
  });

  it("renders an empty section when there are no posts", () => {
    const { container } = render(<CommunityFeed posts={[]} />);

    expect(container.querySelector("section")).toBeInTheDocument();
    expect(screen.queryByRole("article")).not.toBeInTheDocument();
  });
});
