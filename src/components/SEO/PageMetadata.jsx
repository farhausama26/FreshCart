/**
 * PageMetadata Component - React 19 Native SEO Support
 * Uses React 19's built-in metadata tags that are automatically hoisted to <head>
 */

const PageMetadata = ({
  title = "FreshCart - Fresh Groceries Delivered",
  description = "Get fresh groceries, fruits, and vegetables delivered to your doorstep. Shop from thousands of products with fast delivery and great prices.",
  keywords = "grocery delivery, fresh fruits, vegetables, online shopping, food delivery",
  image = "/assets/images/freshcart-logo.svg",
  url,
  type = "website",
  locale = "en_US",
  siteName = "FreshCart",
  author = "FreshCart Team",
  robots = "index, follow",
  canonical,
  structuredData,
}) => {
  // Construct full URL if relative URL provided
  const fullUrl = url ? (url.startsWith('http') ? url : `${window.location.origin}${url}`) : window.location.href;
  const fullImageUrl = image.startsWith('http') ? image : `${window.location.origin}${image}`;
  const canonicalUrl = canonical ? (canonical.startsWith('http') ? canonical : `${window.location.origin}${canonical}`) : fullUrl;

  return (
    <>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="robots" content={robots} />
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:locale" content={locale} />
      <meta property="og:site_name" content={siteName} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={fullUrl} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={fullImageUrl} />

      {/* Additional Meta Tags */}
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="theme-color" content="#22c55e" />
      <meta name="msapplication-TileColor" content="#22c55e" />
      
      {/* Favicon */}
      <link rel="icon" type="image/png" href="/favicon.png" />
      <link rel="apple-touch-icon" href="/favicon.png" />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </>
  );
};

export default PageMetadata;
