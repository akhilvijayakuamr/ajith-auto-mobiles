import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, Calendar, Clock, ArrowLeft, Phone, MapPin, CheckSquare } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "The Ultimate Atul Auto Maintenance Checklist | Service Guide",
  description: "Prevent breakdowns with the ultimate Atul Auto maintenance checklist. Get daily checks, 5,000 km, and 10,000 km service intervals for diesel autos.",
  alternates: {
    canonical: "/blog/atul-auto-maintenance-checklist",
  },
};

export default function AtulAutoMaintenanceChecklist() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "The Ultimate Atul Auto Maintenance Checklist for Longevity & High Performance",
    "description": "A comprehensive maintenance and servicing schedule guide for Atul Auto passenger and cargo three-wheelers operating on hilly terrains.",
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
    "datePublished": "2026-06-05T10:00:00+05:30",
    "dateModified": "2026-06-05T10:00:00+05:30"
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
              Preventative Maintenance
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              The Ultimate Atul Auto Maintenance Checklist
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 pt-2 border-b border-white/5 pb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                June 05, 2026
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
                  Atul Auto three-wheelers, such as the **Atul Gem** and **Atul Elite**, are heavy-duty workhorses trusted across India for cargo logistics and passenger transport. Due to their high load capacity, they are frequently used on the demanding hilly roads of Idukki, Kattappana, and Nedumkandam.
                </p>
                <p>
                  To prevent unexpected breakdowns, maintain resale value, and ensure passenger safety, establishing a strict preventative maintenance schedule is essential. Below is the ultimate Atul Auto maintenance checklist, divided into daily checks and periodic mechanical service intervals.
                </p>
              </section>

              {/* Malayalam Service Panel */}
              <section className="p-6 rounded-xl border border-orange-500/10 bg-zinc-950/40 space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-orange-500" />
                  മലയാളത്തിൽ ഒരു വിവരണം (Atul Auto Maintenance)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  അതുൽ ഓട്ടോ റിക്ഷകളുടെയും ഗുഡ്സ് വണ്ടികളുടെയും സുഗമമായ പ്രവർത്തനത്തിന് കൃത്യമായ സർവീസ് അത്യാവശ്യമാണ്. എഞ്ചിൻ ഓയിൽ മാറ്റുക, ബ്രേക്ക് ഷൂ പരിശോധിക്കുക, ഫിൽട്ടറുകൾ വൃത്തിയാക്കുക എന്നിവ നിശ്ചിത കിലോമീറ്റർ പൂർത്തിയാകുമ്പോൾ ചെയ്യേണ്ടതാണ്. <strong>ത്രീ വീലർ സർവീസ്</strong>, <strong>അതുൽ ഓട്ടോ റിപ്പയർ</strong> എന്നിവയ്ക്ക് ഇടുക്കി ജില്ലയിൽ അജിത് ഓട്ടോ മൊബൈൽസ് മികച്ച സേവനം നൽകുന്നു.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">Daily Inspection Checklist (Before You Drive)</h2>
                <p>
                  Before starting your daily shifts, spend 5 minutes performing these simple inspections. This helps detect leaks or brake faults before they cause an accident on the road:
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-zinc-300">
                    <CheckSquare className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Engine Oil Level:</strong> Pull the dipstick, wipe it, re-insert, and verify that the oil level is between the Minimum and Maximum marks. Top up if needed.</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-300">
                    <CheckSquare className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Brake Fluid Level:</strong> Verify that the master brake cylinder fluid reservoir is full. Inspect under the wheels for any signs of brake oil leaks.</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-300">
                    <CheckSquare className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Tire Condition:</strong> Check for visible tyre wear, cuts, or low tyre pressure. Ensure the spare wheel is functional and inflated.</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-300">
                    <CheckSquare className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Electricals:</strong> Test the headlight (high/low beams), indicators, brake lights, and the horn. Electrical failure on mist-covered mountain roads is extremely dangerous.</span>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">Every 5,000 km Service Checklist</h2>
                <p>
                  At every 5,000 km milestone, your Atul Auto requires intermediate lubrication updates and filter cleaning:
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-zinc-300">
                    <CheckSquare className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Change Engine Oil:</strong> Drain the dirty engine lubricant and refill with recommended grade oil (typically 15W-40 or 20W-50 API CF-4 or higher).</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-300">
                    <CheckSquare className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Clean Air Filter Element:</strong> Remove the paper filter element, tap out loose dust, or blow it clean with low-pressure compressed air. Do not wash paper filters with water.</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-300">
                    <CheckSquare className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Battery Top-Up:</strong> Check the electrolyte levels in lead-acid batteries and top up with distilled water if they are below the plates. Clean terminal corrosion.</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-300">
                    <CheckSquare className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Grease Leaf Springs:</strong> Apply high-pressure grease to the leaf spring shackle pins and front suspension bearings to absorb shock loads.</span>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">Every 10,000 km Advanced Checklist</h2>
                <p>
                  This is a major maintenance interval where complex fuel, transmission, and braking systems must be checked:
                </p>
                <ul className="space-y-2.5">
                  <li className="flex items-start gap-2 text-zinc-300">
                    <CheckSquare className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Replace Fuel & Oil Filters:</strong> Replace both the primary and secondary diesel fuel filters to prevent water or microparticles from clogging the injection pump. Replace the oil filter canister.</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-300">
                    <CheckSquare className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Brake Shoe Inspection:</strong> Open the brake drums. Check the brake lining thickness. If the lining thickness is less than 1.5mm, replace the brake shoes immediately.</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-300">
                    <CheckSquare className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Gearbox & Differential Oil Change:</strong> Replace the transmission fluid to prevent wear on heavy-load gears.</span>
                  </li>
                  <li className="flex items-start gap-2 text-zinc-300">
                    <CheckSquare className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                    <span><strong>Clutch Assembly Review:</strong> Adjust the clutch selector cable and verify that the clutch plates engage smoothly without slipping or shuddering.</span>
                  </li>
                </ul>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">Conclusion</h2>
                <p>
                  Consistent maintenance is the secret to getting a long, trouble-free life from your Atul Auto three-wheeler. Skipping basic oil or filter changes can lead to premature piston wear, injector failures, or brake loss on steep hills.
                </p>
                <p>
                  At <strong>Ajith Auto Mobiles</strong>, we specialize in complete Atul Auto repairs. From engine rebuilding and valve adjustments to brake system overhauls and leaf spring tensioning, we do it all. Call us or visit our Chettikuzhy service center in Idukki to book a complete vehicle health checkup.
                </p>
              </section>
            </div>

            {/* Right Side Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Contact Card */}
              <div className="rounded-xl border border-white/5 bg-zinc-950/60 p-6 space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-orange-600/5 blur-xl pointer-events-none" />
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
                </div>

                <div className="space-y-3 pt-4 border-t border-white/5">
                  <a
                    href="tel:06282771225"
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-lg bg-gradient-to-r from-orange-600 to-yellow-500 text-black font-bold text-sm tracking-wider hover:opacity-95 transition-opacity"
                  >
                    <CheckSquare className="h-4 w-4" />
                    Book Service Now
                  </a>
                  <a
                    href="https://wa.me/916282771225?text=Hello%20Ajith%20Auto%20Mobiles%2C%20I%20want%20to%20book%20an%20Atul%20Auto%20maintenance%20service."
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
                  Related Services
                </h4>
                <ul className="space-y-2.5 text-xs text-zinc-400">
                  <li>
                    <a href="/services/atul-auto-service-idukki" className="hover:text-orange-500 transition-colors">
                      → Atul Auto Service Idukki
                    </a>
                  </li>
                  <li>
                    <a href="/services/three-wheeler-spare-parts-idukki" className="hover:text-orange-500 transition-colors">
                      → Three Wheeler Spare Parts
                    </a>
                  </li>
                  <li>
                    <a href="/blog/best-engine-oil-for-three-wheelers" className="hover:text-orange-500 transition-colors">
                      → Best Engine Oil Guide
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
