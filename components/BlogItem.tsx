import React from "react";
import { BlogType } from "../typings";
import Link from "next/link";

type BlogItemProps = {
  blog: BlogType;
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
