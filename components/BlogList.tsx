import React from "react";
import BlogItem from "./BlogItem";

type BlogsType = {
  blogs: {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    body: string;
  }[];
};

const BlogList = ({ blogs }: BlogsType) => {
  return (
    <>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id}>
            <BlogItem blog={blog} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogList;
