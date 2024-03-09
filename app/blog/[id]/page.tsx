type Props = {
  params: {
    id: string;
  };
};

async function getData(id: string) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
    {
      next: {
        revalidate: 60,
      },
    }
  );

  return response.json();
}

export async function generateMetadata({ params }: Props) {
  const post = await getData(params.id);

  return {
    title: `${post.title} | NextJS`,
  };
}

export default async function BlogPost({ params }: Props) {
  const post = await getData(params.id);

  return (
    <>
      <h1>Blog post page #{params.id}</h1>
      <h2>{post.title}</h2>
      <p>{post.body}</p>
    </>
  );
}
