import {
  Video,
  Scissors,
  Music,
  PenLine,
  Share2,
  Megaphone,
  Palette,
  Guitar,
  GraduationCap,
  Plane,
  Camera,
  Globe,
  Lightbulb,
  Truck,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  id: number;
  name: string;
  shortDesc: string;
  longDesc: string;
  icon: LucideIcon;
  isPremium?: boolean;
  color?: string;
}

export const services: Service[] = [
  {
    id: 1,
    name: "Videography & Video Production",
    shortDesc:
      "Events, weddings, church programs, music recordings, movies, and more.",
    longDesc:
      "We capture your most important moments with cinematic precision. From intimate events to large productions, we bring a professional eye and a storyteller's heart to every frame.",
    icon: Video,
    color: "#3B7DD8",
  },
  {
    id: 2,
    name: "Video Editing",
    shortDesc: "Raw footage transformed into compelling visual stories.",
    longDesc:
      "We take your raw footage and sculpt it into a cohesive, polished story. Color grading, sound design, motion graphics — we handle every layer of post-production.",
    icon: Scissors,
    color: "#D94F5C",
  },
  {
    id: 3,
    name: "Music Production",
    shortDesc: "Professional sound creation from concept to final mix.",
    longDesc:
      "From beat-making to full arrangement, mixing, and mastering — we craft sounds that move people. Spirit-inspired creativity meets world-class production standards.",
    icon: Music,
    color: "#F5C518",
  },
  {
    id: 4,
    name: "Songwriting",
    shortDesc:
      "Ideas and emotions turned into well-structured, meaningful songs.",
    longDesc:
      "Your story deserves a melody. Our songwriters shape your vision into lyrics and compositions that resonate, connect, and endure.",
    icon: PenLine,
    color: "#3DAA6E",
  },
  {
    id: 5,
    name: "Social Media Management",
    shortDesc: "Strategy-driven content for brand growth across platforms.",
    longDesc:
      "Consistency is currency. We build your social media presence with purpose — strategic content calendars, community engagement, and performance-driven growth.",
    icon: Share2,
    color: "#3B7DD8",
  },
  {
    id: 6,
    name: "Advertisement Services",
    shortDesc:
      "Jingles, voice-overs, and video ads that connect with your audience.",
    longDesc:
      "We create advertising that sticks. Jingles, voice-overs, TV commercials, and digital ads crafted to leave lasting impressions and drive real results.",
    icon: Megaphone,
    color: "#D94F5C",
  },
  {
    id: 7,
    name: "Graphic Design",
    shortDesc:
      "Brand identity and promotional materials with professional clarity.",
    longDesc:
      "Logos, brand kits, flyers, social templates, and more. Every design piece we create reflects your identity with clarity, creativity, and visual impact.",
    icon: Palette,
    color: "#F5C518",
  },
  {
    id: 8,
    name: "Sales of Instruments & Lighting",
    shortDesc: "Quality gear for churches, studios, and events.",
    longDesc:
      "From professional audio equipment to stage lighting — we supply quality gear that elevates your church, studio, or event production.",
    icon: Guitar,
    color: "#3DAA6E",
  },
  {
    id: 9,
    name: "Music Classes",
    shortDesc: "Structured instrument training — studio, church, or home.",
    longDesc:
      "Learn from experienced musicians in a structured, faith-inspired environment. Piano, guitar, drums, vocals — at our studio, at your church, or in your home.",
    icon: GraduationCap,
    color: "#3B7DD8",
  },
  {
    id: 10,
    name: "Drone Coverage",
    shortDesc: "Cinematic aerial perspectives for your projects.",
    longDesc:
      "Take your visuals to new heights — literally. Our drone operators deliver breathtaking aerial footage for events, real estate, music videos, and more.",
    icon: Plane,
    color: "#D94F5C",
  },
  {
    id: 11,
    name: "Content Creation Space",
    shortDesc: "A creative environment for creators to bring ideas to life.",
    longDesc:
      "A fully equipped creative hub for content creators — backdrop setups, ring lights, camera gear, and a vibrant atmosphere to shoot your best content.",
    icon: Camera,
    color: "#F5C518",
  },
  {
    id: 12,
    name: "Website Development",
    shortDesc: "Modern, functional websites for strong online presence.",
    longDesc:
      "We build websites that work as hard as you do — clean, fast, mobile-responsive, and designed to convert visitors into clients.",
    icon: Globe,
    color: "#3DAA6E",
  },
  {
    id: 13,
    name: "Consultation",
    shortDesc: "Strategic guidance to bring your vision to life effectively.",
    longDesc:
      "Not sure where to start? Our consultation sessions help you map out your creative or media strategy — aligned with your goals, budget, and vision.",
    icon: Lightbulb,
    color: "#3B7DD8",
  },
  {
    id: 14,
    name: "Mobile Studio Experience",
    shortDesc:
      "We come to you — full music & video production at your location.",
    longDesc:
      "Can't make it to a studio? We come to you. Full music and video production at your location, on your schedule — end to end. Recording to final output, wherever you are.",
    icon: Truck,
    isPremium: true,
    color: "#F5C518",
  },
];

export const featuredServices = services.slice(0, 5);
