import Header from "../components/Header";
import BlogList from "../components/BlogList";

import getAllBlogs from "../utils/getAllBlogs";

const Home = ({ blogs }) => {
  return (
    <>
      <Header />
      <BlogList blogs={blogs} />
    </>
  );
};

export const getStaticProps = async () => {
  const blogs = await getAllBlogs();

  return {
    props: {
      blogs,
    },
  };
};

export default Home;
