import { RouterProps, RouterProvider } from "@tanstack/react-router";
import NProgress from "nprogress";
import { router } from "@/lib/react-router/router";
import { useAuthToken } from "./hooks/useAuthToken";

NProgress.configure({ showSpinner: false });
router.subscribe("onBeforeLoad", () => {
  NProgress.start();
});
router.subscribe("onLoad", () => {
  NProgress.done();
});

export function Router({ context, ...props }: Omit<RouterProps, "router">) {
  const authToken = useAuthToken();

  return (
    <RouterProvider
      {...props}
      router={router}
      context={{ authToken, ...context }}
    />
  );
}
