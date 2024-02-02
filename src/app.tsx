import { Router } from "@/router";
import { QueryClientProvider } from "@/lib/react-query/QueryClientProvider";
import { ThemeProvider } from "@/lib/antd/ThemeProvider";
import "@/globals.css";
import "nprogress/nprogress.css";
import "antd/dist/reset.css";

export function App() {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
