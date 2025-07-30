import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import sliderImg_1 from "../../assets/images/home-slider-1.png";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Link } from "react-router";

export default function HomeSlider() {
  return (
    <>
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay, A11y]}
          spaceBetween={0}
          slidesPerView={1}
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          loop={true}
          autoplay={{ delay: 5000 }}
        >
          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(${sliderImg_1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className={`h-[400px] flex items-center justify-center`}
            >
              <div className="overlay py-20 text-white p-4 w-full h-full bg-gradient-to-r from-green-500/90 to-green-400/50">
                <div className="container h-full content-center">
                  <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                    Fresh Products Delivered to your Door
                  </h2>
                  <p>Get 20% off your first order</p>

                  <div className="mt-4">
                    <Link
                      to={`/products`}
                      className="btn bg-white border-2 border-white/50 text-green-500"
                    >
                      Shop Now
                    </Link>
                    <Link
                      to={`/deals`}
                      className="btn bg-transparent border-2 border-white/50 text-white ml-2"
                    >
                      View Deals
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(${sliderImg_1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className={`h-[400px] flex items-center justify-center`}
            >
              <div className="overlay py-20 text-white p-4 w-full h-full bg-gradient-to-r from-green-500/90 to-green-400/50">
                <div className="container h-full content-center">
                  <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                    Premium Quality Guaranteed
                  </h2>
                  <p>Fresh from farm to your table</p>

                  <div className="mt-4">
                    <Link
                      to={`/products`}
                      className="btn bg-white border-2 border-white/50 text-blue-500"
                    >
                      Shop Now
                    </Link>
                    <Link
                      to={`/about`}
                      className="btn bg-transparent border-2 border-white/50 text-white ml-2"
                    >
                      Learn More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div
              style={{
                backgroundImage: `url(${sliderImg_1})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              className={`h-[400px] flex items-center justify-center`}
            >
              <div className="overlay py-20 text-white p-4 w-full h-full bg-gradient-to-r from-green-500/90 to-green-400/50">
                <div className="container h-full content-center">
                  <h2 className="text-white text-3xl font-bold mb-4 max-w-96">
                    Fast & Free Delivery
                  </h2>
                  <p>Same day delivery available</p>

                  <div className="mt-4">
                    <Link
                      to={`/products`}
                      className="btn bg-white border-2 border-white/50 text-purple-500"
                    >
                      Order Now
                    </Link>
                    <Link
                      to={`/delivery`}
                      className="btn bg-transparent border-2 border-white/50 text-white ml-2"
                    >
                      Delivery Info
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        {/* Custom Navigation Buttons */}
        <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
          <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
        </div>

        <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-10 cursor-pointer bg-white/90 hover:bg-white text-green-500 hover:text-green-600 rounded-full w-12 h-12 flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110">
          <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
        </div>
      </div>
    </>
  );
}
