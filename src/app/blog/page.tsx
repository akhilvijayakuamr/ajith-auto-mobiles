import React from "react";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BookOpen, Calendar, Clock, ChevronRight, Fuel, Wrench, CheckSquare, Droplet, ShieldAlert } from "lucide-react";

export const metadata: Metadata = {
  title: "Three-Wheeler Maintenance & Repair Blog | Ajith Auto Mobiles",
  description: "Read professional guides on Piaggio Ape, Atul Auto, and Mahindra Alfa maintenance, fuel mileage tips, engine oil selection, and braking safety. Written by experts at Ajith Auto Mobiles in Idukki.",
  alternates: {
    canonical: "/blog",
  },
};

const blogPosts = [
  {
    title: "How to Increase Three Wheeler Mileage: The Complete Guide",
    slug: "how-to-increase-three-wheeler-mileage",
    excerpt: "Discover practical and proven tips to maximize fuel economy for auto-rickshaws operating in steep and hilly terrains like Idukki. From clutch calibration to correct tyre pressure, read how to reduce daily operating costs.",
    date: "June 10, 2026",
    readTime: "6 min read",
    category: "Mileage & Performance",
    icon: Fuel,
    glowColor: "from-emerald-500/20 to-teal-500/10",
    badgeColor: "text-emerald-400 bg-emerald-950/30 border-emerald-500/20",
  },
  {
    title: "5 Common Piaggio Ape Engine Problems & Solutions",
    slug: "common-piaggio-ape-engine-problems",
    excerpt: "Experiencing starting troubles, power loss, or white smoke from your Piaggio Ape? Learn how to identify and diagnose common diesel engine, clutch, and fuel injector issues faced by operators in Kerala.",
    date: "June 08, 2026",
    readTime: "7 min read",
    category: "Diagnostics & Troubleshooting",
    icon: ShieldAlert,
    glowColor: "from-rose-500/20 to-red-500/10",
    badgeColor: "text-rose-400 bg-rose-950/30 border-rose-500/20",
  },
  {
    title: "The Ultimate Atul Auto Maintenance Checklist",
    slug: "atul-auto-maintenance-checklist",
    excerpt: "Ensure your cargo carrier and passenger auto-rickshaws run continuously without unexpected breakdowns. Access our detailed daily, 5000 km, and 10000 km service intervals built for Atul Auto diesel models.",
    date: "June 05, 2026",
    readTime: "5 min read",
    category: "Preventative Maintenance",
    icon: CheckSquare,
    glowColor: "from-orange-500/20 to-amber-500/10",
    badgeColor: "text-orange-400 bg-orange-950/30 border-orange-500/20",
  },
  {
    title: "Best Engine Oil for Three Wheelers: Ape, Atul & Alfa Guide",
    slug: "best-engine-oil-for-three-wheelers",
    excerpt: "Understand viscosity grades like 15W-40 and 20W-50. Learn why commercial three-wheelers require specialized oil to handle high operating temperatures, mountain payloads, and engine wear protection.",
    date: "June 02, 2026",
    readTime: "5 min read",
    category: "Lubricants & Spares",
    icon: Droplet,
    glowColor: "from-blue-500/20 to-cyan-500/10",
    badgeColor: "text-blue-400 bg-blue-950/30 border-blue-500/20",
  },
  {
    title: "When to Replace Brake Shoes: Brakes Safety Guide",
    slug: "when-to-replace-brake-shoes",
    excerpt: "Safety first on Idukki's hairpin curves! Learn the 5 warning signs of worn auto-rickshaw brake shoes—squealing noises, soft pedal feel, or pulling to one side—and how to inspect drum brake systems.",
    date: "May 29, 2026",
    readTime: "5 min read",
    category: "Safety & Mechanics",
    icon: Wrench,
    glowColor: "from-yellow-500/20 to-amber-500/10",
    badgeColor: "text-yellow-400 bg-yellow-950/30 border-yellow-500/20",
  },
];

export default function BlogIndexPage() {
  return (
    <>
      <Navbar />
      <main className="bg-black text-zinc-100 min-h-screen pt-28 pb-20 relative overflow-hidden">
        {/* Background Decorative Gradients */}
        <div className="absolute top-0 left-0 w-full h-[60vh] bg-gradient-to-b from-orange-950/15 via-transparent to-transparent -z-10" />
        <div className="absolute top-1/3 left-1/4 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 -z-10 h-80 w-80 rounded-full bg-yellow-600/5 blur-3xl" />
        <div className="absolute inset-0 bg-grid-mesh opacity-10 -z-10" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
          {/* Breadcrumbs */}
          <nav className="text-xs text-zinc-500 font-mono flex items-center gap-2">
            <a href="/" className="hover:text-orange-500 transition-colors">HOME</a>
            <span>/</span>
            <span className="text-orange-500">BLOG</span>
          </nav>

          {/* Page Header */}
          <div className="text-center space-y-4 max-w-2xl mx-auto">
            <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
              Knowledge Hub
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              Three Wheeler Maintenance & Repair Blog
            </h1>
            <div className="h-1 w-24 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full mx-auto" />
            <p className="text-zinc-400 text-sm sm:text-base">
              Expert articles, service checklists, diagnostics, and mileage improvement tips for Piaggio Ape, Atul Auto, and Mahindra Alfa rickshaw drivers in India.
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
            {blogPosts.map((post) => {
              const IconComp = post.icon;
              return (
                <article
                  key={post.slug}
                  className="group relative rounded-2xl border border-white/5 bg-zinc-950/40 p-6 flex flex-col justify-between transition-all duration-300 hover:border-orange-500/20 hover:bg-zinc-950/60 shadow-xl overflow-hidden"
                >
                  {/* Subtle hover background glow */}
                  <div className={`absolute -inset-px bg-gradient-to-br ${post.glowColor} opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -z-10`} />

                  <div className="space-y-4">
                    {/* Category & Icon */}
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] uppercase font-bold tracking-wider px-2.5 py-1 rounded-full border ${post.badgeColor}`}>
                        {post.category}
                      </span>
                      <div className="h-9 w-9 rounded-lg bg-zinc-900 border border-white/5 flex items-center justify-center text-orange-500">
                        <IconComp className="h-4 w-4" />
                      </div>
                    </div>

                    {/* Title & Excerpt */}
                    <div className="space-y-2">
                      <h2 className="text-lg font-bold text-white group-hover:text-orange-500 transition-colors duration-200 line-clamp-2">
                        <a href={`/blog/${post.slug}`}>
                          {post.title}
                        </a>
                      </h2>
                      <p className="text-xs sm:text-sm text-zinc-400 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Metadata & CTA */}
                  <div className="pt-6 mt-6 border-t border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-3 text-zinc-500 text-xs font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {post.date}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                    
                    <a
                      href={`/blog/${post.slug}`}
                      className="text-orange-500 text-xs font-bold flex items-center gap-0.5 group-hover:translate-x-1 transition-transform"
                    >
                      Read
                      <ChevronRight className="h-3 w-3" />
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
