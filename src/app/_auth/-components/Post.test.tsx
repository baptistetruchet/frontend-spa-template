import { expect, describe, it } from "vitest";
import { screen, render } from "@/test/utils";
import { Post } from "./Post";

describe("Post component", () => {
  it("renders a post", () => {
    const post = { userId: 1, id: 1, title: "post title", body: "post body" };
    render(<Post post={post} />);
    expect(screen.getByText(/post body/)).toBeInTheDocument();
  });
});
