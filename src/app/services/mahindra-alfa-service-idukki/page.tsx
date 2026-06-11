import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Wrench, ShieldCheck, CheckCircle2, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Mahindra Alfa Service Idukki | Three Wheeler Workshop | Ajith Auto Mobiles",
  description: "Expert Mahindra Alfa service in Idukki, Kerala. Complete brake calibration, steering ball racer correction, electrical harness diagnosis at Chettikuzhy near Kootar.",
  alternates: {
    canonical: "/services/mahindra-alfa-service-idukki",
  },
};

export default function MahindraAlfaServicePage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-zinc-100 min-h-screen pt-28 pb-16 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-orange-950/20 via-transparent to-transparent -z-10" />
        <div className="absolute top-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-red-600/5 blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-grid-mesh opacity-10 -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs */}
          <nav className="text-xs text-zinc-500 font-mono flex items-center gap-2">
            <a href="/" className="hover:text-orange-500 transition-colors">HOME</a>
            <span>/</span>
            <span className="text-zinc-400">SERVICES</span>
            <span>/</span>
            <span className="text-orange-500">MAHINDRA ALFA SERVICE IDUKKI</span>
          </nav>

          {/* Page Header */}
          <div className="space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
              Mahindra Alfa Specialists
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Mahindra Alfa Service in Idukki, Kerala
            </h1>
            <h2 className="text-lg text-zinc-400 font-medium">
              മഹീന്ദ്ര ആൽഫ സർവീസ് ഇടുക്കി | Mahindra Alfa Service Kerala Workshop Chettikuzhy
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full" />
          </div>

          {/* Article / SEO Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            {/* Left Column: Long-form Content */}
            <div className="lg:col-span-8 space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <section className="space-y-4">
                <p>
                  Mahindra Alfa passenger rickshaws and cargo loaders are renowned for their fuel economy, roomy cabins, and reliable diesel engine performance. They are essential commercial three-wheelers across town routes and hill tracks in Idukki, Kerala. Yet, the persistent humidity, steep climbs, and heavy stop-and-go mountain traffic wear out the rear axle differentials, starter dynamos, leaf shackle mounts, and brake drums. At <strong>Ajith Auto Mobiles</strong> in Chettikuzhy, near Kootar, we provide expert **Mahindra Alfa Service Kerala** support to optimize your vehicle.
                </p>
                <p>
                  Our workshop has extensive expertise in servicing all Mahindra Alfa variations, including the Alfa Passenger Rickshaw, Alfa Cargo Carrier, and Alfa Champion Diesel. We provide diagnostic scanning, mechanical calibrations, and complete overhauls.
                </p>
              </section>

              {/* Local language targeting */}
              <section className="p-6 rounded-xl border border-orange-500/10 bg-zinc-950/40 space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-orange-500" />
                  ആൽഫ ത്രീ വീലർ റിപ്പയറിങ് (Mahindra Alfa Service)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  ഞങ്ങളുടെ വർക്ക്ഷോപ്പിൽ മഹീന്ദ്ര ആൽഫ ഓട്ടോകൾക്കായുള്ള പ്രത്യേക സർവീസ് ലഭ്യമാണ്. പരിചയസമ്പന്നരായ മെക്കാനിക്കുകൾ നിങ്ങളുടെ വാഹനത്തിന്റെ ബ്രേക്ക് കേബിൾ പണികൾ, എൻജിൻ നോയിസ് പരിഹരിക്കൽ, വയറിങ് തകരാറുകൾ എന്നിവ പെട്ടെന്ന് പരിഹരിച്ചു നൽകുന്നു. ഇടുക്കി ജില്ലയിലെ മികച്ച <strong>ഓട്ടോ റിക്ഷാ റിപ്പയർ</strong>, <strong>ത്രീ വീലർ സർവീസ്</strong>, <strong>ഇടുക്കി ത്രീ വീലർ വർക്ക്ഷോപ്പ്</strong> അന്വേഷിക്കുന്നവർക്കായി ഞങ്ങൾ അത്യാധുനിക സൗകര്യങ്ങളൊരുക്കിയിരിക്കുന്നു.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Mahindra Alfa Services We Deliver
                </h3>
                <p>
                  Mahindra Alfa vehicles require specialized adjustment of structural parts and transmission systems due to their unique chassis configurations. Our mechanical workflow handles:
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Master Brake Cylinder Replacements:</strong> Servicing hydraulic lines, adjusting front/rear shoe clearance, brake drum lathe skimming, and vacuum hose alignments.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Alfa Engine Calibration & Rebuilding:</strong> Swapping piston cylinders, grinding valves, resolving exhaust black smoke issues, and timing calibrations for maximum diesel mileage.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Electrical Wiring Harness Diagnosis:</strong> Aligning fuse blocks, replacing faulty starter brushes, alternator tuning, and upgrading front headlights.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Steering Racer & Handle Adjustment:</strong> Rectifying steering handle play, fork alignments, and damper oil replacements to ensure smooth maneuvering.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Suspension Leaf Spring Re-tensioning:</strong> Adding support leafs, replacing bush pins, and grease lubrications.</span>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Professional Diagnostics & Local Reach
                </h3>
                <p>
                  As Idukki's leading commercial workshop, we combine skilled workmanship with the fast availability of genuine factory parts. By stocking genuine Mahindra Alfa replacement parts (filters, hoses, shoes, cylinders, cables), we ensure your commercial operations continue with minimal delay.
                </p>
                <p>
                  Located at Chettikuzhy, near Kootar, we are centrally accessible for three-wheeler drivers throughout Nedumkandam, Kattappana, Adimali, Thodupuzha, and Cumbummettu. We also offer mechanical breakdown and towing support for standard three-wheelers.
                </p>
              </section>

              {/* Local regions */}
              <section className="space-y-3 border-t border-white/5 pt-6">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  Serving Areas for Mahindra Alfa in Idukki
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
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-red-600/5 blur-xl pointer-events-none" />
                
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
                    href="https://wa.me/916282771225?text=Hello%20Ajith%20Auto%20Mobiles%2C%20I%20want%20to%20book%20a%20Mahindra%20Alfa%20service%20in%20Idukki."
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
                    <h5 className="font-semibold text-orange-500">Q. Do you service Alfa Champion?</h5>
                    <p className="text-zinc-400 mt-1">Yes, we provide complete mechanical and electrical overhauls for all Alfa Champion diesel three-wheelers.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-500">Q. How close is Kootar?</h5>
                    <p className="text-zinc-400 mt-1">We are located at Chettikuzhy, which is just 2.5 km (5 mins) from Kootar Junction.</p>
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
