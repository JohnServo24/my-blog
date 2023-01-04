import blogStyles from "../../../styles/Blog.module.css";

import Link from "next/link";
import Meta from "../../../components/Meta";

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
  const baseUrl = process.env.BASE_URL;
  const slug = context.params.slug;

  const res = await fetch(`${baseUrl}/api/blog/`);
  const resFormatted = await res.json();
  const blogs = resFormatted.data;
  const blog = blogs.find((blog) => blog.slug === slug);

  return {
    props: {
      blog,
    },
  };
};

export const getStaticPaths = async () => {
  const baseUrl = process.env.BASE_URL;
  const res = await fetch(`${baseUrl}/api/blog/`);
  const resFormatted = await res.json();
  const blogs = resFormatted.data;

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
