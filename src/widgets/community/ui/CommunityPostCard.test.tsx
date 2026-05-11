import type { ReactNode } from "react";
import { render, screen } from "@testing-library/react";
import { NextIntlClientProvider } from "next-intl";
import { vi } from "vitest";

import CommunityPostCard from "./CommunityPostCard";

import type { Post } from "@/entities/post/model/types";
import enMessages from "@/i18n/messages/en.json";

vi.mock("@/shared/lib/date/formatRelativeTime", () => ({
  formatRelativeTime: () => "2 hours ago",
}));

function renderWithIntl(ui: ReactNode) {
  return render(
    <NextIntlClientProvider locale="en" messages={enMessages}>
      {ui}
    </NextIntlClientProvider>,
  );
}

describe("CommunityPostCard", () => {
  it("renders translated post metadata and engagement actions", () => {
    const post: Post = {
      id: "1",
      author: "Alice",
      content: "Generated extra solar energy and shared the surplus.",
      generatedKwh: 5.1,
      savedCarbonKg: 2.3,
      likes: 24,
      comments: 5,
      category: "friends",
      createdAt: "2026-05-11T00:00:00.000Z",
    };

    renderWithIntl(<CommunityPostCard post={post} />);

    expect(screen.getByRole("article")).toBeInTheDocument();
    expect(screen.getByText("Alice")).toBeInTheDocument();
    expect(screen.getByText("2 hours ago")).toBeInTheDocument();
    expect(screen.getByText("Friends")).toBeInTheDocument();
    expect(
      screen.getByText("Generated extra solar energy and shared the surplus."),
    ).toBeInTheDocument();
    expect(screen.getByText("Generated")).toBeInTheDocument();
    expect(screen.getByText("5.1 kWh")).toBeInTheDocument();
    expect(screen.getByText("Carbon Saved")).toBeInTheDocument();
    expect(screen.getByText("2.3 kg")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "♥ 24" })).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Comment 5" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Add Friend" }),
    ).toBeInTheDocument();
  });

  it("omits optional metric blocks when values are missing", () => {
    const post: Post = {
      id: "2",
      author: "Minho",
      content: "Completed an energy sharing trade this morning.",
      likes: 18,
      comments: 3,
      category: "review",
      createdAt: "2026-05-10T22:00:00.000Z",
    };

    renderWithIntl(<CommunityPostCard post={post} />);

    expect(screen.getByText("Review")).toBeInTheDocument();
    expect(screen.queryByText("Generated")).not.toBeInTheDocument();
    expect(screen.queryByText("Carbon Saved")).not.toBeInTheDocument();
  });
});
