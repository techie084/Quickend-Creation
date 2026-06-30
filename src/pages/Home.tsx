import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "@hugeicons/core-free-icons";
import Footer from "@/components/layout/Footer";
import ServiceCard from "@/components/ui/ServiceCard";
import SectionLabel from "@/components/ui/SectionLabel";
import Marquee from "@/components/ui/Marquee";
import { featuredServices } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const HERO_WORDS = ["BRINGING", "YOUR", "VISION", "TO", "LIFE."];

// Hero word-by-word animation
const HeroHeadline = () => {
  const [visibleWords, setVisibleWords] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisibleWords((prev) => {
        if (prev < HERO_WORDS.length) return prev + 1;
        clearInterval(interval);
        return prev;
      });
    }, 120);
    return () => clearInterval(interval);
  }, []);

  return (
    <h1 className="font-display text-hero text-white leading-none tracking-wide mb-6 max-w-4xl">
      {HERO_WORDS.map((word, i) => (
        <span
          key={i}
          className={`inline-block mr-[0.15em] transition-all duration-500 ${
            i < visibleWords
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          } ${word === "VISION" ? "text-qc-gold" : ""}`}
          style={{ transitionDelay: `${i * 80}ms` }}
        >
          {word}
        </span>
      ))}
    </h1>
  );
};

// Portfolio images (Unsplash creative/media themed)
const portfolioItems = [
  {
    id: 1,
    title: "Church Livestream Production",
    category: "Videography",
    image:
      "/action-img.jpg",
  },
  {
    id: 2,
    title: "Music Recording Session",
    category: "Music Production",
    image:
      "/studio-img.jpg",
  },
  {
    id: 3,
    title: "Aerial Event Coverage",
    category: "Drone Coverage",
    image:
      "/drone-img.jpg",
  },
];

const heroWorkCards = [
  "/camera-img.jpg",
  "/mic-img.jpg",
  "/study-img.jpg",
];

const marqueeItems = [
  "Videography",
  "Music Production",
  "Drone Coverage",
  "Graphic Design",
  "Mobile Studio",
  "Social Media",
  "Content Space",
  "Website Development",
  "Video Editing",
  "Songwriting",
  "Consultation",
];

const Home = () => {
  useScrollReveal();
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [showCTA, setShowCTA] = useState(false);
  const [showCards, setShowCards] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowCTA(true), 900);
    const t2 = setTimeout(() => setShowCards(true), 700);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, []);

  const nextTestimonial = () =>
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setActiveTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length,
    );

  return (
    <div className="overflow-x-hidden">
      {/* ================================================
          SECTION 1 — HERO
      ================================================ */}
      <section className="relative min-h-screen bg-qc-dark flex items-center overflow-hidden pt-20">
        {/* Background: faint PNEUMA watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="font-display text-[20vw] text-white/3 leading-none tracking-widest">
            PNEUMA
          </span>
        </div>

        {/* Floating colored dots */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="float-1 absolute top-1/4 left-[8%] w-3 h-3 rounded-full bg-qc-blue opacity-60" />
          <div className="float-2 absolute top-1/3 left-[15%] w-2 h-2 rounded-full bg-qc-red opacity-50" />
          <div className="float-3 absolute top-1/2 left-[5%] w-4 h-4 rounded-full bg-qc-green opacity-40" />
          <div className="float-4 absolute top-[60%] left-[12%] w-2.5 h-2.5 rounded-full bg-qc-gold opacity-50" />
          <div className="float-2 absolute top-[20%] right-[8%] w-3 h-3 rounded-full bg-qc-gold opacity-40" />
          <div className="float-1 absolute top-[70%] right-[12%] w-2 h-2 rounded-full bg-qc-blue opacity-50" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Left: Text content */}
          <div>
            <div
              className="mb-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "50ms", animationFillMode: "forwards" }}
            >
              <SectionLabel text="Pneuma Inspired" color="gold" />
            </div>

            <HeroHeadline />

            <p
              className="text-white/70 text-lg font-body leading-relaxed mb-10 max-w-xl opacity-0 animate-fade-up"
              style={{ animationDelay: "700ms", animationFillMode: "forwards" }}
            >
              A full-service creative and media brand. Spirit-inspired.
              Excellence-driven. We bring God-given visions to life.
            </p>

            <div
              className={`flex flex-wrap gap-4 transition-all duration-500 ${
                showCTA
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-qc-gold text-qc-black font-body font-bold text-base rounded-pill uppercase tracking-wider transition-all duration-200 hover:scale-105 animate-pulse-gold"
              >
                Let's Collab
              </Link>
              <Link
                to="/services"
                className="px-8 py-4 border-2 border-white/30 text-white font-body font-medium text-base rounded-pill uppercase tracking-wider transition-all duration-200 hover:border-qc-gold hover:text-qc-gold flex items-center gap-2"
              >
                Our Services <HugeiconsIcon icon={ArrowRight} size={16} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Right: Stacked work preview cards */}
          <div className="relative flex justify-center items-center h-80 lg:h-96">
            {heroWorkCards.map((src, i) => (
              <div
                key={i}
                className={`absolute rounded-2xl overflow-hidden shadow-hover border border-white/10 transition-all duration-700 ${
                  showCards ? "opacity-100" : "opacity-0 translate-y-12"
                }`}
                style={{
                  width: `${220 - i * 20}px`,
                  height: `${300 - i * 20}px`,
                  transform: showCards
                    ? `rotate(${(i - 1) * 6}deg) translateX(${(i - 1) * 40}px) translateY(${i * 8}px)`
                    : `rotate(0deg) translateY(60px)`,
                  zIndex: 3 - i,
                  transitionDelay: `${700 + i * 150}ms`,
                }}
              >
                <img
                  src={src}
                  alt={`QC Work Preview ${i + 1}`}
                  className="w-full h-full object-cover"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-linear-to-t from-qc-dark/60 to-transparent" />
              </div>
            ))}
          </div>
        </div>

        {/* Scroll hint */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 animate-fade-in"
          style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
        >
          <span className="text-white/40 text-xs font-body tracking-widest uppercase">
            Scroll
          </span>
          <div className="w-px h-8 bg-linear-to-b from-white/30 to-transparent" />
        </div>
      </section>

      {/* ================================================
          SECTION 2 — MARQUEE
      ================================================ */}
      <section className="bg-qc-black py-5 overflow-hidden">
        <Marquee
          items={marqueeItems}
          className="text-qc-gold font-display text-2xl tracking-widest"
        />
      </section>

      {/* ================================================
          SECTION 3 — SERVICES TEASER
      ================================================ */}
      <section className="bg-qc-cream py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-12 reveal">
            <SectionLabel text="Our Services" color="dark" className="mb-4" />
            <h2 className="font-display text-section text-qc-black mt-4">
              WHAT WE BRING
              <br />
              TO THE TABLE
            </h2>
          </div>

          {/* Horizontal scroll carousel */}
          <div
            ref={carouselRef}
            className="flex gap-5 overflow-x-auto scroll-hide pb-4 -mx-4 px-4"
          >
            {featuredServices.map((service, i) => (
              <div
                key={service.id}
                className="reveal"
                style={{ transitionDelay: `${i * 80}ms` }}
              >
                <ServiceCard service={service} index={i} />
              </div>
            ))}
          </div>

          <div className="mt-10 flex justify-center reveal">
            <Link
              to="/services"
              className="px-8 py-3.5 border-2 border-qc-dark/30 text-qc-dark font-body font-semibold text-sm rounded-pill uppercase tracking-wider hover:border-qc-dark hover:bg-qc-dark hover:text-white transition-all duration-200 flex items-center gap-2"
            >
              See All 13 Services <HugeiconsIcon icon={ArrowRight} size={15} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 4 — PREMIUM SPOTLIGHT
      ================================================ */}
      <section className="bg-qc-black py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div className="reveal">
            <SectionLabel
              text="Premium Service"
              color="gold"
              className="mb-6"
            />
            <h2 className="font-display text-section text-white mb-6 leading-none">
              WE BRING THE
              <br />
              <span className="text-qc-gold">STUDIO TO YOU.</span>
            </h2>
            <p className="text-white/70 font-body text-base leading-relaxed mb-8 max-w-md">
              Can't make it to a studio? We come to you. Full music and video
              production at your location, on your schedule — end to end.
            </p>
            <ul className="flex flex-col gap-4 mb-10">
              {[
                "Your location, your schedule",
                "Music + video production combined",
                "Recording to final output",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-white/80 font-body text-sm"
                >
                  <span className="text-qc-gold font-display text-lg">✦</span>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/contact"
              className="inline-flex px-8 py-4 bg-qc-gold text-qc-black font-body font-bold text-sm rounded-pill uppercase tracking-wider hover:scale-105 hover:shadow-gold transition-all duration-200"
            >
              Book a Session
            </Link>
          </div>

          {/* Right: Image */}
          <div className="reveal reveal-delay-2 relative">
            <div className="rounded-2xl overflow-hidden aspect-4/3 shadow-hover">
              <img
                src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&q=80"
                alt="Mobile Studio Setup"
                className="w-full h-full object-cover"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-linear-to-tr from-qc-black/60 to-transparent" />
            </div>
            {/* Gold accent border */}
            <div className="absolute -inset-2 border border-qc-gold/20 rounded-3xl pointer-events-none" />
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 5 — ABOUT TEASER
      ================================================ */}
      <section className="relative bg-qc-dark py-24 overflow-hidden">
        {/* Faint QC letter-mark bg */}
        <div
          className="absolute inset-0 flex items-center justify-end pr-16 pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="font-display text-[25vw] text-white/3 leading-none">
            QC
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <SectionLabel text="About Us" color="gold" className="mb-6" />
            <h2 className="font-display text-section text-white mb-6 leading-none">
              CREATIVE MINDS
              <br />
              BEHIND THE MAGIC
            </h2>
          </div>

          <div className="reveal reveal-delay-2">
            <p className="text-white/70 font-body text-base leading-relaxed mb-8">
              Quickened Creations is more than a media company — we are a vision
              execution hub where God-given ideas become impactful realities.
              Spirit-inspired. Excellence-driven.
            </p>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-7 py-3.5 border border-white/30 text-white font-body font-medium text-sm rounded-pill uppercase tracking-wider hover:border-qc-gold hover:text-qc-gold transition-all duration-200"
            >
              Our Story <HugeiconsIcon icon={ArrowRight} size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 6 — PORTFOLIO STRIP
      ================================================ */}
      <section className="bg-qc-cream py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12 reveal">
            <div>
              <SectionLabel
                text="Featured Work"
                color="dark"
                className="mb-4"
              />
              <h2 className="font-display text-section text-qc-black mt-2">
                WORK THAT SPEAKS
              </h2>
            </div>
            <Link
              to="/services"
              className="hidden md:flex items-center gap-2 text-qc-dark/70 font-body text-sm hover:text-qc-dark transition-colors duration-200"
            >
              View All Work <HugeiconsIcon icon={ArrowRight}  size={14} />
            </Link>
          </div>

          {/* Asymmetric grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 h-auto md:h-96">
            {/* Large image */}
            <div className="group relative col-span-2 md:col-span-1 md:row-span-2 rounded-2xl overflow-hidden cursor-pointer reveal">
              <img
                src={portfolioItems[0].image}
                alt={portfolioItems[0].title}
                className="w-full h-64 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                crossOrigin="anonymous"
              />
              <div className="absolute inset-0 bg-linear-to-t from-qc-black/80 via-qc-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-qc-gold font-body text-xs tracking-widest uppercase mb-1">
                  {portfolioItems[0].category}
                </span>
                <h3 className="text-white font-display text-xl">
                  {portfolioItems[0].title.toUpperCase()}
                </h3>
              </div>
            </div>

            {/* Two stacked images */}
            {portfolioItems.slice(1).map((item, i) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer reveal"
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-44 md:h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  crossOrigin="anonymous"
                />
                <div className="absolute inset-0 bg-linear-to-t from-qc-black/80 via-qc-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-5">
                  <span className="text-qc-gold font-body text-xs tracking-widest uppercase mb-1">
                    {item.category}
                  </span>
                  <h3 className="text-white font-display text-lg">
                    {item.title.toUpperCase()}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex justify-center md:hidden reveal">
            <Link
              to="/services"
              className="flex items-center gap-2 text-qc-dark/70 font-body text-sm border border-qc-dark/20 px-6 py-3 rounded-pill hover:border-qc-dark hover:text-qc-dark transition-all duration-200"
            >
              View All Work <HugeiconsIcon icon={ArrowRight} size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 7 — TESTIMONIALS
      ================================================ */}
      <section className="bg-qc-cream py-24 border-t border-qc-black/10">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <SectionLabel
            text="Client Stories"
            color="dark"
            className="mb-8 reveal"
          />

          <div className="relative min-h-50">
            {testimonials.map((t, i) => (
              <div
                key={t.id}
                className={`transition-all duration-500 ${
                  i === activeTestimonial
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4 absolute inset-0"
                }`}
              >
                {/* Gold quote mark */}
                <div
                  className="font-display text-8xl text-qc-gold/30 leading-none mb-4"
                  aria-hidden="true"
                >
                  "
                </div>
                <blockquote className="font-body text-lg md:text-xl text-qc-black/80 leading-relaxed italic mb-8">
                  {t.quote}
                </blockquote>
                <div>
                  <p className="font-body font-semibold text-qc-black">
                    {t.name}
                  </p>
                  <p className="font-body text-sm text-qc-black/50">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-qc-dark/20 flex items-center justify-center text-qc-dark/60 hover:border-qc-dark hover:text-qc-dark transition-all duration-200"
              aria-label="Previous testimonial"
            >
              <HugeiconsIcon icon={ChevronLeft} size={16} strokeWidth={1.5} />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeTestimonial
                      ? "w-6 bg-qc-gold"
                      : "w-1.5 bg-qc-dark/20"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-qc-dark/20 flex items-center justify-center text-qc-dark/60 hover:border-qc-dark hover:text-qc-dark transition-all duration-200"
              aria-label="Next testimonial"
            >
              <HugeiconsIcon icon={ChevronRight} size={16} strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </section>

      {/* ================================================
          SECTION 8 — CTA BANNER
      ================================================ */}
      <section className="bg-qc-gold py-20 overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center reveal">
          <h2 className="font-display text-section text-qc-black mb-4 leading-none">
            READY TO BUILD
            <br />
            SOMETHING GREAT?
          </h2>
          <p className="font-body text-qc-black/70 text-lg mb-10">
            Tell us about your vision. Let's bring it to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-qc-black text-white font-body font-bold text-sm rounded-pill uppercase tracking-wider hover:scale-105 hover:shadow-hover transition-all duration-200"
          >
            Start a Project <HugeiconsIcon icon={ArrowRight} size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
