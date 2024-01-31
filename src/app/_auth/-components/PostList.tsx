import { Post } from "@/api/resources/posts";
import { Link } from "@tanstack/react-router";

export function PostList({ posts }: { posts: Post[] }) {
  return (
    <ul className="ml-4 list-disc">
      {posts.map((post) => (
        <li key={post.id} className="hover:underline">
          <Link to="/posts/$postId" params={{ postId: post.id.toString() }}>
            ({post.id}) {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
