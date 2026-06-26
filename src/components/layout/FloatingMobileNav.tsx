// import { useState, useEffect } from "react";
// import { Link, useLocation } from "react-router-dom";
// import { Home, Briefcase, Info, Mail, X, Menu } from "lucide-react";

// const navLinks = [
//   { label: "Home", path: "/", icon: Home },
//   { label: "Services", path: "/services", icon: Briefcase },
//   { label: "About", path: "/about", icon: Info },
//   { label: "Contact", path: "/contact", icon: Mail },
// ];

// const FloatingMobileNav = () => {
//   const [open, setOpen] = useState(false);
//   const [shrink, setShrink] = useState(false);
//   const location = useLocation();

//   useEffect(() => {
//     const handleScroll = () => setShrink(window.scrollY > 100);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     setOpen(false);
//   }, [location]);

//   return (
//     <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
//       {/* Expanded menu links */}
//       <div
//         className={`flex flex-col items-center gap-2 mb-3 transition-all duration-300 ${
//           open
//             ? "opacity-100 translate-y-0"
//             : "opacity-0 translate-y-8 pointer-events-none"
//         }`}
//       >
//         {navLinks.map((link, i) => (
//           <Link
//             key={link.path}
//             to={link.path}
//             className={`flex items-center gap-3 px-5 py-3 bg-qc-dark border rounded-pill text-sm font-body font-medium tracking-wide transition-all duration-200 shadow-nav ${
//               location.pathname === link.path
//                 ? "border-qc-gold text-qc-gold"
//                 : "border-white/20 text-white hover:border-qc-gold/50 hover:text-qc-gold"
//             }`}
//             style={{ transitionDelay: open ? `${i * 50}ms` : "0ms" }}
//           >
//             <link.icon size={15} />
//             {link.label}
//           </Link>
//         ))}
//         <Link
//           to="/contact"
//           className="flex items-center gap-2 px-6 py-3 bg-qc-gold text-qc-black rounded-pill text-sm font-body font-semibold tracking-wide shadow-gold"
//           style={{ transitionDelay: open ? "200ms" : "0ms" }}
//         >
//           Let's Collab
//         </Link>
//       </div>

//       {/* Pill toggle button */}
//       <button
//         onClick={() => setOpen(!open)}
//         className={`flex items-center gap-3 px-5 bg-qc-dark border border-white/20 rounded-pill shadow-nav transition-all duration-300 hover:border-qc-gold/50 ${
//           shrink && !open ? "py-2.5 scale-95" : "py-3"
//         }`}
//         aria-label="Toggle navigation"
//       >
//         {open ? (
//           <X size={16} className="text-qc-gold" />
//         ) : (
//           <Menu size={16} className="text-white" />
//         )}
//         <span className="text-white text-sm font-body font-medium">
//           {open ? "Close" : "Menu"}
//         </span>
//         <div className="w-5 h-5 rounded-full bg-qc-gold/20 border border-qc-gold/40 flex items-center justify-center">
//           <div className="w-2 h-2 rounded-full bg-qc-gold" />
//         </div>
//       </button>
//     </div>
//   );
// };

// export default FloatingMobileNav;
