import { expect, describe, it } from "vitest";
import {
  screen,
  waitFor,
  userEvent,
  renderRouter,
  fireEvent,
} from "@/test/utils";

describe("auth", () => {
  it("redirects to login page when not logged in", async () => {
    renderRouter({
      initialEntries: ["/"],
    });
    await waitFor(() => {
      expect(screen.getByRole("heading")).toHaveTextContent("Login");
    });
  });

  it("redirects to login after logout", async () => {
    renderRouter({
      authToken: "abcde",
      initialEntries: ["/"],
    });
    await waitFor(() => {
      expect(screen.getByRole("heading")).toHaveTextContent("Home");
    });
    await userEvent.click(screen.getByText(/logout/i));
    await waitFor(() => {
      expect(screen.getByRole("heading")).toHaveTextContent("Login");
    });
  });

  it("redirects to redirect search params when already logged in", async () => {
    renderRouter({
      authToken: "abcde",
      initialEntries: ["/login?redirect=/about"],
    });
    await waitFor(() => {
      expect(screen.getByRole("heading")).toHaveTextContent("About");
    });
  });

  it("navigates to home page after login", async () => {
    renderRouter({
      initialEntries: ["/login"],
    });
    await waitFor(() => {
      expect(screen.getByRole("heading")).toHaveTextContent("Login");
    });
    const input = screen.getByLabelText("Access Token");
    fireEvent.change(input, { target: { value: "abcde" } });
    await userEvent.click(screen.getByText(/submit/i));
    await waitFor(() => {
      expect(screen.getByRole("heading")).toHaveTextContent("Home");
    });
  });
});
