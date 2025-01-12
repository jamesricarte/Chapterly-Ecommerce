import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import blogBanner from "../../assets/images/blog/blog-banner.png";
import blogThumbnail1 from "../../assets/images/blog/blog-thumbnail-1.png";
import blogThumbnail2 from "../../assets/images/blog/blog-thumbnail-2.png";
import { FaChevronUp, FaChevronDown } from "react-icons/fa";

const Blog = () => {
  return (
    <div>
      <Nav />

      <section className="container mx-auto flex justify-center pt-10">
        <div
          className="bg-gradient-to-r from-[#007E71] to-[#83C5BE] rounded-tl-md rounded-tr-md rounded-bl-md"
          style={{ borderBottomRightRadius: "280px" }}
        >
          <div className="flex items-center">
            <div className="w-2/3">
              <h1 className="text-2xl pl-12 pt-8 pb-8 font-semibold tracking-tight text-white">
                Welcome to Chapterly: Redefining the Joy of Reading
              </h1>
              <p className="text-md pl-12 pr-20 leading-relaxed text-white text-justify">
                A refreshingly raw and honest guide to living a meaningful life
                by focusing only on what truly matters. Packed with humor, blunt
                wisdom, and no-nonsense advice, this book challenges the
                obsession with positivity and teaches you the liberating power
                of embracing struggles and failures. It&apos;s about
                prioritizing your values, ditching superficial expectations, and
                living authentically in a chaotic world.
              </p>
            </div>
            <div className="w-1/3 flex justify-center">
              <img
                src={blogBanner}
                alt="Blog Banner"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="container mx-auto">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold text-primary-500">
              Latest Blogs
            </h2>
            <button className="flex items-center px-4 py-2 text-xl text-primary-500">
              <div className="flex flex-col mr-2">
                <FaChevronUp className="w-4 h-4" />
                <FaChevronDown className="w-4 h-4" />
              </div>
              Sort by Date
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-secondary-500 border shadow-md h-96"
              >
                <img
                  src={blogThumbnail1}
                  alt={`Blog ${index + 1}`}
                  className="w-full h-3/5 object-cover"
                />
                <div className="p-4 h-2/5">
                  <h3 className="mt-4 text-lg font-semibold text-primary-500">
                    Blog Title {index + 1}
                  </h3>
                  <p className="mt-2 text-sm text-secondary-500">Explain</p>
                </div>
              </div>
            ))}
            {[...Array(3)].map((_, index) => (
              <div
                key={index}
                className="bg-secondary-500 border shadow-md h-96"
              >
                <img
                  src={blogThumbnail2}
                  alt={`Blog ${index + 4}`}
                  className="w-full h-3/5 object-cover"
                />
                <div className="p-4 h-2/5">
                  <h3 className="mt-4 text-lg font-semibold text-primary-500">
                    Blog Title {index + 4}
                  </h3>
                  <p className="mt-2 text-sm text-secondary-500">Explain</p>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <nav>
              <ul className="flex space-x-4">
                {[1, 2, 3, 4, 5].map((page) => (
                  <li key={page}>
                    <button
                      className={`px-4 py-2 rounded-lg ${
                        page === 1
                          ? "bg-primary-500 text-white"
                          : "bg-gray-100 text-primary-500"
                      }`}
                    >
                      {page}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
