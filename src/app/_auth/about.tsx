import { NTitle } from "@/components/primitives/NTitle";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/about")({
  component: About,
});

function About() {
  return <NTitle>About</NTitle>;
}
