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
      <h3 className="centered-title">
        Here example of fetching posts from server (in this case - JSON
        Placeholder)
      </h3>
      <PostSearch />
      <Posts />
    </>
  );
}
