import { Post } from "@/api/resources/posts";
import { HttpHandler, HttpResponse, http } from "msw";

export const posts: Post[] = [
  {
    userId: 1,
    id: 1,
    title: "first post title",
    body: "first post body",
  },
  {
    userId: 2,
    id: 5,
    title: "second post title",
    body: "second post body",
  },
  {
    userId: 3,
    id: 6,
    title: "third post title",
    body: "third post body",
  },
];

export const handlers: HttpHandler[] = [
  http.get("https://jsonplaceholder.typicode.com/posts", () => {
    return HttpResponse.json(posts, { status: 200 });
  }),
  http.get("https://jsonplaceholder.typicode.com/posts/:id", ({ params }) => {
    const post = posts.find((post) => post.id === Number(params.id));
    if (!post) {
      return HttpResponse.json({}, { status: 404 });
    }
    return HttpResponse.json(post, { status: 200 });
  }),
];
