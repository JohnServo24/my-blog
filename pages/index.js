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

export const getServerSideProps = async () => {
  const blogs = await getAllBlogs();

    console.log(blogs)

  return {
    props: {
      blogs: Object.values(blogs),
    },
  };
};

export default Home;
