import { App, ConfigProvider } from "antd";
import { theme } from "./theme";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider theme={theme}>
      <App>{children}</App>
    </ConfigProvider>
  );
}
