"use client";

import { motion } from "motion/react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type ServiceItem = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const mainServices: ServiceItem[] = [
  {
    id: "msrv-pelvic",
    title: "Pelvic Floor Rehabilitation",
    description:
      "Specialized women's health addressing urinary incontinence and pelvic floor dysfunction.",
    image: "/assets/images/Pelvic-Floor-Rehabilitation.webp",
  },
  {
    id: "msrv-pregnancy",
    title: "Pregnancy & Postpartum Care",
    description:
      "Management of low back pain during pregnancy, postpartum rehabilitation, and diastasis recti recovery.",
    image: "/assets/images/Pregnancy-Postpartum-Care.webp",
  },

  {
    id: "msrv-pediatric",
    title: "Pediatric Care",
    description:
      "Gentle management of bowel and bladder issues in children such as constipation and bedwetting.",
    image: "/assets/images/pediatric-care.jpg",
  },
  {
    id: "msrv-vestibular",
    title: "Vestibular Rehabilitation",
    description:
      "Specialized assessment and treatment for vertigo (BPPV), dizziness, and balance disorders.",
    image: "/assets/images/Vestibular-Rehabilitation.webp",
  },
  {
    id: "msrv-ortho",
    title: "Orthopedic & Sports Rehab",
    description:
      "Relief from low back pain, neck pain, ankle sprains, and sports injuries.",
    image: "/assets/images/sport.webp",
  },
  {
    id: "msrv-surgery",
    title: "Pre/Post-Surgical Rehabilitation",
    description:
      "Guided recovery to restore function, mobility, and strength after surgery.",
    image: "/assets/images/Pre-Post-Surgical-Rehabilitation.jpg",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-primary-brand/10 bg-primary-brand/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.28em] text-primary-brand">
      {children}
    </div>
  );
}

function ServiceCard({ item, index }: { item: ServiceItem; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.45, delay: index * 0.05, ease: "easeOut" }}
      className="group relative min-h-[320px] overflow-hidden border border-primary-brand/10 bg-white/90 p-7 sm:p-8"
    >
      <div
        className="absolute inset-0 bg-cover bg-center opacity-0 transition-all duration-700 ease-out group-hover:scale-110 group-hover:opacity-100"
        style={{ backgroundImage: `url('${item.image}')` }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 bg-white/96 transition-all duration-700 group-hover:bg-white/82" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary-brand/[0.02] via-transparent to-gold-start/[0.04]" />

      <div className="relative z-10 flex h-full flex-col">
        <div className="mb-6 text-left">
          <span className="font-serif text-5xl leading-none text-primary-brand/12 transition-colors duration-500 group-hover:text-primary-brand/18">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>

        <div className="mt-auto">
          <h3 className="font-serif text-2xl leading-tight text-primary-brand transition-transform duration-500 group-hover:-translate-y-1 group-hover:text-3xl">
            {item.title}
          </h3>

          <p className="mt-4 max-w-md text-sm leading-7 text-neutral-700 transition-colors duration-500 group-hover:text-primary-brand/85 group-hover:font-bold">
            {item.description}
          </p>

          <Link
            href="/services"
            className="mt-7 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.22em] text-primary-brand transition-all duration-300 group-hover:translate-x-1 group-hover:text-primary-brand"
          >
            Learn more
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export default function ServicesGridSection() {
  return (
    <section className="bg-[#fffef7] px-4 py-16 sm:px-6 lg:px-8">
      <motion.div
        className="mx-auto max-w-7xl"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-120px" }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
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

        <div className="mt-12 overflow-hidden rounded-[1rem] border border-primary-brand/10 bg-white/70 shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {mainServices.map((item, index) => {
              const isLastColumn = (index + 1) % 3 === 0;
              const isLastRow = index >= 3;

              return (
                <div
                  key={item.id}
                  className={[
                    "border-primary-brand/10",
                    "border-b md:border-b lg:border-b",
                    "border-r",
                    isLastColumn ? "lg:border-r-0" : "",
                    isLastRow ? "md:border-b-0 lg:border-b-0" : "",
                  ].join(" ")}
                >
                  <ServiceCard item={item} index={index} />
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
