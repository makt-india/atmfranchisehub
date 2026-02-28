import React from "react";
import { Helmet } from "react-helmet-async";

const Seo = ({
  title,
  description,
  keywords,
  image,
  url,
  noIndex = false,
  type = "website"
}) => {
  const siteName = "ATM Franchise Hub";
  const baseUrl = "https://atmfranchisehub.com";

  const defaultTitle =
    "ATM Franchise in India 2026 – Cost, Profit, Commission & Apply Online";

  const defaultDescription =
    "Complete guide to ATM franchise in India. Check ATM franchise cost, monthly profit, commission per transaction, RBI white label ATM operators, investment model and apply online.";

  const siteTitle = title
    ? `${title} | ${siteName}`
    : defaultTitle;

  const siteDescription = description || defaultDescription;

  const siteKeywords =
    keywords ||
    "ATM franchise India, ATM franchise cost, ATM franchise profit, White Label ATM, WLA franchise 2026, ATM business investment India, ATM commission structure";

  const siteUrl = url ? `${baseUrl}${url}` : baseUrl;

  const siteImage =
    image || `${baseUrl}/og-image.jpg`;

  /* ---------- STRUCTURED DATA ---------- */

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteName,
    "url": baseUrl,
    "logo": `${baseUrl}/logo.png`,
    "sameAs": [
      "https://www.facebook.com/",
      "https://www.linkedin.com/"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": siteName,
    "url": baseUrl,
    "potentialAction": {
      "@type": "SearchAction",
      "target": `${baseUrl}/?s={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <Helmet>

      {/* BASIC META */}
      <title>{siteTitle}</title>
      <meta name="description" content={siteDescription} />
      <meta name="keywords" content={siteKeywords} />
      <meta
        name="robots"
        content={noIndex ? "noindex, nofollow" : "index, follow"}
      />
      <link rel="canonical" href={siteUrl} />

      {/* GEO TARGETING */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="language" content="English" />

      {/* OPEN GRAPH */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={siteTitle} />
      <meta property="og:description" content={siteDescription} />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:image" content={siteImage} />
      <meta property="og:site_name" content={siteName} />

      {/* TWITTER */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={siteTitle} />
      <meta name="twitter:description" content={siteDescription} />
      <meta name="twitter:image" content={siteImage} />

      {/* PERFORMANCE HINTS */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />

      {/* STRUCTURED DATA */}
      <script type="application/ld+json">
        {JSON.stringify(organizationSchema)}
      </script>

      <script type="application/ld+json">
        {JSON.stringify(websiteSchema)}
      </script>

    </Helmet>
  );
};

export default Seo;