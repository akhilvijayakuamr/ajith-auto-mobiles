"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MapPin, Send, CheckCircle2, Clock } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    vehicleBrand: "",
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone)) {
      newErrors.phone = "Provide a valid 10-digit number";
    }
    if (!formData.vehicleBrand) newErrors.vehicleBrand = "Please select a vehicle model";
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setIsSubmitting(true);

    // Mock API Route Call simulation
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({ name: "", phone: "", vehicleBrand: "", message: "" });
      
      // Auto-hide success check after 5s
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  return (
    <section id="contact" className="py-24 bg-black relative overflow-hidden">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 -z-10 h-96 w-96 rounded-full bg-orange-600/5 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs uppercase font-extrabold tracking-widest text-orange-500 block">
            Reach Out
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Book a Service or Visit Us
          </h2>
          <div className="h-1.5 w-20 bg-gradient-to-r from-orange-600 to-yellow-500 rounded-full mx-auto" />
          <p className="text-zinc-400 text-sm sm:text-base">
            Send us a message or call directly for immediate emergency repair support near Lekshmivilasam.
          </p>
        </div>

        {/* Contact Info & Forms grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left - Contact info and Map */}
          <div className="lg:col-span-5 space-y-6 flex flex-col justify-between">
            <div className="space-y-4">
              {/* Phone Card */}
              <Card className="flex items-center gap-4 p-5 border-white/5 bg-zinc-950/40" glow>
                <div className="bg-zinc-900 p-3 rounded-lg text-orange-500 flex-shrink-0">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">
                    Call Us Direct
                  </span>
                  <a href="tel:06282771225" className="text-lg font-bold text-white hover:text-orange-500 transition-colors">
                    062827 71225
                  </a>
                </div>
              </Card>

              {/* Location Card */}
              <Card className="flex items-center gap-4 p-5 border-white/5 bg-zinc-950/40">
                <div className="bg-zinc-900 p-3 rounded-lg text-orange-500 flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">
                    Workshop Location
                  </span>
                  <p className="text-sm font-semibold text-white">
                    Bank, Lekshmivilasam Building,<br />
                    Chettikuzhy, Near Kootar
                  </p>
                </div>
              </Card>

              {/* Animated GPS Route Visualizer Line */}
              <Card className="p-5 border-white/5 bg-zinc-950/40 overflow-hidden flex flex-col relative group">
                <span className="text-[10px] text-zinc-500 font-extrabold uppercase tracking-widest block mb-3 text-left">
                  GPS Route Path Finder
                </span>
                
                <div className="relative w-full h-20 flex items-center justify-center bg-black/40 rounded-lg border border-white/5 p-2">
                  <svg className="w-full h-full stroke-orange-500/30 stroke-[3px] stroke-linecap-round stroke-linejoin-round" viewBox="0 0 350 80" xmlns="http://www.w3.org/2000/svg">
                    {/* Background path line */}
                    <path
                      d="M 15,40 C 100,-10 180,90 335,40"
                      fill="none"
                      stroke="#1a1a1a"
                      strokeWidth="4"
                    />
                    
                    {/* Glowing Route Tracer */}
                    <motion.path
                      d="M 15,40 C 100,-10 180,90 335,40"
                      fill="none"
                      stroke="url(#routeTracerGlow)"
                      strokeWidth="4"
                      strokeLinecap="round"
                      initial={{ strokeDasharray: "40 1000", strokeDashoffset: 0 }}
                      animate={{ strokeDashoffset: -1040 }}
                      transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                    />
                    
                    {/* Start dot */}
                    <circle cx="15" cy="40" r="5" fill="#52525b" />
                    {/* Mid point dot */}
                    <circle cx="170" cy="45" r="4" fill="#d97706" />
                    {/* Target dot */}
                    <circle cx="335" cy="40" r="7" fill="#ea580c" className="animate-pulse" />
                    
                    <defs>
                      <linearGradient id="routeTracerGlow" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f97316" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="#facc15" />
                      </linearGradient>
                    </defs>
                  </svg>
                  
                  {/* Absolute positioned labels */}
                  <span className="absolute left-4 bottom-1.5 text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                    Kootar
                  </span>
                  <span className="absolute left-[46%] top-1 text-[9px] font-mono text-zinc-500 uppercase tracking-wider">
                    Chettikuzhy
                  </span>
                  <span className="absolute right-4 bottom-1.5 text-[9px] font-mono text-orange-500 font-extrabold uppercase tracking-wider animate-pulse">
                    Workshop
                  </span>
                </div>
              </Card>

              {/* Working Hours Info */}
              <Card className="flex items-center gap-4 p-5 border-white/5 bg-zinc-950/40">
                <div className="bg-zinc-900 p-3 rounded-lg text-orange-500 flex-shrink-0">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider block">
                    Business Hours
                  </span>
                  <p className="text-sm font-semibold text-white">
                    Mon - Sat: 8:30 AM - 6:30 PM <br />
                    <span className="text-orange-500 font-bold">24/7 Breakdown Hotline Available</span>
                  </p>
                </div>
              </Card>
            </div>

            {/* Google Map Frame */}
            <div className="rounded-xl overflow-hidden border border-white/5 h-64 relative shadow-inner mt-4">
              <iframe
                title="Ajith Auto Mobiles Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3934.3752250005705!2d77.1895319153051!3d9.56285408990142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b0703f8a48ef66d%3A0x2ffb587d605663bd!2sKootar!5e0!3m2!1sen!2sin!4v1655000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="grayscale contrast-125 brightness-75 hover:grayscale-0 transition-all duration-300"
              />
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="lg:col-span-7">
            <Card className="p-8 border-white/5 bg-zinc-950/40 h-full flex flex-col justify-center">
              <h3 className="text-xl font-bold text-white tracking-tight mb-2">
                Send a Message
              </h3>
              <p className="text-xs text-zinc-400 mb-6">
                Fill in your details and model requirements below. We will get back to you with estimation reports.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="e.g. Ramesh Kumar"
                      className={`w-full px-4 py-3 rounded-lg bg-zinc-900 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors ${
                        errors.name ? "border-red-500/50" : "border-white/5"
                      }`}
                    />
                    {errors.name && <p className="text-[10px] text-red-400 font-medium">{errors.name}</p>}
                  </div>

                  {/* Phone field */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="e.g. 9876543210"
                      className={`w-full px-4 py-3 rounded-lg bg-zinc-900 border text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors ${
                        errors.phone ? "border-red-500/50" : "border-white/5"
                      }`}
                    />
                    {errors.phone && <p className="text-[10px] text-red-400 font-medium">{errors.phone}</p>}
                  </div>
                </div>

                {/* Vehicle Brand select */}
                <div className="space-y-1.5">
                  <label htmlFor="vehicleBrand" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Three Wheeler Category
                  </label>
                  <select
                    id="vehicleBrand"
                    name="vehicleBrand"
                    value={formData.vehicleBrand}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg bg-zinc-900 border text-sm text-white focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors ${
                      errors.vehicleBrand ? "border-red-500/50" : "border-white/5"
                    }`}
                  >
                    <option value="" disabled className="text-zinc-500">
                      Select Vehicle Brand...
                    </option>
                    <option value="Piaggio Ape Passenger">Piaggio Ape Passenger</option>
                    <option value="Piaggio Ape Cargo">Piaggio Ape Cargo</option>
                    <option value="Atul Auto Gem">Atul Auto Gem</option>
                    <option value="CNG/LPG Auto Rickshaw">CNG/LPG Auto Rickshaw</option>
                    <option value="Commercial Cargo (Other)">Commercial Cargo (Other)</option>
                  </select>
                  {errors.vehicleBrand && (
                    <p className="text-[10px] text-red-400 font-medium">{errors.vehicleBrand}</p>
                  )}
                </div>

                {/* Message field */}
                <div className="space-y-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-zinc-400 uppercase tracking-wider">
                    Message / Fault Description (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Describe issue (e.g. Engine noise, brake adjustments, regular service bookings)"
                    className="w-full px-4 py-3 rounded-lg bg-zinc-900 border border-white/5 text-sm text-white placeholder-zinc-500 focus:outline-none focus:ring-1 focus:ring-orange-500 transition-colors resize-none"
                  />
                </div>

                {/* Submit button */}
                <div className="relative">
                  <Button
                    type="submit"
                    variant="primary"
                    disabled={isSubmitting}
                    className="w-full py-3.5 justify-center font-bold text-base"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        {/* Spinner */}
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-black"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending Booking Details...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        <Send className="h-4 w-4" />
                        Send Booking Request
                      </span>
                    )}
                  </Button>

                  {/* Form Success Animation Message */}
                  {isSuccess && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="absolute inset-0 bg-zinc-950 flex items-center justify-center gap-2.5 rounded-lg border border-emerald-500/30 text-emerald-400 text-sm font-semibold tracking-wide"
                    >
                      <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                      <span>Thank you! We will call you back shortly.</span>
                    </motion.div>
                  )}
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
