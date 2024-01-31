import { expect, describe, it } from "vitest";
import { screen, waitFor, userEvent, renderRouter, render } from "@/test/utils";
import { App } from "@/app";

describe("app", () => {
  it("renders when logged in", async () => {
    render(<App />, { authToken: "abcde" });
    await waitFor(() => {
      expect(screen.getByRole("heading")).toHaveTextContent("Home");
    });
  });

  it("renders when logged out", async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByRole("heading")).toHaveTextContent("Login");
    });
  });

  it("navigates to /posts", async () => {
    renderRouter({
      authToken: "abcde",
      initialEntries: ["/about"],
    });
    await waitFor(() => {
      expect(screen.getByRole("heading")).toHaveTextContent("About");
    });
    await userEvent.click(screen.getByText(/posts/i));
    await waitFor(() => {
      expect(screen.getByRole("heading")).toHaveTextContent("Posts");
      expect(screen.getByText(/third post title/i)).toBeInTheDocument();
    });
  });
});
