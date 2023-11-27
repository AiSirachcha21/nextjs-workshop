import { Blog } from '@/types/Blog';

export const getBlogs = async () => {
  const res = await fetch('http://localhost:8000/blogs');
  // const res = await fetch("http://localhost:3000/api/blogs", { cache: "no-store" });

  const blogs: Blog[] = await res.json();

  return blogs;
};

export const getBlog = async (id: string) => {
  //   const res = await fetch(`http://localhost:3000/api/blogs/${id}`, { cache: "no-store" });
  const res = await fetch(`http://localhost:8000/blogs?id=${id}`);

  if (!res.ok) {
    return undefined;
  }

  const blogs: Blog[] = await res.json();

  return blogs[0];
};

export const getTime = async () => {
  // const res = await fetch("http://localhost:3000/api/time"});
  // const res = await fetch("http://localhost:3000/api/time", {cache:"no-store"});
  // const res = await fetch("http://localhost:3000/api/time", { next: { revalidate: 10 } });
  const res = await fetch('http://localhost:3000/api/time', { next: { tags: ['time'] } });
  const data = await res.json();
  return data.date;
};

export const refreshTime = async () => {
  const res = await fetch('http://localhost:3000/api/time', { method: 'POST' });
};
