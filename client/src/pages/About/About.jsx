import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import ourStory from "../../assets/images/about/our-story.png";
import ourWhy from "../../assets/images/about/our-why.png";
import missionVision from "../../assets/images/about/mission-vision.png";

const About = () => {
  return (
    <div>
      <Nav />

      <main>
        <div className="bg-secondary-50 w-full">
          <div className="container mx-auto flex flex-col items-center justify-center py-10">
            <h1 className="text-2xl md:text-3xl font-bold text-primary-500 font-Poppins">
              Join us on this Journey
            </h1>
            <p className="w-4/5 md:w-2/3 mt-4 mb-3 leading-relaxed text-center text-primary-500 font-Poppins text-sm md:text-base">
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

        <div className="relative w-full h-auto md:h-[99rem]">
          <div className="bg-white h-auto md:h-1/3">
            <div className="container pt-12 w-full mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="bg-white">
                  <img
                    src={ourStory}
                    alt="Our Story"
                    className="object-cover w-full h-auto"
                  />
                </div>

                <div className="p-6 md:p-12 bg-secondary-400">
                  <h2 className="pb-4 text-lg md:text-2xl font-semibold text-white">
                    Our Story
                  </h2>
                  <p className="text-xs md:text-sm leading-relaxed text-white">
                    Chapterly began as a small passion project by book
                    enthusiasts and has grown into a platform where readers
                    connect, share their love for literature, and discover
                    diverse stories. Combining the convenience of an online
                    bookstore with the warmth of a reader-driven community,
                    everything we do stems from our deep love for storytelling
                    and our commitment to making books accessible to everyone.
                  </p>
                </div>

                <div className="p-6 md:p-12 bg-secondary-400">
                  <h2 className="pb-4 text-lg md:text-2xl font-semibold text-white">
                    Our Why
                  </h2>
                  <p className="text-xs md:text-sm leading-relaxed text-white">
                    At Chapterly, we believe stories have the power to transform
                    lives—whether it&apos;s the joy of discovering a new book,
                    the inspiration from a compelling narrative, or the comfort
                    of revisiting a beloved classic. Our mission is to make the
                    magic of books accessible to everyone by creating a space
                    where readers of all ages and backgrounds can connect with
                    stories that resonate.
                  </p>
                </div>

                <div className="bg-white">
                  <img
                    src={ourWhy}
                    alt="Our Why"
                    className="object-cover w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="h-auto md:h-1/3 bg-secondary-500">
            <div className="container pt-48 w-full mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
                <div className="p-8 ml-4 bg-white w-11/12 shadow-xl">
                  <img
                    src={missionVision}
                    alt="Mission Vision"
                    className="object-cover w-full h-auto"
                  />
                </div>
                <div className="pt-0 p-10 bg-secondary-500">
                  <h2 className="pb-4 text-lg md:text-2xl font-bold text-white">
                    Mission & Vision
                  </h2>
                  <p className="text-xs md:text-sm pb-3 leading-loose text-justify text-white">
                    Our mission is to ignite a love for reading by making books
                    accessible, affordable, and convenient for everyone. We aim
                    to connect readers with stories, knowledge, and inspiration,
                    fostering a world enriched by learning and creativity.
                  </p>
                  <p className="text-xs md:text-sm leading-loose text-justify text-white">
                    We envision a future where every individual has the
                    opportunity to explore the limitless world of books. As a
                    trusted e-commerce platform, we aspire to be the go-to
                    destination for readers everywhere, empowering communities
                    through the transformative power of literature.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-white h-auto md:h-1/3">
            <div className="container pt-10 p-16 w-full mx-auto">
              <div className="flex flex-col items-center justify-center">
                <h2 className="text-2xl text-primary-500 font-bold">
                  Our Core Values
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-8">
                  {[...Array(6)].map((_, index) => (
                    <div
                      key={index}
                      className="p-6 bg-gray-100  rounded-lg shadow-md"
                    >
                      <h3 className="text-lg font-semibold text-primary-600">
                        Core Value {index + 1}
                      </h3>
                      <p className="mt-2 text-sm text-primary-600">
                        Description of core value {index + 1}.
                      </p>
                    </div>
                  ))}
                </div>
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
