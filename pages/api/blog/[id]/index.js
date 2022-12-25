import { blogs } from "../../../../data";

export default function handler(req, res) {
  const { id } = req.query;
  const blog = blogs.find((blog) => blog.id === id);

  if (!blog) {
    res.status(404).json({ error: `Blog1 with an id of ${id} does not exist` });
    return;
  }

  res.status(200).json(blog);
}
