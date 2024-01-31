import { Suspense, lazy } from "react";
import { Outlet, rootRouteWithContext } from "@tanstack/react-router";
import { QueryClient } from "@tanstack/react-query";

type RouterContext = {
  queryClient: QueryClient;
  authToken: string | null;
};

const TanStackRouterDevtools =
  import.meta.env.DEV && import.meta.env.VITE_ROUTER_DEVTOOLS
    ? lazy(() =>
        import("@tanstack/router-devtools").then((pkg) => ({
          default: pkg.TanStackRouterDevtools,
        })),
      )
    : () => null;

export const Route = rootRouteWithContext<RouterContext>()({
  component: RootComponent,
});

function RootComponent() {
  return (
    <div className="p-4">
      <Outlet />
      <Suspense>
        <TanStackRouterDevtools />
      </Suspense>
    </div>
  );
}
