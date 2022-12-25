const blog = ({ blog }) => {
  return (
    <main>
      <h1>{blog.title}</h1>
      <p>{blog.body}</p>
    </main>
  );
};

export const getStaticProps = async (context) => {
  const baseUrl = process.env.BASE_URL;
  const blogID = context.params.id;

  const res = await fetch(`${baseUrl}/api/blog/${blogID}`);
  const blog = await res.json();

  return {
    props: {
      blog,
    },
  };
};

export const getStaticPaths = async () => {
  const baseUrl = process.env.BASE_URL;
  const res = await fetch(`${baseUrl}/api/blog`);
  const blogs = await res.json();

  const blogIDs = blogs.map((blog) => blog.id);
  const paths = blogIDs.map((blogID) => ({
    params: { id: blogID.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default blog;