import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Wrench, ShieldCheck, CheckCircle2, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Three Wheeler Workshop Idukki | Auto Rickshaw Repair | Ajith Auto Mobiles",
  description: "Looking for a three wheeler workshop in Idukki, Kerala? We offer expert Piaggio Ape, Atul Auto, and Mahindra Alfa service and repair at Chettikuzhy near Kootar.",
  alternates: {
    canonical: "/three-wheeler-workshop-idukki",
  },
};

export default function ThreeWheelerWorkshopIdukkiPage() {
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
            <span className="text-zinc-400">LOCATIONS</span>
            <span>/</span>
            <span className="text-orange-500">THREE WHEELER WORKSHOP IDUKKI</span>
          </nav>

          {/* Page Header */}
          <div className="space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
              District Service Hub
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Three Wheeler Workshop in Idukki, Kerala
            </h1>
            <h2 className="text-lg text-zinc-400 font-medium">
              ഇടുക്കി ത്രീ വീലർ വർക്ക്ഷോപ്പ് | Best Auto Rickshaw Repair in Idukki
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full" />
          </div>

          {/* Article / SEO Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            {/* Left Column: Long-form Content */}
            <div className="lg:col-span-8 space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <section className="space-y-4">
                <p>
                  Idukki is renowned for its high-altitude roads, hairpin bends, and steep gradients. Commercial auto-rickshaws and cargo three-wheelers operate as the primary transport system carrying passengers, farm harvests, and retail packages. Negotiating these hills under full load requires three-wheelers to remain in top mechanical shape. If you are looking for a reliable, professional **Three Wheeler Workshop Idukki** or certified **Auto Rickshaw Repair Idukki**, <strong>Ajith Auto Mobiles</strong> is your trusted local service partner.
                </p>
                <p>
                  Located in Chettikuzhy, near Kootar, our workshop stands as the central hub for complete repairs, overhauls, and periodic checks. We service all prominent brands, specializing in Piaggio Ape, Atul Auto, and Mahindra Alfa models. Our team is led by senior mechanic Ajith Kumar V, who brings over 17 years of experience.
                </p>
              </section>

              {/* Local language targeting */}
              <section className="p-6 rounded-xl border border-orange-500/10 bg-zinc-950/40 space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-orange-500" />
                  ഇടുക്കി ത്രീ വീലർ വർക്ക്ഷോപ്പ് (Idukki Three Wheeler Workshop)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  ഇടുക്കി ജില്ലയിലെ കാട്ടപ്പന, നെടുങ്കണ്ടം, അടിമാലി, തൊടുപുഴ ഭാഗങ്ങളിലുള്ള വാഹന ഡ്രൈവർമാർക്കായി ഞങ്ങൾ അത്യാധുനിക രീതിയിലുള്ള <strong>ത്രീ വീലർ സർവീസ്</strong> നൽകുന്നു. തകരാറിലായ ഓട്ടോറിക്ഷകൾക്കായുള്ള പ്രത്യേക <strong>ഓട്ടോ റിക്ഷാ റിപ്പയർ</strong>, മികച്ച <strong>പിയാജിയോ ഏപ്പ് സർവീസ്</strong>, <strong>അതുൽ ഓട്ടോ റിപ്പയർ</strong> എന്നിവ ഞങ്ങൾ ചെയ്തു വരുന്നു. കട്ടപ്പന-കൂട്ടാർ റൂട്ടിൽ ചെട്ടികുഴിയിലാണ് ഞങ്ങളുടെ <strong>ഇടുക്കി ത്രീ വീലർ വർക്ക്ഷോപ്പ്</strong> സ്ഥിതി ചെയ്യുന്നത്.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Our Comprehensive Workshop Capabilities
                </h3>
                <p>
                  At Ajith Auto Mobiles, we handle all mechanical and electrical work under one roof:
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Engine Overhauling:</strong> Complete cylinder block reboring, valve alignments, and fuel pump tuning for diesel, petrol, and LPG models.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Transmission Calibration:</strong> Gear shifting corrections, clutch pressure plate renewals, and differential checks.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Brake System Upgrades:</strong> Master cylinder assembly, brake drum lathing, shoe replacement, and brake line flushes.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Heavy-Duty Suspension work:</strong> Leaf spring tension adjustments and heavy shackle pins replacement to prevent cargo frame sag.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Electrical Routing:</strong> Rebuilding starters and dynamos, rewiring harness looms, and battery terminal checks.</span>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Easy Access for Idukki District Drivers
                </h3>
                <p>
                  Our workshop is strategically situated at Chettikuzhy, near Kootar, right on the highway corridor. This location makes us highly accessible to commercial three-wheelers operating across:
                </p>
                <ul className="grid grid-cols-2 gap-2 text-sm pl-4">
                  <li className="list-disc text-zinc-400">Kattappana (15 km)</li>
                  <li className="list-disc text-zinc-400">Nedumkandam (18 km)</li>
                  <li className="list-disc text-zinc-400">Adimali (75 km)</li>
                  <li className="list-disc text-zinc-400">Thodupuzha (95 km)</li>
                  <li className="list-disc text-zinc-400">Kootar Junction (2.5 km)</li>
                  <li className="list-disc text-zinc-400">Cumbummettu Border (12 km)</li>
                </ul>
                <p>
                  We also provide breakdown towing support and a complete inventory of genuine factory spare parts to ensure the fastest turnaround times for your business.
                </p>
              </section>

              {/* Local regions */}
              <section className="space-y-3 border-t border-white/5 pt-6">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  Serving Area Coverage in Idukki District
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
                  Contact Workshop
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
                    href="https://wa.me/916282771225?text=Hello%20Ajith%20Auto%20Mobiles%2C%20I%20have%20a%20three-wheeler%20service%20inquiry%20in%20Idukki."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-emerald-500/20 text-emerald-400 font-bold text-sm tracking-wider hover:bg-emerald-950/15 transition-colors"
                  >
                    <FaWhatsapp className="h-5 w-5 text-emerald-400" />
                    Message on WhatsApp
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
                    <h5 className="font-semibold text-orange-500">Q. Do you service all over Idukki?</h5>
                    <p className="text-zinc-400 mt-1">We serve vehicle operators across the district. Emergency breakdown towing is active within 20 km of our Chettikuzhy bays.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-500">Q. Are you near Kattappana?</h5>
                    <p className="text-zinc-400 mt-1">Yes, we are located just 15 km (approx. 20-minute drive) from Kattappana town.</p>
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
