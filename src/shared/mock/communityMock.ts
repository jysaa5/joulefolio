import type { Post } from "@/entities/post/model/types";
import { toISODateString } from "@/shared/lib/date/types";
import { userById } from "@/shared/mock/userMock";

const now = Date.now();

export const communityPosts: Post[] = [
  {
    id: "1",
    author: userById["user-1"],
    content:
      "Generated 5.1 kWh with solar today. Sharing the surplus with my neighbor!",
    generatedKwh: 5.1,
    savedCarbonKg: 2.3,
    likesCount: 24,
    commentsCount: 5,
    category: "friends",
    createdAt: toISODateString(new Date(now - 2 * 60 * 60 * 1000)),
  },
  {
    id: "2",
    author: userById["user-2"],
    content:
      "Completed an energy sharing trade. It feels good to turn surplus energy into value.",
    generatedKwh: 3.8,
    savedCarbonKg: 1.7,
    likesCount: 18,
    commentsCount: 3,
    category: "review",
    createdAt: toISODateString(new Date(now - 4 * 60 * 60 * 1000)),
  },
  {
    id: "3",
    author: userById["user-3"],
    content:
      "This month, I reached the top 10% in carbon savings in my local grid community.",
    savedCarbonKg: 12.4,
    likesCount: 36,
    commentsCount: 8,
    category: "local",
    createdAt: toISODateString(new Date(now - 24 * 60 * 60 * 1000)),
  },
];
