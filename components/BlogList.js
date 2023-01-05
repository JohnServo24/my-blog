import BlogItem from "./BlogItem";
import BlogItemStyles from "../styles/BlogItem.module.css";

const BlogList = ({ blogs }) => {
  return (
    <>
      <ul>
        {blogs.map((blog) => (
          <li key={blog.id} className={BlogItemStyles.blogItem}>
            <BlogItem blog={blog} />
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogList;
