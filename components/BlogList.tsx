import React from "react";
import { BlogType } from "../typings";
import getAllBlogs from "../utils/getAllBlogs";
import BlogItem from "./BlogItem";

const BlogList = async () => {
  const blogs: BlogType[] = await getAllBlogs();

  return (
    <ul>
      {blogs.map((blog: BlogType) => (
        <li key={blog.id}>
          <BlogItem blog={blog} />
        </li>
      ))}
    </ul>
  );
};

export default BlogList;
