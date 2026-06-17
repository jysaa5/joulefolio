import type { User } from "@/entities/user/model/types";

export type PostCategory = "all" | "friends" | "local" | "review";

// savedCarbonKg: 사용자가 절감한 탄소량 (kg)
// generatedKwh: 사용자가 생산한 에너지 양(kWh)
export type Post = {
  id: string;
  author: User;
  content: string;
  generatedKwh?: number;
  savedCarbonKg?: number;
  likes: number;
  comments: number;
  category: Exclude<PostCategory, "all">;
  createdAt: string;
};
