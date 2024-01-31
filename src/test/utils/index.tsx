import { RenderOptions, render } from "@testing-library/react";
import { login } from "@/hooks/useAuthToken";
import { Router } from "@/router";
import { createMemoryHistory } from "@tanstack/react-router";
import { QueryClientProvider } from "@/lib/react-query/QueryClientProvider";

type CustomRenderOptions = RenderOptions & {
  authToken?: string;
};

function customRender(
  ui: React.ReactElement,
  { authToken, ...options }: CustomRenderOptions = {},
) {
  if (authToken) login(authToken);

  return render(ui, {
    wrapper: ({ children }) => (
      <QueryClientProvider>{children}</QueryClientProvider>
    ),
    ...options,
  });
}

type RenderRouterOptions = RenderOptions & {
  authToken?: string;
  initialEntries: string[];
  initialIndex?: number;
};

function customRenderRouter({
  initialEntries,
  initialIndex,
  ...options
}: RenderRouterOptions) {
  const renderResult = customRender(
    <Router history={createMemoryHistory({ initialEntries, initialIndex })} />,
    {
      ...options,
    },
  );
  return renderResult;
}

// eslint-disable-next-line react-refresh/only-export-components
export * from "@testing-library/react";
export { default as userEvent } from "@testing-library/user-event";
export { customRender as render, customRenderRouter as renderRouter };
