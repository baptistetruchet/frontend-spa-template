import { fetchPostQueryOptions } from "@/api/resources/posts";
import { createFileRoute } from "@tanstack/react-router";
import { Post } from "../-components/Post";

export const Route = createFileRoute("/_auth/posts/$postId")({
  component: PostComponent,
  loader: ({ context, params }) =>
    context.queryClient.ensureQueryData(fetchPostQueryOptions(params.postId)),
});

function PostComponent() {
  const post = Route.useLoaderData();

  return <Post post={post} />;
}
