import React from 'react';
import {
  Banknote, Shield, Zap, TrendingUp, CheckCircle,
  Settings, Wallet, Building2, Server, Award, Handshake, Users
} from "lucide-react";

// --- Main Partner List Data (for /partners page) ---
export const PARTNERS = [
  { 
    name: "EPS", 
    page: "eps", 
    img: "/common/eps-logo.webp",
    description: `EPS is a <span class="font-semibold text-red-700">trusted White Label ATM operator</span> providing <span class="font-semibold text-red-700">complete backend management, cash handling, and compliance support</span> — so franchise owners focus only on location and earnings.`,
    investment: "₹2.5L – 5L",
    return: "₹15k – 40k",
    space: "50 sq. ft+"
  },
  { 
    name: "India1 ATM", 
    page: "india1", 
    img: "/common/india1-logo.webp",
    description: `India1 runs <span class="font-semibold text-red-700">India’s largest White Label ATM network</span>, with proven performance in <span class="font-semibold text-red-700">high-footfall semi-urban and rural locations</span>.`,
    investment: "₹2.0L – 4L",
    return: "₹12k – 35k",
    space: "50 sq. ft+"
  },
  { 
    name: "Hitachi Payment Services", 
    page: "hitachi", 
    img: "/common/hitachi.webp",
    description: `Hitachi delivers <span class="font-semibold text-red-700">enterprise-grade ATM technology</span> with <span class="font-semibold text-red-700">secure transactions, uptime reliability, and RBI-compliant operations</span> for serious investors.`,
    investment: "₹3.0L – 5L",
    return: "₹18k – 45k",
    space: "60 sq. ft+"
  },
  { 
    name: "Findi", 
    page: "findi", 
    img: "/common/findi-logo.webp",
    description: `Findi is a <span class="font-semibold text-red-700">new-generation payments company</span> operating <span class="font-semibold text-red-700">high-growth White Label ATM networks</span> focused on financial access and faster ROI.`,
    investment: "₹2.5L – 4.5L",
    return: "₹15k – 38k",
    space: "50 sq. ft+"
  },
];
// --- Unique Details for each Partner Page (for /partners/[slug] page) ---
export const PARTNER_DETAILS = { 
eps: {
  heroTitle: "EPS ATM Franchise – RBI Authorized White Label ATM Model",
  heroImage: "/common/eps1.webp",

  aboutContent: {
    sectionTitle: "About EPS WLA Operator",
    sectionSubtitle: "RBI-authorized White Label ATM deployment partner across India.",
    title: "About EPS (Electronic Payment & Services)",
    description:
      "Electronic Payment & Services (EPS) is an RBI-authorised White Label ATM (WLA) operator in India. Under the WLA framework, EPS deploys and manages ATMs independently of traditional banks while complying with regulatory guidelines issued by the Reserve Bank of India. EPS oversees infrastructure deployment, centralized monitoring, transaction processing coordination, and cash management systems across semi-urban and rural markets. Through structured facilitation, ATMFraanchiseHub assists eligible applicants in connecting with EPS for potential ATM franchise deployment opportunities.",
    stats: [
      { value: "11,000+", label: "ATMs Deployed (Operator Data)" },
      { value: "Pan-India", label: "Operational Presence" },
      { value: "24/7", label: "Monitoring & Support System" },
    ]
  },

  whyPartner: {
    badge: "RBI COMPLIANT STRUCTURE",
    title: "Why Choose an EPS ATM Franchise Model?",
    text:
      "The EPS White Label ATM model is built on regulatory compliance, structured deployment, and centralized operational control. As a licensed WLA operator, EPS manages backend infrastructure including monitoring systems, cash logistics coordination, and transaction settlement processes. For franchise applicants, this reduces operational complexity while allowing participation in a transaction-based revenue structure. EPS has built a reputation for stability, network reliability, and systematic expansion across high-demand regions."
  },

  seoContent: {
    title: "How the EPS White Label ATM Franchise Works",
    text:
      "An EPS ATM franchise operates under the RBI-regulated White Label ATM (WLA) model. Under this framework, EPS is responsible for ATM hardware deployment, software integration, network monitoring, and operational coordination. ATMFraanchiseHub functions as a facilitation and coordination partner—guiding applicants through documentation, site evaluation, and onboarding processes. Revenue is generated through transaction-based commissions, subject to operator policies, location footfall, and performance metrics. This structure allows eligible entrepreneurs and commercial property owners to participate in India’s ATM infrastructure growth without managing day-to-day banking operations."
  },

  benefits: [
    {
      icon: <Wallet className="w-6 h-6 text-red-500" />,
      title: "Transaction-Based Revenue Opportunity",
      desc: "Earn commission on financial and non-financial ATM transactions. Income varies based on location performance, transaction volume, and operator structure."
    },
    {
      icon: <Settings className="w-6 h-6 text-red-500" />,
      title: "Operator-Managed Infrastructure",
      desc: "EPS manages centralized monitoring, reconciliation processes, and cash coordination within the licensed WLA framework."
    },
    {
      icon: <Server className="w-6 h-6 text-red-500" />,
      title: "RBI-Aligned Compliance Framework",
      desc: "Deployment and operations follow RBI guidelines applicable to White Label ATM Operators in India."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-red-500" />,
      title: "Scalable Deployment Structure",
      desc: "Eligible applicants may explore single-site or multi-site models depending on approval and operator policies."
    }
  ],

  packages: [
    {
      pkg: "Standard EPS WLA Model",
      ideal: "Retail shop owners & small commercial property holders",
      investment: "Investment depends on city category & site readiness",
      inclusions: "ATM deployment, monitoring infrastructure, operator-managed backend systems"
    },
    {
      pkg: "Urban High-Footfall Model",
      ideal: "Commercial complexes & transit-heavy zones",
      investment: "Subject to feasibility assessment & operator approval",
      inclusions: "Higher transaction capacity configuration & site evaluation support"
    },
    {
      pkg: "Cluster / Multi-Location Model",
      ideal: "Approved multi-site investors",
      investment: "Based on deployment scale & operator agreement",
      inclusions: "Coordinated rollout across multiple eligible locations"
    }
  ],

  requirements: [
    {
      icon: <Building2 className="w-5 h-5 text-red-500" />,
      text: "Minimum 50–60 sq. ft. commercial space in a visible and accessible location"
    },
    {
      icon: <Settings className="w-5 h-5 text-red-500" />,
      text: "Continuous power supply with backup (UPS / inverter)"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-red-500" />,
      text: "Basic security infrastructure including CCTV and shutter enclosure"
    },
    {
      icon: <Wallet className="w-5 h-5 text-red-500" />,
      text: "Valid PAN, Aadhaar, bank details, and KYC documentation"
    }
  ],

  trustSection: {
    title: "Transparency & Due Diligence",
    text:
      "Applicants are advised to independently verify operator credentials, review official agreements, and understand commission structures before proceeding. All deployments remain subject to site inspection, documentation review, and formal operator approval."
  }
},

    hitachi: {
  heroTitle: "Hitachi Payment Services ATM Franchise Model (WLA Framework)",
  heroImage: "/common/hitachi1.webp",

  aboutContent: {
    sectionTitle: "About Hitachi Payment Services",
    sectionSubtitle: "Technology-driven White Label ATM infrastructure in India.",
    title: "About Hitachi Payment Services",
    description:
      "Hitachi Payment Services is a major payment solutions provider in India, operating ATM networks, cash management systems, and digital transaction infrastructure. Under the White Label ATM (WLA) regulatory framework governed by the Reserve Bank of India (RBI), Hitachi deploys and manages ATMs across urban, semi-urban, and commercial zones. Through structured facilitation, ATMFraanchiseHub assists eligible applicants in exploring potential deployment opportunities under the Hitachi WLA model.",
    stats: [
      { value: "65,000+", label: "ATMs & CDMs (Operator Network Data)" },
      { value: "2 Million+", label: "POS Terminals" },
      { value: "Pan-India", label: "Operational Coverage" },
    ]
  },

  whyPartner: {
    badge: "TECHNOLOGY-DRIVEN INFRASTRUCTURE",
    title: "Why Consider a Hitachi ATM Franchise?",
    text:
      "Hitachi’s WLA infrastructure is designed for high-volume transaction environments such as metro cities, transport hubs, and commercial complexes. Their systems integrate transaction switching, centralized monitoring, and security compliance standards applicable to regulated ATM networks. For franchise applicants, this means backend technology and operational oversight remain within the licensed operator’s managed ecosystem."
  },

  seoContent: {
    title: "Understanding the Hitachi White Label ATM (WLA) Model",
    text:
      "Under the RBI’s White Label ATM (WLA) guidelines, operators such as Hitachi are authorized to deploy and manage ATM networks independently of traditional banks. The franchise structure involves location eligibility, documentation verification, and operator approval. ATMFraanchiseHub supports applicants in coordinating site assessment, documentation flow, and onboarding processes. Revenue participation is transaction-based and depends on site performance, transaction volume, and operator-defined commission structures."
  },

  benefits: [
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Security & Compliance Framework",
      desc: "Infrastructure aligned with industry security standards and regulated operational processes."
    },
    {
      icon: <Zap className="w-6 h-6 text-red-500" />,
      title: "High-Capacity Transaction Handling",
      desc: "Designed for commercial zones and high-footfall environments."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-red-500" />,
      title: "Advanced Network Infrastructure",
      desc: "Centralized monitoring and transaction switching systems managed by the operator."
    },
    {
      icon: <Settings className="w-6 h-6 text-red-500" />,
      title: "Operator-Managed Deployment",
      desc: "Machine installation, integration, and backend coordination handled within the licensed operator framework."
    }
  ],

  packages: [
    {
      pkg: "Urban WLA Model",
      ideal: "Metro & commercial property owners",
      investment: "Investment varies based on city & site assessment",
      inclusions: "ATM deployment, monitoring infrastructure, operator-managed backend"
    },
    {
      pkg: "High-Footfall Deployment Model",
      ideal: "Transport hubs / malls / institutional spaces",
      investment: "Subject to feasibility & operator approval",
      inclusions: "Higher transaction capacity configuration & site evaluation"
    }
  ],

  requirements: [
    {
      icon: <Building2 className="w-5 h-5 text-red-500" />,
      text: "Minimum 60 sq. ft. commercial space in high-visibility location"
    },
    {
      icon: <Settings className="w-5 h-5 text-red-500" />,
      text: "Stable electricity supply with backup provision"
    },
    {
      icon: <Shield className="w-5 h-5 text-red-500" />,
      text: "Basic security infrastructure (CCTV & secure enclosure)"
    }
  ],

  trustSection: {
    title: "Due Diligence & Approval Process",
    text:
      "All deployments remain subject to operator site verification, documentation review, and formal approval. Applicants are advised to independently review agreements and understand commission structures before proceeding."
  }
}
,
  india1: {
  heroTitle: "India1 ATM Franchise – White Label ATM Model for Rural & Semi-Urban India",
  heroImage: "/common/hero-4.webp",

  aboutContent: {
    sectionTitle: "About India1 ATM",
    sectionSubtitle: "White Label ATM deployment focused on semi-urban and rural markets.",
    title: "About India1 (Formerly BTI Payments)",
    description:
      "India1 is a Reserve Bank of India (RBI) authorized White Label ATM (WLA) operator with a strategic focus on semi-urban and rural (SURU) markets. The operator specializes in deploying ATMs in areas where banking infrastructure is limited but cash demand remains consistent. By expanding access to cash withdrawal points in underserved regions, India1 supports financial inclusion while operating within the RBI-regulated WLA framework. ATMFraanchiseHub assists eligible applicants in exploring deployment opportunities under the India1 model.",
    stats: [
      { value: "10,000+", label: "WLAs Deployed (Operator Data)" },
      { value: "SURU Focus", label: "Semi-Urban & Rural Expansion" },
      { value: "Pan-India", label: "Operational Footprint" },
    ]
  },

  whyPartner: {
    badge: "RURAL DEPLOYMENT MODEL",
    title: "Why Consider an India1 ATM Franchise?",
    text:
      "The India1 White Label ATM model is structured around deployment in semi-urban and rural locations where organized ATM presence may be limited. This framework prioritizes accessibility and consistent cash demand environments. For franchise applicants, the backend operations—including monitoring systems, transaction coordination, and cash management logistics—are managed within the licensed operator structure. This reduces operational complexity while enabling participation in a transaction-based revenue model."
  },

  seoContent: {
    title: "Understanding the India1 SURU White Label ATM Model",
    text:
      "Under the RBI’s White Label ATM (WLA) guidelines, operators like India1 deploy ATMs independently of traditional bank branches. Their SURU (Semi-Urban & Rural) focus targets locations with limited ATM penetration but steady cash usage patterns. ATMFraanchiseHub supports applicants with site evaluation, documentation coordination, and onboarding assistance. Revenue participation is based on transaction commissions and depends on location suitability, footfall, and operator-defined policies."
  },

  benefits: [
    {
      icon: <Award className="w-6 h-6 text-red-500" />,
      title: "Focused Rural Deployment Strategy",
      desc: "Strategic placement in semi-urban and rural locations with identified cash demand."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-red-500" />,
      title: "Transaction-Based Revenue Participation",
      desc: "Earnings depend on transaction volume and operator commission structure."
    },
    {
      icon: <Server className="w-6 h-6 text-red-500" />,
      title: "Operator-Managed Infrastructure",
      desc: "Cash coordination, monitoring systems, and backend operations managed within the WLA framework."
    },
    {
      icon: <CheckCircle className="w-6 h-6 text-red-500" />,
      title: "Financial Inclusion Contribution",
      desc: "Deployment supports access to formal banking services in underserved regions."
    }
  ],

  packages: [
    {
      pkg: "SURU Standard Model",
      ideal: "Rural & Semi-Urban property owners",
      investment: "Investment varies based on location category & operator terms",
      inclusions: "ATM deployment, monitoring infrastructure, operator-managed backend systems"
    },
    {
      pkg: "Co-Location Model",
      ideal: "Existing retail outlets / kirana stores",
      investment: "Subject to site feasibility & approval",
      inclusions: "Compact ATM configuration suitable for shared premises"
    }
  ],

  requirements: [
    {
      icon: <Building2 className="w-5 h-5 text-red-500" />,
      text: "Minimum 50 sq. ft. commercial space in accessible rural or semi-urban location"
    },
    {
      icon: <Settings className="w-5 h-5 text-red-500" />,
      text: "Reliable electricity supply with feasibility for connectivity (V-SAT / broadband)"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-red-500" />,
      text: "Valid KYC documentation and local business compliance"
    }
  ],

  trustSection: {
    title: "Approval & Compliance Notice",
    text:
      "All deployments are subject to operator site verification, documentation review, and formal approval under the RBI-regulated White Label ATM framework. Applicants are advised to independently review commission structures and agreements before proceeding."
  }
},

findi: {
  heroTitle: "Findi White Label ATM Franchise – Digital-Integrated WLA Model",
  heroImage: "/common/findi2.webp",

  aboutContent: {
    sectionTitle: "About Findi",
    sectionSubtitle: "Technology-led White Label ATM deployment framework.",
    title: "About Findi – Digital-Integrated WLA Operator",
    description:
      "Findi operates within India’s RBI-regulated White Label ATM (WLA) framework with a technology-oriented deployment approach. The operator focuses on integrating traditional cash access infrastructure with modern digital payment ecosystems, including QR-based and cardless transaction capabilities where supported. Through structured facilitation, ATMFraanchiseHub assists eligible applicants in exploring deployment opportunities aligned with Findi’s operator policies.",
    stats: [
      { value: "20,000+", label: "ATMs Managed (Operator Data)" },
      { value: "Digital-Enabled", label: "QR / UPI Capable Infrastructure" },
      { value: "Analytics-Based", label: "Operational Monitoring Systems" },
    ]
  },

  whyPartner: {
    badge: "DIGITAL INTEGRATION MODEL",
    title: "Why Consider the Findi WLA Model?",
    text:
      "Findi’s deployment framework blends physical ATM infrastructure with digital transaction interfaces. In markets where consumers increasingly use UPI and QR-based payments, digitally enabled ATMs can serve as hybrid financial access points. Backend processes—including monitoring, transaction coordination, and infrastructure management—operate within the licensed WLA structure, while the franchise partner provides the approved site and basic utilities."
  },

  seoContent: {
    title: "Understanding the Findi Digital WLA Structure",
    text:
      "Under RBI White Label ATM guidelines, operators such as Findi deploy and manage ATM infrastructure independent of bank branch ownership. Findi’s approach incorporates digital transaction interfaces alongside standard withdrawal services, subject to network compatibility and regulatory guidelines. ATMFraanchiseHub supports documentation coordination, site evaluation, and onboarding facilitation. Revenue participation depends on transaction volume, site category, and operator-defined commission structure."
  },

  benefits: [
    {
      icon: <Zap className="w-6 h-6 text-red-500" />,
      title: "Digital Transaction Capability",
      desc: "Supports cardless and QR-enabled transaction interfaces where applicable under operator framework."
    },
    {
      icon: <TrendingUp className="w-6 h-6 text-red-500" />,
      title: "Data-Assisted Cash Management",
      desc: "Operational systems may use transaction analytics to optimize cash logistics planning."
    },
    {
      icon: <Server className="w-6 h-6 text-red-500" />,
      title: "Operator-Managed Backend",
      desc: "Monitoring, reconciliation, and infrastructure support managed under licensed WLA structure."
    },
    {
      icon: <Shield className="w-6 h-6 text-red-500" />,
      title: "Regulatory Framework Alignment",
      desc: "Deployment subject to RBI guidelines and operator compliance standards."
    }
  ],

  packages: [
    {
      pkg: "Digital-Enabled WLA Model",
      ideal: "Urban & Commercial Locations",
      investment: "Investment varies based on location class & operator policy",
      inclusions: "ATM deployment, digital transaction interface (where supported), monitoring infrastructure"
    },
    {
      pkg: "Retail Co-Location Model",
      ideal: "Retail outlets & organized chains",
      investment: "Subject to feasibility & operator approval",
      inclusions: "Space-efficient deployment with shared premises configuration"
    }
  ],

  requirements: [
    {
      icon: <Building2 className="w-5 h-5 text-red-500" />,
      text: "Commercial space in visible, accessible area with defined footfall"
    },
    {
      icon: <Settings className="w-5 h-5 text-red-500" />,
      text: "Stable electricity and broadband/V-SAT feasibility"
    },
    {
      icon: <CheckCircle className="w-5 h-5 text-red-500" />,
      text: "Valid KYC documentation and site compliance requirements"
    }
  ],

  trustSection: {
    title: "Important Disclosure",
    text:
      "Digital feature availability, transaction capability, and commission structures depend on operator policy, network compatibility, and regulatory compliance. Applicants are advised to independently verify terms prior to agreement execution."
  }
},
};
// --- (Other data remains as you provided) ---

export const NAV_ITEMS = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "ATM Franchise", path: "/atm-franchise-in-india" },
  { name: "Partners", path: "/partners" },
  { name: "Blog", path: "/blog" },
  { name: "Contact Us", path: "/contact" },
];

export const TESTIMONIALS = [
  {
    locationType: "Highway Commercial Zone",
    city: "Pune, Maharashtra",
    investment: "₹6–8 Lakhs",
    transactions: "5,000+/month",
    estimatedIncome: "₹60,000–₹85,000"
  },
  {
    locationType: "Semi-Urban Retail Area",
    city: "Thiruchengode, Tamilnadu",
    investment: "₹5–7 Lakhs",
    transactions: "3,500–4,500/month",
    estimatedIncome: "₹40,000–₹65,000"
  },
  {
    locationType: "Local Market Area",
    city: "Erode, Tamilnadu",
    investment: "₹5–6 Lakhs",
    transactions: "2,800–3,500/month",
    estimatedIncome: "₹30,000–₹50,000"
  }
];

export const FRANCHISE_STATS = [
  { value: "50,000+", label: "WLA ATMs Across India" },
  { value: "99%+", label: "Industry Average Uptime" },
  { value: "3+", label: "Major RBI Approved Operators" },
  { value: "24/7", label: "Network Monitoring Support" },
];

// --- (ADDED THIS BACK FOR FRANCHISE PAGE) ---
export const PARTNER_PACKAGES = [
  { 
    name: "EPS", 
    package: "Managed Operations Suite", 
    networkSize: "11,000+ ATMs", 
    specialty: "End-to-End Management", 
    bestFor: "All-in-one, hands-off solution" 
  },
  { 
    name: "Hitachi", 
    package: "Secure Transaction Core", 
    networkSize: "65,000+ ATMs", 
    specialty: "Security & Switching", 
    bestFor: "High-volume urban locations" 
  },
  { 
    name: "India1 ATM", 
    package: "Rural Reach Maximizer", 
    networkSize: "10,000+ ATMs", 
    specialty: "Rural Market Penetration", 
    bestFor: "Semi-urban & rural sites" 
  },
  { 
    name: "Findi", 
    package: "Digital Integration", 
    networkSize: "20,000+ ATMs", 
    specialty: "Analytics & Digital Payments", 
    bestFor: "Tech-forward & UPI integration" 
  },
];

// --- (ADDED THIS BACK FOR FRANCHISE PAGE) ---
export const PARTNER_COMPARISON = [
  { 
    name: "EPS", 
    icon: <Banknote className="w-8 h-8 text-red-600" />,
    strengths: ["End-to-end managed services", "24/7 technical monitoring", "Secure cash logistics"]
  },
  { 
    name: "Hitachi Payment Services", 
    icon: <Shield className="w-8 h-8 text-red-600" />,
    strengths: ["High-throughput transaction switching", "PCI-DSS certified security", "Fraud prevention systems"]
  },
  { 
    name: "India1 ATM", 
    icon: <Zap className="w-8 h-8 text-red-600" />,
    strengths: ["Largest rural WLA network", "Expertise in underserved markets", "Optimized site selection"]
  },
  { 
    name: "Findi", 
    icon: <TrendingUp className="w-8 h-8 text-red-600" />,
    strengths: ["Predictive cash analytics", "UPI & cardless integration", "Real-time BI dashboards"]
  },
];


