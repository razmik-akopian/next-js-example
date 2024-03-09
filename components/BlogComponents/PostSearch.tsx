"use client";
import { getPostsBySearch } from "@/services/getPosts";
import { useState } from "react";
import useSWR from "swr";

const PostSearch = () => {
  const [search, setSearch] = useState("");
  const { mutate } = useSWR("posts");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const posts = await getPostsBySearch(search);
    mutate(posts);
  };

  return (
    <form onSubmit={handleSubmit} className="stack">
      <input
        type="search"
        placeholder="Search posts... "
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export { PostSearch };
