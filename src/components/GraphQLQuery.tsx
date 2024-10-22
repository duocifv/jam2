import { getQueryData, prefetchQuery } from "@/lib/graphqlClient";
import {
  QueryClient,
  dehydrate,
  HydrationBoundary,
} from "@tanstack/react-query";
import { ReactNode } from "react";

interface PrefetchQueryProps {
  query: string; // Chỉ cần query string
  children: ReactNode; // Children để render
}

// Component PrefetchQuery
const GraphQLQuery: React.FC<PrefetchQueryProps> = async ({
  query,
  children,
}) => {
  const queryClient = new QueryClient();
  await prefetchQuery([query]);
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      {children}
    </HydrationBoundary>
  );
};

export default GraphQLQuery;
