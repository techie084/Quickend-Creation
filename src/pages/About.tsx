import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight } from "@hugeicons/core-free-icons";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const values = [
  {
    title: "EXCELLENCE",
    desc: "Everything we produce reflects the highest standard of quality. We don't settle — ever.",
    color: "#F5C518",
  },
  {
    title: "CREATIVITY",
    desc: "Bold, original work rooted in spirit-led inspiration. We create what's never been seen.",
    color: "#3DAA6E",
  },
  {
    title: "PURPOSE",
    desc: "Every creation has intent — to transform, impact, and elevate. We create with meaning.",
    color: "#3B7DD8",
  },
];

const About = () => {
  useScrollReveal();

  return (
    <div className="overflow-x-hidden">
      {/* ================================================
          HERO
      ================================================ */}
      <section className="relative min-h-[80vh] bg-qc-dark flex items-end overflow-hidden pt-20 pb-20">
        {/* PNEUMA watermark */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="font-display text-[22vw] text-white/3 leading-none tracking-widest">
            PNEUMA
          </span>
        </div>

        {/* Floating dots */}
        <div
          className="absolute inset-0 pointer-events-none"
          aria-hidden="true"
        >
          <div className="float-1 absolute top-1/4 left-[8%] w-4 h-4 rounded-full bg-qc-blue opacity-40" />
          <div className="float-3 absolute top-1/2 right-[10%] w-3 h-3 rounded-full bg-qc-gold opacity-40" />
          <div className="float-2 absolute bottom-1/4 left-[20%] w-2 h-2 rounded-full bg-qc-red opacity-30" />
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 w-full">
          <SectionLabel text="Our Story" color="gold" className="mb-6 reveal" />
          <h1 className="font-display text-hero text-white leading-none mb-6 reveal reveal-delay-1">
            CREATIVE MINDS
            <br />
            BEHIND THE
            <br />
            <span className="text-qc-gold">MAGIC</span>
          </h1>
          <p className="text-white/60 font-body text-lg max-w-xl reveal reveal-delay-2">
            Spirit-inspired creativity expressed through excellence.
          </p>
        </div>
      </section>

      {/* ================================================
          THE STORY
      ================================================ */}
      <section className="bg-qc-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-16 items-start">
          {/* Pull-quote */}
          <div className="reveal">
            <div
              className="font-display text-7xl text-qc-gold/20 leading-none mb-4"
              aria-hidden="true"
            >
              "
            </div>
            <blockquote className="font-display text-3xl md:text-4xl text-qc-black leading-tight tracking-wide">
              WE ARE MORE THAN A MEDIA COMPANY — WE ARE A VISION EXECUTION HUB.
            </blockquote>
            <div className="mt-8 w-16 h-1 bg-qc-gold" />
          </div>

          {/* Body paragraphs */}
          <div className="reveal reveal-delay-2 flex flex-col gap-6">
            <p className="font-body text-base text-qc-black/70 leading-relaxed">
              Quickened Creations — Pneuma Inspired was born from a conviction
              that creativity is not just an art form, but a sacred act of
              bringing what does not yet exist into tangible reality. The name
              "Pneuma" — Greek for Spirit or Breath — is the heartbeat of
              everything we do.
            </p>
            <p className="font-body text-base text-qc-black/70 leading-relaxed">
              We are a full-service creative and media brand serving clients
              across Nigeria and internationally. From videography and music
              production to drone coverage, graphic design, and website
              development — we handle every dimension of your creative vision
              with professionalism and purpose.
            </p>
            <p className="font-body text-base text-qc-black/70 leading-relaxed">
              Our team combines technical excellence with creative intuition and
              spiritual grounding. We don't just execute tasks — we partner with
              you to bring your God-given vision to life in a way that impacts,
              transforms, and endures.
            </p>
            <p className="font-body text-base text-qc-black/70 leading-relaxed">
              Whether you're a church, a business, an artist, or an individual
              with a vision — Quickened Creations is where your ideas come to
              life.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          VISION & IDENTITY
      ================================================ */}
      <section className="bg-qc-dark py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid md:grid-cols-2 gap-12">
          <div className="reveal p-10 rounded-2xl border border-white/10 bg-white/2">
            <SectionLabel text="Our Vision" color="gold" className="mb-6" />
            <h2 className="font-display text-4xl text-white mb-6 leading-tight">
              OUR VISION
            </h2>
            <p className="font-body text-white/70 text-base leading-relaxed">
              To become a leading force in transforming God-given ideas into
              tangible, impactful realities through spirit-inspired creativity
              and excellence. We envision a world where every creative vision
              finds its fullest, most powerful expression.
            </p>
          </div>

          <div className="reveal reveal-delay-2 p-10 rounded-2xl border border-qc-gold/20 bg-qc-gold/3">
            <SectionLabel text="Our Identity" color="gold" className="mb-6" />
            <h2 className="font-display text-4xl text-white mb-6 leading-tight">
              OUR IDENTITY
            </h2>
            <p className="font-body text-white/70 text-base leading-relaxed">
              Quickened Creations — Pneuma Inspired. We don't just create. We
              bring life to vision. Our identity is rooted in faith-inspired
              excellence — bold without being cold, premium without being
              inaccessible, world-class without losing our soul.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================
          VALUES — 3 PILLARS
      ================================================ */}
      <section className="bg-qc-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <SectionLabel
              text="What We Stand On"
              color="dark"
              className="mb-4"
            />
            <h2 className="font-display text-section text-qc-black mt-2">
              OUR THREE PILLARS
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, i) => (
              <div
                key={value.title}
                className={`reveal reveal-delay-${i + 1} group relative p-10 rounded-2xl border border-qc-black/10 hover:shadow-hover transition-all duration-300 bg-white`}
              >
                {/* Top accent line */}
                <div
                  className="w-12 h-1 mb-8 rounded-full transition-all duration-300 group-hover:w-full"
                  style={{ backgroundColor: value.color }}
                />
                <h3
                  className="font-display text-3xl mb-4 tracking-wide"
                  style={{ color: value.color }}
                >
                  {value.title}
                </h3>
                <p className="font-body text-sm text-qc-black/70 leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================================================
          CTA
      ================================================ */}
      <section className="bg-qc-dark py-20">
        <div className="max-w-3xl mx-auto px-6 lg:px-8 text-center reveal">
          <SectionLabel text="Ready?" color="gold" className="mb-6" />
          <h2 className="font-display text-section text-white mb-4">
            LET'S CREATE
            <br />
            SOMETHING TOGETHER.
          </h2>
          <p className="font-body text-white/60 text-lg mb-10">
            Your vision. Our excellence. Let's build something unforgettable.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-qc-gold text-qc-black font-body font-bold text-sm rounded-pill uppercase tracking-wider hover:scale-105 hover:shadow-gold transition-all duration-200 animate-pulse-gold"
          >
            Start a Project <HugeiconsIcon icon={ArrowRight} size={16} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
