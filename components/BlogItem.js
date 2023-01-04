import Link from "next/link";

const BlogItem = ({ blog }) => {
  return (
    <Link href={`/blog/${blog.slug}`}>
      <h1>{blog.title}</h1>
      <p>{blog.excerpt}</p>
    </Link>
  );
};

export default BlogItem;
