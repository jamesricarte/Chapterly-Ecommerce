import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Blog = () => {
  return (
    <div>
      <Nav />
      <main className="container px-4 py-8 mx-auto">
        <div className="relative flex flex-col items-center justify-center h-64 text-white rounded-lg shadow-md bg-gradient-1">
          <h1 className="text-4xl font-semibold">Our Blog</h1>
          <p className="mt-2 text-lg">
            Stay updated with our latest news and articles.
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-bold text-primary-500">Latest Posts</h2>
          <div className="mt-4">
            {/* Add blog post components or content here */}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
