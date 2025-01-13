import React, { useEffect, useState } from "react";
import Nav from "../../components/Nav";
import HeroBannerImage from "../../assets/images/banners/christmas_banner.jpg";
import YearEndBanner from "../../assets/images/banners/yearEnd_banner.jpg";
import TopBooksBanner from "../../assets/images/banners/topBooks_banner.jpg";
import ReadingChallengeBanner from "../../assets/images/banners/readingChallenge_banner.jpg";
import BookGenresImage1 from "../../assets/images/backgrounds/book_genre_image_1.png";
import BookGenresImage2 from "../../assets/images/backgrounds/book_genre_image_2.png";
import BookGenresImage3 from "../../assets/images/backgrounds/book_genre_image_3.png";
import BookGenresImage4 from "../../assets/images/backgrounds/book_genre_image_4.png";
import BookGenresImage5 from "../../assets/images/backgrounds/book_genre_image_5.png";
import PromotionImage1 from "../../assets/images/backgrounds/promotion-image-1.png";
import PromotionImage2 from "../../assets/images/backgrounds/promotion-image-2.png";
import PromotionImage3 from "../../assets/images/backgrounds/promotion-image-3.png";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import ProductImage1 from "../../assets/images/products/ego-is-the-enemy.png";
import ProductImage2 from "../../assets/images/products/subtle-art-journal.png";
import ProductImage3 from "../../assets/images/products/48laws-power.png";
import ProductImage4 from "../../assets/images/products/dailystoicsz.png";
import { HiOutlineChevronRight } from "react-icons/hi";
import { FaCircleChevronLeft, FaCircleChevronRight } from "react-icons/fa6";

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveSlide((prevSlide) => (prevSlide + 1) % 4);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  console.log(HeroBannerImage);
  return (
    <>
      <Nav />

      <main>
        <section className="relative">
          <img
            className="object-cover w-full"
            src={HeroBannerImage}
            alt="Hero banner"
          />
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {/* Slide 1 */}
              <div className="relative flex-shrink-0 w-full h-full">
                <img
                  className="object-cover w-full h-full"
                  src={HeroBannerImage}
                  alt="Slide 1"
                />
                <button className="absolute px-11 py-3 text-2xl font-bold text-white bg-primary-500 rounded-xl bottom-[32%] left-[6.5%] hover-preset-1">
                  Shop Now
                </button>
              </div>
              {/* Slide 2 */}
              <div className="relative flex-shrink-0 w-full h-full">
                <img
                  className="object-cover w-full h-full"
                  src={YearEndBanner}
                  alt="Slide 2"
                />
                <button className="absolute p-7 text-3xl font-bold text-white bg-[#3ccabc] w-[390px]  rounded-full bottom-[26.5%] left-[57%] transition-all duration-300 ease-in-out transform  hover:opacity-80">
                  Shop Now
                </button>
              </div>
              {/* Slide 3 */}
              <div className="relative flex-shrink-0 w-full h-full">
                <img
                  className="object-cover w-full h-full"
                  src={TopBooksBanner}
                  alt="Slide 3"
                />
                <button className="absolute p-7 text-3xl font-bold text-[#26625B] bg-[#00a59a] w-[440px] rounded-xl bottom-[29.5%] left-[61.3%] transition-all duration-300 ease-in-out transform  hover:opacity-90">
                  READ MORE
                </button>
              </div>
              {/* Slide 4 */}
              <div className="relative flex-shrink-0 w-full h-full">
                <img
                  className="object-cover w-full h-full"
                  src={ReadingChallengeBanner}
                  alt="Slide 4"
                />
              </div>
            </div>
          </div>

          <div className="absolute flex gap-5 px-5 py-3 transform -translate-x-1/2 bg-white rounded-full bottom-6 left-1/2">
            {[0, 1, 2, 3].map((index) => (
              <div
                key={index}
                onClick={() => setActiveSlide(index)} // Click to change slide
                className={`w-6 h-6 rounded-full border border-white cursor-pointer ${
                  activeSlide === index ? "bg-primary-500" : "bg-secondary-200"
                }`}
              ></div>
            ))}
          </div>
        </section>

        <section className="py-16 mb-16 bg-gradient-2">
          <div className="container px-4 mx-auto">
            <h2 className="text-xl font-bold text-white">
              Popular Book Genres
            </h2>
            <div className="relative flex mt-9">
              <div className="flex flex-wrap space-x-4 justify-evenly">
                <img className="object-cover w-72" src={BookGenresImage1} />
                <img className="object-cover w-72" src={BookGenresImage2} />
                <img className="object-cover w-72" src={BookGenresImage3} />
                <img className="object-cover w-72" src={BookGenresImage4} />
                <img className="object-cover w-72" src={BookGenresImage5} />
              </div>
              <div className="absolute p-3 transform -translate-y-1/2 bg-white rounded-full cursor-pointer -right-5 top-1/2">
                <HiOutlineChevronRight color="#006D77" size="30" />
              </div>
            </div>

            <h3 className="text-6xl text-center text-white mt-14 font-Pattaya">
              -Find Your Next Great Read
            </h3>
            <div className="grid grid-cols-2 gap-1 mt-8">
              <div className="relative flex items-center justify-center">
                <img className="w-full" src={PromotionImage1} />
                <button className="absolute px-11 py-3 text-xs font-bold text-white bg-primary-500 rounded-xl bottom-[26%] left-[14%] hover-preset-1">
                  Buy now
                </button>
                <div className="absolute flex gap-3 px-5 py-3 transform -translate-x-1/2 bg-white rounded-full bottom-12 left-1/2">
                  <div className="w-5 h-5 border border-black rounded-full bg-primary-500"></div>
                  <div className="w-5 h-5 rounded-full bg-secondary-200"></div>
                  <div className="w-5 h-5 rounded-full bg-secondary-200"></div>
                  <div className="w-5 h-5 rounded-full bg-secondary-200"></div>
                </div>
              </div>

              <div className="grid gap-4 p-4 grid-row-2">
                <div className="relative flex items-center justify-center">
                  <img className="w-full" src={PromotionImage2} />
                  <button className="absolute px-11 py-3 text-xs font-bold text-white bg-primary-500 rounded-xl bottom-[11%] left-[6.5%] hover-preset-1">
                    Buy now
                  </button>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center justify-center">
                    <img className="w-full" src={PromotionImage3} />
                  </div>
                  <div className="flex flex-col items-center justify-center w-full h-full rounded-md bg-primary-500">
                    <p className="text-xl text-white">Christmas Sale</p>
                    <h3 className="text-2xl font-bold text-white">
                      20% Discount
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="container px-4 mx-auto">
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-primary-500">
                Recommendations
              </h1>
              <div className="flex items-center gap-3 text-xl text-primary-500">
                <FaCircleChevronLeft className="text-primary-100" />
                <FaCircleChevronRight />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card
                image={ProductImage1}
                author="Ryan Holiday"
                price="$ 59.99"
                genre="Self Improvement"
                link="/product"
              />
              <Card
                image={ProductImage2}
                author="Mark Manson"
                price="$ 120.99"
                genre="Self Improvement"
                link="/product"
              />
              <Card
                image={ProductImage3}
                author="Robert Greene"
                price="$ 66.99"
                genre="Mental Fortitude"
                link="/product"
              />
              <Card
                image={ProductImage4}
                author="Ryan Holiday"
                price="$ 88.99"
                genre="History"
                link="/product"
              />
            </div>
          </div>
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-primary-500">
                Trending Books
              </h1>
              <div className="flex items-center gap-3 text-xl text-primary-500">
                <FaCircleChevronLeft className="text-primary-100" />
                <FaCircleChevronRight />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card
                image={ProductImage1}
                author="Ryan Holiday"
                price="$ 59.99"
                genre="Self Improvement"
                link="/product"
              />
              <Card
                image={ProductImage2}
                author="Mark Manson"
                price="$ 120.99"
                genre="Self Improvement"
                link="/product"
              />
              <Card
                image={ProductImage3}
                author="Robert Greene"
                price="$ 66.99"
                genre="Mental Fortitude"
                link="/product"
              />
              <Card
                image={ProductImage4}
                author="Ryan Holiday"
                price="$ 88.99"
                genre="History"
                link="/product"
              />
            </div>
          </div>
          <div className="mb-14">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold text-primary-500">
                Exclusive Editions
              </h1>
              <div className="flex items-center gap-3 text-xl text-primary-500">
                <FaCircleChevronLeft className="text-primary-100" />
                <FaCircleChevronRight />
              </div>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <Card
                image={ProductImage1}
                author="Ryan Holiday"
                price="$ 59.99"
                genre="Self Improvement"
                link="/product"
              />
              <Card
                image={ProductImage2}
                author="Mark Manson"
                price="$ 120.99"
                genre="Self Improvement"
                link="/product"
              />
              <Card
                image={ProductImage3}
                author="Robert Greene"
                price="$ 66.99"
                genre="Mental Fortitude"
                link="/product"
              />
              <Card
                image={ProductImage4}
                author="Ryan Holiday"
                price="$ 88.99"
                genre="History"
                link="/product"
              />
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
