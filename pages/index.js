import Header from "../components/Header";
import BlogList from "../components/BlogList";

const Home = ({ blogs }) => {
  return (
    <div>
      <Header />
      <BlogList blogs={blogs} />
    </div>
  );
};

export const getStaticProps = async () => {
  const baseUrl = process.env.BASE_URL;
  const res = await fetch(`${baseUrl}/api/blog`);
  const blogs = await res.json();

  return {
    props: {
      blogs,
    },
  };
};

export default Home;
