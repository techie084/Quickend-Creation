interface LogoProps {
  size?: "default" | "small" | "large";
  variant?: "full" | "mark";
  className?: string;
}

const Logo = ({
  size = "default",
  variant = "full",
  className = "",
}: LogoProps) => {
  const scales = {
    small: { mark: 32, text: "text-xs" },
    default: { mark: 44, text: "text-sm" },
    large: { mark: 60, text: "text-base" },
  };

  const s = scales[size];

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {/* Logo Mark */}
      <svg
        width={s.mark}
        height={s.mark}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Quickened Creations Logo Mark"
      >
        {/* Camera aperture / C shape (outer ring) */}
        <circle
          cx="50"
          cy="50"
          r="46"
          stroke="white"
          strokeWidth="5"
          fill="none"
        />
        {/* Aperture blades suggestion */}
        <path
          d="M 20 50 A 32 32 0 0 1 80 50"
          stroke="white"
          strokeWidth="4"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 50 18 A 32 32 0 0 1 82 50"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M 50 82 A 32 32 0 0 0 82 50"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        {/* Rising arrow at top */}
        <path d="M 50 8 L 44 18 L 50 14 L 56 18 Z" fill="#F5C518" />
        {/* 4 colored dots at top area */}
        <circle cx="32" cy="15" r="4" fill="#3B7DD8" /> {/* Blue */}
        <circle cx="42" cy="9" r="4" fill="#D94F5C" /> {/* Red */}
        <circle cx="54" cy="9" r="4" fill="#3DAA6E" /> {/* Green */}
        <circle cx="64" cy="15" r="4" fill="#F5C518" /> {/* Yellow */}
        {/* Gold music note at center */}
        <g transform="translate(34, 32)">
          {/* Note head */}
          <ellipse
            cx="8"
            cy="28"
            rx="7"
            ry="5"
            fill="#F5C518"
            transform="rotate(-15, 8, 28)"
          />
          {/* Note stem */}
          <rect x="14" y="8" width="3" height="21" fill="#F5C518" rx="1.5" />
          {/* Note flag */}
          <path
            d="M 17 8 Q 30 12 26 20"
            stroke="#F5C518"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
          />
          {/* Second note head */}
          <ellipse
            cx="26"
            cy="24"
            rx="6"
            ry="4.5"
            fill="#F5C518"
            transform="rotate(-15, 26, 24)"
          />
        </g>
      </svg>

      {/* Wordmark — only in "full" variant */}
      {variant === "full" && (
        <div className="flex flex-col leading-none">
          <span
            className={`font-display tracking-widest text-white ${size === "small" ? "text-sm" : size === "large" ? "text-xl" : "text-base"}`}
          >
            QUICKENED CREATIONS
          </span>
          <span
            className={`tracking-[0.3em] uppercase text-qc-gold font-body font-light ${size === "small" ? "text-[8px]" : size === "large" ? "text-xs" : "text-[9px]"}`}
          >
            PNEUMA INSPIRED
          </span>
        </div>
      )}
    </div>
  );
};

export default Logo;
