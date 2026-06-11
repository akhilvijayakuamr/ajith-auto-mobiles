import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Wrench, ShieldCheck, CheckCircle2, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Auto Rickshaw Repair Idukki | Three Wheeler Workshop | Ajith Auto Mobiles",
  description: "Expert auto rickshaw repair in Idukki, Kerala. Engine tuning, periodic maintenance, emergency breakdown support at Chettikuzhy near Kootar.",
  alternates: {
    canonical: "/services/auto-rickshaw-repair-idukki",
  },
};

export default function AutoRickshawRepairPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-zinc-100 min-h-screen pt-28 pb-16 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-orange-950/20 via-transparent to-transparent -z-10" />
        <div className="absolute top-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-grid-mesh opacity-10 -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs */}
          <nav className="text-xs text-zinc-500 font-mono flex items-center gap-2">
            <a href="/" className="hover:text-orange-500 transition-colors">HOME</a>
            <span>/</span>
            <span className="text-zinc-400">SERVICES</span>
            <span>/</span>
            <span className="text-orange-500">AUTO RICKSHAW REPAIR IDUKKI</span>
          </nav>

          {/* Page Header */}
          <div className="space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
              Complete Mechanical Care
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Auto Rickshaw Repair in Idukki, Kerala
            </h1>
            <h2 className="text-lg text-zinc-400 font-medium">
              ഓട്ടോ റിക്ഷാ റിപ്പയർ ഇടുക്കി | Auto Rickshaw Repair Idukki Chettikuzhy
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full" />
          </div>

          {/* Article / SEO Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            {/* Left Column: Long-form Content */}
            <div className="lg:col-span-8 space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <section className="space-y-4">
                <p>
                  Passenger and cargo auto-rickshaws are the backbone of regional mobility throughout Idukki, Kerala. Navigating steep terrains, severe monsoons, and everyday high-wear commercial driving requires expert mechanical attention. When your vehicle displays signs of power drop, gear slips, suspension noises, or starter lag, getting professional service is vital. At <strong>Ajith Auto Mobiles</strong> (located in Chettikuzhy, near Kootar), we provide top-tier **Auto Rickshaw Repair Idukki** services to keep you moving.
                </p>
                <p>
                  With more than 17 years of experience, our senior mechanic Ajith Kumar V and our service technicians provide comprehensive mechanical repairs, electrical tuning, and parts replacements. We handle all models, specializing in Piaggio Ape, Atul Auto, and Mahindra Alfa three-wheelers.
                </p>
              </section>

              {/* Local language targeting */}
              <section className="p-6 rounded-xl border border-orange-500/10 bg-zinc-950/40 space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-orange-500" />
                  വിദഗ്ധ ഓട്ടോ റിപ്പയർ സേവനങ്ങൾ (Expert Auto Rickshaw Repair)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  നിങ്ങളുടെ ഓട്ടോറിക്ഷ മികച്ച രീതിയിൽ ഓടുന്നതിന് ആവശ്യമായ എല്ലാ മെക്കാനിക്കൽ തകരാറുകളും ഞങ്ങൾ പരിഹരിക്കുന്നു. <strong>ഓട്ടോ റിക്ഷാ റിപ്പയർ</strong>, <strong>ത്രീ വീലർ സർവീസ്</strong>, <strong>പിയാജിയോ ഏപ്പ് സർവീസ്</strong>, <strong>അതുൽ ഓട്ടോ റിപ്പയർ</strong> എന്നിവയ്ക്കായി ഇടുക്കിയിലെ ഏറ്റവും മികച്ച വർക്ക്ഷോപ്പാണ് അജിത് ഓട്ടോ മൊബൈൽസ്. <strong>ഇടുക്കി ത്രീ വീലർ വർക്ക്ഷോപ്പ്</strong> എന്ന പേരിൽ വർഷങ്ങളായി ഞങ്ങൾ വിശ്വസ്തതയോടെ പ്രവർത്തിക്കുന്നു.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Our Auto Rickshaw Repair Workflows
                </h3>
                <p>
                  Commercial auto-rickshaws demand customized repairs due to their lightweight chassis and high-torque engine requirements. We provide:
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Engine Calibration & Rebuilding:</strong> Swapping worn piston cylinders, decoking heads, tuning valves, and resetting fuel pumps for optimal diesel, petrol, or LPG mileage.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Clutch & Gearbox Repairs:</strong> Replacing worn clutch plates, rebuilding pressure assemblies, and aligning gear shifter cables.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Suspension Leaf Spring Adjustments:</strong> Calibrating spring tension, replacing shackle bushes, and shock absorber setups to prevent vehicle sag.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Electrical Dynamos & Starters:</strong> Starter motor brush replacements, wiring harness diagnoses, and headlight alignment.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Emergency Towing & Breakdown:</strong> Providing towing assistance for broke-down three-wheelers near Kootar, Nedumkandam, and Kattappana.</span>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Professional Diagnostics & Regional Support
                </h3>
                <p>
                  Our workshop is fully equipped with customized diagnostic tools and engine block stands. We maintain stock of genuine factory spare parts to ensure the longevity of your repair and keep your downtime to a minimum.
                </p>
                <p>
                  Located at Chettikuzhy, near Kootar, our workshop serves drivers from Kattappana, Nedumkandam, Adimali, Thodupuzha, and Cumbummettu. We provide quick turnaround services to help you resume your transport operations.
                </p>
              </section>

              {/* Local regions */}
              <section className="space-y-3 border-t border-white/5 pt-6">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  Auto Rickshaw Repair Coverage in Idukki
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {["Chettikuzhy", "Kootar", "Kattappana", "Nedumkandam", "Adimali", "Thodupuzha", "Cumbummettu", "Vandenmedu", "Munnar Road"].map((area) => (
                    <span key={area} className="px-2.5 py-1 rounded bg-zinc-900 border border-white/5 text-zinc-400">
                      {area}
                    </span>
                  ))}
                </div>
              </section>
            </div>

            {/* Right Column: CTA Panel */}
            <div className="lg:col-span-4 space-y-6">
              {/* Contact Card */}
              <div className="rounded-xl border border-white/5 bg-zinc-950/60 p-6 space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-orange-600/5 blur-xl pointer-events-none" />
                
                <h3 className="text-base font-bold text-white tracking-wider uppercase border-b border-white/5 pb-3">
                  Book A Repair
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

                  <div className="flex items-start gap-3">
                    <Wrench className="h-5 w-5 text-orange-500 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="text-xs font-semibold text-white">Service Hours</h4>
                      <p className="text-xs text-zinc-400 mt-0.5">
                        Monday - Saturday: 8:30 AM - 6:30 PM
                      </p>
                    </div>
                  </div>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  <a
                    href="tel:06282771225"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-orange-600 to-yellow-500 text-black font-bold text-sm tracking-wider hover:opacity-95 transition-opacity"
                  >
                    <Phone className="h-4 w-4" />
                    Call 062827 71225
                  </a>

                  <a
                    href="https://wa.me/916282771225?text=Hello%20Ajith%20Auto%20Mobiles%2C%20I%20have%20an%20auto%20rickshaw%20repair%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-emerald-500/20 text-emerald-400 font-bold text-sm tracking-wider hover:bg-emerald-950/15 transition-colors"
                  >
                    <FaWhatsapp className="h-5 w-5 text-emerald-400" />
                    Book via WhatsApp
                  </a>
                </div>
              </div>

              {/* Local FAQ Widget */}
              <div className="rounded-xl border border-white/5 bg-zinc-950/30 p-6 space-y-4">
                <h4 className="text-xs font-bold text-white uppercase tracking-wider">
                  Quick FAQ
                </h4>
                <div className="space-y-3 text-xs">
                  <div>
                    <h5 className="font-semibold text-orange-500">Q. Do you do electrical repair?</h5>
                    <p className="text-zinc-400 mt-1">Yes, we provide full starter, dynamo, and harness diagnostics for all passenger/cargo three-wheelers.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-500">Q. How do I get directions?</h5>
                    <p className="text-zinc-400 mt-1">We are in Chettikuzhy near Kootar, right on the highway link. Click "Get Directions" in the website menu to load on Google Maps.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
