/**
 * SEO Hook - Custom hook for structured data and SEO utilities
 */
import { useMemo } from 'react';

export const useSEO = () => {
  const generateStructuredData = useMemo(() => ({
    website: () => ({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "FreshCart",
      "description": "Fresh groceries delivered to your doorstep",
      "url": window.location.origin,
      "potentialAction": {
        "@type": "SearchAction",
        "target": `${window.location.origin}/search?q={search_term_string}`,
        "query-input": "required name=search_term_string"
      }
    }),

    organization: () => ({
      "@context": "https://schema.org",
      "@type": "Organization",
      "name": "FreshCart",
      "description": "Leading grocery delivery service",
      "url": window.location.origin,
      "logo": `${window.location.origin}/assets/images/freshcart-logo.svg`,
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-555-FRESH",
        "contactType": "customer service"
      }
    }),

    product: (product) => ({
      "@context": "https://schema.org",
      "@type": "Product",
      "name": product.title,
      "description": product.description,
      "image": product.imageCover,
      "sku": product.id,
      "brand": {
        "@type": "Brand",
        "name": product.brand?.name || "FreshCart"
      },
      "category": product.category?.name,
      "offers": {
        "@type": "Offer",
        "price": product.price,
        "priceCurrency": "USD",
        "availability": product.quantity > 0 ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
        "seller": {
          "@type": "Organization",
          "name": "FreshCart"
        }
      },
      "aggregateRating": product.ratingsAverage && {
        "@type": "AggregateRating",
        "ratingValue": product.ratingsAverage,
        "reviewCount": product.ratingsQuantity
      }
    }),

    breadcrumbList: (items) => ({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": items.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": `${window.location.origin}${item.url}`
      }))
    }),

    category: (category, products) => ({
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      "name": category.name,
      "description": `Shop ${category.name} products at FreshCart`,
      "url": `${window.location.origin}/categories/${category.slug}`,
      "mainEntity": {
        "@type": "ItemList",
        "numberOfItems": products?.length || 0,
        "itemListElement": products?.slice(0, 10).map((product, index) => ({
          "@type": "Product",
          "position": index + 1,
          "name": product.title,
          "url": `${window.location.origin}/product/${product.id}`
        })) || []
      }
    }),

    localBusiness: () => ({
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "@id": `${window.location.origin}/#organization`,
      "name": "FreshCart",
      "description": "Fresh groceries delivered to your doorstep",
      "url": window.location.origin,
      "telephone": "+1-555-FRESH",
      "servesCuisine": "Grocery",
      "priceRange": "$",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "123 Fresh Street",
        "addressLocality": "Grocery City",
        "addressRegion": "GC",
        "postalCode": "12345",
        "addressCountry": "US"
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
          "opens": "06:00",
          "closes": "23:00"
        }
      ]
    })
  }), []);

  const generatePageTitle = (pageName, productName, categoryName) => {
    const baseTitle = "FreshCart";
    
    if (productName) {
      return `${productName} - Buy Online | ${baseTitle}`;
    }
    
    if (categoryName) {
      return `${categoryName} - Fresh ${categoryName} Online | ${baseTitle}`;
    }
    
    if (pageName) {
      return `${pageName} | ${baseTitle}`;
    }
    
    return `${baseTitle} - Fresh Groceries Delivered`;
  };

  const generatePageDescription = (type, data) => {
    const baseDescription = "Get fresh groceries, fruits, and vegetables delivered to your doorstep.";
    
    switch (type) {
      case 'product':
        return `Buy ${data.title} online at FreshCart. ${data.description || 'Fresh quality guaranteed.'} Fast delivery available.`;
      
      case 'category':
        return `Shop fresh ${data.name.toLowerCase()} online at FreshCart. Wide selection, best prices, and fast delivery. ${baseDescription}`;
      
      case 'search':
        return `Search results for "${data.query}" - Find fresh groceries and products at FreshCart. ${baseDescription}`;
      
      case 'cart':
        return `Your shopping cart - Review your fresh groceries before checkout. ${baseDescription}`;
      
      case 'checkout':
        return `Secure checkout - Complete your fresh grocery order. Fast delivery to your doorstep.`;
      
      default:
        return baseDescription;
    }
  };

  return {
    generateStructuredData,
    generatePageTitle,
    generatePageDescription
  };
};

export default useSEO;
