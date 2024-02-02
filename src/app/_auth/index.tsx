import { NTitle } from "@/components/primitives/NTitle";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/")({
  component: Home,
});

function Home() {
  return <NTitle>Home</NTitle>;
}
