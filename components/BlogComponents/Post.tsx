"use client";
import { getPostById } from "@/services/getPosts";
import useSWR from "swr";

const Post = ({ id }: { id: string }) => {
  const { data: post } = useSWR("post", () => getPostById(id));

  if (!post) {
    return <h3>Loading...</h3>;
  }

  return (
    <>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
};

export { Post };
