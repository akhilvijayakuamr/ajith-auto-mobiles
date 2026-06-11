import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Wrench, ShieldCheck, CheckCircle2, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Three Wheeler Spare Parts Idukki | Genuine Auto Parts | Ajith Auto Mobiles",
  description: "Genuine three-wheeler spare parts in Idukki, Kerala. Fuel filters, brake shoes, pistons, gaskets, and electrical spares for Piaggio Ape, Atul Auto, and Mahindra Alfa.",
  alternates: {
    canonical: "/services/three-wheeler-spare-parts-idukki",
  },
};

export default function ThreeWheelerSparePartsPage() {
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
            <span className="text-orange-500">THREE WHEELER SPARE PARTS IDUKKI</span>
          </nav>

          {/* Page Header */}
          <div className="space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
              Genuine Parts Center
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Three Wheeler Spare Parts in Idukki, Kerala
            </h1>
            <h2 className="text-lg text-zinc-400 font-medium">
              ത്രീ വീലർ സ്പെയർ പാർട്സ് ഇടുക്കി | Genuine Three Wheeler Spare Parts Kerala
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full" />
          </div>

          {/* Article / SEO Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            {/* Left Column: Long-form Content */}
            <div className="lg:col-span-8 space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <section className="space-y-4">
                <p>
                  To keep commercial passenger auto-rickshaws and cargo loaders running reliably under challenging payloads and mountain conditions, using high-quality replacement parts is crucial. Substandard or fake components degrade engine mileage, trigger gear slipping, and pose safety risks. At <strong>Ajith Auto Mobiles</strong> (Chettikuzhy, Idukki), we stock only 100% genuine **Three Wheeler Spare Parts Kerala** to guarantee safety and long vehicle life.
                </p>
                <p>
                  We are a leading distributor and service provider of official, factory-authorized replacement parts for all commercial three-wheeler brands. Whether you need engine internals, electrical accessories, steering kits, or brake components for your Piaggio Ape, Atul Auto, or Mahindra Alfa, we maintain a comprehensive inventory at our workshop near Kootar.
                </p>
              </section>

              {/* Local language targeting */}
              <section className="p-6 rounded-xl border border-orange-500/10 bg-zinc-950/40 space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-orange-500" />
                  ഗുണനിലവാരമുള്ള സ്പെയർ പാർട്സ് (Genuine Spares Kerala)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  നിങ്ങളുടെ ഓട്ടോറിക്ഷയുടെ സുഗമമായ ഓട്ടത്തിന് ഏറ്റവും മികച്ച ഗുണനിലവാരമുള്ള <strong>ത്രീ വീലർ സ്പെയർ പാർട്സ്</strong> ഞങ്ങളുടെ വർക്ക്ഷോപ്പിൽ ലഭ്യമാണ്. <strong>പിയാജിയോ ഏപ്പ് സർവീസ്</strong>, <strong>അതുൽ ഓട്ടോ റിപ്പയർ</strong> എന്നിവയ്ക്കുള്ള ഒറിജിനൽ പിസ്റ്റണുകൾ, ക്ലച്ച് പ്ലേറ്റുകൾ, ഫിൽട്ടറുകൾ, കേബിളുകൾ, ബ്രേക്ക് ഷൂസ് എന്നിവ ഞങ്ങൾ നേരിട്ട് വിതരണം ചെയ്യുന്നു. ഇടുക്കി ജില്ലയിൽ വിശ്വസനീയമായ <strong>ത്രീ വീലർ സർവീസ്</strong>, <strong>ഓട്ടോ റിക്ഷാ റിപ്പയർ</strong> ആവശ്യങ്ങൾക്ക് അജിത് ഓട്ടോ മൊബൈൽസ് സന്ദർശിക്കുക.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Comprehensive Spare Parts We Stock
                </h3>
                <p>
                  Our workshop in Chettikuzhy hosts a dedicated parts supply bay. We maintain stock for the following critical categories:
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Engine Internals:</strong> High-grade cylinder sleeves, piston rings, gaskets, crank rods, oil pumps, and valve seals for diesel and petrol engines.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Filter Kits & Gaskets:</strong> Original engine oil filters, primary/secondary diesel filters, air filters, and high-temperature head gaskets.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Control Cables & Assemblies:</strong> Heavy-duty clutch cables, accelerator wire assemblies, gear shifter cables, and handbrake linkages.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Brake System Spares:</strong> Master cylinders, wheel brake cylinders, genuine brake shoe linings, fluid pipe tubes, and brake drum hubs.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Electrical Components:</strong> Alternator dynamo coils, starter assemblies, headlight bulbs, indicator lamps, flasher relays, and battery terminal fittings.</span>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Why Install Factory-Authorized Spare Parts?
                </h3>
                <p>
                  Mountain terrain demands heavy structural integrity. Installing cheap third-party spares leads to premature wear, steering vibrations, and engine overheating. Our 100% genuine factory parts ensure maximum longevity, optimal fuel efficiency, and prevent sudden mechanical failures.
                </p>
                <p>
                  As Idukki's premier **Three Wheeler Workshop Idukki**, we verify the quality of every component. Our workshop's location at Chettikuzhy (near Kootar) is easily accessible to operators from Nedumkandam, Kattappana, Adimali, and Thodupuzha, providing fast replacement service.
                </p>
              </section>

              {/* Local regions */}
              <section className="space-y-3 border-t border-white/5 pt-6">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  Spare Parts Availability in Idukki
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
                  Parts Inquiry
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
                    href="https://wa.me/916282771225?text=Hello%20Ajith%20Auto%20Mobiles%2C%20I%20have%20an%20inquiry%20regarding%20genuine%20three-wheeler%20spare%20parts."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg border border-emerald-500/20 text-emerald-400 font-bold text-sm tracking-wider hover:bg-emerald-950/15 transition-colors"
                  >
                    <FaWhatsapp className="h-5 w-5 text-emerald-400" />
                    Inquire via WhatsApp
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
                    <h5 className="font-semibold text-orange-500">Q. Do you ship spare parts?</h5>
                    <p className="text-zinc-400 mt-1">We supply parts directly from our Chettikuzhy workshop. Contact us for pickup or local delivery inquiries.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-500">Q. Are parts under warranty?</h5>
                    <p className="text-zinc-400 mt-1">Yes, genuine factory spares are covered under standard manufacturer warranty terms.</p>
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
