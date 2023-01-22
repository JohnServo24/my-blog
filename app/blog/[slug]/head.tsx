import getBlogItem from "../../../utils/getBlogItem";

type BlogProps = {
  params: {
    slug: string;
  };
};

export default async function Head({ params }: BlogProps) {
  const blog = await getBlogItem(params.slug);

  return (
    <>
      <title>{blog.title}</title>
    </>
  );
}
