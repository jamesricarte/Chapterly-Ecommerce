import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import blogBanner from "../../assets/images/banners/blog-banner.png";
import { FaCircleChevronRight } from "react-icons/fa6";

const Blog = () => {
  return (
    <div>
      <Nav />

      <main className="container px-4 mx-auto ">
        <div className="flex justify-center py-10">
          <div
            className="bg-gradient-to-r from-[#007E71] to-[#83C5BE] rounded-tl-md rounded-tr-md rounded-bl-md"
            style={{ borderBottomRightRadius: "280px" }}
          >
            <div className="flex items-center">
              <div className="container px-4 py-16 mx-auto">
                <h1 className="pt-6 pl-12 text-3xl font-semibold text-white">
                  Welcome to Chapterly: Redefining the Joy of Reading
                </h1>
                <p className="pl-12 mt-4 text-lg leading-loose text-white">
                  A refreshingly raw and honest guide to living a meaningful
                  life by focusing only on what truly matters. Packed with
                  humor, blunt wisdom, and no-nonsense advice, this book
                  challenges the obsession with positivity and teaches you the
                  liberating power of embracing struggles and failures.
                  It&apos;s about prioritizing your values, ditching superficial
                  expectations, and living authentically in a chaotic world.
                </p>
              </div>
              <div className="flex justify-center w-1/3">
                <img
                  src={blogBanner}
                  alt="Blog Banner"
                  className="object-cover w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Latest Blogs Section */}
        <div>
          <div>
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-2xl font-bold text-primary-500">
                Latest Blogs
              </h3>
              <button className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-primary-500 hover-preset-1">
                Sort by Date
              </button>
            </div>

            {/* Blog Cards Grid */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {/* Blog Card */}
              {[...Array(6)].map((_, index) => (
                <div
                  key={index}
                  className="p-4 bg-white border rounded-lg shadow-md"
                >
                  <img
                    src={`/images/blog-${index + 1}.jpg`}
                    alt={`Blog ${index + 1}`}
                    className="object-cover w-full h-40 rounded-lg"
                  />
                  <h3 className="mt-4 text-lg font-semibold text-primary-500">
                    Blog Title {index + 1}
                  </h3>
                  <p className="mt-2 text-sm text-secondary-500">Explain</p>
                </div>
              ))}
            </div>

            <div className="flex justify-center py-16">
              <nav>
                <ul className="flex items-center space-x-4">
                  <li className="text-md">
                    <button className="flex items-center justify-center rounded-full w-7 h-7 bg-primary-100 text-primary-500">
                      1
                    </button>
                  </li>
                  <li className="text-md">
                    <button className="flex items-center justify-center rounded-full w-7 h-7 text-primary-500">
                      2
                    </button>
                  </li>
                  <li className="text-md">
                    <button className="flex items-center justify-center rounded-full w-7 h-7 text-primary-500">
                      3
                    </button>
                  </li>
                  <li className="text-md">
                    <button className="flex items-center justify-center rounded-full w-7 h-7 text-primary-500">
                      4
                    </button>
                  </li>
                  <li className="text-md">
                    <button className="flex items-center justify-center rounded-full w-7 h-7 text-primary-500">
                      5
                    </button>
                  </li>
                  <li className="text-2xl text-primary-500">
                    <FaCircleChevronRight />
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
