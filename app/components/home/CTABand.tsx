import { useState, FormEvent } from "react";
import { Calendar, Check } from "lucide-react";
import { motion } from "motion/react";

interface BackToBetterCTAProps {
  onBookClick: () => void;
}

export default function CTABand({ onBookClick }: BackToBetterCTAProps) {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      setSubscribed(true);
      setTimeout(() => {
        setSubscribed(false);
        setEmail("");
      }, 4000);
    }
  };

  return (
    <section
      id="back-to-better-cta"
      className="pt-16 text-primary-brand flex flex-col items-center justify-between"
    >
      {/* Light subtle noise or overlay shader with plum and warm white colors */}

      {/* Contents of the Upper Luxury Plum/Cream Band */}
      <motion.div
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-5 lg:space-y-6 pb-12  border-primary-brand/5 rounded-t-[1.5rem] sm:rounded-t-[2.5rem] overflow-hidden shadow-lg border border-t-primary-brand/5 relative group bg-primary-brand/5 pt-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Title */}
        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
          Let’s Get You Back to Better
        </h2>

        {/* Small subtitle description with neutral shade */}
        <p className="text-base text-neutral-800 leading-relaxed font-normal px-4 max-w-3xl mx-auto">
          We take pride in delivering highly personalized physical therapy,
          setting a new standard of care that blends exceptional clinical
          expertise with an unwavering patient-first approach.
        </p>

        {/* Golden action button to book a consultation */}
        <div className="pt-2 flex justify-center">
          <button
            id="btn-back-to-better-book"
            onClick={onBookClick}
            className="group inline-flex items-center gap-2 font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 pointer-events-auto cursor-pointer bg-gradient-to-r from-gold-start to-gold-end text-primary-brand text-[11px] sm:text-xs"
          >
            <Calendar className="w-4 h-4 text-primary-brand group-hover:translate-x-1 transition-transform" />
            <span>Book a Free Consultation</span>
          </button>
        </div>
      </motion.div>

      {/* Beautiful High-Fidelity Stretch Image Container mirroring the layout */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        <div className="aspect-[21/9] min-h-[300px] sm:min-h-[420px] rounded-b-[1.5rem] sm:rounded-b-[2.5rem] overflow-hidden shadow-lg border border-b-primary-brand/5 relative group">
          <img
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2100"
            alt="Therapist helping client stretching core muscle"
            className="w-full h-full object-cover object-center transform scale-101 hover:scale-103 duration-1000 transition-all pointer-events-none filter brightness-98 saturate-95"
            referrerPolicy="no-referrer"
          />
          {/* Subtle warm lighting vignette */}
          <div className="absolute inset-0 bg-radial-at-t from-white/10 via-transparent to-black/10 pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
