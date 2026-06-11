import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { Wrench, ShieldCheck, CheckCircle2, Phone, MapPin } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Atul Auto Service Idukki | Three Wheeler Workshop | Ajith Auto Mobiles",
  description: "Certified Atul Auto service in Idukki, Kerala. Clutch overhauling, steering calibrations, brake system adjustment for Atul Gem & Smart at Chettikuzhy near Kootar.",
  alternates: {
    canonical: "/services/atul-auto-service-idukki",
  },
};

export default function AtulAutoServicePage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-zinc-100 min-h-screen pt-28 pb-16 relative overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b from-orange-950/20 via-transparent to-transparent -z-10" />
        <div className="absolute top-1/4 right-1/4 -z-10 h-96 w-96 rounded-full bg-yellow-500/5 blur-3xl animate-pulse" />
        <div className="absolute inset-0 bg-grid-mesh opacity-10 -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          {/* Breadcrumbs */}
          <nav className="text-xs text-zinc-500 font-mono flex items-center gap-2">
            <a href="/" className="hover:text-orange-500 transition-colors">HOME</a>
            <span>/</span>
            <span className="text-zinc-400">SERVICES</span>
            <span>/</span>
            <span className="text-orange-500">ATUL AUTO SERVICE IDUKKI</span>
          </nav>

          {/* Page Header */}
          <div className="space-y-4">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
              Atul Auto Specialists
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Atul Auto Service in Idukki, Kerala
            </h1>
            <h2 className="text-lg text-zinc-400 font-medium">
              അതുൽ ഓട്ടോ റിപ്പയർ ഇടുക്കി | Atul Auto Workshop Idukki Chettikuzhy
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full" />
          </div>

          {/* Article / SEO Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pt-4">
            {/* Left Column: Long-form Content */}
            <div className="lg:col-span-8 space-y-8 text-sm sm:text-base text-zinc-300 leading-relaxed">
              <section className="space-y-4">
                <p>
                  Atul Auto three-wheelers are widely trusted for their high-loading capacity, durability, and strong chassis frames in commercial and farming sectors throughout Kerala. However, driving Atul cargo carriers and passenger rickshaws daily on the steep elevations and unpaved pathways of Idukki puts extreme strain on the steering assemblies, suspension leaf springs, and brake shoes. At <strong>Ajith Auto Mobiles</strong> (based in Chettikuzhy, Idukki), we specialize in complete, professional **Atul Auto Workshop Idukki** services.
                </p>
                <p>
                  Our workshop has serviced thousands of Atul three-wheelers over the past 17+ years. We provide diagnostics, tuning, and major mechanical rebuilds for the entire Atul Auto fleet, including the Atul Gem Cargo, Atul Gem Passenger, and Atul Smart Cargo series.
                </p>
              </section>

              {/* Local language targeting */}
              <section className="p-6 rounded-xl border border-orange-500/10 bg-zinc-950/40 space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <ShieldCheck className="h-5 w-5 text-orange-500" />
                  മലയാളത്തിൽ ഒരു മികച്ച സർവീസ് (Atul Auto Kerala Service)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  നിങ്ങളുടെ അതുൽ ഓട്ടോ ത്രീ വീലർ വാഹനങ്ങൾക്ക് മികച്ച മെക്കാനിക്കൽ തകരാറുകൾ പരിഹരിക്കാൻ ഇടുക്കിയിലെ ഏറ്റവും മികച്ച <strong>ത്രീ വീലർ സർവീസ്</strong> സ്ഥാപനമായ അജിത് ഓട്ടോ മൊബൈൽസ് സമീപിക്കുക. ഞങ്ങൾ അതുൽ ജം കാർഗോ, അതുൽ സ്മാർട്ട് മോഡലുകൾ എന്നിവയ്ക്കായുള്ള <strong>അതുൽ ഓട്ടോ റിപ്പയർ</strong>, ക്ലച്ച് കേബിൾ മാറ്റൽ, സ്റ്റിയറിംഗ് അലൈൻമെന്റ്, എൻജിൻ ഓവർഹോളിങ് എന്നിവ മികച്ച രീതിയിൽ ചെയ്തു നൽകുന്നു.
                </p>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Our Specialized Atul Auto Services
                </h3>
                <p>
                  Atul Auto vehicles require robust structural and mechanical checks to maintain cargo loading safety. Our technicians carry out specific procedures:
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Steering Ball Racer & Cone Adjustment:</strong> Indian three-wheelers are prone to handle wobbles due to road vibration. We calibrate steering ball racers and front fork dampeners for precise control.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Suspension Leaf Spring Shackle Tensioning:</strong> We reinforce leaf spring leaf bands, replace worn shackle bushes, and swap heavy-duty helper springs to prevent sagging.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Atul Diesel Engine Rebuilding:</strong> Precision cylinder boring, valve grinding, injector pump testing, and governor lever adjustments for Atul single-cylinder water-cooled or air-cooled engines.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Brake Drum Lining Adjustments:</strong> Replacing worn brake shoe pads, servicing the wheel cylinders, and replacing brake booster pipes.</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-zinc-300">
                    <CheckCircle2 className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Periodic Lubricant Fluid Renewal:</strong> Gearbox oil swap, differential fluid flushing, and high-mileage engine oil filter maintenance.</span>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h3 className="text-xl font-bold text-white tracking-tight">
                  Genuine Spares & Diagnostic Precision
                </h3>
                <p>
                  We realize that when your commercial vehicle is in the workshop, your business is on hold. That is why we maintain stock of genuine factory-authorized Atul Auto replacement parts. By stocking filters, starter coils, brake lines, and hub assemblies, we deliver fast turnarounds.
                </p>
                <p>
                  Ajith Auto Mobiles is located in Chettikuzhy, near Kootar, on the main arterial corridor. This central position makes our workshop a convenient choice for operators traveling from Nedumkandam, Kattappana, Adimali, and Thodupuzha.
                </p>
              </section>

              {/* Local regions */}
              <section className="space-y-3 border-t border-white/5 pt-6">
                <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">
                  Atul Auto Repair Locations in Idukki
                </h4>
                <div className="flex flex-wrap gap-2 text-xs">
                  {["Chettikuzhy", "Kootar", "Kattappana", "Nedumkandam", "Adimali", "Thodupuzha", "Cumbummettu", "Chakkupallam", "Puliyanmala"].map((area) => (
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
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-yellow-500/5 blur-xl pointer-events-none" />
                
                <h3 className="text-base font-bold text-white tracking-wider uppercase border-b border-white/5 pb-3">
                  Schedule Service
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
                    href="https://wa.me/916282771225?text=Hello%20Ajith%20Auto%20Mobiles%2C%20I%20want%20to%20book%20an%20Atul%20Auto%20service%20in%20Idukki."
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
                    <h5 className="font-semibold text-orange-500">Q. Do you service Atul Gem models?</h5>
                    <p className="text-zinc-400 mt-1">Yes, we provide specialized repairs for all Atul Gem Passenger and Atul Gem Cargo carriers.</p>
                  </div>
                  <div>
                    <h5 className="font-semibold text-orange-500">Q. Where are you located?</h5>
                    <p className="text-zinc-400 mt-1">We are in Chettikuzhy, situated on the main road between Kattappana and Kootar.</p>
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
