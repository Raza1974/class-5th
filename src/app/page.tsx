import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogCard from '../components/BlogCard';

const blogs = [
  { id: 1, title: 'Blog 1', description: 'Description 1', image: '/images/blog1.jpg' },
  { id: 2, title: 'Blog 2', description: 'Description 2', image: '/images/blog2.jpg' },
  // Add more blogs...
];

const Home = () => (
  <>
    <Header />
    <main>
      <h1>Welcome to My Blog</h1>
      <div className="blog-list">
        {blogs.map(blog => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </div>
    </main>
    <Footer />
  </>
);

export default Home;
