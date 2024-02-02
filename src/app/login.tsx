import { useLayoutEffect } from "react";
import { login, useAuthToken } from "@/hooks/useAuthToken";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Button } from "antd";

export const Route = createFileRoute("/login")({
  validateSearch: z.object({
    redirect: z.string().optional(),
  }),
  component: Login,
});

function Login() {
  const authToken = useAuthToken();
  const navigate = useNavigate();
  const search = Route.useSearch();

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.target as HTMLFormElement);
    const accessToken = data.get("accessToken");
    if (accessToken) login(accessToken as string);
  }

  useLayoutEffect(() => {
    if (authToken)
      navigate({ to: search.redirect || "/" }).catch(console.error);
  }, [authToken, navigate, search.redirect]);

  return (
    <>
      <h1 className="mb-2 text-3xl">Login</h1>
      <form onSubmit={onSubmit}>
        <label htmlFor="accessToken" className="block">
          Access Token
        </label>
        <input
          name="accessToken"
          id="accessToken"
          className="mb-2 block border"
        />
        <Button type="primary" htmlType="submit">
          submit
        </Button>
      </form>
    </>
  );
}
