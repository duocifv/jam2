"use client";
import { gql } from "graphql-request";
import { useQuery } from "@tanstack/react-query";
import { ReactNode } from "react";

const GET_POSTS = gql`
  query Post {
    posts(limit: 10, page: 1) {
      id
      title
    }
  }
`;

export default function Home() {
  const result:any = useQuery({ queryKey: [GET_POSTS] });
  return (
    <div>
      {result?.data?.posts?.map((item:any) => (
        <p key={item.id}>{item.title}</p>
      ))}
    </div>
  );
}
