import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, Calendar, Clock, ArrowLeft, Phone, MapPin, Wrench } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "When to Replace Brake Shoes | Auto Rickshaw Brakes Safety",
  description: "Learn when to replace the brake shoes on your three-wheeler. Read the 5 critical warning signs of drum brake wear for safety on hilly roads.",
  alternates: {
    canonical: "/blog/when-to-replace-brake-shoes",
  },
};

export default function WhenToReplaceBrakeShoes() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "When to Replace Brake Shoes: Essential Brakes Safety Guide for Auto Rickshaws",
    "description": "An essential safety-focused guide identifying warning signs of worn brake shoes and drum brake maintenance for three-wheelers.",
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
    "datePublished": "2026-05-29T12:00:00+05:30",
    "dateModified": "2026-05-29T12:00:00+05:30"
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
              Safety & Mechanics
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              When to Replace Brake Shoes: Essential Brakes Safety Guide
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-zinc-500 pt-2 border-b border-white/5 pb-4">
              <span className="flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                May 29, 2026
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
                  In mountainous areas like Idukki, Kerala, a vehicle's braking system is your primary lifesaver. Driving passenger auto-rickshaws or loaded cargo vehicles down steep grades, winding routes, and hairpin bends puts massive thermal and mechanical load on brakes. 
                </p>
                <p>
                  Most three-wheelers (such as the **Piaggio Ape**, **Atul Auto Gemini**, and **Mahindra Alfa**) use drum brake configurations. Unlike disc brakes, drum brakes are enclosed, meaning brake shoes wear down out of direct sight. Recognizing when to replace these shoes is vital to avoid total braking failure. Below, we discuss the 5 critical warning signs that indicate your three-wheeler brake shoes need immediate replacement.
                </p>
              </section>

              {/* Malayalam Service Panel */}
              <section className="p-6 rounded-xl border border-orange-500/10 bg-zinc-950/40 space-y-3">
                <h3 className="text-base font-bold text-white uppercase tracking-wider flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-orange-500" />
                  മലയാളത്തിൽ ഒരു വിവരണം (Brake Safety Guide)
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400">
                  ഇടുക്കിയിലെ മലയോര റോഡുകളിൽ സുരക്ഷിതമായി ഓടിക്കാൻ മികച്ച ബ്രേക്കിംഗ് സിസ്റ്റം നിർബന്ധമാണ്. ബ്രേക്ക് ചെയ്യുമ്പോൾ ഉണ്ടാകുന്ന ശബ്ദങ്ങൾ, ബ്രേക്ക് പെഡലിന്റെ അയവ്, വണ്ടി ഒരു സൈഡിലേക്ക് വലിയുക എന്നിവ ബ്രേക്ക് ഷൂ കേടായതിന്റെ ലക്ഷണങ്ങളാണ്. കുറഞ്ഞത് 1.5mm തിക്ക്നെസ്സ് എങ്കിലും ബ്രേക്ക് ഷൂവിന് ഉണ്ടായിരിക്കണം. നിങ്ങളുടെ ത്രീ വീലർ ബ്രേക്ക് സുരക്ഷിതമാക്കാൻ അജിത് ഓട്ടോ മൊബൈൽസ് <strong>ത്രീ വീലർ സർവീസ്</strong> ലഭ്യമാക്കുക.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">1. Squealing, Screeching, or Metal Grinding Noises</h2>
                <p>
                  If you hear high-pitched squealing or grinding noises when pressing the brake pedal, your brake linings are exhausted.
                </p>
                <p>
                  <strong>Why it happens:</strong> Brake shoes are made of a metal backing plate with a high-friction lining bonded to it. When the lining wears away, the bare metal plate grinds directly against the inside of the rotating cast iron brake drum.
                </p>
                  <p>
                    <strong>Consequence:</strong> Metal-on-metal friction severely scores and damages the brake drum, making it thin and prone to cracking. Replacing shoes late can cost you three times more if you have to replace the drums too.
                  </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">2. Spongy or Soft Brake Pedal</h2>
                <p>
                  When you press the brake pedal, it should feel firm and register braking force in the first few inches of travel.
                </p>
                <p>
                  <strong>Why it happens:</strong> If the pedal feels spongy, sinks all the way to the floorboard, or requires "pumping" to stop the vehicle, there is either air in the brake lines, a leaking wheel cylinder, or the brake shoe self-adjuster is frozen.
                </p>
                <p>
                  <strong>Solution:</strong> Visit a technician to bleed the air out of the hydraulic lines, check the brake oil level, and inspect the cylinder seals. Adjust the brake shoe clearance star-wheel.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">3. Rickshaw Pulling to One Side Under Braking</h2>
                <p>
                  A safe vehicle stops in a straight line. If your auto-rickshaw pulls or veers to the left or right when you apply the brakes, the braking force is uneven.
                </p>
                <p>
                  <strong>Why it happens:</strong> One of the front or rear wheels is braking harder than the other. This can be caused by oil or grease leaking onto the brake shoe lining on one side (reducing its grip), a stuck wheel cylinder piston, or uneven shoe wear.
                </p>
                <p>
                  <strong>Danger:</strong> On wet or gravelly roads in Kattappana or Kootar, uneven braking can easily cause a three-wheeler to slide or flip over.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">4. Increased Stopping Distances</h2>
                <p>
                  If you notice that your auto-rickshaw takes longer to come to a complete stop than it used to, your brake efficiency is compromised.
                </p>
                <p>
                  This is caused by "brake fade" (when worn-out linings overheat and lose their frictional grip) or simply because the lining material has crystallized due to heavy braking down mountain roads. Crystallized linings have a smooth, glass-like surface that cannot grip the drum effectively.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">5. Brake Linings Worn Below 1.5 mm</h2>
                <p>
                  If you open the brake drums for servicing, measure the thickness of the friction lining bonded to the metal shoe.
                </p>
                <p>
                  If the lining thickness is **1.5 mm or less**, the shoes have reached the end of their service life and must be replaced immediately. Do not attempt to rivit old shoes manually as it can fail under heavy emergency braking. Always install factory-bonded complete brake shoe units.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-xl font-bold text-white">Conclusion</h2>
                <p>
                  Never compromise on your vehicle's brakes, especially when driving commercial payloads across Kerala's hilly terrain. Regular inspection every 5,000 km will keep you, your passengers, and your cargo safe.
                </p>
                <p>
                  At <strong>Ajith Auto Mobiles</strong>, we carry out complete brake servicing: drum skimming/turning, wheel cylinder replacements, master cylinder repairs, brake line bleeding, and genuine KBX / factory brake shoe replacements. Visit us in Chettikuzhy, near Kootar, to get your brakes checked today.
                </p>
              </section>
            </div>

            {/* Right Side Sidebar */}
            <div className="lg:col-span-4 space-y-6">
              {/* Contact Card */}
              <div className="rounded-xl border border-white/5 bg-zinc-950/60 p-6 space-y-6 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-orange-600/5 blur-xl pointer-events-none" />
                <h3 className="text-base font-bold text-white tracking-wider uppercase border-b border-white/5 pb-3">
                  Brake Safety Check
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
                    <Wrench className="h-4 w-4" />
                    Inspect My Brakes
                  </a>
                  <a
                    href="https://wa.me/916282771225?text=Hello%20Ajith%20Auto%20Mobiles%2C%20I%20want%20to%20book%20a%20brake%20inspection%20and%20shoe%20replacement%20service."
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
                    <a href="/services/auto-rickshaw-repair-idukki" className="hover:text-orange-500 transition-colors">
                      → Auto Rickshaw Repair & Service
                    </a>
                  </li>
                  <li>
                    <a href="/services/three-wheeler-spare-parts-idukki" className="hover:text-orange-500 transition-colors">
                      → Three Wheeler Spare Parts
                    </a>
                  </li>
                  <li>
                    <a href="/blog/atul-auto-maintenance-checklist" className="hover:text-orange-500 transition-colors">
                      → Atul Maintenance Checklist
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
