import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Wrench, ShieldCheck, CheckCircle2, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Piaggio Ape Service Idukki | Three Wheeler Workshop | Ajith Auto Mobiles",
  description: "Professional Piaggio Ape service in Idukki, Kerala. Engine overhauls, clutch calibration, electrical wire harness diagnostics at Chettikuzhy near Kootar.",
  alternates: {
    canonical: "/services/piaggio-ape-service-idukki",
  },
};

export default function PiaggioApeServicePage() {
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
            <span className="text-orange-500">PIAGGIO APE SERVICE IDUKKI</span>
          </nav>

          {/* Page Header */}
          <div className="space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
              Specialized Service Center
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Piaggio Ape Service in Idukki, Kerala
            </h1>
            <h2 className="text-lg text-zinc-400 font-medium">
              പിയാജിയോ ഏപ്പ് സർവീസ് ഇടുക്കി | Professional Three Wheeler Workshop Chettikuzhy
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full" />
          </div>

          {/* Article / SEO Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            {/* Left Column: Long-form Content */}
            <div className="lg:col-span-8 space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <section className="space-y-4">
                <p>
                  Commercial three-wheelers are the lifeline of public transport and local logistics across Idukki, Kerala. Operating on steep mountain roads, sharp curves, and under heavy payloads requires high-performance mechanical maintenance. At <strong>Ajith Auto Mobiles</strong> (located at Chettikuzhy near Kootar), we provide certified, specialized **Piaggio Ape Service Idukki** to ensure your vehicle runs smoothly and safely.
                </p>
                <p>
                  With over 17 years of hands-on experience, our founder Ajith Kumar V and our expert team specialize in comprehensive repairs for all Piaggio Ape passenger auto-rickshaws and cargo carriers. Whether you drive an Ape City Passenger, Ape Xtra LD Cargo, or Ape DX Diesel three-wheeler, we cover everything from minor tune-ups to major engine overhauls.
                </p>
              </section>

              {/* Local language targeting */}
              <section className="p-6 rounded-xl border border-orange-500/10 bg-zinc-950/40 space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-orange-500" />
                  മലയാളം സർവീസ് സഹായം (Malayalam Service Guide)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  ഇടുക്കി ജില്ലയിലെ മികച്ച <strong>ഓട്ടോ റിക്ഷാ റിപ്പയർ</strong> വർക്ക്ഷോപ്പായ അജിത് ഓട്ടോ മൊബൈൽസിൽ <strong>ത്രീ വീലർ സർവീസ്</strong> വളരെ കൃത്യതയോടെ ചെയ്തു നൽകുന്നു. ഞങ്ങളുടെ വിദഗ്ധരായ മെക്കാനിക്കുകൾ <strong>പിയാജിയോ ഏപ്പ് സർവീസ്</strong>, <strong>അതുൽ ഓട്ടോ റിപ്പയർ</strong> എന്നിവയിൽ 17 വർഷത്തിലേറെ പരിചയസമ്പന്നരാണ്. <strong>ഇടുക്കി ത്രീ വീലർ വർക്ക്ഷോപ്പ്</strong> അന്വേഷിക്കുന്നവർക്ക് വിശ്വസിക്കാവുന്ന ഏക സ്ഥാപനം.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Core Piaggio Ape Services We Provide
                </h3>
                <p>
                  Regular maintenance is crucial for commercial three-wheelers to prevent costly breakdowns and maximize fuel efficiency on Idukki roads. Our specialized workflow covers:
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Engine Overhauling & Tuning:</strong> Decoking the cylinder head, replacing worn piston rings, calibrating valves, and fixing fuel injector pump timing for diesel, petrol, and LPG Ape models.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Clutch & Gearbox Overhaul:</strong> Fixing clutch slip issues, replacing worn pressure plates, and aligning the gear selector cable sleeves to ensure smooth gear shifts.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Brake System Repair:</strong> Brake drum turning, master cylinder rebuilds, shoe adjustments, and oil line bleeding to ensure maximum safety.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Suspension Calibration:</strong> Leaf spring tensioning and damper/shock absorber replacements to withstand heavy cargo loads.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Electrical System Routing:</strong> Diagnosis of starting issues, wiring harness renewal, alternator/dynamo overhauls, and battery tests.</span>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Why Choose Ajith Auto Mobiles?
                </h3>
                <p>
                  As the primary **Three Wheeler Workshop Idukki**, we are fully equipped with specialized diagnostic tools, engine block grids, and heavy-duty lifts designed specifically for three-wheeled chassis. We use only 100% genuine factory spare parts to ensure the longevity of your Piaggio Ape.
                </p>
                <p>
                  We are conveniently located at Chettikuzhy on the Munnar-Kumily Highway, just 2.5 km from Kootar Junction. Our location allows easy access to drivers from Kattappana, Nedumkandam, Cumbummettu, Adimali, and Thodupuzha.
                </p>
              </section>

              {/* Local regions */}
              <section className="space-y-3 border-t border-white/5 pt-6">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  Serving Regions in Idukki District
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
                  Book Your Service
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
                    href="https://wa.me/916282771225?text=Hello%20Ajith%20Auto%20Mobiles%2C%20I%20want%20to%20book%20a%20Piaggio%20Ape%20service%20in%20Idukki."
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
                    <h5 className="font-semibold text-orange-500">Q. Do you use genuine parts?</h5>
                    <p className="text-zinc-400 mt-1">Yes, we stock and use 100% genuine Piaggio factory replacement spare parts.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-500">Q. Do you offer towing?</h5>
                    <p className="text-zinc-400 mt-1">We provide mechanical towing support for breakdown vehicles near Kootar & Kattappana.</p>
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
