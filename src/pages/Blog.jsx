import React, { memo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  ChevronDown,
  MessageCircle,
  TrendingUp,
  BarChart3,
  Zap,
} from "lucide-react";
import { blogPosts, faqData } from "../blog-data";

/* ============================================
   SEO — CLEAN, BRAND-CONSISTENT, AUTHORITATIVE
============================================ */

const BlogSEO = memo(() => (
  <Helmet prioritizeSeoTags>

    {/* Primary SEO */}
    <title>
      ATM Franchise Blog India 2026 | Cost, Profit, Commission & RBI Guide
    </title>

    <meta
      name="description"
      content="Latest ATM franchise insights in India. Detailed guides on ATM franchise cost, monthly profit, commission per transaction, white label ATM operators, RBI guidelines and investment strategies."
    />

    <meta
      name="keywords"
      content="ATM franchise blog India, ATM franchise cost guide, ATM franchise profit India, white label ATM commission, India1 ATM franchise cost, Hitachi ATM franchise investment, RBI ATM guidelines"
    />

    <meta name="robots" content="index, follow" />
    <link rel="canonical" href="https://atmfranchisehub.com/blog" />

    {/* Geo Signals */}
    <meta name="geo.region" content="IN" />
    <meta name="geo.placename" content="India" />

    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="ATM Franchise Blog India – Investment & Profit Guides" />
    <meta
      property="og:description"
      content="Explore ATM franchise cost breakdowns, ROI models, commission structures and white label ATM opportunities in India."
    />
    <meta property="og:url" content="https://atmfranchisehub.com/blog" />
    <meta property="og:site_name" content="ATM Franchise Hub" />
    <meta property="og:image" content="https://atmfranchisehub.com/og-image.jpg" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="ATM Franchise Cost & Profit Blog India" />
    <meta
      name="twitter:description"
      content="Expert ATM franchise investment guides covering cost, commission, ROI and RBI compliance."
    />

    {/* Structured Data - Blog */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Blog",
        "name": "ATM Franchise Hub Blog",
        "url": "https://atmfranchisehub.com/blog",
        "description": "Authoritative ATM franchise investment guides and white label ATM cost analysis in India.",
        "inLanguage": "en-IN",
        "publisher": {
          "@type": "Organization",
          "name": "ATM Franchise Hub",
          "logo": {
            "@type": "ImageObject",
            "url": "https://atmfranchisehub.com/logo.png"
          }
        }
      })}
    </script>

  </Helmet>
));

/* ============================================
   HERO — AUTHORITY TONE
============================================ */

const BlogHero = memo(() => (
  <section className="relative py-28 bg-slate-950 overflow-hidden">

    <div className="absolute inset-0 bg-gradient-to-br from-red-900/20 to-black" />

    <div className="relative max-w-6xl mx-auto px-6 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
        White Label ATM <span className="text-red-500">Industry Intelligence</span>
      </h1>

      <p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto">
        Regulatory analysis, investment breakdowns, transaction economics,
        and structured insights for serious ATM franchise investors.
      </p>
    </div>
  </section>
));


/* ============================================
   FEATURED CARD — PREMIUM RED DESIGN
============================================ */

const FeaturedCard = memo(({ post }) => {
  const Icon = post.iconType === "TrendingUp" ? TrendingUp : BarChart3;

  return (
    <article className="group bg-slate-900 border border-slate-800 rounded-3xl p-8 hover:border-red-600/60 transition-all shadow-lg">

      <div className="flex gap-6">

        <div className="bg-red-600/10 p-4 rounded-2xl group-hover:bg-red-600 transition-all">
          <Icon className="w-10 h-10 text-red-500 group-hover:text-white" />
        </div>

        <div>
          <time className="text-red-500 text-xs font-bold uppercase tracking-widest">
            {post.date}
          </time>

          <h2 className="text-2xl font-bold text-white mt-2 mb-4 group-hover:text-red-400 transition">
            {post.title}
          </h2>

          <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
            {post.summary}
          </p>

          <Link
            to={`/blog/${post.slug}`}
            className="text-white font-semibold inline-flex items-center hover:text-red-500 transition"
          >
            Read Full Analysis
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

      </div>
    </article>
  );
});


/* ============================================
   REGULAR BLOG CARD — CLEAN & PROFESSIONAL
============================================ */

const BlogCard = memo(({ post }) => (
  <article className="group bg-white rounded-3xl border border-slate-100 p-8 flex flex-col transition-all duration-300 hover:shadow-xl">

    <div className="text-xs font-semibold uppercase tracking-widest text-red-600 mb-4">
      {post.date}
    </div>

    <h2 className="text-xl font-bold text-slate-900 leading-snug mb-4 group-hover:text-red-600 transition">
      {post.title}
    </h2>

    <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3">
      {post.summary}
    </p>

    <Link
      to={`/blog/${post.slug}`}
      className="mt-auto inline-flex items-center font-semibold text-red-600 group-hover:text-red-800 transition"
    >
      Read Complete Guide
      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition" />
    </Link>

  </article>
));


/* ============================================
   BLOG GRID
============================================ */

const BlogGrid = memo(({ posts }) => {
  const featured = posts.filter((p) => p.isFeatured);
  const regular = posts.filter((p) => !p.isFeatured);

  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {featured.length > 0 && (
          <div className="grid md:grid-cols-2 gap-14 mb-24">
            {featured.map((post) => (
              <FeaturedCard key={post.id} post={post} />
            ))}
          </div>
        )}

        {regular.length > 0 && (
          <>
            <div className="text-center mb-16">
              <h3 className="text-slate-400 font-bold text-xs uppercase tracking-[0.35em]">
                Latest Articles
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-14">
              {regular.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
});


/* ============================================
   FAQ — WITH FAQ SCHEMA
============================================ */

const FAQSection = memo(() => {
  const [open, setOpen] = useState(null);

  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-extrabold text-center text-slate-900 mb-14">
          ATM Franchise Frequently Asked Questions
        </h2>

        <div className="space-y-5">
          {faqData.map((item, i) => (
            <div key={i} className="border border-slate-200 rounded-2xl bg-white">

              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full p-6 flex justify-between items-center font-semibold text-left text-slate-800"
              >
                {item.q}
                <ChevronDown
                  className={`transition-transform duration-300 ${
                    open === i ? "rotate-180 text-red-600" : ""
                  }`}
                />
              </button>

              {open === i && (
                <div className="px-6 pb-6 text-slate-600 text-sm leading-relaxed">
                  {item.a}
                </div>
              )}

            </div>
          ))}
        </div>
      </div>
    </section>
  );
});


/* ============================================
   CTA — PREMIUM FINANCIAL TONE
============================================ */

const BlogCTASection = memo(() => (
  <section className="py-24 bg-gradient-to-br from-red-700 to-red-900 text-white text-center px-6">

    <h2 className="text-3xl md:text-4xl font-extrabold mb-6">
      Evaluate Your ATM Franchise Opportunity
    </h2>

    <p className="text-red-100 max-w-xl mx-auto mb-10">
      Request structured consultation covering investment allocation,
      regulatory framework, and projected transaction economics.
    </p>

    <div className="flex flex-col sm:flex-row justify-center gap-5">

      <Link
        to="/contact"
        className="bg-white text-red-700 px-8 py-4 rounded-xl font-bold hover:bg-red-50 transition shadow-lg"
      >
        Request Consultation
      </Link>

      <a
        href="https://wa.me/918883335553"
        className="bg-black/30 border border-white/20 px-8 py-4 rounded-xl font-bold inline-flex items-center justify-center transition hover:bg-black/50"
      >
        <MessageCircle className="mr-2 w-5 h-5" />
        WhatsApp Support
      </a>

    </div>
  </section>
));


/* ============================================
   PAGE EXPORT
============================================ */

const BlogPage = () => (
  <main className="min-h-screen bg-white">
    <BlogSEO />
    <BlogHero />
    <BlogGrid posts={blogPosts || []} />
    <FAQSection />
    <BlogCTASection />
  </main>
);

export default BlogPage;
