import React from "react";
import Link from "next/link";
import getBlogItem from "../../../utils/getBlogItem";

type BlogProps = {
  params: {
    slug: string;
  };
};

const Blog = async ({ params }: BlogProps) => {
  const blog = await getBlogItem(params.slug);

  return (
    <article>
      <Link href="/">Go back...</Link>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </article>
  );
};

export default Blog;
