import { useState, type FormEvent } from "react";
import {HugeiconsIcon} from "@hugeicons/react";
import { CheckCircle, MessageCircle, Mail, Instagram } from "@hugeicons/core-free-icons";
import Footer from "@/components/layout/Footer";
import SectionLabel from "@/components/ui/SectionLabel";
import { services } from "@/data/services";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  description: string;
  howHeard: string;
}

const budgetOptions = [
  "Under ₦200,000",
  "₦200k – ₦500k",
  "₦500k – ₦2M",
  "₦2M – ₦5M",
  "₦5M+",
  "International (USD/GBP/EUR)",
];

const howHeardOptions = [
  "Instagram",
  "WhatsApp",
  "YouTube",
  "Facebook",
  "Referral from a friend",
  "Google Search",
  "Other",
];

const Contact = () => {
  useScrollReveal();
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState<FormData>({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    budget: "",
    description: "",
    howHeard: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate submit
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 1200);
  };

  const inputClass =
    "w-full px-5 py-3.5 bg-white border border-qc-black/15 rounded-xl font-body text-sm text-qc-black placeholder-qc-black/40 focus:outline-none focus:border-qc-gold focus:ring-2 focus:ring-qc-gold/20 transition-all duration-200";

  const selectClass =
    "w-full px-5 py-3.5 bg-white border border-qc-black/15 rounded-xl font-body text-sm text-qc-black focus:outline-none focus:border-qc-gold focus:ring-2 focus:ring-qc-gold/20 transition-all duration-200 appearance-none cursor-pointer";

  return (
    <div className="overflow-x-hidden">
      {/* ================================================
          HERO
      ================================================ */}
      <section className="relative bg-qc-dark py-32 pt-40 overflow-hidden">
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
          aria-hidden="true"
        >
          <span className="font-display text-[18vw] text-white/3 leading-none tracking-widest">
            COLLAB
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <SectionLabel
            text="Get In Touch"
            color="gold"
            className="mb-6 reveal"
          />
          <h1 className="font-display text-hero text-white leading-none mb-6 reveal reveal-delay-1">
            LET'S WORK
            <br />
            TOGETHER
          </h1>
          <p className="text-white/60 font-body text-lg max-w-xl mx-auto reveal reveal-delay-2">
            Tell us about your vision. We'd love to hear from you.
          </p>
        </div>
      </section>

      {/* ================================================
          CONTACT FORM + SIDE INFO
      ================================================ */}
      <section className="bg-qc-cream py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-[1fr_380px] gap-16">
          {/* FORM */}
          <div className="reveal">
            {!submitted ? (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-5"
                noValidate
              >
                {/* Row 1: Name + Email */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs font-semibold text-qc-black/60 uppercase tracking-wider mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={form.fullName}
                      onChange={handleChange}
                      placeholder="Your full name"
                      required
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-semibold text-qc-black/60 uppercase tracking-wider mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      required
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 2: Phone + Company */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs font-semibold text-qc-black/60 uppercase tracking-wider mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+234 000 000 0000"
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block font-body text-xs font-semibold text-qc-black/60 uppercase tracking-wider mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      placeholder="Your company or church"
                      className={inputClass}
                    />
                  </div>
                </div>

                {/* Row 3: Service dropdown */}
                <div>
                  <label className="block font-body text-xs font-semibold text-qc-black/60 uppercase tracking-wider mb-2">
                    Service Interested In *
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      required
                      className={selectClass}
                    >
                      <option value="">Select a service...</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.name}>
                          {s.name}
                          {s.isPremium ? " ★ PREMIUM" : ""}
                        </option>
                      ))}
                      <option value="Not Sure">
                        Not Sure — I need guidance
                      </option>
                    </select>
                    <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-qc-black/40">
                      ▾
                    </div>
                  </div>
                </div>

                {/* Row 4: Budget + How Heard */}
                <div className="grid md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-body text-xs font-semibold text-qc-black/60 uppercase tracking-wider mb-2">
                      Budget Range
                    </label>
                    <div className="relative">
                      <select
                        name="budget"
                        value={form.budget}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="">Select a range...</option>
                        {budgetOptions.map((b) => (
                          <option key={b} value={b}>
                            {b}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-qc-black/40">
                        ▾
                      </div>
                    </div>
                  </div>
                  <div>
                    <label className="block font-body text-xs font-semibold text-qc-black/60 uppercase tracking-wider mb-2">
                      How Did You Hear About Us?
                    </label>
                    <div className="relative">
                      <select
                        name="howHeard"
                        value={form.howHeard}
                        onChange={handleChange}
                        className={selectClass}
                      >
                        <option value="">Select one...</option>
                        {howHeardOptions.map((h) => (
                          <option key={h} value={h}>
                            {h}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-qc-black/40">
                        ▾
                      </div>
                    </div>
                  </div>
                </div>

                {/* Project description */}
                <div>
                  <label className="block font-body text-xs font-semibold text-qc-black/60 uppercase tracking-wider mb-2">
                    Tell Us About Your Project *
                  </label>
                  <textarea
                    name="description"
                    value={form.description}
                    onChange={handleChange}
                    required
                    rows={5}
                    placeholder="Describe your vision, goals, timeline, and any other relevant details..."
                    className={`${inputClass} resize-none`}
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full py-4 bg-qc-gold text-qc-black font-body font-bold text-sm rounded-pill uppercase tracking-widest hover:scale-[1.02] hover:shadow-gold transition-all duration-200 disabled:opacity-70 disabled:scale-100 flex items-center justify-center gap-2"
                >
                  {loading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-qc-black/30 border-t-qc-black rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    "Send Message"
                  )}
                </button>

                <p className="text-center font-body text-xs text-qc-black/40">
                  * Required fields. We'll respond within 24 hours.
                </p>
              </form>
            ) : (
              /* SUCCESS STATE */
              <div className="flex flex-col items-center justify-center text-center py-20 gap-6">
                <div className="w-20 h-20 rounded-full bg-qc-gold/10 border-2 border-qc-gold flex items-center justify-center animate-scale-in">
                  <HugeiconsIcon icon={CheckCircle} size={36} />
                </div>
                <div>
                  <h3 className="font-display text-4xl text-qc-black mb-3">
                    MESSAGE RECEIVED!
                  </h3>
                  <p className="text-qc-gold font-display text-xl tracking-wider mb-4">
                    ✦ WE'LL BE IN TOUCH SHORTLY ✦
                  </p>
                  <p className="font-body text-qc-black/60 text-sm max-w-sm">
                    Thank you for reaching out, {form.fullName}. Our team will
                    review your project details and get back to you within 24
                    hours.
                  </p>
                </div>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setForm({
                      fullName: "",
                      email: "",
                      phone: "",
                      company: "",
                      service: "",
                      budget: "",
                      description: "",
                      howHeard: "",
                    });
                  }}
                  className="px-6 py-3 border border-qc-black/20 text-qc-black/60 font-body text-sm rounded-pill hover:border-qc-black hover:text-qc-black transition-all duration-200"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>

          {/* SIDE: Alternate contact */}
          <div className="flex flex-col gap-6 reveal reveal-delay-2">
            <div>
              <SectionLabel
                text="Other Ways To Reach Us"
                color="dark"
                className="mb-6"
              />

              {/* WhatsApp — most prominent */}
              <a
                href="https://wa.me/+2348078209879"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-[#25D366]/10 border border-[#25D366]/30 rounded-2xl mb-4 hover:bg-[#25D366]/20 hover:border-[#25D366]/50 transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] flex items-center justify-center shrink-0">
                  <HugeiconsIcon icon={MessageCircle} size={20} />
                </div>
                <div>
                  <p className="font-body font-semibold text-qc-black text-sm">
                    WhatsApp
                  </p>
                  <p className="font-body text-xs text-qc-black/50">
                    Chat with us directly — fastest response
                  </p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:hello@quickenedcreations.com"
                className="flex items-center gap-4 p-5 bg-white border border-qc-black/10 rounded-2xl mb-4 hover:border-qc-gold/40 hover:shadow-card transition-all duration-200 group"
              >
                <div className="w-12 h-12 rounded-xl bg-qc-dark flex items-center justify-center shrink-0">
                  <HugeiconsIcon icon={Mail} size={20} className="text-qc-gold" />
                </div>
                <div>
                  <p className="font-body font-semibold text-qc-black text-sm">
                    Email
                  </p>
                  <p className="font-body text-xs text-qc-black/50">
                    hello@quickenedcreations.com
                  </p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://instagram.com/quickenedcreations"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-5 bg-white border border-qc-black/10 rounded-2xl hover:border-qc-gold/40 hover:shadow-card transition-all duration-200 group"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{
                    background:
                      "linear-gradient(135deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)",
                  }}
                >
                  <HugeiconsIcon icon={Instagram} size={20} className="text-white" />
                </div>
                <div>
                  <p className="font-body font-semibold text-qc-black text-sm">
                    Instagram
                  </p>
                  <p className="font-body text-xs text-qc-black/50">
                    @quickenedcreations
                  </p>
                </div>
              </a>
            </div>

            {/* Location badge */}
            <div className="p-6 rounded-2xl bg-qc-dark">
              <p className="font-display text-qc-gold text-lg mb-2">
                BASED IN NIGERIA
              </p>
              <p className="font-body text-white/60 text-sm leading-relaxed">
                We serve clients locally across Nigeria and internationally.
                Remote production and consultations available worldwide.
              </p>
            </div>

            {/* Response time */}
            <div className="p-5 rounded-2xl border border-qc-gold/30 bg-qc-gold/5 text-center">
              <p className="font-display text-qc-dark text-2xl mb-1">
                24 HOURS
              </p>
              <p className="font-body text-xs text-qc-black/50 tracking-widest uppercase">
                Average Response Time
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
