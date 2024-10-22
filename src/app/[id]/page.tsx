import GraphQLQuery from "@/components/GraphQLQuery";
import cache from "@/lib/graphqlClient";
import { gql } from "graphql-request";
import Image from "next/image";
import React from "react";
/* eslint-disable next-on-pages/no-app-nodejs-dynamic-ssg */



//export const runtime = 'edge';

export const revalidate = 60

export const dynamicParams = false


export async function generateStaticParams() {
  const response:any = await fetch("https://6717b3deb910c6a6e0298d04.mockapi.io/blog");
  const posts = await response.json();

  const params = posts.map((post:any) => ({
    id: post.id.toString() // Chuyển đổi id thành chuỗi
  }));

  return params; // Trả về danh sách các params cho các trang
}


export async function generateMetadata({
  params,
}: {
  params: { id: string };
}){

  const response = await fetch(`https://6717b3deb910c6a6e0298d04.mockapi.io/blog/${params.id}`);
  const post:any = await response.json();

  return {
    title: post.name || "Post not found",
    description: post.name ? post.name : "No description available",
  };
}

export default async function Page({
  params,
}: {
  params: { id: string };
}) {
  const response:any = await fetch(`https://6717b3deb910c6a6e0298d04.mockapi.io/blog/${params.id}`);
  const post:any = await response.json();
  return <div>
    <div>{post.name}</div>
    <div>{post.createdAt}</div>
  </div>;
}
