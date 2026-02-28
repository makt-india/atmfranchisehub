import { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Phone,
  Mail,
  Aperture,
  CheckCircle,
  AlertCircle,
  ArrowRight,
} from "lucide-react";

/* =========================================
   SEO (UNCHANGED)
========================================= */
const indianStates = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chhattisgarh","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jharkhand","Karnataka","Kerala",
  "Madhya Pradesh","Maharashtra","Manipur","Meghalaya","Mizoram","Nagaland",
  "Odisha","Punjab","Rajasthan","Sikkim","Tamil Nadu","Telangana","Tripura",
  "Uttar Pradesh","Uttarakhand","West Bengal"
];

const providers = [
  "India1 ATM","Findi ATM","Hitachi ATM","EPS Bancs","Other"
];

const languages = [
  "English","Hindi","Tamil","Kannada","Telugu","Malayalam","Other"
];

const messageSuggestions = [
  "I want to apply for an ATM franchise.",
  "I need full investment and ROI details.",
  "I want to check location eligibility.",
  "Please call me and explain the process.",
  "I already have a shop and want to install an ATM."
];

/* =========================================
   SEO COMPONENT (UNCHANGED)
========================================= */
const ContactSEO = () => (
  <Helmet prioritizeSeoTags>
    {/* Primary SEO */}
    <title>
      Apply for ATM Franchise in India 2026 | Cost, Commission & Online Application
    </title>

    <meta
      name="description"
      content="Apply online for ATM franchise in India. Get complete details on ATM franchise cost, monthly profit, commission per transaction, white label ATM operators and RBI-compliant setup process."
    />

    <meta
      name="keywords"
      content="ATM franchise apply online, ATM franchise cost India, ATM franchise contact, India1 ATM franchise apply, Hitachi ATM franchise apply online, white label ATM franchise India"
    />

    <meta name="robots" content="index, follow" />

    {/* Correct Canonical */}
    <link rel="canonical" href="https://atmfranchisehub.com/contact" />

    {/* Geo Targeting */}
    <meta name="geo.region" content="IN" />
    <meta name="geo.placename" content="India" />

    {/* Open Graph */}
    <meta property="og:type" content="website" />
    <meta property="og:title" content="Apply for ATM Franchise in India 2026" />
    <meta
      property="og:description"
      content="Submit your ATM franchise application online. Check investment cost, commission structure and eligibility requirements."
    />
    <meta property="og:url" content="https://atmfranchisehub.com/contact" />
    <meta property="og:image" content="https://atmfranchisehub.com/og-image.jpg" />

    {/* Twitter */}
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="ATM Franchise Apply Online India" />
    <meta
      name="twitter:description"
      content="Contact us to apply for ATM franchise in India. Get cost breakdown and ROI details."
    />

    {/* Structured Data */}
    <script type="application/ld+json">
      {JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "ATM Franchise Application Contact Page",
        "url": "https://atmfranchisehub.com/contact",
        "description": "Apply online for ATM franchise in India and get full details on investment cost, commission and eligibility."
      })}
    </script>
  </Helmet>
);
/* =========================================
   HERO (REDESIGNED)
========================================= */
const ContactUsHero = () => (
  <div className="relative pt-36 pb-44 bg-slate-950 overflow-hidden">

    <img
      src="/img/common/contact.webp"
      alt="Contact ATM Franchise Experts"
      className="absolute inset-0 w-full h-full object-cover opacity-25"
    />

    <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900/90 to-red-900/40" />
    <div className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-red-600/20 rounded-full blur-3xl" />

    <div className="relative max-w-6xl mx-auto px-6 text-center z-10">
      <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
        Start Your <span className="text-red-500">ATM Franchise</span> Journey
      </h1>
      <p className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
        Get complete investment breakdown, commission clarity, and location
        feasibility assessment from our specialists.
      </p>
    </div>
  </div>
);

/* =========================================
   CONTACT FORM (LOGIC UNCHANGED)
========================================= */
const ContactForm = () => {

const [isSubmitting, setIsSubmitting] = useState(false);
const [isSuccess, setIsSuccess] = useState(false);
const [error, setError] = useState("");

const [formData, setFormData] = useState({
  fullName: "",
  phone: "",
  email: "",
  city: "",
  provider: "",
  language: "",
  message: "",
  company: ""
});

const formatPhone = (phone) => {
  const digits = phone.replace(/\D/g, "");
  if (digits.length === 10) return "91" + digits;
  if (digits.startsWith("91") && digits.length === 12) return digits;
  return digits;
};

const handleChange = (e) => {
  const { name, value } = e.target;
  setFormData((prev) => ({ ...prev, [name]: value }));
};

const handleSubmit = async (e) => {
  e.preventDefault();
  if (isSubmitting || isSuccess) return;

  setError("");
  setIsSuccess(false);

  if (formData.company && formData.company.trim() !== "") return;

  const cleanPhone = formatPhone(formData.phone);

  if (!/^91[6-9]\d{9}$/.test(cleanPhone)) {
    setError("Enter valid 10-digit Indian mobile number.");
    return;
  }

  if (
    !formData.fullName.trim() ||
    !formData.city.trim() ||
    !formData.email.trim() ||
    !formData.provider ||
    !formData.language ||
    !formData.message.trim()
  ) {
    setError("Please fill all required fields.");
    return;
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email.trim())) {
    setError("Enter valid email address.");
    return;
  }

  setIsSubmitting(true);

  try {
    const formDataToSend = new FormData();
    formDataToSend.append("name", formData.fullName.trim());
    formDataToSend.append("phone", cleanPhone);
    formDataToSend.append("email", formData.email.trim());
    formDataToSend.append("city", formData.city.trim());
    formDataToSend.append("provider", formData.provider);
    formDataToSend.append("language", formData.language);
    formDataToSend.append("message", formData.message.trim());
    formDataToSend.append("source", "atmfranchisehub");
    formDataToSend.append("wa_status", "Pending");

    const response = await fetch(" https://script.google.com/macros/s/AKfycbzMwI2gQAKJSHTSHKSi78wimhCvYfbMpOMcICWMw5cEetQWFnYT7vXqu5H-JPsegUy3/exec", {
      method: "POST",
      body: formDataToSend,
    });

    const text = await response.text();
    const result = text.trim().toLowerCase();

    if (response.ok && result.includes("success")) {
      setIsSuccess(true);
      window.scrollTo({ top: 0, behavior: "smooth" });

      setFormData({
        fullName: "",
        phone: "",
        email: "",
        city: "",
        provider: "",
        language: "",
        message: "",
        company: ""
      });

      setTimeout(() => setIsSuccess(false), 5000);
    } else if (result.includes("duplicate")) {
      setError("This mobile number already applied.");
    } else {
      setError("Something went wrong. Please try again.");
    }

  } catch {
    setError("Network error. Please try again.");
  } finally {
    setIsSubmitting(false);
  }
};

return (
  <div className="p-10 md:p-14 bg-white rounded-3xl shadow-xl border border-slate-100">

    <h3 className="text-3xl font-extrabold text-slate-900 mb-2">
      Apply for ATM Franchise
    </h3>
    <p className="text-slate-500 mb-10 text-sm leading-relaxed">
      Submit your details below. Our team will evaluate your location
      and contact you within 24 hours.
    </p>

    <form onSubmit={handleSubmit} className="space-y-6">

      <input type="text" name="company" value={formData.company}
        onChange={handleChange} className="hidden" autoComplete="off" />

      {isSuccess && (
        <Message icon={CheckCircle}
          text="Enquiry submitted! Our ATM specialist will contact you shortly."
          type="success" />
      )}

      {error && (
        <Message icon={AlertCircle}
          text={error}
          type="error" />
      )}

      <Input label="Full Name" name="fullName"
        value={formData.fullName} onChange={handleChange}
        required placeholder="Ex. Sankar" />

      <Input label="Email Address" name="email" type="email"
        value={formData.email} onChange={handleChange}
        required placeholder="Ex. maktin.help@gmail.com" />

      <Input label="Phone Number" name="phone"
        value={formData.phone} onChange={handleChange}
        required placeholder="+91 98765 43210" />

      <SelectField label="State" name="city"
        value={formData.city} onChange={handleChange} required>
        <option value="">Select Your State</option>
        {indianStates.map((state) => (
          <option key={state} value={state}>{state}</option>
        ))}
      </SelectField>

      <SelectField label="Preferred ATM Provider"
        name="provider" value={formData.provider}
        onChange={handleChange} required>
        <option value="">Select Provider</option>
        {providers.map((provider) => (
          <option key={provider} value={provider}>{provider}</option>
        ))}
      </SelectField>

      <SelectField label="Preferred Language"
        name="language" value={formData.language}
        onChange={handleChange} required>
        <option value="">Select Language</option>
        {languages.map((lang) => (
          <option key={lang} value={lang}>{lang}</option>
        ))}
      </SelectField>

      <div className="space-y-1.5">
        <label className="block text-sm font-semibold text-slate-700">
          Your Message / Query
        </label>
        <Input name="message"
          value={formData.message}
          onChange={handleChange}
          list="messageOptions"
          required placeholder="Select or type your own..." />
        <datalist id="messageOptions">
          {messageSuggestions.map((item) => (
            <option key={item} value={item} />
          ))}
        </datalist>
      </div>

      <button
        disabled={isSubmitting || isSuccess}
        className="group w-full py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl shadow-lg shadow-red-500/30 hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center"
      >
        {isSubmitting ? (
          <Aperture className="animate-spin w-5 h-5" />
        ) : (
          <>
            Submit Enquiry
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </>
        )}
      </button>

    </form>
  </div>
);
};

/* =========================================
   HELPERS (UPDATED UI ONLY)
========================================= */
const Input = ({ label, list, ...props }) => (
  <div className="space-y-1.5">
    <label className="block text-sm font-semibold text-slate-700">{label}</label>
    <input {...props} list={list}
      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 text-slate-900 shadow-sm"
    />
  </div>
);

const SelectField = ({ label, children, ...props }) => (
  <div className="space-y-1.5">
    <label className="block text-sm font-semibold text-slate-700">{label}</label>
    <select {...props}
      className="w-full px-4 py-3 bg-white border border-slate-300 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none transition-all duration-200 text-slate-900 shadow-sm"
    >
      {children}
    </select>
  </div>
);

const Message = ({ icon: Icon, text, type }) => (
  <div className={`p-4 rounded-xl flex items-start border text-sm font-medium ${
    type === "success"
      ? "bg-emerald-50 border-emerald-200 text-emerald-700"
      : "bg-red-50 border-red-200 text-red-700"
  }`}>
    <Icon className="w-5 h-5 mr-3 mt-0.5 flex-shrink-0" />
    {text}
  </div>
);

const ContactInfoItem = ({ icon: Icon, label, value }) => (
  <div className="flex items-start space-x-4">
    <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center text-red-400">
      <Icon className="w-6 h-6" />
    </div>
    <div>
      <h4 className="text-xs uppercase tracking-widest text-slate-400 mb-1">{label}</h4>
      <p className="text-lg font-medium text-white">{value}</p>
    </div>
  </div>
);

/* =========================================
   MAIN PAGE
========================================= */
const ContactUsPage = () => (
  <div className="min-h-screen bg-slate-50">
    <ContactSEO />
    <ContactUsHero />

    <section className="relative -mt-24 pb-24 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-5 gap-10">

        <div className="md:col-span-3 order-2 md:order-1">
          <ContactForm />
        </div>

        <div className="md:col-span-2 order-1 md:order-2 bg-slate-950 rounded-3xl p-10 md:p-14 text-white relative overflow-hidden">

          <div className="absolute -top-32 -left-32 w-[400px] h-[400px] bg-red-600/20 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 space-y-12">

            <div>
              <h3 className="text-2xl font-extrabold mb-3">Direct Support</h3>
              <p className="text-slate-400 text-sm">
                Speak directly with our investment advisory team.
              </p>
            </div>

            <ContactInfoItem icon={Phone} label="Phone" value="+91 88833 35553" />
            <ContactInfoItem icon={Mail} label="Email" value="maktin.help@gmail.com" />

            <div className="pt-8 border-t border-white/10 text-sm text-slate-400 leading-relaxed">
              Assistance includes:
              <br />• Location feasibility
              <br />• Partner comparison
              <br />• Investment structure
              <br />• Onboarding guidance
            </div>

          </div>

        </div>

      </div>
    </section>
  </div>
);

export default ContactUsPage;
