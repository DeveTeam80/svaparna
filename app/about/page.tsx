"use client";

import { motion } from "motion/react";
import type { ReactNode } from "react";
import {
  Award,
  Calendar,
  CheckCircle2,
  HeartHandshake,
  HeartPulse,
  Leaf,
  MessageCircle,
  ShieldCheck,
  Sparkles,
  Stethoscope,
  UserCheck,
  Waves,
  ClipboardList,
  ArrowRight,
  ChevronRight,
  Milestone,
} from "lucide-react";
import Link from "next/link";
import CTABand from "../components/home/CTABand";

// ─── Data (unchanged) ────────────────────────────────────────────────────────

const focusAreas = [
  {
    title: "MSK Dysfunction & Pain",
    description:
      "Precise treatment for movement-related pain, recurring injuries, and long-term musculoskeletal conditions.",
    icon: Stethoscope,
  },
  {
    title: "Vestibular Rehabilitation",
    description:
      "Evidence-based care for dizziness, vertigo, balance concerns, and vestibular dysfunction.",
    icon: Waves,
  },
  {
    title: "Pelvic Floor Dysfunction",
    description:
      "Comprehensive care for pelvic health concerns that affect daily function and quality of life.",
    icon: ClipboardList,
  },
  {
    title: "Prenatal & Postpartum Health",
    description:
      "Specialized support during pregnancy, recovery after childbirth, and beyond.",
    icon: HeartHandshake,
  },
  {
    title: "Pre/Post-Surgery Rehab",
    description:
      "  Structured support to restore mobility, strength, and confidence before and after surgery.",
    icon: ShieldCheck,
  },
  {
    title: "Teaching & Service",
    description:
      "Clinical instructor for students in community college settings in the USA and free Physiotherapy care through Pro Bono Clinics.",
    icon: Award,
  },
];

const expectations = [
  {
    title: "1-on-1 Attention",
    description:
      "You receive 100% of Dr. Aparna’s expertise at every visit. No handoffs, no generic templates.",
    icon: UserCheck,
  },
  {
    title: "Deep Listening",
    description:
      "Your concerns are reviewed carefully so your plan reflects the full picture, not just symptoms.",
    icon: MessageCircle,
  },
  {
    title: "Customized Guidance",
    description:
      "Each recommendation is tailored to your condition, goals, and recovery timeline.",
    icon: Milestone,
  },
];

const journeySteps = [
  {
    num: "01",
    title: "Working Alongside Holistic Health Professionals",
    body: "During my professional journey in the USA, I had the opportunity to work alongside holistic health professionals, including Acupuncturists, Chiropractors, and Naturopaths.",
  },
  {
    num: "02",
    title: "A Deeper Professional and Personal Interest",
    body: "This sparked a deep professional and personal interest in understanding different holistic systems of knowledge.",
  },
  {
    num: "03",
    title: "Formal Ayurvedic Training",
    body: "I was genuinely impressed with the depth of Ayurvedic science in analyzing the body, mind, and spirit frameworks. After three years of dedicated study at the Kerala Ayurveda Academy in the USA, I became a certified Level 2 Ayurvedic Practitioner.",
  },
  {
    num: "04",
    title: "An Integrated Approach Today",
    body: "Today, I work at the intersection of both worlds, bringing evidence-based Physiotherapy and ancient Ayurvedic principles together into a genuinely integrated approach towards health and balance.",
    highlight: true,
  },
];

// ─── Reusable primitives ─────────────────────────────────────────────────────

function SectionLabel({
  children,
  bg = "bg-primary-brand/5",
  border = "border-primary-brand/10",
  text = "text-primary-brand",
}: {
  children: ReactNode;
  bg?: string;
  border?: string;
  text?: string;
}) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] ${bg} ${border} ${text}`}
    >
      {children}
    </div>
  );
}

// function SectionDivider({ label }: { label: string }) {
//   return (
//     <div className="flex items-center gap-4 py-2">
//       <div className="flex-1 h-px bg-primary-brand/8" />
//       <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-[#9b6b3a]  shrink-0">
//         {label}
//       </span>
//       <div className="flex-1 h-px bg-primary-brand/8" />
//     </div>
//   );
// }

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// ─── Page ────────────────────────────────────────────────────────────────────

export default function AboutPage() {
  return (
    <main className="overflow-hidden bg-[#fffef7] text-primary-brand">
      {/* ── 1. HERO ──────────────────────────────────────────────────────── */}
      <section id="about-hero" className="relative pt-28 pb-0 lg:pt-36">
        {/* Full-bleed top accent bar */}
        <div
          className="absolute top-0 left-0 right-0 h-[3px]"
          style={{
            background: "linear-gradient(90deg, #9b6b3a, #631a47, transparent)",
          }}
        />

        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Eyebrow */}
          <div className="flex items-center justify-center mb-10">
            <SectionLabel>About Svaparna Health</SectionLabel>
          </div>

          {/* Hero headline - editorial large serif */}
          <div className="text-center mb-6">
            <h1 className=" text-5xl sm:text-6xl lg:text-8xl font-normal text-primary-brand leading-[1.0] tracking-tight">
              Meet Dr. Aparna
              <br />
              <span className="italic">Sekhar</span>
            </h1>
          </div>

          {/* Credential subtitle strip */}
          <div className="flex items-center justify-center gap-3 flex-wrap mb-6">
            <div
              className="h-px w-8"
              style={{
                background: "linear-gradient(90deg, transparent, #9b6b3a)",
              }}
            />
            <span className="text-sm  uppercase tracking-[0.22em] text-[#9b6b3a] font-bold">
              PT, DPT, Cert VRS
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#9b6b3a]/40" />
            <span className="text-sm  uppercase tracking-[0.16em] text-neutral-500">
              Senior Physiotherapist · Ayurvedic Practitioner · Integrative
              Health Specialist
            </span>
            <div
              className="h-px w-8"
              style={{
                background: "linear-gradient(90deg, #9b6b3a, transparent)",
              }}
            />
          </div>

          {/* Stats row - full width, typographic */}
          <div className="border-t border-b border-primary-brand/8 mt-14 py-6 grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-primary-brand/8">
            {[
              { num: "13+", label: "Years Experience" },
              { num: "USA", label: "Clinical Practice" },
              { num: "100%", label: "One-on-One Care" },
              { num: "2", label: "Healing Disciplines" },
            ].map((s) => (
              <div key={s.label} className="text-center px-6 py-4">
                <div className="text-3xl sm:text-4xl lg:text-5xl font-normal text-primary-brand leading-none mb-2">
                  {s.num}
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-neutral-500 ">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Story - editorial 2-col below stats */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 pb-28"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            visible: { transition: { staggerChildren: 0.1 } },
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
            {/* Left: section label + heading */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-5 flex items-center"
            >
              <div className="border-l-2 border-[#9b6b3a] pl-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#c8a358]  font-bold mb-3">
                  The Origin
                </p>
                <h2 className="font-normal text-3xl sm:text-5xl text-primary-brand leading-tight">
                  A New Standard
                  <br />
                  of Care
                </h2>
              </div>
            </motion.div>

            {/* Right: story paragraphs */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-7 space-y-5 text-base leading-8 text-neutral-700"
            >
              <p>
                Recovery is rarely a straight line. Most people who find their
                way to Svaparna Health have tried the conventional route. They
                are not looking for another generic, one-size-fits-all approach.
                They are looking for someone who will actually listen, look
                deeper, and treat them as a whole person rather than just a set
                of symptoms.
              </p>
              <div className="flex items-center justify-center gap-3 flex-wrap mb-6">
                <div
                  className="h-px w-8"
                  style={{
                    background: "linear-gradient(90deg, transparent, #9b6b3a)",
                  }}
                />

                <span className="text-xs  uppercase tracking-[0.16em] text-neutral-500">
                  That is exactly why I built Svaparna Health.
                </span>
                <div
                  className="h-px w-8"
                  style={{
                    background: "linear-gradient(90deg, #9b6b3a, transparent)",
                  }}
                />
              </div>
              <p>
                As a Senior Integrative Health Specialist, I believe that true
                healing requires more than superficial fixes. It requires
                precise, in-depth, and customized guidance. Here, you are never
                handed off to an intern or an assistant. You receive 100% of my
                expertise, 1-on-1, at every single visit.
              </p>
            </motion.div>
          </div>

          {/* CTAs */}
          {/* <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-3">
            <Link
              href="/#consultations"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-gold-start to-gold-end px-6 py-3 text-sm font-semibold text-primary-brand shadow-sm transition-transform hover:scale-[1.02]"
            >
              Book an Appointment
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="https://wa.me/919892924914?text=Hello%20Dr.%20Aparna%2C%20I%20would%20like%20to%20book%20a%20consultation."
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-primary-brand/10 bg-white px-6 py-3 text-sm font-semibold text-primary-brand shadow-sm"
            >
              Chat on WhatsApp
              <MessageCircle className="h-4 w-4" />
            </Link>
          </motion.div> */}
        </motion.div>
      </section>

      {/* ── 2. EXPERIENCE & TRAINING ─────────────────────────────────────── */}
      <section id="experience" className="bg-[#fbf5f9] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <SectionDivider label="Experience & Training" /> */}

          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Heading */}
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-3 mb-5">
                <SectionLabel bg="bg-[#fffef7]">
                  International Pedigree & Clinical Expertise
                </SectionLabel>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-primary-brand leading-tight">
                International Pedigree &amp; Clinical Expertise
              </h2>
            </div>

            {/* Body text */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16 pb-16 border-b border-primary-brand/8">
              <p className="text-base leading-8 text-neutral-700">
                I am a Doctor of Physical Therapy (Physiotherapy) with over 13
                years of clinical experience practicing across the United States
                in outpatient rehabilitation. Throughout my career, I have
                successfully worked with clients of all age-groups, guiding them
                through everything from acute injury recovery to complex,
                long-term conditions.
              </p>
              <p className="text-base leading-8 text-neutral-700">
                In addition to my clinical practice, I have served as a Clinical
                Instructor for students in Community College settings in the USA
                and partnered with Pro Bono Clinics to provide free
                Physiotherapy care to those in need.
              </p>
            </div>

            {/* Focus areas - numbered 2-col grid, no images */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
              {focusAreas.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.07 }}
                    className="flex items-start gap-6 py-7 border-b border-primary-brand/8
                               md:odd:border-r md:odd:pr-12 md:even:pl-12"
                  >
                    {/* Large muted number */}
                    <span
                      className="shrink-0 leading-none font-light select-none w-14 text-black/20 text-right pt-1"
                      style={{
                        fontSize: "2.5rem",
                        fontFamily: "serif",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-[#c8a358] shrink-0" />
                        <h3 className="text-xl font-normal text-primary-brand leading-snug">
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-black leading-7 ms-6">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 3. JOURNEY TO AYURVEDA ───────────────────────────────────────── */}
      <section
        id="journey"
        className="bg-[#fffef7] py-20 sm:py-28 overflow-hidden"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5
                     pb-10 mb-0 border-b border-primary-brand/8"
          >
            <div>
              <div className="flex items-center gap-3 mb-5">
                <SectionLabel>Credentials & Certifications</SectionLabel>
              </div>
              <h2 className="text-4xl sm:text-5xl font-normal text-primary-brand tracking-tight leading-[1.05]">
                Discovering the
                <br className="hidden sm:block" /> Missing Piece
              </h2>
            </div>
            <p className="text-sm text-neutral-500 leading-relaxed max-w-xs shrink-0">
              A practitioner&apos;s path from conventional physiotherapy to
              integrative healing.
            </p>
          </motion.div>

          {/*
          2×2 quadrant grid.
          gap-px + bg-primary-brand/8 on the parent = hairline separators
          between cells - no card borders needed.
          Step 04 (highlight) inverts to dark plum.
        */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-px"
            style={{ background: "rgba(99,26,71,0.08)" }}
          >
            {journeySteps.map((step, index) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="relative overflow-hidden p-8 sm:p-10 flex flex-col group cursor-default transition-colors duration-300"
                style={{
                  background: step.highlight ? "#631a47" : "#fbf5f9",
                }}
              >
                {/* Hover: top accent bar draws left-to-right */}
                <div
                  className="absolute top-0 left-0 right-0 h-[2px] origin-left scale-x-0
                           group-hover:scale-x-100 transition-transform duration-500 ease-out"
                  style={{
                    background: step.highlight
                      ? "linear-gradient(90deg, #9b6b3a, rgba(155,107,58,0.2))"
                      : "linear-gradient(90deg, #9b6b3a, #631a47, transparent)",
                  }}
                />

                {/* Hover: subtle background tint shift */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                  style={{
                    background: step.highlight
                      ? "rgba(155,107,58,0.04)"
                      : "rgba(99,26,71,0.03)",
                  }}
                />

                {/* Amber accent line - grows on hover */}
                <div
                  className="relative h-px mb-6 w-8 group-hover:w-14 transition-all duration-500"
                  style={{
                    background: step.highlight
                      ? "linear-gradient(90deg, #9b6b3a, transparent)"
                      : "linear-gradient(90deg, rgba(155,107,58,0.5), transparent)",
                  }}
                />

                {/* Title */}
                <h3
                  className="relative leading-snug mb-4 transition-all duration-300
                           group-hover:translate-x-0.5"
                  style={{
                    fontSize: "clamp(1.15rem, 2.2vw, 1.4rem)",
                    color: step.highlight ? "#ffffff" : "#2d1a26",
                    fontWeight: step.highlight ? 600 : 400,
                  }}
                >
                  {step.title}
                </h3>

                {/* Body */}
                <p
                  className="relative text-sm leading-7 flex-1 transition-colors duration-300"
                  style={{
                    color: step.highlight ? "#faf7f1" : "#5a3d4e",
                  }}
                >
                  {step.body}
                </p>

                {/* Step 04: bottom label badge */}
                {step.highlight && (
                  <div className="mt-8 inline-flex items-center gap-2 self-start">
                    <div
                      className="rounded-full border border-white/12 px-3 py-1.5"
                      style={{ background: "rgba(255,255,255,0.06)" }}
                    >
                      <span className="text-[9px] uppercase tracking-[0.2em] flex font-bold text-[#faf7f1]">
                        Integrated Practice · Today
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      {/* ── 4. PHILOSOPHY ────────────────────────────────────────────────── */}
      <section id="philosophy" className="py-20 sm:py-28 bg-[#fbf5f9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            {/* ── Eyebrow + heading ── */}
            <div className="mb-12 pb-10 border-b border-primary-brand/8">
              <div className="flex items-center gap-3 mb-5">
                <SectionLabel bg="bg-[#fffef7]">Our Philosophy</SectionLabel>
              </div>

              <h2
                className="text-4xl sm:text-5xl lg:text-6xl font-normal text-primary-brand
                     leading-[1.05] tracking-tight max-w-4xl"
              >
                Helping You Return to Your
                <br className="hidden sm:block" /> Natural State of Balance
              </h2>
            </div>

            {/* ── Quote + body - 2 col editorial ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 mb-16">
              {/* Left: Sanskrit pull-quote */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#c8a358]  mb-5">
                  Guiding Principle
                </p>
                {/* Amber hairline above quote */}
                <div
                  className="h-px w-12 mb-6"
                  style={{
                    background: "linear-gradient(90deg, #9b6b3a, transparent)",
                  }}
                />
                <p className="text-2xl sm:text-3xl font-normal text-primary-brand leading-snug">
                  "SVAPARNA (स्वपर्णा) - self-sustaining and needing nothing
                  external to thrive."
                </p>
              </div>

              {/* Right: body paragraph */}
              <div className="lg:pt-12 lg:border-l lg:border-primary-brand/8 lg:pl-16">
                <p className="text-base leading-8 text-neutral-600">
                  It is a reflection of my own name (Aparna) but more
                  importantly, it is the foundational philosophy for my clients:
                  helping you return to your true self (SVA-RUPA) and achieve a
                  state of lasting holistic balance. If you are motivated to
                  actively improve your well-being, ready to be genuinely
                  understood, and systematically guided, you are in the right
                  place.
                </p>
              </div>
            </div>

            {/* ── 3 principle cards - dark, fixed hierarchy ── */}
            <div
              className="grid grid-cols-1 md:grid-cols-3 gap-px"
              style={{ background: "rgba(99,26,71,0.10)" }}
            >
              {[
                {
                  icon: HeartPulse,
                  num: "01",
                  text: "Self-sustaining and self-thriving.",
                },
                {
                  icon: Leaf,
                  num: "02",
                  text: "Helping you return to your true self.",
                },
                {
                  icon: ShieldCheck,
                  num: "03",
                  text: "A state of lasting holistic balance.",
                },
              ].map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="group relative overflow-hidden cursor-default
                         transition-colors duration-300 hover:bg-[#2a1020]"
                    style={{ background: "#651c46" }}
                  >
                    {/* Hover: top amber bar draws across */}
                    <div
                      className="absolute top-0 left-0 right-0 h-[2px] origin-left
                           scale-x-0 group-hover:scale-x-100
                           transition-transform duration-500 ease-out"
                      style={{
                        background:
                          "linear-gradient(90deg, #c8a358, rgba(200,163,88,0.15))",
                      }}
                    />

                    <div className="p-8 sm:p-10 flex flex-col h-full">
                      {/* Top row: icon left, number right */}
                      <div className="flex items-center justify-between mb-8">
                        <div
                          className="w-10 h-10 rounded-full border border-white/10
                               flex items-center justify-center shrink-0
                               transition-all duration-300
                               group-hover:border-[#c8a358]/30 group-hover:-translate-y-0.5"
                        >
                          <Icon
                            className="w-4 h-4 text-[#c8a358]
                                     transition-transform duration-300 group-hover:scale-110"
                          />
                        </div>
                        <span
                          className="font-light leading-none text-white/40 select-none"
                          style={{
                            fontSize: "2.5rem",
                            fontFamily: "serif",
                          }}
                        >
                          {p.num}
                        </span>
                      </div>

                      {/* Amber hairline */}
                      <div
                        className="h-px mb-6 w-8 group-hover:w-14 transition-all duration-500"
                        style={{
                          background:
                            "linear-gradient(90deg, #9b6b3a, transparent)",
                        }}
                      />

                      {/* Principle text - large serif */}
                      <p
                        className="text-xl sm:text-2xl font-normal leading-snug
                             text-white/90 group-hover:text-[#c8a358] group-hover:font-bold
                             transition-colors duration-300 mt-auto"
                      >
                        {p.text}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 5. CREDENTIALS ───────────────────────────────────────────────── */}
      <section id="credentials" className="bg-[#fffef7] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            {/* Heading */}
            <div className="text-center max-w-3xl mx-auto mb-14">
              <SectionLabel>Credentials & Certifications</SectionLabel>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-normal text-primary-brand leading-tight">
                Advanced Training Across Modern Rehabilitation &amp; Ayurveda
              </h2>
              <p className="mt-6 text-base leading-8 text-neutral-700">
                Combining international physiotherapy expertise with specialized
                Ayurvedic training to provide a truly integrative approach to
                health, recovery, and long-term well-being.
              </p>
            </div>

            <div className="relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
                {/* ── Physiotherapy ── */}
                <motion.div
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="border border-primary-brand/10 flex flex-col"
                >
                  <div className="flex items-center gap-4 px-8 sm:px-10 py-7 border-b border-primary-brand/8">
                    <div className="w-11 h-11 rounded-xl border border-primary-brand/10 bg-primary-brand/3 flex items-center justify-center shrink-0">
                      <HeartPulse className="w-5 h-5 text-primary-brand" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#c8a358]  font-bold mb-0.5">
                        Modern Rehabilitation
                      </p>
                      <h3 className="text-2xl font-normal text-primary-brand leading-none">
                        Physiotherapy
                      </h3>
                    </div>
                  </div>

                  <div className="flex-1 divide-y divide-primary-brand/6">
                    {[
                      "Post-Graduate Doctor of Physical Therapy (University of Illinois at Chicago)",
                      "BSc Molecular and Cellular Biology (University of Illinois at Urbana Champaign)",
                      "Certified Vestibular Rehabilitation Specialist (Cert VRS)",
                      "CAPP-OB Certified (Pregnancy & Post-Partum Care)",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.06 }}
                        className="group flex items-start gap-3.5 py-5 px-8 sm:px-10
                             hover:bg-primary-brand/[0.025] transition-colors duration-200"
                      >
                        <CheckCircle2
                          className="mt-0.5 w-4 h-4 shrink-0 text-[#c8a358]
                                           group-hover:scale-110 transition-transform duration-200"
                        />
                        <p className="text-sm leading-6 text-neutral-600 group-hover:text-neutral-800 transition-colors duration-200">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                {/* + circle - centered on column boundary */}
                <div
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                     z-10 hidden lg:flex items-center justify-center
                     w-11 h-11 rounded-full border border-primary-brand pb-1"
                  style={{ background: "#fffef7" }}
                >
                  <span className="text-[30px] font-normal text-primary-brand leading-none mb-1">
                    +
                  </span>
                </div>
                {/* ── Ayurveda ── */}
                <motion.div
                  initial={{ opacity: 0, x: 16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6 }}
                  className="border border-primary-brand/10 border-l-0 flex flex-col
                       border-t-0 lg:border-t"
                >
                  <div className="flex items-center gap-4 px-8 sm:px-10 py-7 border-b border-primary-brand/8">
                    <div className="w-11 h-11 rounded-xl border border-primary-brand/10 bg-primary-brand/3 flex items-center justify-center shrink-0">
                      <Leaf className="w-5 h-5 text-primary-brand" />
                    </div>
                    <div>
                      <p className="text-[10px] uppercase tracking-[0.28em] text-[#c8a358]  font-bold mb-0.5">
                        Holistic Healing
                      </p>
                      <h3 className="text-2xl font-normal text-primary-brand leading-none">
                        Ayurveda
                      </h3>
                    </div>
                  </div>

                  <div className="flex-1 divide-y divide-primary-brand/6 flex justify-center flex-col">
                    {[
                      "Level 1 Ayurvedic Health Counselor Certification from Kerala Ayurveda Academy, USA",
                      "Level 2 Ayurvedic Practitioner (Kerala Ayurveda Academy, USA)",
                      "Ayurvedic Pulse Diagnosis Certified",
                    ].map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.06 }}
                        className="group flex items-start gap-3.5 py-5 px-8 sm:px-10
                             hover:bg-primary-brand/[0.025] transition-colors duration-200"
                      >
                        <CheckCircle2
                          className="mt-0.5 w-4 h-4 shrink-0 text-[#c8a358]
                                           group-hover:scale-110 transition-transform duration-200"
                        />
                        <p className="text-sm leading-6 text-neutral-600 group-hover:text-neutral-800 transition-colors duration-200">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Bottom strip */}
            <div
              className="border border-primary-brand/10 border-t-0 px-8 sm:px-10 py-7"
              style={{ background: "#fbf5f9" }}
            >
              <div className="flex items-start gap-3 mb-4">
                <span className="text-md font-semibold text-primary-brand">
                  Evidence-Based Rehabilitation + Ayurvedic Wisdom
                </span>
              </div>
              <p className="text-sm leading-7 text-neutral-600 max-w-3xl">
                The integration of these disciplines allows for a personalized
                treatment approach that addresses not only symptoms, but the
                broader physical, functional, and lifestyle factors influencing
                health.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
      {/* ── 6. WHAT TO EXPECT ────────────────────────────────────────────── */}
      <section id="expectations" className="bg-[#fbf5f9] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* <SectionDivider label="The Svaparna Experience" /> */}

          <motion.div
            className=""
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className=" mb-14">
              <SectionLabel bg="bg-[#fffef7]">
                The Svaparna Experience
              </SectionLabel>
              <h2 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-normal text-primary-brand leading-tight">
                Care That Is Entirely Focused on You
              </h2>
            </div>

            {/* Full-width horizontal strips - not cards */}
            <div className="border-t border-primary-brand/8">
              {expectations.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.08 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 border-b border-primary-brand/8
                               group hover:bg-white/60 transition-colors duration-300
                               -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
                  >
                    {/* Number + icon */}
                    <div className="lg:col-span-2 flex items-center gap-4">
                      <span
                        className="font-light leading-none select-none"
                        style={{
                          fontSize: "2.5rem",
                          color: "rgba(99,26,71,0.12)",
                        }}
                      ></span>
                      <div className="w-10 h-10 rounded-full border border-primary-brand/10 flex items-center justify-center shrink-0 bg-white">
                        <Icon className="w-4 h-4 text-[#c8a358]" />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="lg:col-span-4 flex items-center">
                      <h3 className="text-2xl sm:text-3xl font-normal text-primary-brand leading-tight">
                        {item.title}
                      </h3>
                    </div>

                    {/* Separator */}
                    <div className="hidden lg:flex lg:col-span-1 items-center justify-center">
                      <div className="h-full w-px bg-primary-brand/8" />
                    </div>

                    {/* Description */}
                    <div className="lg:col-span-5 flex items-center">
                      <p className="text-base text-neutral-600 leading-7">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 7. CTA BAND (unchanged) ──────────────────────────────────────── */}
      <CTABand
        title="Ready to Start Your Recovery?"
        description="Book an online Physiotherapy consultation in India, or an online Ayurveda consultation from anywhere in the world. In person appointments are coming soon!"
        image="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&q=80&w=2100"
        buttons={[
          {
            label: "Book an Appointment",
            href: "/#consultations",
            icon: <Calendar className="h-4 w-4" />,
            variant: "primary",
          },
          {
            label: "Chat on WhatsApp",
            href: "https://wa.me/919892924914?text=Hello%20Dr.%20Aparna%2C%20I%20would%20like%20to%20book%20a%20consultation.",
            variant: "secondary",
          },
        ]}
      />
    </main>
  );
}
