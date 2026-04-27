import type { Post } from "@/entities/post/model/types";

const now = Date.now();

export const communityPosts: Post[] = [
  {
    id: "1",
    author: "Alice",
    content:
      "Generated 5.1 kWh with solar today. Sharing the surplus with my neighbor!",
    generatedKwh: 5.1,
    savedCarbonKg: 2.3,
    likes: 24,
    comments: 5,
    category: "friends",
    createdAt: new Date(now - 2 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "2",
    author: "Minho",
    content:
      "Completed an energy sharing trade. It feels good to turn surplus energy into value.",
    generatedKwh: 3.8,
    savedCarbonKg: 1.7,
    likes: 18,
    comments: 3,
    category: "review",
    createdAt: new Date(now - 4 * 60 * 60 * 1000).toISOString(),
  },
  {
    id: "3",
    author: "Jiyeon",
    content:
      "This month, I reached the top 10% in carbon savings in my local grid community.",
    savedCarbonKg: 12.4,
    likes: 36,
    comments: 8,
    category: "local",
    createdAt: new Date(now - 24 * 60 * 60 * 1000).toISOString(),
  },
];
