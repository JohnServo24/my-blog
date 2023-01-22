import React from "react";
import BlogList from "../components/BlogList";
import Header from "../components/Header";

const Home = () => {
  return (
    <>
      <Header />
      {/* @ts-expect-error Server Component */}
      <BlogList />
    </>
  );
};

export default Home;
