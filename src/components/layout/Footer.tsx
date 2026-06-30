import { Link } from "react-router-dom";
import { HugeiconsIcon } from "@hugeicons/react"; 
import {
  Instagram,
  Youtube,
  Facebook,
  MessageCircle,
  MapPin,
} from "@hugeicons/core-free-icons"
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-qc-black text-white">
      {/* Gold separator */}
      <div className="h-px bg-qc-gold" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <Logo size="default" />
            <p className="text-white/60 text-sm font-body leading-relaxed max-w-xs">
              A full-service creative and media brand where God-given visions
              become impactful realities. Spirit-inspired. Excellence-driven.
            </p>
            <div className="flex items-center gap-1 text-white/40 text-xs font-body">
              <HugeiconsIcon icon={MapPin} size={12} />
              <span>Nigeria — Serving Clients Worldwide</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg tracking-widest text-qc-gold mb-6">
              QUICK LINKS
            </h4>
            <ul className="flex flex-col gap-3">
              {[
                { label: "Home", path: "/" },
                { label: "Services", path: "/services" },
                { label: "About Us", path: "/about" },
                { label: "Contact", path: "/contact" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-white/60 text-sm font-body hover:text-qc-gold transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-4 h-px bg-qc-gold/30 group-hover:bg-qc-gold group-hover:w-6 transition-all duration-200" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social + Contact */}
          <div>
            <h4 className="font-display text-lg tracking-widest text-qc-gold mb-6">
              CONNECT WITH US
            </h4>
            <div className="flex flex-col gap-4 mb-6">
              <a
                href="https://wa.me/+2348078209879"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-4 py-3 bg-[#25D366]/10 border border-[#25D366]/30 rounded-xl text-sm font-body text-white hover:bg-[#25D366]/20 transition-all duration-200"
              >
                <HugeiconsIcon icon={MessageCircle} size={16} className="text-[#25D366]" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
            <div className="flex items-center gap-4">
              {[
                { icon: Instagram, label: "Instagram", href: "#" },
                { icon: Youtube, label: "YouTube", href: "#" },
                { icon: Facebook, label: "Facebook", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/60 hover:text-qc-gold hover:border-qc-gold transition-all duration-200"
                >
                  <HugeiconsIcon icon={Icon} size={16} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-body">
            © 2025 Quickened Creations — Pneuma Inspired. All rights reserved.
          </p>
          <p className="text-white/20 text-xs font-body tracking-widest">
            SPIRIT · INSPIRED · EXCELLENCE
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
