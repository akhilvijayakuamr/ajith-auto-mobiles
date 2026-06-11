import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, Calendar, Clock, ArrowLeft, Phone, MapPin, Droplet } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Best Engine Oil for Three Wheelers | Ape, Atul, Alfa Guide",
  description: "Learn how to choose the best engine oil for your three-wheeler. Read about 15W-40 and 20W-50 grades, mineral vs synthetic, and oil change intervals.",
  alternates: {
    canonical: "/blog/best-engine-oil-for-three-wheelers",
  },
};

export default function BestEngineOilForThreeWheelers() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Best Engine Oil for Three Wheelers: Guide for Ape, Atul, and Mahindra Alfa",
    "description": "An expert analysis on oil viscosity grades and oil change schedules for high-load commercial auto rickshaw engines on mountainous terrain.",
    "image": "https://ajithautomobiles.vercel.app/piaggio_brand.png",
    "author": {
      "@type": "Person",
      "name": "Ajith Kumar V",
      "jobTitle": "Lead Mechanic & Workshop Founder"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Ajith Auto Mobiles",
      "logo": {
        "@type": "ImageObject",
        "url": "https://ajithautomobiles.vercel.app/piaggio_brand.png"
      }
    },
    "datePublished": "2026-06-02T11:00:00+05:30",
    "dateModified": "2026-06-02T11:00:00+05:30"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <Navbar />
      <main className="bg-black text-zinc-100 min-h-screen pt-28 pb-16 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-orange-950/20 via-transparent to-transparent -z-10" />
        <div className="absolute top-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-grid-mesh opacity-10 -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          {/* Back to Blog */}
          <a
            href="/blog"
            className="inline-flex items-center gap-2 text-xs text-zinc-500 hover:text-orange-500 transition-colors font-mono uppercase"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back to Blog
          </a>

          {/* Header */}
          <div className="space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
              Lubricants & Spares
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Best Engine Oil for Three Wheelers: Viscosity & Selection Guide
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 pt-2 border-b border-white/5 pb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                June 02, 2026
              </span>
              <span>•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-3.5 w-3.5" />
                5 Min Read
              </span>
              <span>•</span>
              <span className="text-zinc-400">By Ajith Kumar V (Founder, Ajith Auto Mobiles)</span>
            </div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            {/* Left Content */}
            <div className="lg:col-span-8 space-y-6 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <section className="space-y-4">
                <p>
                  Engine oil is the lifeblood of any motor vehicle, but for commercial three-wheelers, its significance is magnified. Commercial passenger and cargo three-wheelers are driven for 10-12 hours daily. They operate under high torque, transport maximum payloads, and navigate steep hills in Idukki, Kattappana, and Nedumkandam.
                </p>
                <p>
                  Choosing the wrong engine oil grade can result in overheating, premature piston wear, cylinder scoring, and poor fuel mileage. In this guide, we break down the viscosity ratings, API specifications, and service schedules to help you choose the best engine oil for your Piaggio Ape, Atul Auto, and Mahindra Alfa.
                </p>
              </section>

              {/* Malayalam Service Panel */}
              <section className="p-6 rounded-xl border border-orange-500/10 bg-zinc-950/40 space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-orange-500" />
                  മലയാളത്തിൽ ഒരു വിവരണം (Engine Oil Guide)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  ത്രീ വീലർ വാഹനങ്ങൾക്ക് ശരിയായ എഞ്ചിൻ ഓയിൽ തിരഞ്ഞെടുക്കുന്നത് എഞ്ചിന്റെ ആയുസ്സ് വർദ്ധിപ്പിക്കും. സാധാരണയായി 15W-40 അല്ലെങ്കിൽ 20W-50 ഗ്രേഡ് ഓയിലുകളാണ് ഉപയോഗിക്കുന്നത്. കൃത്യമായി 5,000 കിലോമീറ്ററിൽ ഓയിൽ മാറേണ്ടത് എഞ്ചിൻ കാര്യക്ഷമത കൂട്ടാൻ സഹായിക്കും. മികച്ച ക്വാളിറ്റി പാർട്സുകൾക്കും <strong>ത്രീ വീലർ സ്പെയർ പാർട്സ്</strong> വിതരണത്തിനും ഇടുക്കി ചെറ്റുകുഴിയിലെ അജിത് ഓട്ടോ മൊബൈൽസ് സന്ദർശിക്കുക.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">1. Viscosity Grades Decoded: 15W-40 vs 20W-50</h2>
                <p>
                  Viscosity refers to how thick or thin the engine oil is at specific operating temperatures. The rating is written as "XXW-YY" where:
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2">
                    <Droplet className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>XX (Low Temperature Rating):</strong> Followed by 'W' (Winter), this indicates flowability when cold starting. A lower number means easier flow in cold climates.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Droplet className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>YY (High Temperature Rating):</strong> Indicates oil thickness at operating temperatures. A higher number means the oil maintains its body and lubricating film better under extreme heat.</span>
                  </li>
                </ul>
                <p>
                  For three-wheelers operating in tropical and mountainous regions of Kerala:
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-zinc-300">
                    <span className="font-bold text-orange-500 flex-shrink-0">•</span>
                    <span><strong>15W-40 (API CH-4 / CI-4):</strong> This is the standard recommended grade for modern multi-valve diesel engines like <strong>Piaggio Ape City DX</strong> and <strong>Mahindra Alfa</strong>. It offers excellent flow on cold mornings and maintains consistent protection under normal payloads.</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-300">
                    <span className="font-bold text-orange-500 flex-shrink-0">•</span>
                    <span><strong>20W-50 (API CF-4 / CH-4):</strong> Ideal for older, high-mileage diesel engines or heavy cargo carriers (like the <strong>Atul Gem Cargo</strong>) operating in steep, high-temperature conditions. The thicker 50-grade film seals worn rings better, reducing oil consumption and mechanical rattle.</span>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">2. Mineral vs Synthetic Engine Oil: Which is Better?</h2>
                <p>
                  Most three-wheeler manufacturers recommend premium mineral-based oils. Synthetic oils offer superior thermal stability and longer life, but they cost significantly more.
                </p>
                <p>
                  For commercial fleets, **semi-synthetic or high-grade mineral oils** (like Castrol Activ Cross Country, Shell Rimula, or Servo Pride) represent the best balance of cost and protection. They protect the engine from carbon soot, sludge accumulation, and valve wear, without the premium price tag of fully synthetic oils.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">3. The Impact of Worn Engine Oil on Fuel Mileage</h2>
                <p>
                  As engine oil gets older, it breaks down due to heat and gets contaminated with soot, water, and fuel residues. This reduces its lubrication properties and increases internal drag.
                </p>
                <p>
                  When internal mechanical friction increases, the engine consumes more fuel to maintain the same power output. Additionally, degraded oil cannot seal the gap between piston rings and the cylinder block, leading to blow-by (loss of cylinder pressure), which reduces power and mileage.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">4. Oil Change Intervals on Hilly Terrains</h2>
                <p>
                  While manufacturers claim oil replacement intervals up to 10,000 km, mountain driving is classified as **"severe operating conditions."**
                </p>
                <p>
                  We recommend changing the engine oil and the oil filter canister **every 4,000 to 5,000 km** for commercial autos operating in Idukki. Regularly check and clean the steel mesh pre-filters during every oil swap.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">Conclusion</h2>
                <p>
                  Investing in high-quality 15W-40 or 20W-50 API-certified oil is the cheapest way to avoid engine failures and protect your daily income. 
                </p>
                <p>
                  At <strong>Ajith Auto Mobiles</strong>, we stock 100% genuine lubricants and filters. Our team can help you select and replace the perfect oil grade for your Piaggio Ape, Atul, or Mahindra Alfa rickshaw. Visit us at Chettikuzhy, near Kootar, to get your vehicle serviced today.
                </p>
              </section>
            </div>

            {/* Right Side Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Contact Card */}
              <div className="rounded-xl border border-white/5 bg-zinc-950/60 p-6 space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-orange-600/5 blur-xl pointer-events-none" />
                <h3 className="text-base font-bold text-white tracking-wider uppercase border-b border-white/5 pb-3">
                  Lubricant Care
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Workshop Location</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Lekshmivilasam Building, Chettikuzhy, Near Kootar, Idukki, Kerala - 685552
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  <a
                    href="tel:06282771225"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-orange-600 to-yellow-500 text-black font-bold text-sm tracking-wider hover:opacity-95 transition-opacity"
                  >
                    <Droplet className="h-4 w-4" />
                    Book Oil Change
                  </a>
                  <a
                    href="https://wa.me/916282771225?text=Hello%20Ajith%20Auto%20Mobiles%2C%20I%20want%20to%20schedule%20an%20engine%20oil%20and%20filter%20change."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-emerald-500/20 text-emerald-400 font-bold text-sm tracking-wider hover:bg-emerald-950/15 transition-colors"
                  >
                    <FaWhatsapp className="h-5 w-5 text-emerald-400" />
                    Book via WhatsApp
                  </a>
                </div>
              </div>

              {/* Related Links */}
              <div className="rounded-xl border border-white/5 bg-zinc-950/30 p-6 space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Related Links
                </h4>
                <ul className="space-y-2.5 text-xs text-zinc-400">
                  <li>
                    <a href="/services/three-wheeler-spare-parts-idukki" className="hover:text-orange-500 transition-colors">
                      → Three Wheeler Spare Parts Idukki
                    </a>
                  </li>
                  <li>
                    <a href="/services/piaggio-ape-service-idukki" className="hover:text-orange-500 transition-colors">
                      → Piaggio Ape Service
                    </a>
                  </li>
                  <li>
                    <a href="/blog/how-to-increase-three-wheeler-mileage" className="hover:text-orange-500 transition-colors">
                      → Mileage Tuning Advice
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
