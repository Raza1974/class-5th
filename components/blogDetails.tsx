import { useRouter } from 'next/router';
import Header from '../components/Header';
import Footer from '../components/Footer';

const BlogDetails = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const blogContent = {
    // Replace with actual blog content based on ID
    1: { title: 'Blog 1', content: 'Full content of Blog 1...' },
    2: { title: 'Blog 2', content: 'Full content of Blog 2...' },
  };

  const blog = blogContent[id];

  return (
    <>
      <Header />
      <main>
        {blog ? (
          <>
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
          </>
        ) : (
          <p>Loading...</p>
        )}
      </main>
      <Footer />
    </>
  );
};

export default BlogDetails;
