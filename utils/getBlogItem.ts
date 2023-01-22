import { BlogType } from "../typings";
import getAllBlogs from "./getAllBlogs";

const getBlogItem = async (slug: string) => {
  const blogs = await getAllBlogs();
  const blog: BlogType = blogs.find((blog: BlogType) => blog.slug === slug);

  return blog;
};

export default getBlogItem;
