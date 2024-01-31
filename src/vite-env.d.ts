/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_REACT_QUERY_DEVTOOLS?: string;
  readonly VITE_ROUTER_DEVTOOLS?: string;
  readonly VITE_MSW_ENABLED?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
