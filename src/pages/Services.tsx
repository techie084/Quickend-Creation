import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight,
  Search,
  Lightbulb,
  Paintbrush,
  CheckCircle,
} from "@hugeicons/core-free-icons";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/data/services";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    desc: "We start by understanding your vision, goals, and audience. Deep listening before any creation begins.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategy",
    desc: "We develop a creative strategy tailored to your project — timelines, deliverables, and execution plan.",
    icon: Lightbulb,
  },
  {
    number: "03",
    title: "Creation",
    desc: "Our team brings your vision to life with excellence — every frame, note, and pixel crafted with intention.",
    icon: Paintbrush,
  },
  {
    number: "04",
    title: "Delivery",
    desc: "Final output delivered on time, polished, and ready to impact. We don't stop until it's right.",
    icon: CheckCircle,
  },
];

const Services = () => {
  useScrollReveal();

  return (
    <div className="overflow-x-hidden">
      {/* ================================================
          HERO
      ================================================ */}
      <section className="relative min-h-[70vh] bg-qc-dark flex items-end overflow-hidden pt-20 pb-16">
        {/* "13+" watermark */}
        <div
          className="absolute inset-0 flex items-center justify-end pr-8 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="font-display text-[30vw] text-white/3 leading-none">
            13+
          </span>
        </div>

        {/* Floating dots */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="float-1 absolute top-1/4 left-[10%] w-3 h-3 rounded-full bg-qc-blue opacity-50" />
          <div className="float-2 absolute top-1/2 left-[20%] w-2 h-2 rounded-full bg-qc-red opacity-40" />
          <div className="float-3 absolute top-1/3 right-[15%] w-4 h-4 rounded-full bg-qc-green opacity-30" />
          <div className="float-4 absolute top-2/3 right-[8%] w-2.5 h-2.5 rounded-full bg-qc-gold opacity-40" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <SectionLabel
            text="What We Do"
            color="gold"
            className="mb-6 reveal"
          />
          <h1 className="font-display text-hero text-white leading-none mb-6 reveal reveal-delay-1">
            WHAT WE DO
          </h1>
          <p className="text-white/60 font-body text-lg max-w-xl reveal reveal-delay-2">
            13 professional services designed to bring your vision to life —
            from concept to final output.
          </p>
        </div>
      </section>

      {/* ================================================
          ALL SERVICES — HORIZONTAL SCROLL CAROUSEL
      ================================================ */}
      <section className="bg-qc-cream py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mb-10">
          <SectionLabel
            text="All Services"
            color="dark"
            className="mb-4 reveal"
          />
          <h2 className="font-display text-section text-qc-black reveal reveal-delay-1">
            EVERYTHING WE OFFER
          </h2>
        </div>

        <div className="flex gap-5 overflow-x-auto scroll-hide pb-6 px-6 lg:px-8">
          {services.map((service, i) => (
            <ServiceCard
              key={service.id}
              service={service}
              index={i}
              linkTo="/contact"
            />
          ))}
        </div>
      </section>

      {/* ================================================
          PROCESS — HOW WE WORK
      ================================================ */}
      <section className="bg-qc-dark py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <SectionLabel text="Our Process" color="gold" className="mb-4" />
            <h2 className="font-display text-section text-white">
              HOW WE WORK
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, i) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.number}
                  className={`reveal reveal-delay-${i + 1} group relative p-8 rounded-2xl border border-white/10 hover:border-qc-gold/40 transition-all duration-300 bg-white/2`}
                >
                  {/* Step number */}
                  <div className="font-display text-6xl text-qc-gold/20 leading-none mb-4 group-hover:text-qc-gold/40 transition-colors duration-300">
                    {step.number}
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-qc-gold/10 flex items-center justify-center mb-5 group-hover:bg-qc-gold/20 transition-colors duration-300">
                    <HugeiconsIcon icon={Icon} size={18} className="text-qc-gold" />
                  </div>
                  <h3 className="font-display text-2xl text-white tracking-wide mb-3">
                    {step.title.toUpperCase()}
                  </h3>
                  <p className="font-body text-sm text-white/60 leading-relaxed">
                    {step.desc}
                  </p>

                  {/* Connector line (not on last) */}
                  {i < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-qc-gold/20" />
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================================================
          CTA SECTION
      ================================================ */}
      <section className="bg-qc-cream py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center reveal">
          <SectionLabel text="Let's Talk" color="dark" className="mb-6" />
          <h2 className="font-display text-section text-qc-black mb-4">
            NOT SURE WHICH
            <br />
            SERVICE FITS?
          </h2>
          <p className="font-body text-qc-black/70 text-lg mb-10">
            Tell us about your project and we'll guide you to the right
            solution.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-qc-dark text-white font-body font-bold text-sm rounded-pill uppercase tracking-wider hover:scale-105 hover:shadow-hover transition-all duration-200"
          >
            Book a Free Consultation <HugeiconsIcon icon={ArrowRight} size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
