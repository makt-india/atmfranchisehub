import { blogPosts } from "../src/blog-data.js";

export async function onRequest(context) {
  // Extract path from the URL
  const url = new URL(context.request.url);
  const path = url.pathname;
  const baseUrl = "https://atmfranchisehub.com";

  // Default SEO fallbacks
  let seoData = {
    title: "ATM Franchise in India 2026 – Cost, Profit, Commission & Apply Online",
    description: "Complete guide to ATM franchise in India. Check ATM franchise cost, monthly profit, commission per transaction, RBI white label ATM operators, investment model and apply online.",
    image: `${baseUrl}/og-image.jpg`,
    url: `${baseUrl}${path}`,
  };

  // Static Map
  const routeSEO = {
    "/": {
      title: "ATM Franchise in India 2026 – Cost, Profit, Commission & Apply Online",
      description: "Start your own ATM franchise in India. Check ATM franchise cost, profit per month, RBI regulations, and White Label ATM models. High ROI investment opportunity.",
    },
    "/atm-franchise-in-india": {
      title: "ATM Franchise Investment & Application Form | Lowest Cost 2026",
      description: "Apply for an ATM franchise in India. Compare investment costs across India1, Hitachi, EPS, and Findi. Get site approval fast.",
    },
    "/about": {
      title: "About ATM Franchise Hub | White Label ATM Partner Network",
      description: "We are authorized channel partners for India's top White Label ATM companies. We help you find the best ATM franchise investment model.",
    },
    "/contact": {
      title: "Apply Online – ATM Franchise Application Form 2026",
      description: "Submit your basic details for a free location feasibility check. Fast ATM franchise approval in India.",
    },
    "/partners": {
      title: "White Label ATM Operators in India | Bank Partners",
      description: "Compare all Top White label ATM companies in India including India1, Hitachi Money Spot, Findi, and EPS Bancs.",
    }
  };

  // Match static route
  if (routeSEO[path]) {
    seoData = { ...seoData, ...routeSEO[path] };
  } 
  // Dynamic Blog Route Matching -> /blog/slug-name
  else if (path.startsWith("/blog/")) {
    const slug = path.split("/")[2];
    if (slug) {
      const post = blogPosts.find((p) => p.slug === slug);
      if (post) {
        seoData.title = `${post.title} | ATM Franchise Hub`;
        seoData.description = post.summary || `Read our latest update on ATM franchise business in India. Topic: ${post.title}.`;
      } else {
        // Fallback for unknown blog route
        const titleCaseSlug = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
        seoData.title = `${titleCaseSlug} | ATM Franchise Hub Blog`;
        seoData.description = `Read our detailed breakdown on ${titleCaseSlug}. Essential reading for anyone looking to invest in ATM businesses in India in 2026.`;
      }
    }
  } 
  // Dynamic Partner Route Matching -> /partners/slug-name
  else if (path.startsWith("/partners/")) {
    const slug = path.split("/")[2];
    if (slug) {
      const titleCaseSlug = slug.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
      seoData.title = `${titleCaseSlug} ATM Franchise Details, Cost & Commission`;
      seoData.description = `Learn everything about the ${titleCaseSlug} ATM franchise model in India. Compare investment required, monthly profit projections, and application details.`;
    }
  }

  // Fetch the actual Static Page (usually index.html from dist for SPA fallback)
  const response = await context.env.ASSETS.fetch(context.request);

  // If the server returns a 404 or it's not HTML (like an image), return it unmodified.
  const contentType = response.headers.get("content-type");
  if (!contentType || !contentType.includes("text/html")) {
    return response;
  }

  // Use HTMLRewriter to inject tags directly into the response stream
  // This completely solves the SPA SEO problem with 0 latency!
  class SEOHandler {
    element(element) {
      if (element.tagName === "title") {
        element.setInnerContent(seoData.title);
      }
      if (element.tagName === "head") {
        element.append(`<meta name="description" content="${seoData.description}">`, { html: true });
        element.append(`<link rel="canonical" href="${seoData.url}">`, { html: true });

        // OpenGraph / Social Meta
        element.append(`<meta property="og:title" content="${seoData.title}">`, { html: true });
        element.append(`<meta property="og:description" content="${seoData.description}">`, { html: true });
        element.append(`<meta property="og:url" content="${seoData.url}">`, { html: true });
        element.append(`<meta property="og:image" content="${seoData.image}">`, { html: true });
        element.append(`<meta property="og:type" content="website">`, { html: true });
        element.append(`<meta property="og:site_name" content="ATM Franchise Hub">`, { html: true });
        
        // Twitter Card
        element.append(`<meta name="twitter:card" content="summary_large_image">`, { html: true });
        element.append(`<meta name="twitter:title" content="${seoData.title}">`, { html: true });
        element.append(`<meta name="twitter:description" content="${seoData.description}">`, { html: true });
        element.append(`<meta name="twitter:image" content="${seoData.image}">`, { html: true });
      }
    }
  }

  return new HTMLRewriter()
    .on("title", new SEOHandler())
    .on("head", new SEOHandler())
    .transform(response);
}
