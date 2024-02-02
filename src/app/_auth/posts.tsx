import { fetchPostsQueryOptions } from "@/api/resources/posts";
import { Outlet, createFileRoute } from "@tanstack/react-router";
import { PostList } from "./-components/PostList";
import { NTitle } from "@/components/primitives/NTitle";

export const Route = createFileRoute("/_auth/posts")({
  component: PostsComponent,
  loader: ({ context }) =>
    context.queryClient.ensureQueryData(fetchPostsQueryOptions()),
});

function PostsComponent() {
  const posts = Route.useLoaderData();

  return (
    <>
      <NTitle>Posts</NTitle>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <PostList posts={posts} />
        <Outlet />
      </div>
    </>
  );
}
