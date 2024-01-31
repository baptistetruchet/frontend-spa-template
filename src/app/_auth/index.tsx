import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/")({
  component: Home,
});

function Home() {
  return <h1 className="text-3xl">Home</h1>;
}
