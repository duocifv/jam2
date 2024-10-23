"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";

const endpoint = process.env.NEXT_PUBLIC_API_URL;

const Detail = ({ id }: { id: string }) => {
  const { data } = useQuery<any[]>({
    queryKey: ["blogs"],
    queryFn: async () => {
      const response = await fetch(`${endpoint}/blog`);
      if (!response.ok) {
        throw new Error("Failed to fetch blog posts");
      }
      return response.json();
    },
  });
  if (!data) return "không có data";
  const post = data.find((item) => item.id === id);
  return (
    <div>
      <p>{post.id}</p>
      <p>{post.name}</p>
      <p>{post.createdAt}</p>
    </div>
  );
};

export default Detail;
