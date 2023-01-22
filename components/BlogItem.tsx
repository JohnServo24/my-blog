import React from "react";
import Link from "next/link";

type BlogItemProps = {
  blog: {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    body: string;
  };
};

const BlogItem = ({ blog }: BlogItemProps) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <h1>{blog.title}</h1>
      <p>{blog.excerpt}</p>
    </Link>
  );
};

export default BlogItem;
