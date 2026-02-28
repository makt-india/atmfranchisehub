import {
  Globe,
  Search,
  MapPin,
  BarChart3,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function VisibilityBoostSection() {

  const features = [
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Google Business Profile Setup",
      text: "Structured listing setup and verification to improve discoverability in search and maps.",
    },
    {
      icon: <Search className="w-6 h-6" />,
      title: "Local Search Alignment",
      text: "Optimization for high-intent queries such as 'ATM near me' and geo-specific searches.",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Geo-Location Accuracy",
      text: "Precise mapping and tagging for better navigation and user trust.",
    },
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Visibility Monitoring",
      text: "Periodic review of discovery metrics and listing performance insights.",
    },
  ];

  return (
    <section
      id="atm-visibility-boost"
      className="relative py-28 bg-gradient-to-b from-slate-950 to-black text-white overflow-hidden"
    >

      {/* Subtle Red Ambient Glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-red-600/20 blur-3xl rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-20 items-center">

          {/* LEFT CONTENT */}
          <div>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-red-600/10 border border-red-600/20 text-xs font-bold tracking-widest uppercase mb-8 text-red-400">
              ATM Network Support
            </div>

            <h2 className="text-4xl md:text-6xl font-extrabold leading-tight mb-8">
              Improve ATM
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
                Location Visibility
              </span>
            </h2>

            <p className="text-slate-300 text-lg mb-10 max-w-xl leading-relaxed">
              We assist franchise partners in strengthening digital presence so
              customers can accurately locate ATM sites via search engines and
              mapping platforms.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-400" />
                <span className="text-slate-300 text-sm">
                  Enhanced geo-discovery
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-400" />
                <span className="text-slate-300 text-sm">
                  Structured business listing compliance
                </span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-red-400" />
                <span className="text-slate-300 text-sm">
                  Improved user navigation clarity
                </span>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-4 bg-red-600 hover:bg-white hover:text-slate-900 text-white px-8 py-4 rounded-xl font-bold transition-all group"
            >
              Request Visibility Support
              <TrendingUp className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>

            <p className="text-xs text-slate-500 mt-6 max-w-md">
              Visibility assistance is advisory in nature and subject to platform approval policies.
            </p>

          </div>

          {/* RIGHT FEATURE GRID */}
          <div className="grid sm:grid-cols-2 gap-8">
            {features.map((item) => (
              <div
                key={item.title}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 hover:border-red-500/40 transition-all duration-300"
              >
                <div className="mb-6 text-red-400">
                  {item.icon}
                </div>

                <h4 className="font-bold text-lg mb-3 text-white">
                  {item.title}
                </h4>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
