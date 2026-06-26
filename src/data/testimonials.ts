export interface Testimonial {
  id: number;
  quote: string;
  name: string;
  company: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    quote:
      "Quickened Creations didn't just deliver a video — they delivered a vision. The quality, the attention to detail, and the spirit behind every frame was unlike anything I'd experienced with another creative agency. Truly world-class.",
    name: "Adaeze Okonkwo",
    company: "Grace & Light Church",
    role: "Lead Pastor",
  },
  {
    id: 2,
    quote:
      "From concept to final mix, the music production team at QC was exceptional. They understood the sound I was going for before I could even fully articulate it. The result was a track that exceeded every expectation.",
    name: "Emmanuel Adeyemi",
    company: "Independent Artist",
    role: "Gospel Recording Artist",
  },
  {
    id: 3,
    quote:
      "The Mobile Studio Experience was a game changer for our conference. They brought a full production setup to our venue and the results looked like a broadcast-quality production. Phenomenal team, phenomenal work.",
    name: "Dr. Blessing Osei",
    company: "Kingdom Impact Foundation",
    role: "Executive Director",
  },
];
