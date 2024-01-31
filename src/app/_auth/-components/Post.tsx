import { Post } from "@/api/resources/posts";

export function Post({ post }: { post: Post }) {
  return <p>{post.body}</p>;
}
