import { ChevronDown, Clover } from "lucide-react";
import { motion } from "motion/react";

export default function TreatmentPackages() {
  return (
    <section
      id="nature-inspired"
      className="py-20 bg-[#fffefd] text-primary-brand relative overflow-hidden board-t border-primary-brand/5"
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
      {/* Organic texture shading effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#fffefd] via-[#fffefd]/30 to-[#fffefd] pointer-events-none"></div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-brand/5 border border-primary-brand/10 px-4.5 py-1.5 rounded-full">
            <span className="text-xs font-base uppercase tracking-widest text-[#631a47]">
              Our Packages
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
            Structured Plans for Sustainable Healing.
          </h2>
        </div>

        {/* Responsive Grid Layout to match the mockup structure perfectly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* LEFT SIDE CONTENT PANEL */}
          <div className="lg:col-span-4 order-2 lg:order-1 flex flex-col justify-between h-full space-y-12 lg:space-y-16 text-left">
            {/* Physiotherapy Pricing */}
            <div className="space-y-3.5 max-w-sm">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gold-start">
                Physiotherapy
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary-brand tracking-tight">
                Consultation Pricing
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-neutral-900">
                <li className="flex justify-between border-b border-primary-brand/10 pb-2">
                  <span>Initial Consultation</span>
                  <span className="font-semibold">₹2,000</span>
                </li>
                <li className="flex justify-between">
                  <span>Follow-up Session</span>
                  <span className="font-semibold">₹1,500</span>
                </li>
              </ul>
            </div>

            {/* Ayurvedic Pricing */}
            <div className="space-y-3.5 max-w-sm">
              <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gold-start">
                Ayurveda
              </span>
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary-brand tracking-tight">
                Global Consultation Pricing
              </h3>
              <ul className="space-y-3 text-sm sm:text-base text-neutral-900">
                <li className="border-b border-primary-brand/10 pb-2">
                  <div className="flex justify-between">
                    <span>Initial Consultation</span>
                    <span className="font-semibold">$150 US</span>
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    ₹2,000 India
                  </div>
                </li>
                <li>
                  <div className="flex justify-between">
                    <span>Follow-up Session</span>
                    <span className="font-semibold">$75 US</span>
                  </div>
                  <div className="text-xs text-neutral-500 mt-1">
                    ₹1,500 India
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* CENTER ARCH FRAME */}
          <div className="lg:col-span-4 order-1 lg:order-2 flex justify-center">
            <div className="relative w-full max-w-[370px] sm:max-w-[400px] aspect-[10/14] rounded-t-[200px] rounded-b-[40px] overflow-hidden shadow-[0_25px_60px_rgba(99,26,71,0.12)] border border-primary-brand/5 transform hover:scale-101 transition-all duration-500 group">
              <img
                src="https://images.unsplash.com/photo-1519823551278-64ac92834909?auto=format&fit=crop&q=80&w=900&h=1200"
                alt="Wellness consultation and healing therapy"
                className="w-full h-full object-cover object-center filter saturate-90 brightness-[0.82] group-hover:scale-105 duration-700 transition-all pointer-events-none"
                referrerPolicy="no-referrer"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/45 to-black/75 pointer-events-none"></div>

              <div className="absolute inset-0 flex flex-col justify-between items-center text-center p-8 sm:p-10 z-10">
                <div className="max-w-xs px-2">
                  <h2 className="font-serif text-3xl sm:text-4xl font-normal text-[#fffdfc] leading-tight select-none">
                    Transparent <br />
                    Pricing & <br />
                    Healing Plans
                  </h2>
                </div>

                <div className="mb-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-gold-start">
                    Wellness Care
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE CONTENT PANEL */}
          <div className="lg:col-span-4 order-3 flex flex-col justify-between h-full space-y-12 lg:space-y-16 text-left">
            {/* 6 Session Package */}
            <div className="space-y-3.5 max-w-sm">
              {/* <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gold-start">
                Healing Package
              </span> */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary-brand tracking-tight">
                6 Sessions - ₹7,200
              </h3>
              <p className="text-base text-neutral-800 leading-relaxed font-normal">
                Ideal for focused short-term recovery, pain management, and
                mobility improvement.
              </p>
            </div>

            {/* 12 Session Package */}
            <div className="space-y-3.5 max-w-sm">
              {/* <span className="text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase text-gold-start">
                Healing Package
              </span> */}
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-primary-brand tracking-tight">
                12 Sessions -  ₹12,000
              </h3>
              <p className="text-base text-neutral-800 leading-relaxed font-normal">
                Comprehensive care plan designed for long-term healing,
                rehabilitation, and sustained wellness.
              </p>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 max-w-6xl mx-auto px-4">
          <div className="rounded-2xl bg-primary-brand/5 border border-primary-brand/10 p-5 sm:p-6">
            <p className="text-sm text-neutral-800 leading-relaxed font-normal text-center">
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
