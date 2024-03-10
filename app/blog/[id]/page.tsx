import { getPostById } from "@/services/getPosts";

type Props = {
  params: {
    id: string;
  };
};

export async function generateMetadata({ params }: Props) {
  const post = await getPostById(params.id);

  return {
    title: `${post.title} | NextJS`,
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await getPostById(params.id);

  return (
    <>
      <h1>Blog post page #{params.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}
