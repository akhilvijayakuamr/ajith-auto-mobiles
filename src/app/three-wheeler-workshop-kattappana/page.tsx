import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Wrench, ShieldCheck, CheckCircle2, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Three Wheeler Workshop Kattappana | Auto Repair | Ajith Auto Mobiles",
  description: "Best three wheeler workshop in Kattappana, Kerala. Expert Piaggio Ape service, Atul Auto repair, and Mahindra Alfa service at Chettikuzhy near Kootar.",
  alternates: {
    canonical: "/three-wheeler-workshop-kattappana",
  },
};

export default function ThreeWheelerWorkshopKattappanaPage() {
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
            <span className="text-orange-500">THREE WHEELER WORKSHOP KATTAPPANA</span>
          </nav>

          {/* Page Header */}
          <div className="space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
              Kattappana Area Service
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Three Wheeler Workshop in Kattappana, Kerala
            </h1>
            <h2 className="text-lg text-zinc-400 font-medium">
              കട്ടപ്പന ത്രീ വീലർ വർക്ക്ഷോപ്പ് | Auto Rickshaw Repair Kattappana
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full" />
          </div>

          {/* Article / SEO Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            {/* Left Column: Long-form Content */}
            <div className="lg:col-span-8 space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <section className="space-y-4">
                <p>
                  Kattappana is the commercial capital of the High Ranges in Idukki, functioning as the primary marketplace for spices, agricultural produce, and daily logistics. Passenger auto-rickshaws and cargo carriers operate continuously across Kattappana town, Puliyanmala, and nearby plantations. Navigating these demanding gradients daily puts severe strain on brake assemblies, steering components, and engine pistons. If you need a reliable **Three Wheeler Workshop Kattappana** or expert **Auto Rickshaw Repair Kattappana**, <strong>Ajith Auto Mobiles</strong> provides high-performance services.
                </p>
                <p>
                  We are located just 15 km (about a 20-minute drive) from Kattappana town at Chettikuzhy, Lekshmivilasam Building (near Kootar). Our workshop offers direct diagnostic overhauls, mechanical calibrations, and an inventory of genuine spare parts to ensure the longevity of your commercial vehicle.
                </p>
              </section>

              {/* Local language targeting */}
              <section className="p-6 rounded-xl border border-orange-500/10 bg-zinc-950/40 space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-orange-500" />
                  കട്ടപ്പന ഓട്ടോ റിപ്പയർ (Kattappana Three Wheeler Service)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  കട്ടപ്പനയിലും പരിസരപ്രദേശങ്ങളിലുമുള്ള ഓട്ടോ ഡ്രൈവർമാർക്കായി ഞങ്ങൾ മികച്ച <strong>ത്രീ വീലർ സർവീസ്</strong> ലഭ്യമാക്കുന്നു. കട്ടപ്പനയിൽ നിന്നും വളരെ എളുപ്പത്തിൽ എത്തിച്ചേരാവുന്ന ചെട്ടികുഴിയിലെ ഞങ്ങളുടെ വർക്ക്ഷോപ്പിൽ <strong>ഓട്ടോ റിക്ഷാ റിപ്പയർ</strong>, <strong>പിയാജിയോ ഏപ്പ് സർവീസ്</strong>, <strong>അതുൽ ഓട്ടോ റിപ്പയർ</strong> എന്നിവ വളരെ കൃത്യതയോടെയും ഒറിജിനൽ സ്പെയർ പാർട്സ് ഉപയോഗിച്ചും ചെയ്തു നൽകുന്നു.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Kattappana Three Wheeler Services We Deliver
                </h3>
                <p>
                  We are fully equipped to perform major mechanical and electrical servicing for Piaggio Ape, Atul Auto, and Mahindra Alfa passenger and cargo three-wheelers:
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Engine Block Boring & Calibration:</strong> Cylinder grinding, valve alignments, and fuel pump tuning for maximum mileage on hilly terrains.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Clutch & Gearbox Repairs:</strong> Replacing worn clutch pressure plates, aligning selector cables, and resolving gear slippage.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Hydraulic Brake Maintenance:</strong> Brake drum turning, master cylinder assemblies, shoe setups, and oil line flushes.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Suspension Leaf Spring Adjustments:</strong> Re-tensioning shackle springs and damper oil setups for high cargo weight.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Starter Dynamo & Electrical Wiring:</strong> Diagnosing starting lag, alternator overhauls, and routing fuse panels.</span>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Why Travel from Kattappana to Chettikuzhy?
                </h3>
                <p>
                  While Kattappana town has generic garages, Ajith Auto Mobiles is a specialized **Three Wheeler Workshop Idukki** with 17+ years of experience dedicated specifically to commercial three-wheeler engines. We host diagnostic blocks and hold stock of genuine spare parts (filters, hoses, shoes, cylinders, cables) to ensure same-day turnaround times.
                </p>
                <p>
                  We also provide breakdown towing support for three-wheelers operating on the Kattappana-Kootar highway link.
                </p>
              </section>

              {/* Local regions */}
              <section className="space-y-3 border-t border-white/5 pt-6">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  Serving Regions Near Kattappana
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {["Kattappana Town", "Puliyanmala", "Chettikuzhy", "Kootar", "Vandenmedu", "Eratayar", "Anakkara", "Chakkupallam", "Narakamkanam"].map((area) => (
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
                  Service Request
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
                    href="https://wa.me/916282771225?text=Hello%20Ajith%20Auto%20Mobiles%2C%20I%20have%20a%20three-wheeler%20service%20inquiry%20from%20Kattappana."
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
                    <h5 className="font-semibold text-orange-500">Q. Do you service vehicles in Kattappana?</h5>
                    <p className="text-zinc-400 mt-1">Yes, many operators from Kattappana bring their vehicles to our Chettikuzhy workshop. We also support highway breakdown calls.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-500">Q. Do you stock genuine Piaggio parts?</h5>
                    <p className="text-zinc-400 mt-1">Yes, we stock 100% genuine parts for Piaggio, Atul Auto, and Mahindra Alfa models.</p>
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
