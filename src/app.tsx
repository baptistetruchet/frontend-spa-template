import { Router } from "@/router";
import { QueryClientProvider } from "@/lib/react-query/QueryClientProvider";
import "@/globals.css";
import "nprogress/nprogress.css";

export function App() {
  return (
    <QueryClientProvider>
      <Router />
    </QueryClientProvider>
  );
}
