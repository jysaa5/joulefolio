import type { Post } from "@/entities/post/model/types";
import CommunityPostCard from "./CommunityPostCard";

type Props = {
  posts: Post[];
};

export default function CommunityFeed({ posts }: Props) {
  return (
    <section className="space-y-4">
      {posts.map((post) => (
        <CommunityPostCard key={post.id} post={post} />
      ))}
    </section>
  );
}
