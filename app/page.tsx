// app/page.tsx
"use client";

import Hero from "./components/home/Hero";
// import InspiredByNature from "@/components/InspiredByNature";
import About from "./components/home/About";
// import Services from "@/components/Services";
import ConditionsTreated from "./components/home/ConditionsTreated";
// import CoveredHeadToToe from "@/components/CoveredHeadToToe";
import OurProcess from "./components/home/OurProcess";
import ReviewsCarousel from "./components/home/ReviewsCarousel";
import FAQ from "./components/home/FAQ";
// import BackToBetterCTA from "@/components/BackToBetterCTA";
import Consultations from "./components/home/Consultations";
import Difference from "./components/home/Difference";
import TreatmentPackages from "./components/home/TreatmentPackages";
import CTABand from "./components/home/CTABand";
import Services from "./components/home/Services";
// import Contact from "@/components/Contact";

export default function Home() {
  
  return (
    <>
      <Hero />
      {/* <InspiredByNature />
      <CoveredHeadToToe onBookConsultation={() => {}} />
      <Contact /> */}
      <About />
      <Consultations onSelectType={() => {}} />
      <Services onSelectService={() => {}} />
      <ConditionsTreated onBookConsultation={() => {}} />
      <OurProcess />
      <Difference onBookClick={() => {}} />
      <TreatmentPackages/>
      <ReviewsCarousel />
      <FAQ />
      <CTABand onBookClick={() => {}} />
    </>
  );
}