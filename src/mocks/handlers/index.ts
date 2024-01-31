import { HttpHandler } from "msw";
import { handlers as postsHandlers } from "./posts.handlers";

export const handlers: HttpHandler[] = [...postsHandlers];
