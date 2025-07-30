import { useEffect, useState, useRef } from "react";
import { getAllProducts } from "../../services/products-service";
import { HomeProductCard } from "../../components";
import { RelatedProductsSkeleton } from "../../components/skeleton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function RelatedProducts({ productInfo }) {
  const swiperRef = useRef(null);

  const [relatedProducts, setRelatedProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchRelatedProducts(categoryId) {
    if (!categoryId) return;

    try {
      setIsLoading(true);
      const response = await getAllProducts({ category: categoryId });
      if (response.success) {
        setRelatedProducts(response.data.data);
      }
    } catch (error) {
      console.error("Failed to fetch related products:", error);
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    if (productInfo.category?._id) {
      fetchRelatedProducts(productInfo.category._id);
    }
  }, [productInfo.category]);

  if(isLoading) {
    return <RelatedProductsSkeleton/>
  }

  return (
    <>
      <section id="related-products" className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">You May Also Like</h2>
            <div className="flex space-x-2">
              <button
                onClick={() => swiperRef.current?.slidePrev()}
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600"
              >
                <FontAwesomeIcon icon={faChevronLeft} />
                <span className="sr-only">Previous</span>
              </button>
              <button
                onClick={() => swiperRef.current?.slideNext()}
                className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-primary-100 hover:text-primary-600"
              >
                <FontAwesomeIcon icon={faChevronRight} />
                <span className="sr-only">Next</span>
              </button>
            </div>
          </div>

          <Swiper
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            slidesPerView={5}
            spaceBetween={10}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 10,
              },
              1280: {
                slidesPerView: 5,
                spaceBetween: 10,
              },
            }}
          >
            {relatedProducts.map((product) => (
              <SwiperSlide key={product._id}>
                <HomeProductCard productDetails={product} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
