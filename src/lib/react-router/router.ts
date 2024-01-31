import { createRouter } from "@tanstack/react-router";
import { routeTree } from "@/routeTree.gen";
import { queryClient } from "@/lib/react-query/query-client";
import { PendingComponent } from "./PendingComponent";

export const router = createRouter({
  routeTree,
  context: {
    queryClient,
    authToken: null,
  },
  defaultPendingComponent: PendingComponent,
  defaultPreload: false,
  defaultPreloadStaleTime: 0,
  defaultGcTime: 0,
});

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}
