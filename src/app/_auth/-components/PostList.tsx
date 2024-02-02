import { Post } from "@/api/resources/posts";
import { Link } from "@tanstack/react-router";

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to="/posts/$postId" params={{ postId: post.id.toString() }}>
            ({post.id}) {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
