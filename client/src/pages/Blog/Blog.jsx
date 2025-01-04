import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const Blog = () => {
  return (
    <div>
      <Nav />

      <div className="flex flex-col items-center justify-center py-10 bg-secondary-50">
        <h1 className="text-3xl font-bold text-primary-500 font-Poppins">
          Join us on this Journey
        </h1>
        <p className="w-2/3 mt-4 mb-3 leading-relaxed text-center text-primary-500 font-Poppins">
          Chapterly began as a small passion project by book enthusiasts and has grown into a platform where readers connect, share their love for literature, and discover diverse stories. Combining the convenience of an online bookstore with the warmth of a reader-driven community, everything we do stems from our deep love for storytelling and our commitment to making books accessible to everyone.
        </p>
      </div>

      <main className="relative w-full">
        <div className="h-80 bg-white"></div> {/* Change height to h-80 */}
        <div className="h-80 bg-secondary-400"></div> {/* Change height to h-80 */}

        <div className="absolute top-10 left-1/2 transform -translate-x-1/2 w-11/12 md:w-4/5 lg:w-5/6 bg-white shadow-lg">
          <div className="grid grid-cols-2">
            <div className="p-4 border bg-white">
              {/* Photo */}
              <div className="h-full bg-gray-300"></div>
            </div>

            <div className="p-12 border bg-secondary-400">
              <h2 className="text-2xl pb-4 text-white font-semibold">Our Story</h2>
              <p className="leading-relaxed text-sm text-white">
                Chapterly began as a small passion project by book enthusiasts and has grown into a platform where readers connect, share their love for literature, and discover diverse stories. Combining the convenience of an online bookstore with the warmth of a reader-driven community, everything we do stems from our deep love for storytelling and our commitment to making books accessible to everyone.
              </p>
            </div>

            <div className="p-12 border bg-secondary-400">
              <h2 className="text-2xl pb-4 text-white font-semibold">Our Why</h2>
              <p className="leading-relaxed text-sm text-white">
                At Chapterly, we believe stories have the power to transform lives—whether it&apos;s the joy of discovering a new book, the inspiration from a compelling narrative, or the comfort of revisiting a beloved classic. Our mission is to make the magic of books accessible to everyone by creating a space where readers of all ages and backgrounds can connect with stories that resonate.
              </p>
            </div>

            <div className="p-4 border bg-white">
              {/* Photo */}
              <div className="h-full bg-gray-300"></div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
