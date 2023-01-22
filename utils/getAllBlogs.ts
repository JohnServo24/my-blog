const getAllBlogs = async () => {
  const baseUrl = process.env.BASE_URL;
  const res = await fetch(`${baseUrl}/api/blog/`, { next: { revalidate: 10 } });
  const resFormatted = await res.json();
  const blogs = resFormatted.data;

  return blogs;
};

export default getAllBlogs;
