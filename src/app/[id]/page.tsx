import GraphQLQuery from "@/components/GraphQLQuery";
import cache from "@/lib/graphqlClient";
import { gql } from "graphql-request";
import React from "react";

const Posts = gql`
  {
    posts(limit: 10, page: 1) {
      id
      title
    }
  }
`;

const Post = gql`
  query Post($id: ID!) {
    post(id: $id) {
      id
      title
    }
  }
`;

export async function generateStaticParams() {
  const ids = Array.from({ length: 10 }, (_, i) => i + 1);
  
  const params:any = [];

  // Tạo params cho trang [id]
  ids.forEach(id => {
    params.push({ id: id.toString() });
    params.push({ id: id.toString(), page: "1" });
    params.push({ id: id.toString(), page: "2" });
  });

  return params;
}

//   const result:any = await cache.put([Posts]);
//   const posts = result?.data?.posts || [];
//   if (!posts) return [1,2,3,4,5,6,7];
//   console.log("posts", posts)
//   return posts.map((post: { id: string }) => ({
//     id: post.id,
//   }));
// }

export async function generateMetadata({
  params,
}: {
  params: { id: string };
}){
  const result:any = await cache.put([Posts]);
  const posts = result?.posts || [];
  if (!posts)
    return {
      title: "not found",
      description: "not found",
    };
  return {
    title: params.id + " - post.title",
    description: "post.title.slice(0, 50)",
  };
}

export default async function DetailHome({
  params,
}: {
  params: { id: string };
}) {
  return <h2>Hello {params.id}</h2>;
}
