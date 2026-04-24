export type PostCategory = "all" | "friends" | "local" | "review";

// savedCarbonKg: 내가 절감한 탄소량 (kg)
// generatedKwh: 내가 생산한 전력량 (kWh)
export type Post = {
  id: string;
  author: string;
  content: string;
  generatedKwh?: number;
  savedCarbonKg?: number;
  likes: number;
  comments: number;
  category: Exclude<PostCategory, "all">;
  createdAt: string;
};
