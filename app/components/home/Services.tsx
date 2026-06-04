import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Clover,
  Sparkles,
  ChevronRight,
  ChevronUp,
  Dumbbell,
  HeartPulse,
  Compass,
  Heart,
  ShieldCheck,
  Baby,
  Leaf,
  ArrowRight,
} from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceTitle: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  // The 4 main services matching the provided layout image exactly
  const mainServices = [
    {
      id: "msrv-chiro",
      title: "Chiropractic Care",
      description:
        "Restores alignment, improves mobility, supports lasting health.",
      image:
        "https://images.unsplash.com/photo-1600334188220-7e1a4de1e4fb?auto=format&fit=crop&q=80&w=600&h=750",
    },
    {
      id: "msrv-pain",
      title: "Chronic Pain",
      description:
        "Reduces discomfort, restores movement, improves daily life.",
      image:
        "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?auto=format&fit=crop&q=80&w=600&h=750",
    },
    {
      id: "msrv-sports",
      title: "Sport Injuries",
      description: "Speeds recovery, prevents setbacks, enhances performance.",
      image:
        "https://images.unsplash.com/photo-1597764690523-15bea4c581c9?auto=format&fit=crop&q=80&w=600&h=750",
    },
    {
      id: "msrv-posture",
      title: "Posture Correction",
      description: "Relieves strain, improves alignment, supports balance.",
      image:
        "https://images.unsplash.com/photo-1519823551278-64ac92834909?auto=format&fit=crop&q=80&w=600&h=750",
    },
  ];

  // Deeper, highly clinical specialties revealed under "View All Services"
  const specialties = [
    {
      id: "spec-ortho",
      title: "Orthopedic & Sports Rehab",
      icon: Dumbbell,
      badge: "Clinical PT",
      colorClass:
        "from-primary-brand/5 to-primary-brand/10 hover:border-primary-brand/20",
      iconColor: "text-primary-brand bg-primary-brand/5",
      description:
        "Relief for low back pain, neck pain, ankle sprains, and sports injuries.",
      points: [],
    },
    {
      id: "spec-surgery",
      title: "Pre & Post-Surgical Rehabilitation",
      icon: HeartPulse,
      badge: "Orthopaedic",
      colorClass:
        "from-primary-brand/5 to-primary-brand/10 hover:border-primary-brand/20",
      iconColor: "text-primary-brand bg-primary-brand/5",
      description:
        "Guided recovery to restore function, mobility, and strength after surgery.",
      points: [],
    },
    {
      id: "spec-vestibular",
      title: "Vestibular Rehabilitation",
      icon: Compass,
      badge: "Neuromuscular",
      colorClass: "from-gold-start/5 to-gold-end/10 hover:border-gold-start/30",
      iconColor: "text-gold-start bg-gold-start/10",
      description:
        "Specialized assessment and treatment for vertigo (BPPV), dizziness, and balance disorders.",
      points: [],
    },
    {
      id: "spec-maternity",
      title: "Pregnancy & Postpartum Care",
      icon: Heart,
      badge: "Women's Health",
      colorClass:
        "from-primary-brand/5 to-primary-brand/10 hover:border-primary-brand/20",
      iconColor: "text-primary-brand bg-primary-brand/5",
      description:
        "Support and guidance during pregnancy, management of low back pain during pregnancy, postpartum rehabilitation, and diastasis recti recovery.",
      points: [],
    },
    {
      id: "spec-pelvic",
      title: "Pelvic Floor Rehabilitation",
      icon: ShieldCheck,
      badge: "Specialized",
      colorClass:
        "from-primary-brand/5 to-primary-brand/10 hover:border-primary-brand/20",
      iconColor: "text-primary-brand bg-primary-brand/5",
      description:
        "Specialized women's health care addressing urinary incontinence and pelvic floor dysfunction.",
      points: [],
    },
    {
      id: "spec-pediatric",
      title: "Pediatric Care",
      icon: Baby,
      badge: "Gentle Therapy",
      colorClass:
        "from-primary-brand/5 to-primary-brand/10 hover:border-primary-brand/20",
      iconColor: "text-primary-brand bg-primary-brand/5",
      description:
        "Gentle management of bowel and bladder issues in children such as constipation and bedwetting.",
      points: [],
    },
  ];

  const ayurvedicSpecialty = {
    id: "spec-ayur",
    title: "Ayurvedic Consultations",
    icon: Leaf,
    badge: "Constitutional Medicine",
    description:
      "A personalized assessment of your Prakrti (individual constitution) and current imbalances, with practical guidance on dietary, lifestyle, and herbal recommendations to support your well-being.",
    benefit:
      "Best for addressing chronic inflammation, digestive weaknesses, sleep disruptions, and structural nervous vulnerabilities.",
    points: [],
  };

  return (
    <section
      id="services"
      className="py-24 bg-[#fffef7] text-primary-brand relative overflow-hidden select-none border-t border-primary-brand/10"
    >
      {/* Background Decorative Gradients/Blobs */}
      <div className="absolute top-1/4 -left-36 w-96 h-96 bg-primary-brand/[0.02] rounded-full blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 -right-36 w-108 h-108 bg-gold-start/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <motion.div
        className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        {/* --- SECTION HEADER --- */}
        <div className="text-center max-w-4xl mx-auto space-y-4 mb-20">
          <div className="inline-flex items-center space-x-2 bg-primary-brand/5 border border-primary-brand/10 px-4.5 py-1.5 rounded-full">
            <span className="text-xs font-base uppercase tracking-widest text-[#631a47]">
              Our Services
            </span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
            From Everyday Pain to Specialized Care.
          </h2>
        </div>

        {/* --- PIXEL-PERFECT 4-COLUMN GRID FROM THE MOCKUP IMAGE --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl mx-auto relative z-10 mb-16">
          {mainServices.map((item) => (
            <div
              key={item.id}
              id={`main-service-card-${item.id}`}
              onClick={() => onSelectService(item.title)}
              className="group bg-white rounded-[2.5rem] p-4 pb-8 transition-all duration-300 shadow-[0_12px_40px_rgba(99,26,71,0.03)] border border-[#f0ece9] hover:shadow-2xl hover:-translate-y-2 cursor-pointer flex flex-col justify-between"
            >
              <div>
                {/* Image layout container */}
                <div className="relative w-full aspect-[4/5] rounded-[2rem] overflow-hidden mb-6">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center group-hover:scale-103 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Absolute curve cutout overlap container */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-14 h-14 bg-white rounded-full flex items-center justify-center translate-y-1/2 shadow-xs z-10 pointer-events-none">
                    <div className="w-10 h-10 rounded-full bg-primary-brand/5 flex items-center justify-center">
                      <Clover className="w-5 h-5 text-primary-brand" />
                    </div>
                  </div>
                </div>

                {/* Service Metadata Centered Copy */}
                <div className="text-center px-2 mt-2">
                  <h3 className="font-serif text-lg font-bold text-primary-brand tracking-tight transition-colors group-hover:text-gold-start">
                    {item.title}
                  </h3>

                  {/* Exquisite custom divider matching image dimensions */}
                  <div className="w-8 h-[1.5px] bg-[#c8a358]/55 mx-auto my-3.5"></div>

                  <p className="text-xs sm:text-sm text-neutral-900 font-light leading-relaxed max-w-[210px] mx-auto">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* --- DYNAMIC ACTION EXPANDER: ACCORDION VIEW ALL SERVICES --- */}
        <div className="text-center">
          <button
            id="btn-view-all-services-toggle"
            onClick={() => setIsExpanded(!isExpanded)}
            className="group inline-flex items-center gap-2 font-bold text-sm px-8 py-3.5 rounded-full shadow-md hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 pointer-events-auto cursor-pointer bg-primary-brand/15 text-primary-brand hover:text-white hover:bg-[#52133a]"
          >
            <span>
              {isExpanded
                ? "Close Specialized Care Catalog"
                : "View All Services"}
            </span>
            {isExpanded ? (
              <ChevronUp className="w-4 h-4 text-primary-brand group-hover:text-white group-hover:translate-x-1 transition-transform" />
            ) : (
              <ChevronRight className="w-4 h-4 text-primary-brand group-hover:text-white group-hover:translate-x-1 transition-transform" />
            )}
          </button>
        </div>

        {/* --- COMPREHENSIVE CLINICAL DIRECTORY COMPONENT PANEL --- */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="overflow-hidden mt-16 w-full max-w-7xl mx-auto"
            >
              <div className="pt-10 border-t border-primary-brand/10 space-y-12">
                {/* Advanced specialties list layout */}
                <div className="text-center max-w-2xl mx-auto mb-10">
                  <div className="inline-flex items-center space-x-1 bg-primary-brand/5 border border-primary-brand/10 px-3.5 py-1 rounded-full mb-3">
                    <Sparkles className="w-3 h-3 text-gold-start" />
                    <span className="text-[10px] font-bold text-[#631a47] uppercase tracking-widest">
                      Specialized Clinical Operations
                    </span>
                  </div>
                  <h4 className="font-serif text-2xl sm:text-3xl font-bold text-primary-brand tracking-tight">
                    From Everyday Pain to Specialized Care
                  </h4>
                  <p className="text-xs sm:text-sm text-neutral-900 font-light mt-2 leading-relaxed">
                    Dr. Aparna leads advanced clinical treatments in these
                    niche, post-graduate medical specializations.
                  </p>
                </div>

                {/* Clinical Specialties Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {specialties.map((spec) => {
                    const SpecIcon = spec.icon;
                    return (
                      <div
                        key={spec.id}
                        onClick={() => onSelectService(spec.title)}
                        className={`group relative flex flex-col justify-between bg-[#fffefd] border border-primary-brand/10 rounded-3xl p-6 sm:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer`}
                      >
                        <div>
                          {/* Card top bar */}
                          <div className="flex items-center justify-between mb-6">
                            <div
                              className={`h-11 w-11 rounded-xl flex items-center justify-center ${spec.iconColor} shadow-inner`}
                            >
                              <SpecIcon className="w-5 h-5" />
                            </div>
                            <span className="font-mono text-[9px] font-semibold tracking-wider text-[#631a47] uppercase bg-white border border-[#631a47]/10 px-2.5 py-0.5 rounded-full">
                              {spec.badge}
                            </span>
                          </div>

                          {/* Specialties content */}
                          <h5 className="font-serif text-lg font-bold text-primary-brand mb-2 group-hover:text-gold-start transition-colors">
                            {spec.title}
                          </h5>

                          <p className="text-xs text-neutral-900 font-light leading-relaxed mb-5">
                            {spec.description}
                          </p>

                          {/* Points check */}
                          <ul className="space-y-1.5 mb-6">
                            {spec.points.map((pt, idx) => (
                              <li
                                key={idx}
                                className="flex items-center text-xs text-neutral-900 gap-2"
                              >
                                <div className="h-1 w-1 rounded-full bg-gold-start"></div>
                                <span className="font-light">{pt}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Request action footer */}
                        <div className="pt-3 border-t border-primary-brand/5 flex items-center justify-between text-xs font-bold text-primary-brand">
                          <span className="group-hover:text-gold-start transition-colors">
                            Request Care
                          </span>
                          <div className="w-6 h-6 bg-primary-brand text-white rounded-full flex items-center justify-center group-hover:bg-gold-start transition-colors">
                            <ArrowRight className="w-3 h-3" />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Ayurvedic constitutional banner inside services expanded */}
                <div
                  id="expanded-ayurveda-specialty-card"
                  onClick={() => onSelectService(ayurvedicSpecialty.title)}
                  className="relative bg-gradient-to-r from-primary-brand to-[#5e1441] text-white rounded-3xl p-6 sm:p-10 overflow-hidden border border-gold-start/20 shadow-xl group cursor-pointer transition-all duration-300 hover:shadow-2xl"
                >
                  <div className="absolute right-0 bottom-0 opacity-5 text-white pointer-events-none transform translate-y-6 translate-x-6">
                    <Leaf className="w-72 h-72 rotate-45" />
                  </div>

                  <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
                    <div className="space-y-3.5 text-left max-w-4xl">
                      <div className="inline-flex items-center space-x-2 bg-white/10 px-3 py-1 rounded-full border border-white/20">
                        <Sparkles className="w-3 h-3 text-gold-end" />
                        <span className="text-[9px] font-bold uppercase tracking-wider text-gold-end font-mono">
                          {ayurvedicSpecialty.badge}
                        </span>
                      </div>

                      <h5 className="font-serif text-xl sm:text-2xl font-bold text-white">
                        {ayurvedicSpecialty.title}
                      </h5>

                      <p className="text-white/80 text-xs sm:text-sm font-light leading-relaxed">
                        {ayurvedicSpecialty.description}
                      </p>
                    </div>

                    <button className="whitespace-nowrap bg-gradient-to-r from-gold-start to-gold-end text-primary-brand font-bold text-xs px-6 py-3.5 rounded-full shadow-md group-hover:scale-102 transition-transform cursor-pointer pointer-events-auto">
                      Inquire Consultation
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
