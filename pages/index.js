import Header from "../components/Header";
import BlogList from "../components/BlogList";

const Home = ({ blogs }) => {
  return (
    <>
      <Header />
      <BlogList blogs={blogs} />
    </>
  );
};

export const getStaticProps = async () => {
  const baseUrl = process.env.BASE_URL;
  const res = await fetch(`${baseUrl}/api/blog`);
  const resFormatted = await res.json();
  const blogs = resFormatted.data;

  return {
    props: {
      blogs,
    },
  };
};

export default Home;
