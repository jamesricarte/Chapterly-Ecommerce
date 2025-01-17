import Nav from "../../components/Nav";
import Footer from "../../components/Footer";

const About = () => {
  return (
    <div>
      <Nav />

      <main>
        <div className="bg-secondary-50">
          <div className="flex flex-col items-center justify-center py-10 ">
            <h1 className="text-3xl font-bold text-primary-500 font-Poppins">
              Join us on this Journey
            </h1>
            <p className="w-2/3 mt-4 mb-3 leading-relaxed text-center text-primary-500 font-Poppins">
              Chapterly began as a small passion project by book enthusiasts and
              has grown into a platform where readers connect, share their love
              for literature, and discover diverse stories. Combining the
              convenience of an online bookstore with the warmth of a
              reader-driven community, everything we do stems from our deep love
              for storytelling and our commitment to making books accessible to
              everyone.
            </p>
          </div>
        </div>

        <div className="relative w-full h-[99rem]">
          <div className="bg-white h-1/3"></div>
          <div className="h-1/3 bg-secondary-400"></div>
          <div className="bg-white h-1/3"></div>
          <div className="container absolute w-full mx-auto transform -translate-x-1/2 bg-white shadow-lg top-10 left-1/2">
            <div className="grid grid-cols-2">
              <div className=" bg-white border">
                <div className="h-full bg-gray-300"></div>
              </div>

              <div className="p-12 border bg-secondary-300">
                <h2 className="pb-4 text-2xl font-semibold text-white">
                  Our Story
                </h2>
                <p className="text-sm leading-relaxed text-white">
                  Chapterly began as a small passion project by book enthusiasts
                  and has grown into a platform where readers connect, share
                  their love for literature, and discover diverse stories.
                  Combining the convenience of an online bookstore with the
                  warmth of a reader-driven community, everything we do stems
                  from our deep love for storytelling and our commitment to
                  making books accessible to everyone.
                </p>
              </div>

              <div className="p-12 border bg-secondary-300">
                <h2 className="pb-4 text-2xl font-semibold text-white">
                  Our Why
                </h2>
                <p className="text-sm leading-relaxed text-white">
                  At Chapterly, we believe stories have the power to transform
                  lives—whether it&apos;s the joy of discovering a new book, the
                  inspiration from a compelling narrative, or the comfort of
                  revisiting a beloved classic. Our mission is to make the magic
                  of books accessible to everyone by creating a space where
                  readers of all ages and backgrounds can connect with stories
                  that resonate.
                </p>
              </div>

              <div className=" bg-white border">
                <div className="h-full bg-gray-300"></div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default About;
