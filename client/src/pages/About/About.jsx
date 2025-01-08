import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const HomePage = () => {
  return (
    <div>
      <Nav />

      <main className="container flex flex-col justify-center gap-24 px-4 py-16 mx-auto">
        <div>
          <div
            className="p-8 bg-gradient-1 h-80 rounded-tl-md rounded-tr-md rounded-bl-md"
            style={{ borderBottomRightRadius: "180px" }}
          >
            <h1 className="pt-6 text-xl font-semibold text-white">
              Welcome to Chapterly: Redefining the Joy of Reading
            </h1>
            <p className="mt-4 text-white">
              A refreshingly raw and honest guide to living a meaningful life by
              focusing only on what truly matters. Packed with humor, blunt
              wisdom, and no-nonsense advice, this book challenges the obsession
              with positivity and teaches you the liberating power of embracing
              struggles and failures. It&apos;s about prioritizing your values,
              ditching superficial expectations, and living authentically in a
              chaotic world.
            </p>
          </div>
        </div>

        {/* Latest Blogs Section */}

        <div>
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-primary-500">
              Latest Blogs
            </h2>
            <button className="px-4 py-2 text-sm font-semibold text-white rounded-lg bg-primary-500">
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

          {/* Pagination */}
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
      </main>

      <Footer />
    </div>
  );
};

export default HomePage;
