import BlogItem from "./BlogItem";
import BlogItemStyles from "../styles/BlogItem.module.css";

const BlogList = ({ blogs }) => {
  return (
    <>
      <ul>
        {blogs.map((blog) => (
          <li className={BlogItemStyles.blogItem}>
            <BlogItem key={blog.id} blog={blog} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogList;
