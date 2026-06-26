import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-qc-dark overflow-hidden relative">
      {/* Faint watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span className="font-display text-[30vw] text-white/[0.03] leading-none">
          404
        </span>
      </div>

      <div className="text-center relative z-10 px-6">
        <span className="inline-block text-[10px] font-body font-semibold tracking-[0.3em] uppercase border border-qc-gold/30 text-qc-gold rounded-full px-4 py-1.5 mb-8">
          Page Not Found
        </span>
        <h1 className="font-display text-[clamp(3rem,10vw,7rem)] text-white leading-none mb-6">
          LOST IN THE
          <br />
          <span className="text-qc-gold">CREATIVE SPACE</span>
        </h1>
        <p className="font-body text-white/60 text-lg mb-10 max-w-md mx-auto">
          The page you're looking for doesn't exist. Let's get you back on the
          right path.
        </p>
        <Link
          to="/"
          className="inline-flex items-center gap-3 px-8 py-4 bg-qc-gold text-qc-black font-body font-bold text-sm rounded-full uppercase tracking-wider hover:scale-105 hover:shadow-gold transition-all duration-200"
        >
          Back to Home <ArrowRight size={15} />
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
