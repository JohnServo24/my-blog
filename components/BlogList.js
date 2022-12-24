import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  return (
    <main>
      <ul>
        {blogs.map((blog) => (
          <BlogItem blog={blog} />
        ))}
      </ul>
    </main>
  );
};

export default BlogList;
