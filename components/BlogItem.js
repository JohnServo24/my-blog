import Link from "next/link";
import BlogItemStyles from "../styles/BlogItem.module.css";

const BlogItem = ({ blog }) => {
  return (
    <li className={BlogItemStyles.blogItem}>
      <Link href={`/blog/${blog.id}`}>
        <h1>{blog.title}</h1>
        <p>{blog.excerpt}</p>
      </Link>
    </li>
  );
};

export default BlogItem;
