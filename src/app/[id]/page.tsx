import GraphQLQuery from "@/components/GraphQLQuery";
import cache from "@/lib/graphqlClient";
import { gql } from "graphql-request";
import Image from "next/image";
import React from "react";
/* eslint-disable next-on-pages/no-app-nodejs-dynamic-ssg */





export const revalidate = 60

export const runtime = 'edge';

export async function generateStaticParams() {
  const response:any = await fetch("https://6717b3deb910c6a6e0298d04.mockapi.io/blog");

  if (!response.ok) {
    console.error('Lỗi khi lấy dữ liệu:', response.statusText);
    return []; // Trả về mảng rỗng nếu có lỗi
  }

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

  if (!response.ok) {
    console.error('Lỗi khi lấy dữ liệu bài viết:', response.statusText);
    return {
      title: "Bài viết không tồn tại",
      description: "Không có mô tả khả dụng",
    };
  }

  const post:any = await response.json();
  if (!response.ok) {
    console.error('Lỗi khi lấy dữ liệu:', response.statusText);
    return <div>Lỗi khi lấy bài viết.</div>;
  }
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
  if (!response.ok) {
    console.error('Lỗi khi lấy dữ liệu bài viết:', response.statusText);
    return <div>Lỗi khi lấy bài viết.</div>;
  }
  const post:any = await response.json();

  const headers = new Headers();
  headers.set('Cache-Control', 'public, max-age=60, stale-while-revalidate=30');

  return <div>
    <div>{post.name}</div>
    <div>{post.createdAt}</div>
  </div>;
}
