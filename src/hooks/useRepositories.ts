import { useInfiniteQuery, useQueryClient } from "@tanstack/react-query";
import { searchReposesByUsername } from "../utils/api";
import { useEffect } from "react";

const useRepositories = (query: string) => {
  const queryClient = useQueryClient();

  useEffect(() => {
    const fetchData = async () => {
      queryClient.invalidateQueries(["repositories", query] as any);
    };
    console.log(query);
    fetchData();
  }, [query, queryClient]);
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  } = useInfiniteQuery({
    queryKey: ["repositories", query], // Запрос обновляется при изменении query
    queryFn: async ({ pageParam = 1 }) => {
      if (!query) return { data: [] };
      return await searchReposesByUsername(query, pageParam);
    },
    initialPageParam: 1,
    getNextPageParam: (_, allPages) => allPages.length + 1 || undefined,
    enabled: !!query, // Запрос делается только если query не пустой
  });
  return {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
    error,
  };
};

export default useRepositories;
