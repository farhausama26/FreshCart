import {
  HomeCategories,
  HomeFeatures,
  HomeProducts,
  HomeSlider,
  NewsLetter,
  PageMetadata,
} from "../../components";
import { useSEO } from "../../hooks";

export default function Home() {
  const { generateStructuredData } = useSEO();

  const structuredData = [
    generateStructuredData.website(),
    generateStructuredData.organization(),
    generateStructuredData.localBusiness()
  ];

  return (
    <>
      <PageMetadata
        title="FreshCart - Fresh Groceries Delivered Fast"
        description="Shop fresh groceries, organic produce, dairy, meat, and household essentials. Fast delivery, best prices, and quality guaranteed. Order now!"
        keywords="grocery delivery, fresh produce, organic food, dairy products, meat delivery, household essentials, online grocery shopping"
        structuredData={structuredData}
      />
      <HomeSlider />
      <HomeFeatures />
      <HomeCategories />
      <HomeProducts />
      <NewsLetter />
    </>
  );
}
