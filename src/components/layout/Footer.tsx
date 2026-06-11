"use client";

import React from "react";
import { Wrench, Phone, MapPin, Clock, ArrowUp } from "lucide-react";
import Button from "../ui/Button";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-zinc-950 border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 -z-10 h-72 w-full max-w-7xl rounded-full bg-orange-950/10 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-orange-600 to-yellow-500 p-2 rounded-lg text-black">
                <Wrench className="h-5 w-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl tracking-tight text-white">
                  AJITH AUTO
                </span>
                <span className="text-[10px] text-zinc-500 tracking-widest font-semibold -mt-1">
                  M O T O R S
                </span>
              </div>
            </div>
            <p className="text-sm text-zinc-400">
              Trusted experts in Ape, Atul & Commercial Three Wheeler repairs. 17+ years of dedicated service in diagnostics and mechanical maintenance.
            </p>
            <div className="pt-2">
              <Button href="tel:06282771225" variant="secondary" className="w-full sm:w-auto text-xs py-2 px-4">
                <Phone className="h-3.5 w-3.5" />
                Emergency Call
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/#home" },
                { name: "About Us", href: "/#about" },
                { name: "Services", href: "/#services" },
                { name: "Spare Part", href: "/#spare-parts" },
                { name: "Why Choose Us", href: "/#why-choose-us" },
                { name: "Blog", href: "/blog" },
                { name: "Contact Us", href: "/#contact" },
              ].map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-zinc-400 hover:text-orange-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Business Hours */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Working Hours
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Monday - Saturday</span>
                <span className="text-white font-medium">8:30 AM - 6:30 PM</span>
              </li>
              <li className="flex justify-between items-center border-b border-white/5 pb-2">
                <span>Sunday</span>
                <span className="text-orange-500 font-semibold">Emergency Only</span>
              </li>
              <li className="flex items-center gap-2 text-xs text-zinc-500 mt-2">
                <Clock className="h-3.5 w-3.5 flex-shrink-0 text-zinc-400" />
                <span>24/7 Breakdown Support Available</span>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Our Location
            </h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="flex items-start gap-2.5">
                <MapPin className="h-5 w-5 text-orange-500 flex-shrink-0 mt-0.5" />
                <span>
                  Bank, Lekshmivilasam Building,<br />
                  Chettikuzhy, Near Kootar
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="h-5 w-5 text-orange-500 flex-shrink-0" />
                <a href="tel:06282771225" className="hover:text-white transition-colors">
                  062827 71225
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider & Copyright */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-zinc-500">
            &copy; {currentYear} Ajith Auto Mobiles. All Rights Reserved.
          </p>
          <button
            onClick={handleScrollToTop}
            className="group flex items-center gap-1.5 text-xs text-zinc-400 hover:text-orange-500 transition-colors py-1 px-3 rounded-full bg-white/5 hover:bg-white/10"
          >
            <span>Back to top</span>
            <ArrowUp className="h-3 w-3 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
}
