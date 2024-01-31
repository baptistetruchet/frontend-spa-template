import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "@/app.tsx";

async function prepare() {
  if (import.meta.env.DEV && import.meta.env.VITE_MSW_ENABLED) {
    const { worker } = await import("@mocks/browser");
    await worker.start();
  }
}

function bootstrap() {
  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

prepare()
  .then(bootstrap)
  .catch((err) => console.error("cannot bootstrap application", err));
