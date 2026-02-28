import React, { memo, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, Link } from "react-router-dom";
import {
  ChevronLeft,
  Calendar,
  Clock,
  Share2,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { blogPosts } from "../blog-data";

/* ============================================
   SEO — CLEAN + DOMAIN CORRECT
============================================ */

const BlogPostSEO = memo(({ post }) => {
  if (!post) return null;

  const baseUrl = "https://atmfranchisehub.com";
  const canonicalUrl = `${baseUrl}/blog/${post.slug}`;

  const seoTitle =
    post.seoTitle ||
    `${post.title} – ATM Franchise Cost, Profit & Commission Guide 2026`;

  const seoDescription =
    post.summary ||
    `Detailed guide on ${post.title}. Learn ATM franchise cost in India, monthly profit potential, commission structure, white label ATM operators and RBI compliance process.`;

  const imageUrl =
    post.image || `${baseUrl}/og-image.jpg`;

  return (
    <Helmet prioritizeSeoTags>

      {/* Primary SEO */}
      <title>{seoTitle}</title>

      <meta name="description" content={seoDescription} />

      <meta
        name="keywords"
        content={`ATM franchise India, ATM franchise cost, ATM franchise profit, ATM commission structure, white label ATM business, ${post.title}`}
      />

      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={canonicalUrl} />

      {/* Geo */}
      <meta name="geo.region" content="IN" />
      <meta name="geo.placename" content="India" />
      <meta name="language" content="English" />

      {/* Open Graph */}
      <meta property="og:type" content="article" />
      <meta property="og:title" content={seoTitle} />
      <meta property="og:description" content={seoDescription} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={imageUrl} />
      <meta property="og:site_name" content="ATM Franchise Hub" />
      <meta property="article:published_time" content={post.date} />
      <meta property="article:modified_time" content={post.updatedAt || post.date} />
      <meta property="article:section" content="ATM Franchise Investment" />
      <meta property="article:author" content="ATM Franchise Hub" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seoTitle} />
      <meta name="twitter:description" content={seoDescription} />
      <meta name="twitter:image" content={imageUrl} />

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "BlogPosting",
              "headline": post.title,
              "description": seoDescription,
              "image": [imageUrl],
              "datePublished": post.date,
              "dateModified": post.updatedAt || post.date,
              "inLanguage": "en-IN",
              "mainEntityOfPage": {
                "@type": "WebPage",
                "@id": canonicalUrl
              },
              "author": {
                "@type": "Organization",
                "name": "ATM Franchise Hub"
              },
              "publisher": {
                "@type": "Organization",
                "name": "ATM Franchise Hub",
                "logo": {
                  "@type": "ImageObject",
                  "url": `${baseUrl}/logo.png`
                }
              }
            },
            {
              "@type": "BreadcrumbList",
              "itemListElement": [
                {
                  "@type": "ListItem",
                  "position": 1,
                  "name": "Home",
                  "item": baseUrl
                },
                {
                  "@type": "ListItem",
                  "position": 2,
                  "name": "Blog",
                  "item": `${baseUrl}/blog`
                },
                {
                  "@type": "ListItem",
                  "position": 3,
                  "name": post.title,
                  "item": canonicalUrl
                }
              ]
            }
          ]
        })}
      </script>

    </Helmet>
  );
});

/* ============================================
   NOT FOUND
============================================ */

const NotFound = memo(() => (
  <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
    <ArrowLeft className="w-12 h-12 text-red-600 mb-4" />
    <h2 className="text-3xl font-bold mb-4">Post Not Found</h2>
    <Link
      to="/blog"
      className="px-6 py-3 bg-red-600 text-white rounded-xl font-bold"
    >
      Back to Blog
    </Link>
  </div>
));


/* ============================================
   SHARE BUTTON
============================================ */

const ShareButton = memo(({ post }) => {
  const handleShare = async () => {
    const url = window.location.href;

    try {
      if (navigator.share) {
        await navigator.share({
          title: post.title,
          text: post.summary,
          url,
        });
      } else {
        await navigator.clipboard.writeText(url);
        alert("Link copied");
      }
    } catch {}
  };

  return (
    <button
      onClick={handleShare}
      className="p-2 hover:bg-red-50 rounded-lg"
      aria-label="Share article"
    >
      <Share2 className="w-5 h-5 text-slate-600 hover:text-red-600" />
    </button>
  );
});


/* ============================================
   MAIN PAGE
============================================ */

const BlogPostPage = () => {
  const { slug } = useParams();

  const post = blogPosts.find((p) => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!post) return <NotFound />;

  return (
    <div className="min-h-screen bg-slate-50 py-16">

      <BlogPostSEO post={post} />

      <article className="max-w-4xl mx-auto px-6">

        {/* NAV */}
        <nav className="flex justify-between items-center mb-10">
          <Link
            to="/blog"
            className="flex items-center text-slate-600 hover:text-red-600"
          >
            <ChevronLeft className="mr-2 w-5 h-5" />
            Back to Blog
          </Link>
          <ShareButton post={post} />
        </nav>

        {/* HEADER */}
        <header className="mb-12">
          <div className="flex items-center gap-6 text-sm text-slate-500 mb-6">
            <time className="flex items-center">
              <Calendar className="w-4 h-4 mr-2" />
              {post.date}
            </time>

            <span className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              5 min read
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6 text-slate-900">
            {post.title}
          </h1>

          {post.summary && (
            <div className="bg-red-50 border border-red-100 rounded-xl p-6">
              <p className="text-lg text-slate-700 leading-relaxed">
                {post.summary}
              </p>
            </div>
          )}
        </header>

        {/* IMAGE */}
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className="rounded-3xl mb-12 shadow-md"
            loading="eager"
          />
        )}

        {/* CONTENT */}
        <div className="bg-white p-8 md:p-14 rounded-3xl shadow-sm">

          {post.content?.map((section, i) => {

            if (section.type === "heading") {
              return (
                <h2
                  key={i}
                  className="text-2xl md:text-3xl font-bold mt-14 mb-6 text-slate-900"
                >
                  {section.text}
                </h2>
              );
            }

            if (section.type === "paragraph") {
              return (
                <p
                  key={i}
                  className="text-slate-700 leading-relaxed mb-6 text-lg"
                  dangerouslySetInnerHTML={{ __html: section.text }}
                />
              );
            }

            if (section.type === "bullet") {
              return (
                <div
                  key={i}
                  className="flex items-start gap-4 mb-4 bg-red-50 border border-red-100 p-4 rounded-xl"
                >
                  <CheckCircle2 className="w-5 h-5 text-red-600 mt-1 flex-shrink-0" />
                  <p
                    className="text-slate-800"
                    dangerouslySetInnerHTML={{ __html: section.text }}
                  />
                </div>
              );
            }

            if (section.type === "table") {
              return (
                <div key={i} className="overflow-x-auto my-12">
                  <table className="w-full border-collapse rounded-2xl overflow-hidden shadow-sm">
                    <thead className="bg-slate-100">
                      <tr>
                        {section.headers.map((head, idx) => (
                          <th
                            key={idx}
                            className="text-left px-6 py-4 text-slate-700 font-semibold"
                          >
                            {head}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {section.rows.map((row, rIndex) => (
                        <tr key={rIndex} className="border-t">
                          {row.map((cell, cIndex) => (
                            <td
                              key={cIndex}
                              className="px-6 py-4 text-slate-700"
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            }

            return null;
          })}

        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-br from-red-700 to-red-900 text-white rounded-3xl p-10 md:p-16 text-center shadow-xl">

          <h3 className="text-3xl md:text-4xl font-extrabold mb-6">
            Evaluate Your ATM Franchise Opportunity
          </h3>

          <p className="text-red-100 max-w-2xl mx-auto mb-10 text-lg">
            Get structured consultation covering investment allocation,
            compliance framework and projected transaction economics.
          </p>

          <Link
            to="/contact"
            className="inline-flex items-center px-10 py-5 bg-white text-red-700 font-bold rounded-xl shadow-lg hover:bg-red-50 transition"
          >
            Request Consultation
          </Link>

        </div>

      </article>
    </div>
  );
};

export default BlogPostPage;
