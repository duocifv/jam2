import Detail from "@/components/detail/Detail";
import GraphQLQuery from "@/components/GraphQLQuery";
import cache from "@/lib/graphqlClient";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { gql } from "graphql-request";
import Image from "next/image";
import React from "react";
/* eslint-disable next-on-pages/no-app-nodejs-dynamic-ssg */

const endpoint = process.env.NEXT_PUBLIC_API_URL;

//export const runtime = 'edge';

export async function generateStaticParams() {
  const response: any = await fetch(`${endpoint}/blog`);
  if (!response.ok) return [];
  const posts = await response.json();
  const params = posts.map((post: any) => ({
    id: post.id.toString(),
    page: post.id.toString(),
  }));

  return params;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const response = await fetch(`${endpoint}/blog/${params.id}`);
  if (!response.ok)
    return {
      title: "Bài viết không tồn tại",
      description: "Không có mô tả khả dụng",
    };
  const post: any = await response.json();
  return {
    title: post.name || "Post not found",
    description: post.name ? post.name : "No description available",
  };
}

export default async function PageDetail({
  params,
}: {
  params: { id: string };
}) {
  const queryClient = new QueryClient();
  const post = await queryClient.fetchQuery({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await fetch(`${endpoint}/blog`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog posts");
      }
      return response.json();
    },
  });
  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <Detail id={params.id}/>
    </HydrationBoundary>
  );
}

// const newResponse = new Response(response.body, response);
// newResponse.headers.set('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400'); // 1 giờ cache trên server
// return newResponse;