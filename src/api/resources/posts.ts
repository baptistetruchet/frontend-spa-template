import { queryOptions } from "@tanstack/react-query";
import axios from "axios";

export type Post = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

async function fetchPost(id: string): Promise<Post> {
  const { data } = await axios.get<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return data;
}

export const fetchPostQueryOptions = (id: string) =>
  queryOptions({
    queryKey: ["posts", id],
    queryFn: () => fetchPost(id),
  });

async function fetchPosts(): Promise<Post[]> {
  // await new Promise((resolve) => setTimeout(resolve, 1500));
  const { data } = await axios.get<Post[]>(
    "https://jsonplaceholder.typicode.com/posts",
  );
  return data.slice(0, 10);
}

export const fetchPostsQueryOptions = () =>
  queryOptions({
    queryKey: ["posts"],
    queryFn: () => fetchPosts(),
  });
