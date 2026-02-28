import React, { memo } from "react";
import {
  Lock,
  ShieldCheck,
  Handshake,
  Scale,
  FileCheck
} from "lucide-react";

const ComplianceModelSection = memo(({ setIsModalOpen }) => {
  return (
    <section
      className="py-20 md:py-28 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white relative overflow-hidden"
      id="redflag"
    >
      {/* Red Ambient Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-red-600/15 rounded-full blur-[140px] -mr-60 -mt-60" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-red-500/10 rounded-full blur-[140px] -ml-60 -mb-60" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <div className="text-center mb-20 max-w-3xl mx-auto">

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-600/10 border border-red-600/20 text-red-400 text-xs font-bold uppercase tracking-widest mb-6">
            <Lock className="w-3 h-3" />
            Compliance & Transparency
          </div>

          <h2 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
            How the ATM Franchise
            <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">
              Model Actually Works
            </span>
          </h2>

          <p className="text-slate-400 text-lg leading-relaxed">
            We function as a structured facilitation platform connecting
            investors with RBI-authorized White Label ATM operators.
            Operational control remains strictly under licensed entities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* Investment */}
          <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-red-500/40 transition-all duration-300">
            <div className="w-14 h-14 bg-red-600/10 border border-red-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck className="text-red-400 w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold mb-4 group-hover:text-red-400 transition-colors">
              Structured Investment
            </h3>

            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Security deposits, infrastructure setup, and operational
              charges follow official operator procedures with transparent
              documentation.
            </p>
          </div>

          {/* Coordination */}
          <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-red-500/40 transition-all duration-300">
            <div className="w-14 h-14 bg-red-600/10 border border-red-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Handshake className="text-red-400 w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold mb-4 group-hover:text-red-400 transition-colors">
              Process Coordination
            </h3>

            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              Location verification, compliance documentation, and
              installation scheduling are streamlined in coordination
              with approved ATM operators.
            </p>
          </div>

          {/* Legal */}
          <div className="group bg-white/5 backdrop-blur-xl p-8 rounded-3xl border border-white/10 hover:border-red-500/40 transition-all duration-300">
            <div className="w-14 h-14 bg-red-600/10 border border-red-600/20 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <Scale className="text-red-400 w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold mb-4 group-hover:text-red-400 transition-colors">
              Regulatory Alignment
            </h3>

            <p className="text-slate-400 leading-relaxed text-sm md:text-base">
              White Label ATM deployments operate under RBI regulatory
              framework through licensed operators such as Hitachi,
              India1, and EPS.
            </p>
          </div>
        </div>

        {/* Verification Box */}
        <div className="mt-20">
          <div className="relative p-px rounded-3xl overflow-hidden">

            <div className="absolute inset-0 bg-gradient-to-r from-red-500/30 via-red-400/30 to-red-600/30" />

            <div className="relative bg-black/80 backdrop-blur-xl rounded-3xl p-8 md:p-10">

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-red-600/10 border border-red-600/20 rounded-xl flex items-center justify-center shrink-0">
                    <FileCheck className="w-6 h-6 text-red-400" />
                  </div>

                  <div>
                    <h4 className="font-bold text-white mb-2">
                      Mandatory Due Diligence
                    </h4>

                    <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-2xl">
                      Investors should independently verify company registration,
                      GSTIN, and operator authorization before signing any
                      agreement.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen?.(true)}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-red-600 text-white font-bold rounded-lg hover:bg-red-500 transition-colors shrink-0"
                >
                  Our Credentials
                </button>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
});

export default ComplianceModelSection;
