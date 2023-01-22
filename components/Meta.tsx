import React from "react";
import Head from "next/head";

type MetaTypes = {
  title: string;
  keywords: string;
  description: string;
};

const Meta = ({ title, keywords, description }: MetaTypes) => {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <link rel="icon" href="/favicon.ico" />
      <title>{title}</title>
    </Head>
  );
};

Meta.defaultProps = {
  title: "NextJS Test",
  keywords: "nextJS test, static site generation",
  description: "This is a test website.",
};

export default Meta;
