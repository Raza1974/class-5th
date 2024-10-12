import Link from 'next/link';

const BlogCard = ({ blog }) => (
  <div className="blog-card">
    <Link href={`/${blog.id}`}>
      <h2>{blog.title}</h2>
      <p>{blog.description}</p>
      {blog.image && <img src={blog.image} alt={blog.title} />}
    </Link>
  </div>
);

export default BlogCard;
