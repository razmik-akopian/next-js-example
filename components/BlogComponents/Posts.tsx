"use client";
import Link from "next/link";
import useSWR from "swr";
import { getAllPosts } from "@/services/getPosts";

const Posts = () => {
  const { data: posts, isLoading } = useSWR("posts", getAllPosts);

  if (isLoading) {
    return <h3>Loading...</h3>;
  }

  if (!posts.length) {
    return <h3>No posts found</h3>;
  }

  return (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export { Posts };
