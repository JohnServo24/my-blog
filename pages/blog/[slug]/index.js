import Link from "next/link";
import Meta from "../../../components/Meta";

import getAllBlogs from "../../../utils/getAllBlogs";

import blogStyles from "../../../styles/Blog.module.css";

const blog = ({ blog }) => {
  return (
    <>
      <Meta title={blog.title} />

      <article className={blogStyles.blog}>
        <Link href="/">Go back...</Link>
        <h1>{blog.title}</h1>
        <p>{blog.body}</p>
      </article>
    </>
  );
};

export const getStaticProps = async (context) => {
  const slug = context.params.slug;

  const blogs = await getAllBlogs();
  const blog = blogs.find((blog) => blog.slug === slug);

  return {
    props: {
      blog,
    },
  };
};

export const getStaticPaths = async () => {
  const blogs = await getAllBlogs();

  const slugs = blogs.map((blog) => blog.slug);
  const paths = slugs.map((slug) => ({
    params: { slug: slug.toString() },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default blog;
