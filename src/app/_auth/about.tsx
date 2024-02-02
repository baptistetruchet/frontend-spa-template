import { Title } from "@/components/primitives/Title";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/about")({
  component: About,
});

function About() {
  return <Title>About</Title>;
}
