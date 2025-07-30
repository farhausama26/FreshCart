import { useEffect, useState, useRef, useContext } from "react";
import ReactImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { useParams } from "react-router";
import {
  getAllProducts,
  getProductById,
} from "../../services/products-service";
import { Rating, HomeProductCard, PageMetadata } from "../../components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRotateLeft,
  faCartShopping,
  faChevronLeft,
  faChevronRight,
  faMinus,
  faPlus,
  faShare,
  faShareNodes,
  faTruckFast,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { calcDiscount } from "../../utils/discount-utils";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { CartContext } from "../../context/Cart.context";
import { ProductDetailsTab } from "../../components/ProductDetails/ProductDetailsTab";
import { ProductDetailsSkeleton } from "../../components/skeleton";
import { ReviewsTab } from "../../components/ProductDetails/ReviewsTab";
import { ShippingTab } from "../../components/ProductDetails/ShippingTab";
import RelatedProducts from "../../components/RelatedProducts/RelatedProducts";
import ProductDetailsTabs from "../../components/ProductDetailsTabs/ProductDetailsTabs";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import { useSEO } from "../../hooks";

export default function ProductDetails() {
  const [productDetails, setProductDetails] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const { id } = useParams();
  const { generateStructuredData, generatePageTitle, generatePageDescription } = useSEO();

  async function fetchProductDetails() {
    try {
      setIsLoading(true);
      setIsError(false);
      const response = await getProductById(id);

      if (response.success) {
        setProductDetails(response.data.data);
      } else {
        setIsError("Failed to load product details");
      }
    } catch (error) {
      setIsError(error.message || "Failed to load product details");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    fetchProductDetails();
  }, [id]);

  if (isLoading) {
    return <ProductDetailsSkeleton />;
  }

  if (isError) {
    return <h2>{isError}</h2>;
  }

  return (
    <>
      {!isLoading && productDetails && (
        <PageMetadata
          title={generatePageTitle(null, productDetails.title)}
          description={generatePageDescription('product', productDetails)}
          keywords={`${productDetails.title}, ${productDetails.category?.name}, fresh produce, buy online, grocery delivery`}
          image={productDetails.imageCover}
          url={`/product/${productDetails.id}`}
          type="product"
          structuredData={generateStructuredData.product(productDetails)}
        />
      )}
      <ProductInfo productDetails={productDetails} />

      <ProductDetailsTabs productInfo={productDetails} />

      <RelatedProducts productInfo={productDetails} />
    </>
  );
}
