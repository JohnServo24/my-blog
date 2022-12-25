const blog = () => {
  return <div>index</div>;
};

export const getStaticProps = async (context) => {
  const baseUrl = process.env.BASE_URL;
  const res = await fetch(`${baseUrl}/api/blog`);
  const blogs = await res.json();

  console.log(context);

  return {
    props: {
      blogs,
    },
  };
};

export default blog;
