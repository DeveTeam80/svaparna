"use client";

import { motion } from "motion/react";

export default function TreatmentPackages() {
  return (
    <section
      id="nature-inspired"
      className="py-20 bg-[#fffefd] text-primary-brand relative overflow-hidden border-t border-primary-brand/5"
      style={{
        backgroundColor: "#fffefd",
        backgroundImage: `
          radial-gradient(#c8a35822 0.8px, transparent 0.8px), 
          radial-gradient(#c8a35822 0.8px, #fffefd 0.8px)
        `,
        backgroundSize: "24px 24px",
        backgroundPosition: "0 0, 12px 12px",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffefd] via-[#fffefd]/30 to-[#fffefd] pointer-events-none" />

      <motion.div
        className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16 lg:mb-20">
          <div className="inline-flex items-center bg-primary-brand/5 border border-primary-brand/10 px-5 py-2 rounded-full mb-5">
            <span className="text-xs uppercase tracking-[0.18em] text-[#631a47]">
              Our Packages
            </span>
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight leading-tight">
            Structured Plans for Sustainable Healing.
          </h2>
        </div>

        {/* Main Layout */}
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-10 lg:gap-12 xl:gap-16 items-center">
          {/* LEFT COLUMN */}
          <div className="order-2 lg:order-1 flex flex-col justify-between gap-14 lg:gap-20">
            {/* Physiotherapy */}
            <div className="max-w-md lg:max-w-none">
              <span className="block text-[11px] font-bold tracking-[0.22em] uppercase text-gold-start mb-3">
                Physiotherapy
              </span>

              <h3 className="font-serif text-2xl font-bold text-primary-brand mb-6">
                Consultation Pricing
              </h3>

              <ul className="space-y-4 text-neutral-900">
                <li className="flex items-center justify-between border-b border-primary-brand/10 pb-3">
                  <span className="text-base">Initial Consultation</span>
                  <span className="font-semibold text-lg">₹2,000</span>
                </li>

                <li className="flex items-center justify-between">
                  <span className="text-base">Follow-up Session</span>
                  <span className="font-semibold text-lg">₹1,500</span>
                </li>
              </ul>
            </div>

            {/* Ayurveda */}
            <div className="max-w-md lg:max-w-none">
              <span className="block text-[11px] font-bold tracking-[0.22em] uppercase text-gold-start mb-3">
                Ayurveda
              </span>

              <h3 className="font-serif text-2xl font-bold text-primary-brand mb-6">
                Global Consultation Pricing
              </h3>

              <ul className="space-y-4 text-neutral-900">
                <li className="border-b border-primary-brand/10 pb-3">
                  <div className="flex items-center justify-between">
                    <span className="text-base">Initial Consultation</span>
                    <span className="font-semibold text-lg">$150 US</span>
                  </div>

                  <p className="text-xs text-neutral-500 mt-1">₹2,000 India</p>
                </li>

                <li>
                  <div className="flex items-center justify-between">
                    <span className="text-base">Follow-up Session</span>
                    <span className="font-semibold text-lg">$75 US</span>
                  </div>

                  <p className="text-xs text-neutral-500 mt-1">₹1,500 India</p>
                </li>
              </ul>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative w-[320px] sm:w-[380px] lg:w-[390px] xl:w-[420px] aspect-[10/14] rounded-t-[220px] rounded-b-[40px] overflow-hidden shadow-[0_25px_60px_rgba(99,26,71,0.12)] border border-primary-brand/5 group">
              <img
                src="assets/images/healthcare-pricing.webp"
                alt="Wellness consultation and healing therapy"
                className="w-full h-full object-cover object-center brightness-[0.82] saturate-90 transition-all duration-700 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/75" />

              <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-8 sm:p-10">
                <div className="pt-2">
                  <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.5rem] leading-tight text-[#fffdfc]">
                    Transparent
                    <br />
                    Pricing &
                    <br />
                    Healing Plans
                  </h2>
                </div>

                <p className="text-xs uppercase tracking-[0.25em] text-gold-start">
                  Wellness Care
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="order-3 flex flex-col justify-between gap-14 lg:gap-20">
            {/* Package 1 */}
            <div className="max-w-md lg:max-w-none">
              <h3 className="font-serif text-2xl lg:text-[1.6rem] font-bold text-primary-brand mb-4">
                6 Sessions - ₹7,200
              </h3>

              <p className="text-base lg:text-lg text-neutral-800 leading-relaxed">
                Ideal for focused short-term recovery, pain management, mobility
                improvement, and restoring movement confidence.
              </p>
            </div>

            {/* Package 2 */}
            <div className="max-w-md lg:max-w-none">
              <h3 className="font-serif text-2xl lg:text-[1.6rem] font-bold text-primary-brand mb-4">
                12 Sessions - ₹12,000
              </h3>

              <p className="text-base lg:text-lg text-neutral-800 leading-relaxed">
                Comprehensive care plan designed for long-term healing,
                rehabilitation, sustained wellness, and lasting results.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-14 lg:mt-16 max-w-6xl mx-auto">
          <div className="rounded-3xl bg-primary-brand/5 border border-primary-brand/10 px-6 py-5 sm:px-8 sm:py-6">
            <p className="text-sm sm:text-[15px] text-neutral-800 leading-relaxed text-center">
              <strong>Disclaimer:</strong> To ensure consistency and clarity,
              all discounted packages will be utilized only for the initial
              consultations associated with the selected package.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
