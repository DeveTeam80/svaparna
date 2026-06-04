import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Clover } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ReviewsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = [
    {
      id: 0,
      text: "After my surgery, it was recommended I see a certified joint and muscle specialist. I feel incredibly lucky to have discovered Svaparna. Their expertise and personalized care not only helped me regain strength, but also gave me the confidence to get back to my daily activities.",
      author: "Louise Dias",
      leftImage:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=800&h=900", // Woman holding tea cup/smiling outdoors
      platform: "Google reviews",
    },
    {
      id: 1,
      text: "Dealing with chronic shoulder tendonitis made it impossible to swim or sleep peacefully. The highly customized, DPT-led rehabilitation at Svaparna completely turned things around. We addressed my joint mobility and breathing patterns as one cohesive unit.",
      author: "Michael Chang",
      leftImage:
        "https://images.unsplash.com/photo-1617341740778-76a78fc3177c?auto=format&fit=crop&q=80&w=800&h=1000", // Tennis player in yellow shirt
      platform: "Google reviews",
    },
    {
      id: 2,
      text: "I was struggling with postpartum pelvic floor issues and constant back pain. Dr. Aparna's deep clinical knowledge, combined with Ayurvedic healing principles, provided a sanctuary of holistic recovery. I am now completely pain-free.",
      author: "Sophia Martinez",
      leftImage:
        "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=800&h=1000", // Peaceful beach yoga alignment
      platform: "Google reviews",
    },
  ];

  const handleNext = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1,
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1,
    );
  };

  const nextIndex = (currentIndex + 1) % testimonials.length;

  return (
    <section
      id="reviews"
      className="py-16 bg-[#fffef7] text-primary-brand relative overflow-hidden"
    >
      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* Outer Premium Card Frame matching the mockup */}
        <div className="bg-[#fcf7f4] rounded-[2.5rem] p-6 sm:p-12 md:p-16 relative overflow-hidden shadow-xs border border-primary-brand/5">
          {/* Header Block Row */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left relative z-10">
            <div className="space-y-4">
              <span className="text-xs font-base uppercase tracking-widest text-[#631a47]">
                Testimonials
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
                Recovery, in Their Own Words.
              </h2>
            </div>

            {/* Read More Reviews Button */}
            <div className="shrink-0 flex items-center space-x-4">
              <button
                id="btn-read-more-reviews"
                onClick={() => window.open("https://google.com", "_blank")}
                className="inline-flex items-center justify-center bg-primary-brand text-white hover:bg-[#52133a] active:scale-98 font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-2xs transition-all duration-300 pointer-events-auto cursor-pointer"
              >
                Read More Reviews
              </button>
            </div>
          </div>

          {/* Testimonial Active Slider Viewport */}
          <div className="relative z-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch"
              >
                {/* DOUBLE-WIDE SEAMLESS CARD (66% Width on desktop / 8 Cols) */}
                <div className="lg:col-span-8 flex flex-col md:flex-row bg-white rounded-[2rem] overflow-hidden shadow-[0_10px_35px_rgba(99,26,71,0.02)] border border-primary-brand/5">
                  {/* Left Column Image */}
                  <div className="md:w-1/2 relative h-[250px] md:h-full min-h-[320px]">
                    <img
                      src={testimonials[currentIndex].leftImage}
                      alt={testimonials[currentIndex].author}
                      className="w-full h-full object-cover object-center"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/5 to-transparent pointer-events-none"></div>
                  </div>

                  {/* Right Column Testimonial text card */}
                  <div className="md:w-1/2 p-8 sm:p-10 flex flex-col justify-between text-left space-y-8 bg-white">
                    {/* Upper Quote marks */}
                    <div>
                      <span className="font-serif text-6xl leading-none text-gold-start select-none block -mt-2 -ml-2 font-black">
                        “
                      </span>
                      {/* Review body copy */}
                      <p className="text-xs sm:text-sm md:text-base text-neutral-900 leading-relaxed font-light font-sans mt-2">
                        {testimonials[currentIndex].text}
                      </p>
                    </div>

                    {/* Bottom Metadata row */}
                    <div className="flex items-end justify-between gap-4 pt-4 border-t border-primary-brand/10">
                      <span className="font-serif text-sm sm:text-base font-bold text-primary-brand">
                        {testimonials[currentIndex].author}
                      </span>

                      {/* Google review micro ratings decoration to match layout exactly */}
                      <div className="flex flex-col items-center">
                        <div className="flex items-center space-x-1.5">
                          {/* Google logo badge */}
                          <svg className="w-4 h-4" viewBox="0 0 24 24">
                            <path
                              fill="#4285F4"
                              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                            />
                            <path
                              fill="#34A853"
                              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                            />
                            <path
                              fill="#FBBC05"
                              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22c-.11-.3-.23-.63-.35-.63z"
                            />
                            <path
                              fill="#EA4335"
                              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
                            />
                          </svg>

                          {/* 5-star ranking block */}
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className="w-3 h-3 text-amber-500 fill-amber-500"
                              />
                            ))}
                          </div>
                        </div>

                        <span className="text-[8px] font-bold text-primary-brand/50 mt-1 uppercase tracking-widest font-mono">
                          {testimonials[currentIndex].platform}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SINGLE-WIDE AMBIENT ATHLETIC PHOTO (33% Width on desktop / 4 Cols) */}
                <div className="lg:col-span-4 relative h-[300px] lg:h-auto rounded-[2rem] overflow-hidden shadow-[0_10px_35px_rgba(99,26,71,0.02)] border border-primary-brand/5">
                  <img
                    src={testimonials[nextIndex].leftImage}
                    alt="Active pain-free physical outcome"
                    className="w-full h-full object-cover object-center"
                    referrerPolicy="no-referrer"
                  />
                  {/* Gentle gradient shroud */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Slider Controllers bar */}
          <div className="mt-8 flex items-center justify-center space-x-6 relative z-20">
            {/* Prev Trigger */}
            <button
              onClick={handlePrev}
              className="w-10 h-10 rounded-full bg-white border border-primary-brand/20 text-primary-brand flex items-center justify-center hover:bg-primary-brand/5 active:scale-95 transition-all duration-200 cursor-pointer"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Pagination Indicators */}
            <div className="flex items-center space-x-2">
              {testimonials.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setCurrentIndex(t.id)}
                  className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                    currentIndex === t.id
                      ? "bg-primary-brand w-6"
                      : "bg-primary-brand/20 w-2"
                  }`}
                  aria-label={`Go to slide ${t.id + 1}`}
                />
              ))}
            </div>

            {/* Next Trigger */}
            <button
              onClick={handleNext}
              className="w-10 h-10 rounded-full bg-white border border-primary-brand/20 text-primary-brand flex items-center justify-center hover:bg-primary-brand/5 active:scale-95 transition-all duration-200 cursor-pointer"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
