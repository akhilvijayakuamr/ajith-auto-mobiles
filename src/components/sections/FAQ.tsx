"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs: FAQItem[] = [
    {
      question: "Do you repair Piaggio Ape vehicles in Idukki?",
      answer: "Yes, Ajith Auto Mobiles is the leading specialist for Piaggio Ape service in Idukki, Kerala. We provide expert repair, engine overhauling, gearbox rebuilding, and electrical diagnostics for all commercial passenger and cargo Ape models, including Ape City DX and Ape Xtra LD."
    },
    {
      question: "Do you provide Mahindra Alfa service?",
      answer: "Absolutely! We specialize in comprehensive Mahindra Alfa repair services in Idukki. Our diagnostics cover master brake cylinder replacements, leaf spring tensioning, complete wiring harness checks, and engine tuning for Alfa passenger and cargo three-wheelers."
    },
    {
      question: "Do you stock genuine spare parts?",
      answer: "Yes, we maintain a complete inventory of 100% genuine three-wheeler spare parts in our Chettikuzhy workshop. We stock official factory-authorized components (filters, brake shoes, clutch cables, cylinders, piston rings) for Piaggio Ape, Atul Auto, and Mahindra Alfa models."
    },
    {
      question: "How far is the workshop from Kootar?",
      answer: "Ajith Auto Mobiles is located at Chettikuzhy, Lekshmivilasam Building, which is just a 5-minute drive (approximately 2.5 km) from Kootar Junction. We are conveniently situated on the main route to support drivers from Kootar, Kattappana, and Nedumkandam."
    },
    {
      question: "Do you provide emergency breakdown support?",
      answer: "Yes, we provide emergency breakdown and mechanical towing support for commercial three-wheelers across Nedumkandam, Kattappana, Chettikuzhy, Kootar, and surrounding regions in Idukki to get your vehicle back on the road quickly."
    }
  ];

  // FAQ structured data (JSON-LD)
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-black relative overflow-hidden">
      {/* Inject FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />

      {/* Glow effects */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 -z-10 h-80 w-80 rounded-full bg-orange-600/5 blur-3xl animate-pulse" />
      <div className="absolute inset-0 bg-grid-mesh opacity-10 -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight flex items-center justify-center gap-2">
            Frequently Asked Questions
            <HelpCircle className="h-6 w-6 text-orange-500" />
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full mx-auto" />
          <p className="text-zinc-400 text-sm sm:text-base max-w-xl mx-auto">
            Find quick answers to common queries about our three-wheeler services, spare parts stock, and breakdown coverage in Idukki.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-xl border transition-all duration-300 ${
                  isOpen 
                    ? "border-orange-500/30 bg-zinc-950/60 shadow-lg shadow-orange-500/5" 
                    : "border-white/5 bg-zinc-950/20 hover:border-white/10"
                }`}
              >
                <button
                  onClick={() => toggleFAQ(idx)}
                  className="w-full flex items-center justify-between p-6 text-left outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-white group-hover:text-orange-500 transition-colors">
                    {faq.question}
                  </span>
                  <span className="ml-4 p-1.5 rounded-lg bg-zinc-900 border border-white/5 text-orange-500 flex-shrink-0">
                    {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="p-6 pt-0 border-t border-white/5 text-xs sm:text-sm text-zinc-400 leading-relaxed">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
