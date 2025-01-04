import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Blog = () => {
  return (
    <div>
      <Nav />
      <div className="flex flex-col items-center justify-center py-5 bg-secondary-50">
        <h1 className="text-3xl font-bold text-primary-500 font-Poppins">Join us on this Journey</h1>
        <p className="w-2/3 mt-4 mb-3 leading-relaxed text-center text-primary-500 font-Poppins">Chapterly began as a small passion project by book enthusiasts and has grown into a platform where readers connect, share their love for literature, and discover diverse stories. Combining the convenience of an online bookstore with the warmth of a reader-driven community, everything we do stems from our deep love for storytelling and our commitment to making books accessible to everyone.</p>
      </div>
      <main className="relative w-full">
        <div className="px-4 py-8 bg-white">
        </div>
        <div className="px-4 py-8 bg-secondary-500">
        </div>
        <div className="px-4 py-8 bg-white">
        </div>
        <div className="absolute inset-x-0 flex justify-center w-full transform -translate-y-1/2 top-1/2">
          <div className="grid w-4/5 grid-cols-2 gap-0 bg-white shadow-lg">
            {/* Card content */}
            <div className="p-4 border">
            </div>
            <div className="p-4 border bg-secondary-400">
            </div>
            <div className="p-4 border bg-secondary-400">
            </div>
            <div className="p-4 border">
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
