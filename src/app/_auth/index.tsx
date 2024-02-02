import { Title } from "@/components/primitives/Title";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_auth/")({
  component: Home,
});

function Home() {
  return <Title>Home</Title>;
}
