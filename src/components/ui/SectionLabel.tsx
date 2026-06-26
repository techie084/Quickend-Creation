interface SectionLabelProps {
  text: string;
  className?: string;
  color?: "gold" | "white" | "dark";
}

const SectionLabel = ({
  text,
  className = "",
  color = "gold",
}: SectionLabelProps) => {
  const colorMap = {
    gold: "text-qc-gold border-qc-gold/30",
    white: "text-white/70 border-white/20",
    dark: "text-qc-dark/60 border-qc-dark/20",
  };

  return (
    <span
      className={`inline-block text-[10px] font-body font-semibold tracking-[0.3em] uppercase border rounded-pill px-4 py-1.5 ${colorMap[color]} ${className}`}
    >
      {text}
    </span>
  );
};

export default SectionLabel;
