import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowRight } from "@hugeicons/core-free-icons";
import { Link } from "react-router-dom";
import { Service } from "@/data/services";

interface ServiceCardProps {
  service: Service;
  variant?: "dark" | "light";
  index?: number;
  linkTo?: string;
}

const ServiceCard = ({
  service,
  variant,
  index = 0,
  linkTo = "/services",
}: ServiceCardProps) => {
  // Alternate dark/light unless it's premium
  const cardVariant = service.isPremium
    ? "premium"
    : (variant ?? (index % 2 === 0 ? "dark" : "light"));

  const Icon = service.icon;

  const base =
    "group relative flex-shrink-0 w-72 lg:w-80 h-96 rounded-2xl p-7 flex flex-col justify-between cursor-pointer transition-all duration-300 gold-hover-glow overflow-hidden";

  const styles = {
    dark: `${base} bg-qc-dark border border-white/10 hover:border-qc-gold/40`,
    light: `${base} bg-qc-cream border border-transparent hover:border-qc-green/40`,
    premium: `${base} bg-qc-black border border-qc-gold/30 hover:border-qc-gold`,
  };

  return (
    <div className={styles[cardVariant]}>
      {/* Background accent */}
      <div
        className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle at top right, ${service.color ?? "#F5C518"}, transparent 60%)`,
        }}
      />

      {/* Premium badge */}
      {service.isPremium && (
        <span className="absolute top-5 right-5 px-3 py-1 bg-qc-gold text-qc-black text-[10px] font-body font-bold tracking-widest uppercase rounded-pill">
          PREMIUM
        </span>
      )}

      {/* Top */}
      <div>
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110`}
          style={{ backgroundColor: `${service.color ?? "#F5C518"}20` }}
        >
          <HugeiconsIcon
  icon={service.icon}
  size={22}
  style={{ color: service.color ?? "#F5C518" }}
/>
        </div>
        <h3
          className={`font-display text-2xl tracking-wide mb-3 leading-none ${
            cardVariant === "light" ? "text-qc-black" : "text-white"
          }`}
        >
          {service.name.toUpperCase()}
        </h3>
        <p
          className={`text-sm font-body leading-relaxed line-clamp-3 ${
            cardVariant === "light" ? "text-qc-black/60" : "text-white/60"
          }`}
        >
          {service.shortDesc}
        </p>
      </div>

      {/* Bottom */}
      <Link
        to={linkTo}
        className={`flex items-center gap-2 text-sm font-body font-medium transition-all duration-200 group-hover:gap-3 ${
          cardVariant === "light" ? "text-qc-dark" : "text-qc-gold"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        Learn More
        <HugeiconsIcon
          icon={ArrowRight}
          size={14}
          className="transition-transform duration-200 group-hover:translate-x-1"
        />
      </Link>
    </div>
  );
};

export default ServiceCard;
