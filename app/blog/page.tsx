import { PostSearch } from "@/components/BlogComponents/PostSearch";
import { Posts } from "@/components/BlogComponents/Posts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | NextJS",
};

export default function Blog() {
  return (
    <>
      <h1>Blog page</h1>
      <PostSearch />
      <Posts />
    </>
  );
}
