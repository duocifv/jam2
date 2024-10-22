// lib/graphqlClient.ts
import { GraphQLClient } from "graphql-request";
import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient();

// Định nghĩa endpoint của GraphQL
const endpoint = "https://tight-snowflake-8891.duocifv.workers.dev/graphql"; 
// Tạo một instance của GraphQLClient
const graphQL = new GraphQLClient(endpoint);

// Hàm fetcher để lấy dữ liệu
export const fetcher = async (query: string) => await graphQL.request(query);

// Hàm để prefetch dữ liệu
export const prefetchQuery = async (queryKey: string[]) => {
  const cachedData = queryClient.getQueryData(queryKey);
  if (cachedData) {
    return cachedData;
  }
  await queryClient.prefetchQuery({
    queryKey,
    queryFn: async () => await fetcher(queryKey[0]),
  });
  return queryClient.getQueryData(queryKey);
};

// Hàm để lấy dữ liệu đã prefetch
export const getQueryData = (queryKey: string[]) =>
  queryClient.getQueryData(queryKey);

const cache = {
  put: prefetchQuery,
  match: getQueryData,
};

export default cache;
