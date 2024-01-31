import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/about")({
  component: Todos,
});

function Todos() {
  return <h1 className="text-3xl">About</h1>;
}
