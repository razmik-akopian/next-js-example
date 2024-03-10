const API_URL = "https://jsonplaceholder.typicode.com/posts";

type Post = {
  id: number;
  userId: number;
  title: string;
  body: string;
};

type Posts = Post[];

const fetchData = async <T>(url: string) => {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Unable to fetch data.");
  }

  return response.json() as Promise<T>;
};

const getAllPosts = async () => {
  return fetchData<Posts>(API_URL);
};

const getPostsBySearch = async (search: string) => {
  const url = `${API_URL}?q=${search}`;
  return fetchData<Posts>(url);
};

const getPostById = async (id: string) => {
  const url = `${API_URL}/${id}`;
  return fetchData<Post>(url);
};

export { getAllPosts, getPostsBySearch, getPostById };
