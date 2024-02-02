import { useLayoutEffect } from "react";
import { login, useAuthToken } from "@/hooks/useAuthToken";
import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { z } from "zod";
import { Button, Form, Input } from "antd";
import { Title } from "@/components/primitives/Title";

export const Route = createFileRoute("/login")({
  validateSearch: z.object({
    redirect: z.string().optional(),
  }),
  component: Login,
});

function Login() {
  const authToken = useAuthToken();
  const navigate = useNavigate();
  const search = Route.useSearch();

  function onSubmit({ accessToken }: { accessToken: string }) {
    login(accessToken);
  }

  useLayoutEffect(() => {
    if (authToken)
      navigate({ to: search.redirect || "/" }).catch(console.error);
  }, [authToken, navigate, search.redirect]);

  return (
    <>
      <Title>Login</Title>
      <Form layout="vertical" className="max-w-80" onFinish={onSubmit}>
        <Form.Item
          label="Access Token"
          name={["accessToken"]}
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
