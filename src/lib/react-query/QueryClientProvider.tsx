import { Suspense, lazy } from "react";
import { QueryClientProvider as TanstackQueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./query-client";

const ReactQueryDevtools =
  import.meta.env.DEV && import.meta.env.VITE_REACT_QUERY_DEVTOOLS
    ? lazy(() =>
        import("@tanstack/react-query-devtools").then((pkg) => ({
          default: pkg.ReactQueryDevtools,
        })),
      )
    : () => null;

export function QueryClientProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <TanstackQueryClientProvider client={queryClient}>
      {children}
      <Suspense>
        <ReactQueryDevtools />
      </Suspense>
    </TanstackQueryClientProvider>
  );
}
