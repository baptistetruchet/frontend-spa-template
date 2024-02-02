import { Router } from "@/router";
import { QueryClientProvider } from "@/lib/react-query/QueryClientProvider";
import { ThemeProvider } from "@/lib/antd/ThemeProvider";

export function App() {
  return (
    <QueryClientProvider>
      <ThemeProvider>
        <Router />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
