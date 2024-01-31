import { useLayoutEffect } from "react";
import { logout, useAuthToken } from "@/hooks/useAuthToken";
import {
  Link,
  Outlet,
  createFileRoute,
  redirect,
  useNavigate,
} from "@tanstack/react-router";
import { fetchProfileQueryOptions } from "@/api/resources/profile";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/lib/react-query/query-client";

export const Route = createFileRoute("/_auth")({
  beforeLoad: ({ context, location }) => {
    if (!context.authToken) {
      throw redirect({
        to: "/login",
        search: {
          redirect: location.href,
        },
      });
    }
  },
  component: AuthLayout,
});

function AuthLayout() {
  const navigate = useNavigate();
  const authToken = useAuthToken();
  const profileQuery = useQuery(fetchProfileQueryOptions());

  useLayoutEffect(() => {
    if (!authToken)
      void navigate({ to: "/login" }).then(() => queryClient.clear());
  }, [authToken, navigate]);

  return (
    <>
      <div className="mb-2 flex justify-between">
        <div className="space-x-2">
          <Link
            className="hover:underline"
            activeProps={{ className: "font-bold" }}
            to="/"
          >
            Home
          </Link>
          <Link
            className="hover:underline"
            activeProps={{ className: "font-bold" }}
            to="/posts"
          >
            Posts
          </Link>
          <Link
            className="hover:underline"
            activeProps={{ className: "font-bold" }}
            to="/about"
          >
            About
          </Link>
        </div>
        <div className="space-x-4">
          <span>
            {profileQuery.isSuccess
              ? profileQuery.data.email
              : "loading profile..."}
          </span>
          <button className="hover:underline" onClick={logout}>
            logout
          </button>
        </div>
      </div>
      <Outlet />
    </>
  );
}
