import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Link } from "react-router";
import { CategoriesContext } from "../../context/Categories.context";
import { HomeCategoriesSkeleton } from "../skeleton";

export default function HomeCategories() {
  const { categories, isLoading, isError } = useContext(CategoriesContext);

  if (isLoading) {
    return <HomeCategoriesSkeleton />;
  }

  if (isError) {
    return (
      <div className="container py-10 text-red-500">
        Error loading categories. Please try again later.
      </div>
    );
  }

  return (
    <>
      <section id="categories" className="py-10">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Shop by Category</h2>
            <Link
              to={`categories`}
              className="text-primary-600 hover:text-primary-700 font-medium flex items-center cursor-pointer"
            >
              View All Categories
              <FontAwesomeIcon icon={faArrowRight} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {categories.map((category) => (
              <Link
                to={`/categories/${category._id}`}
                key={category._id}
                className="bg-white rounded-lg p-4 text-center shadow-sm hover:shadow-md transition group cursor-pointer"
              >
                <div className="h-20 w-20 overflow-hidden bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-3 group-hover:bg-primary-200 transition">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="font-medium">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
