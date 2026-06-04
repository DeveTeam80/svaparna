import { useState } from "react";
import { ChevronRight, FileText, ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";

interface ConditionsTreatedProps {
  onBookConsultation: (condition?: string) => void;
}

export default function ConditionsTreatedCombined({
  onBookConsultation,
}: ConditionsTreatedProps) {
  // State for the Anatomical Niche Areas
  const [activeItem, setActiveItem] = useState("01");

  // --- DATA: Featured Niche Focus Areas (Anatomical Chart) ---
  const nicheItems = [
    {
      id: "01",
      title: "Vertigo (BPPV: Benign Paroxysmal Positional Vertigo)",
      subInfo:
        "Specialized assessment and maneuvers for vertigo and associated dizziness.",
      targetDot: "head",
    },
    {
      id: "02",
      title: "Urinary Incontinence in Women",
      subInfo:
        "Targeted pelvic floor rehabilitation to restore control and confidence.",
      targetDot: "pelvis",
    },
    {
      id: "03",
      title: "Pregnancy-related low back pain",
      subInfo:
        "Safe, evidence-based physical therapy to manage and relieve back pain during pregnancy.",
      targetDot: "lower-back",
    },
    {
      id: "04",
      title: "Diastasis Recti recovery postpartum",
      subInfo:
        "Guided core rehabilitation to safely close abdominal separation after childbirth.",
      targetDot: "abdomen",
    },
    {
      id: "05",
      title: "Constipation in children",
      subInfo: "Gentle, non-invasive pediatric bowel management techniques.",
      targetDot: "pediatric-bowel",
    },
    {
      id: "06",
      title: "Bed wetting in children",
      subInfo:
        "Pediatric bladder control strategies and pelvic floor education.",
      targetDot: "pediatric-bladder",
    },
  ];

  // Anatomical dots mapped to the Niche Areas
  const dots = [
    {
      id: "head",
      label: "Vertigo (BPPV)",
      top: "20%",
      left: "67%",
      activeForItem: "01",
    },
    {
      id: "pelvis",
      label: "Urinary Incontinence",
      top: "48%",
      left: "69%",
      activeForItem: "02",
    },
    {
      id: "lower-back",
      label: "Pregnancy Back Pain",
      top: "38%",
      left: "73%",
      activeForItem: "03",
    },
    {
      id: "abdomen",
      label: "Diastasis Recti",
      top: "40%",
      left: "69%",
      activeForItem: "04",
    },
    {
      id: "pediatric-bowel",
      label: "Pediatric Constipation",
      top: "44%",
      left: "67%",
      activeForItem: "05",
    },
    {
      id: "pediatric-bladder",
      label: "Bed Wetting",
      top: "52%",
      left: "70%",
      activeForItem: "06",
    },
  ];

  // --- DATA: General Orthopedic & Post-Operative (Cards Grid) ---
  const orthoCards = [
    {
      id: "c1",
      tag: "ORTHOPEDIC",
      title: "Spine & Neck",
      description: [
        "Back pain",
        "Neck pain",
        "Lumbar Stenosis",
        "Cervical and lumbar radiculopathy",
        "Back strain",
        "Spondylosis",
        "Disc Herniation",
        "Sciatica",
        "Postural issues",
      ],
      bgClass: "bg-[#f5f4ef]",
      tagColor: "text-[#a39775]",
    },
    {
      id: "c2",
      tag: "ORTHOPEDIC",
      title: "Joints & Extremities",
      description: [
        "Knee Cartilage issues",
        "Knee ligament sprains",
        "Knee Arthritis",
        "Elbow tendonitis",
        "TMJ disorders",
        "Tension Headaches",
        "Plantar Fasciitis",
        "Ankle Sprains",
        "Shin splints",
        "Frozen Shoulder",
        "Shoulder Tendonitis",
        "Shoulder Labral Tear",
      ],
      bgClass: "bg-[#f5f4ef]",
      tagColor: "text-[#a39775]",
    },
    {
      id: "c3",
      tag: "POST-OP",
      title: "Surgical Recovery",
      description: [
        "Fracture recovery",
        "Post-operative care after joint replacement",
        "Post-operative care after arthroscopies",
        "Post-operative care after hernia surgery",
        "Post-operative care after C-Section",
      ],
      bgClass: "bg-[#f5f4ef]",
      tagColor: "text-[#a39775]",
    },
  ];
  const handleBookWithActive = () => {
    const activeTitle =
      nicheItems.find((item) => item.id === activeItem)?.title ||
      "Specialized Rehab";
    onBookConsultation(`Therapy consultation for ${activeTitle}`);
  };

  return (
    <section
      id="conditions"
      className="py-20 bg-white text-primary-brand relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* --- PART 1: ANATOMICAL JUMBOTRON (Featured Niches) --- */}
        <motion.div
          className="bg-[#fbf5f9] rounded-[2.5rem] p-8 sm:p-12 md:p-16 relative overflow-hidden shadow-[0_15px_50px_rgba(99,26,71,0.03)] border border-primary-brand/10 grid grid-cols-1 lg:grid-cols-12 items-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* Decorative Back Light Effect */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-full blur-3xl pointer-events-none"></div>

          <div className="lg:col-span-12 flex flex-col justify-between text-left space-y-8 relative z-10">
            {/* Header section */}
            <div className="space-y-4">
              <span className="text-xs font-base uppercase tracking-widest text-[#631a47]">
                FEATURED NICHE FOCUS AREAS
              </span>

              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
                What{" "}
                <span className="relative inline-block text-primary-brand">
                  We
                </span>{" "}
                Treat.
              </h2>

              <p className="text-base text-neutral-800 leading-relaxed font-normal">
                Whether you are navigating pelvic floor issues or recovering
                from a sports injury, we provide targeted, evidence-based care.
              </p>
            </div>
          </div>

          {/* Left Column Content Area */}
          <div className="lg:col-span-6 flex flex-col justify-between text-left space-y-6 relative z-10">
            {/* List Menu with active borders and expanding descriptions */}
            <div className="divide-y divide-[#faf8f4]">
              {nicheItems.map((item) => {
                const isActive = activeItem === item.id;
                return (
                  <div
                    key={item.id}
                    onMouseEnter={() => setActiveItem(item.id)}
                    className="group py-3.5 cursor-pointer flex flex-col transition-all duration-300"
                  >
                    <div className="flex items-center space-x-5">
                      <span
                        className={`font-mono text-sm font-semibold tracking-wider transition-colors ${
                          isActive
                            ? "text-primary-brand"
                            : "text-neutral-800/40"
                        }`}
                      >
                        {item.id}
                      </span>

                      <h3
                        className={`text-base leading-relaxed font-bold transition-all ${
                          isActive
                            ? "text-primary-brand tracking-wide"
                            : "text-neutral-800"
                        }`}
                      >
                        {item.title}
                      </h3>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* CTA Action Buttons */}
            {/* <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                id="btn-head-to-toe-learn-more"
                onClick={handleBookWithActive}
                className="group inline-flex items-center justify-center gap-2 bg-primary-brand text-white hover:bg-[#52133a] active:scale-98 font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-xs transition-all duration-300 pointer-events-auto cursor-pointer"
              >
                Learn More
                <ChevronRight className="w-4 h-4 text-white group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                id="btn-head-to-toe-forms"
                onClick={() => onBookConsultation("Patient Forms Inquiry")}
                className="inline-flex items-center justify-center gap-2 bg-white text-primary-brand border border-primary-brand/15 hover:border-primary-brand font-bold text-xs sm:text-sm px-8 py-3.5 rounded-full shadow-xs transition-all pointer-events-auto cursor-pointer"
              >
                <FileText className="w-4 h-4 text-primary-brand" />
                Patient Forms
              </button>
            </div> */}
          </div>

          {/* Right Column - Human Anatomical 3D Render Display */}
          <div className="lg:col-span-6 relative flex items-center justify-center min-h-[350px] sm:min-h-[440px]">
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-[4/5]">
              <img
                src="/assets/images/Man.png"
                alt="Anatomical Chart"
                className="w-full h-full object-contain mix-blend-multiply"
              />

              {/* Dynamic Interactive Dot Overlays Linked to Left Menu State */}
              {dots.map((dot) => {
                const isActive = activeItem === dot.activeForItem;
                return (
                  <div
                    key={dot.id}
                    className="absolute pointer-events-auto group cursor-pointer transition-all duration-300"
                    style={{ top: dot.top, left: dot.left }}
                    onMouseEnter={() => {
                      if (dot.activeForItem && dot.activeForItem !== "none") {
                        setActiveItem(dot.activeForItem);
                      }
                    }}
                    onClick={() => {
                      if (dot.activeForItem && dot.activeForItem !== "none") {
                        const targetItem = nicheItems.find(
                          (li) => li.id === dot.activeForItem,
                        );
                        if (targetItem)
                          onBookConsultation(
                            `Therapy consultation for ${targetItem.title}`,
                          );
                      } else {
                        onBookConsultation(
                          `Therapy consultation for ${dot.label}`,
                        );
                      }
                    }}
                  >
                    {/* Outer Ring Pulse */}
                    <div
                      className={`absolute -inset-2.5 rounded-full transition-all duration-300 ${
                        isActive
                          ? "bg-red-500/30 scale-125 animate-ping"
                          : "bg-[#631a47]/10 scale-100 group-hover:bg-[#631a47]/20 group-hover:scale-110"
                      }`}
                    ></div>

                    {/* Core Bullet Dot */}
                    <div
                      className={`h-3 w-3 rounded-full border border-white shadow-md transition-all duration-300 ${
                        isActive
                          ? "bg-red-600 scale-125 ring-4 ring-red-400/25"
                          : "bg-primary-brand scale-100 group-hover:bg-primary-brand"
                      }`}
                    ></div>

                    {/* Tooltip Popup on Dot Hover */}
                    <div className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/95 text-primary-brand border border-[#631a47]/10 px-2 py-1 rounded-md text-[10px] font-bold tracking-tight shadow-md whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 z-20">
                      {dot.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* --- PART 2: GENERAL ORTHOPEDIC (Cards Grid) --- */}
        <motion.div
          className="text-left mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-primary-brand tracking-tight">
            General Orthopedic & Post-Operative Care
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {orthoCards.map((card, index) => (
            <motion.div
              key={card.id}
              onClick={() =>
                onBookConsultation(`Therapy consultation for ${card.title}`)
              }
              className={`relative group cursor-pointer rounded-[2rem] p-8 sm:p-10 flex flex-col justify-between min-h-[360px] overflow-hidden transition-transform duration-300 hover:-translate-y-1 ${card.bgClass}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative z-10">
                <span
                  className={`text-[10px] sm:text-xs font-bold tracking-[0.2em] uppercase mb-5 block ${card.tagColor}`}
                >
                  {card.tag}
                </span>

                <h4 className="font-serif text-2xl font-normal text-primary-brand tracking-tight mb-5">
                  {card.title}
                </h4>

                <ul className="space-y-3">
                  {card.description.map((item, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-neutral-700 text-base leading-relaxed"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold-start mt-2 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
