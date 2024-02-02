import { App, ConfigProvider, ThemeConfig } from "antd";

const theme: ThemeConfig = {
  token: {},
};

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  return (
    <App>
      <ConfigProvider theme={theme}>{children}</ConfigProvider>
    </App>
  );
}
