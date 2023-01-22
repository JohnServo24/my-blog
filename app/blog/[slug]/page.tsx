import React from "react";
import { notFound } from "next/navigation";
import getBlogItem from "../../../utils/getBlogItem";
import { BlogType } from "../../../typings";

type BlogProps = {
  params: {
    slug: string;
  };
};

const Blog = async ({ params }: BlogProps) => {
  const blog: BlogType = await getBlogItem(params.slug);

  if (!blog) return notFound();

  return (
    <>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </>
  );
};

export default Blog;
