interface MarqueeProps {
  items: string[];
  speed?: "slow" | "normal" | "fast";
  className?: string;
}

const speedMap = {
  slow: "60s",
  normal: "40s",
  fast: "25s",
};

const Marquee = ({ items, speed = "normal", className = "" }: MarqueeProps) => {
  const separator = " ✦ ";
  const content = items.join(separator) + separator;

  return (
    <div
      className={`overflow-hidden whitespace-nowrap ${className}`}
      aria-hidden="true"
    >
      {/* Duplicate content exactly twice for seamless -50% loop */}
      <div
        className="inline-flex"
        style={{ animation: `marquee ${speedMap[speed]} linear infinite` }}
      >
        <span className="inline-block pr-8">{content}</span>
        <span className="inline-block pr-8">{content}</span>
      </div>
    </div>
  );
};

export default Marquee;
