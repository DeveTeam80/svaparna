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
} from "lucide-react";
import Link from "next/link";
import CTABand from "../components/home/CTABand";

// ─── Data (unchanged) ────────────────────────────────────────────────────────

const credentials = [
  "Post-Graduate Doctor of Physical Therapy (UIC)",
  "BSc Molecular and Cellular Biology (UIUC)",
  "Level 2 Ayurvedic Practitioner (Kerala Ayurveda Academy, USA)",
  "Certified Vestibular Rehabilitation Specialist (Cert VRS)",
  "CAPP-OB Certified (Pregnancy & Post-Partum Care)",
  "Herman & Wallace Certified (Pediatric Bowel and Bladder)",
  "Ayurvedic Pulse Diagnosis Certified",
];

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
      "Structured support to restore mobility, strength, and confidence before and after surgery.",
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
      "Comprehensive care for pelvic health concerns that affect daily function and quality of life.",
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
      "Every visit is personally led by Dr. Aparna. No handoffs, no generic templates.",
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
    icon: Sparkles,
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

function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary-brand/10 bg-primary-brand/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-primary-brand">
      {children}
    </div>
  );
}

function SectionDivider({ label }: { label: string }) {
  return (
    <div className="flex items-center gap-4 py-2">
      <div className="flex-1 h-px bg-primary-brand/8" />
      <span className="text-[10px] uppercase tracking-[0.28em] font-bold text-[#9b6b3a] font-mono shrink-0">
        {label}
      </span>
      <div className="flex-1 h-px bg-primary-brand/8" />
    </div>
  );
}

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

          {/* Hero headline — editorial large serif */}
          <div className="text-center mb-6">
            <h1
              className="font-serif text-5xl sm:text-6xl lg:text-8xl font-normal text-primary-brand leading-[1.0] tracking-tight"
              style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
            >
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
            <span className="text-sm font-mono uppercase tracking-[0.22em] text-[#9b6b3a] font-bold">
              PT, DPT, Cert VRS
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-[#9b6b3a]/40" />
            <span className="text-sm font-mono uppercase tracking-[0.16em] text-neutral-500">
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

          {/* Stats row — full width, typographic */}
          <div className="border-t border-b border-primary-brand/8 mt-14 py-10 grid grid-cols-2 lg:grid-cols-4 gap-0 divide-x divide-primary-brand/8">
            {[
              { num: "13+", label: "Years Experience" },
              { num: "USA", label: "Clinical Practice" },
              { num: "100%", label: "One-on-One Care" },
              { num: "2", label: "Healing Disciplines" },
            ].map((s) => (
              <div key={s.label} className="text-center px-6 py-4">
                <div
                  className="text-3xl sm:text-4xl lg:text-5xl font-normal text-primary-brand leading-none mb-2"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  {s.num}
                </div>
                <div className="text-xs uppercase tracking-[0.18em] text-neutral-500 font-mono">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Story — editorial 2-col below stats */}
        <motion.div
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
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
            <motion.div variants={fadeUp} className="lg:col-span-4">
              <div className="border-l-2 border-[#9b6b3a] pl-6">
                <p className="text-[10px] uppercase tracking-[0.3em] text-[#9b6b3a] font-mono font-bold mb-3">
                  The Origin
                </p>
                <h2
                  className="font-normal text-3xl sm:text-4xl text-primary-brand leading-tight"
                  style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
                >
                  A New Standard
                  <br />
                  of Care
                </h2>
              </div>
            </motion.div>

            {/* Right: story paragraphs */}
            <motion.div
              variants={fadeUp}
              className="lg:col-span-8 space-y-5 text-base leading-8 text-neutral-700"
            >
              <p>
                Recovery is rarely a straight line. Most people who find their
                way to Svaparna Health have tried the conventional route. They
                are not looking for another generic, one-size-fits-all approach.
                They are looking for someone who will actually listen, look
                deeper, and treat them as a whole person rather than just a set
                of symptoms. That is exactly why I built Svaparna Health.
              </p>
              <p>That is exactly why I built Svaparna Health.</p>
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
          <motion.div variants={fadeUp} className="mt-12 flex flex-wrap gap-3">
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
          </motion.div>
        </motion.div>
      </section>

      {/* ── 2. EXPERIENCE & TRAINING ─────────────────────────────────────── */}
      <section id="experience" className="bg-[#fbf5f9] py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionDivider label="Experience & Training" />

          <motion.div
            className="mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Heading */}
            <div className="max-w-3xl mb-10">
              <div className="flex items-center gap-3 mb-5">
                <SectionLabel>
                  International Pedigree & Clinical Expertise
                </SectionLabel>
              </div>
              <h2
                className="text-3xl sm:text-4xl lg:text-5xl font-normal text-primary-brand leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
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

            {/* Focus areas — numbered 2-col grid, no images */}
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
                      className="shrink-0 leading-none font-light select-none w-14 text-right pt-1"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "2.5rem",
                        color: "rgba(99,26,71,0.10)",
                      }}
                    >
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-2">
                        <Icon className="w-4 h-4 text-[#9b6b3a] shrink-0" />
                        <h3
                          className="text-xl font-normal text-primary-brand leading-snug"
                          style={{
                            fontFamily: "'Cormorant Garamond', Georgia, serif",
                          }}
                        >
                          {item.title}
                        </h3>
                      </div>
                      <p className="text-sm text-neutral-600 leading-7">
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
      <section id="journey" className="bg-white py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionDivider label="The Journey to Ayurveda" />

          <motion.div
            className="mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-12">
              <SectionLabel>The Journey to Ayurveda</SectionLabel>
              <h2
                className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-normal text-primary-brand leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Discovering the Missing Piece
              </h2>
            </div>

            {/* Steps — large number + content */}
            <div className="space-y-0">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.num}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                  className={`grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 py-10 border-b border-primary-brand/8 ${
                    step.highlight
                      ? "bg-[#fbf5f9] -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8"
                      : ""
                  }`}
                >
                  {/* Giant number */}
                  <div className="lg:col-span-2 flex items-start">
                    <span
                      className="font-light leading-none select-none"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                        fontSize: "clamp(3rem, 6vw, 5rem)",
                        color: step.highlight
                          ? "#631a47"
                          : "rgba(99,26,71,0.12)",
                        lineHeight: 1,
                      }}
                    >
                      {step.num}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="lg:col-span-10">
                    <h3
                      className="text-2xl sm:text-3xl font-normal text-primary-brand leading-snug mb-4"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p className="text-base leading-8 text-neutral-700 max-w-3xl">
                      {step.body}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 4. PHILOSOPHY ────────────────────────────────────────────────── */}
      <section
        id="philosophy"
        className="bg-[#1a0d14] py-20 sm:py-28 relative overflow-hidden"
      >
        {/* Decorative ambient */}
        <div
          aria-hidden
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 50%, #631a47 0%, transparent 60%), radial-gradient(circle at 80% 30%, #9b6b3a 0%, transparent 55%)",
          }}
        />

        {/* Top accent */}
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{
            background:
              "linear-gradient(90deg, transparent, #9b6b3a, #631a47, transparent)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            {/* Label */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-white/60 mb-8">
                Our Philosophy
              </div>

              <h2
                className="text-3xl sm:text-4xl lg:text-6xl font-normal text-white leading-tight tracking-tight max-w-4xl mx-auto"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Helping You Return to Your Natural State of Balance
              </h2>
            </div>

            {/* Pull-quote — SVAPARNA */}
            <div
              className="max-w-3xl mx-auto border border-white/12 rounded-none p-8 sm:p-12 mb-14"
              style={{ background: "rgba(255,255,255,0.04)" }}
            >
              <div className="flex items-start gap-5">
                <Sparkles className="w-5 h-5 text-[#9b6b3a] shrink-0 mt-1" />
                <div>
                  <p className="text-[10px] uppercase tracking-[0.28em] text-white/40 font-mono font-bold mb-4">
                    Guiding Principle
                  </p>
                  <p
                    className="text-white text-xl sm:text-2xl leading-relaxed font-normal"
                    style={{
                      fontFamily: "'Cormorant Garamond', Georgia, serif",
                    }}
                  >
                    SVAPARNA (स्वपर्णा) is a Sanskrit word meaning
                    self-sustaining and needing nothing external to thrive.
                  </p>
                </div>
              </div>
            </div>

            {/* Philosophy body */}
            <p className="text-white/65 text-base leading-8 max-w-3xl mx-auto text-center mb-14">
              It is a reflection of my own name (Aparna) but more importantly,
              it is the foundational philosophy for my clients: helping you
              return to your true self (SVA-RUPA) and achieve a state of lasting
              holistic balance. If you are motivated to actively improve your
              well-being, ready to be genuinely understood, and systematically
              guided, you are in the right place.
            </p>

            {/* 3 principles — horizontal strips on dark */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/8">
              {[
                {
                  icon: HeartPulse,
                  text: "Self-sustaining and needing nothing external to thrive.",
                },
                { icon: Leaf, text: "Helping you return to your true self." },
                {
                  icon: ShieldCheck,
                  text: "A state of lasting holistic balance.",
                },
              ].map((p, i) => {
                const Icon = p.icon;
                return (
                  <div
                    key={i}
                    className="flex items-start gap-4 p-7 sm:p-8"
                    style={{ background: "rgba(26,13,20,0.85)" }}
                  >
                    <div className="w-9 h-9 rounded-full border border-white/12 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-[#9b6b3a]" />
                    </div>
                    <p className="text-sm text-white/60 leading-7">{p.text}</p>
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
          <SectionDivider label="Credentials & Certifications" />

          <motion.div
            className="mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="text-center max-w-3xl mx-auto mb-16">
              <SectionLabel>Credentials & Certifications</SectionLabel>
              <h2
                className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-normal text-primary-brand leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Advanced Training Across Modern Rehabilitation &amp; Ayurveda
              </h2>
              <p className="mt-6 text-base leading-8 text-neutral-700">
                Combining international physiotherapy expertise with specialized
                Ayurvedic training to provide a truly integrative approach to
                health, recovery, and long-term well-being.
              </p>
            </div>

            {/* Two columns with center plus */}
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_80px_1fr] gap-0 items-start">
              {/* Physiotherapy */}
              <div className="border border-primary-brand/8 p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-primary-brand/8">
                  <div className="w-12 h-12 rounded-xl border border-primary-brand/10 flex items-center justify-center bg-primary-brand/3">
                    <HeartPulse className="w-5 h-5 text-[#4b8078]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#9b6b3a] font-mono font-bold">
                      Modern Rehabilitation
                    </p>
                    <h3
                      className="text-2xl font-normal text-primary-brand"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                      }}
                    >
                      Physiotherapy
                    </h3>
                  </div>
                </div>
                <div className="space-y-4">
                  {credentials
                    .slice(0, Math.ceil(credentials.length / 2))
                    .map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-start gap-3 pb-4 border-b border-primary-brand/6 last:border-0 last:pb-0"
                      >
                        <CheckCircle2 className="mt-0.5 w-4 h-4 shrink-0 text-[#4b8078]" />
                        <p className="text-sm leading-7 text-neutral-700">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                </div>
              </div>

              {/* Center "+" */}
              <div className="hidden lg:flex flex-col items-center justify-center py-10 self-stretch">
                <div className="h-full w-px bg-primary-brand/8 relative flex flex-col items-center justify-center">
                  <div className="bg-[#fffef7] border border-primary-brand/10 w-12 h-12 rounded-full flex items-center justify-center">
                    <span
                      className="text-2xl font-light text-primary-brand"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                      }}
                    >
                      +
                    </span>
                  </div>
                  <p className="absolute bottom-4 text-[9px] uppercase tracking-[0.2em] text-primary-brand/40 font-mono rotate-90 translate-x-8 whitespace-nowrap">
                    Integrated
                  </p>
                </div>
              </div>

              {/* Ayurveda */}
              <div className="border border-primary-brand/8 border-l-0 lg:border-l-0 p-8 sm:p-10">
                <div className="flex items-center gap-3 mb-8 pb-6 border-b border-primary-brand/8">
                  <div className="w-12 h-12 rounded-xl border border-primary-brand/10 flex items-center justify-center bg-primary-brand/3">
                    <Leaf className="w-5 h-5 text-[#4b8078]" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.28em] text-[#9b6b3a] font-mono font-bold">
                      Holistic Healing
                    </p>
                    <h3
                      className="text-2xl font-normal text-primary-brand"
                      style={{
                        fontFamily: "'Cormorant Garamond', Georgia, serif",
                      }}
                    >
                      Ayurveda
                    </h3>
                  </div>
                </div>
                <div className="space-y-4">
                  {credentials
                    .slice(Math.ceil(credentials.length / 2))
                    .map((item, index) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: index * 0.05 }}
                        className="flex items-start gap-3 pb-4 border-b border-primary-brand/6 last:border-0 last:pb-0"
                      >
                        <CheckCircle2 className="mt-0.5 w-4 h-4 shrink-0 text-[#4b8078]" />
                        <p className="text-sm leading-7 text-neutral-700">
                          {item}
                        </p>
                      </motion.div>
                    ))}
                </div>
              </div>
            </div>

            {/* Bottom statement */}
            <div className="mt-12 text-center">
              <div className="inline-flex items-center gap-3 rounded-full border border-primary-brand/10 bg-white px-6 py-3 shadow-sm">
                <Sparkles className="h-4 w-4 text-[#4b8078]" />
                <span className="text-sm font-medium text-primary-brand">
                  Evidence-Based Rehabilitation + Ayurvedic Wisdom
                </span>
              </div>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-neutral-700">
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
          <SectionDivider label="The Svaparna Experience" />

          <motion.div
            className="mt-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <div className="mb-12">
              <SectionLabel>The Svaparna Experience</SectionLabel>
              <h2
                className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-normal text-primary-brand leading-tight"
                style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
              >
                Care That Is Entirely Focused on You
              </h2>
            </div>

            {/* Full-width horizontal strips — not cards */}
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
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                          fontSize: "2.5rem",
                          color: "rgba(99,26,71,0.12)",
                        }}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <div className="w-10 h-10 rounded-full border border-primary-brand/10 flex items-center justify-center shrink-0 bg-white">
                        <Icon className="w-4 h-4 text-[#4b8078]" />
                      </div>
                    </div>

                    {/* Title */}
                    <div className="lg:col-span-4 flex items-center">
                      <h3
                        className="text-2xl sm:text-3xl font-normal text-primary-brand leading-tight"
                        style={{
                          fontFamily: "'Cormorant Garamond', Georgia, serif",
                        }}
                      >
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
