import { queryOptions } from "@tanstack/react-query";

export const fetchProfileQueryOptions = () =>
  queryOptions({
    queryKey: ["profile"],
    queryFn: () => {
      // await new Promise((resolve) => setTimeout(resolve, 1500));
      return {
        name: "John Doe",
        email: "john.doe@gmail.com",
      };
    },
  });
