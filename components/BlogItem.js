import Link from "next/link";

const BlogItem = ({ blog }) => {
  return (
    <li>
      <Link href={`/blog/${blog.id}`}>
        <h1>{blog.title}</h1>
        <p>{blog.excerpt}</p>
      </Link>
    </li>
  );
};

export default BlogItem;
