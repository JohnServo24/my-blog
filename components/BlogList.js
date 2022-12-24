import BlogItem from "./BlogItem";

const BlogList = ({ blogs }) => {
  return (
    <main>
      <ul>
        {blogs.map((blog) => (
          <BlogItem key={blog.id} blog={blog} />
        ))}
      </ul>
    </main>
  );
};

export default BlogList;
