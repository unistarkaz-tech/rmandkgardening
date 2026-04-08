import heroImg from "@/assets/gardener-bg.png";
import { Phone, ArrowDown } from "lucide-react";

const HeroSection = () => (
  <section id="hero" className="relative min-h-screen flex items-end overflow-hidden">
    {/* Background image - object-top to show the gardener's head */}
    <img
      src={heroImg}
      alt="Professional gardener maintaining a beautiful garden in Hayes, London"
      width={1920}
      height={1080}
      className="absolute inset-0 w-full h-full object-cover object-top"
    />
    {/* Gradient overlay - bottom heavy so gardener is visible at top */}
    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/70 to-transparent" />
    
    {/* Content at bottom */}
    <div className="relative z-10 w-full pb-16 pt-32">
      <div className="container">
        <div className="max-w-2xl animate-fade-up">
          <div className="inline-block bg-primary/20 border border-primary/40 rounded-full px-4 py-1.5 mb-6">
            <span className="text-primary text-sm font-semibold tracking-wide">🌿 Hayes, London's Trusted Garden Experts</span>
          </div>
          <h1 className="font-heading text-5xl md:text-7xl font-black text-foreground leading-[1.05] mb-6">
            We Make Gardens
            <span className="text-primary block">Look Amazing</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 mb-10 max-w-lg font-body leading-relaxed">
            Professional lawn mowing, hedge trimming & garden clearance. Transforming outdoor spaces across Hayes and London.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full text-lg font-bold hover:brightness-110 transition-all duration-300 shadow-xl shadow-accent/30 animate-glow-pulse"
            >
              Book a Quote
            </a>
            <a
              href="tel:07397666008"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-foreground px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary/80 transition-all duration-300 border border-border"
            >
              <Phone size={20} className="text-primary" />
              07397 666008
            </a>
          </div>
        </div>
      </div>
      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown size={24} className="text-foreground/40" />
      </div>
    </div>
  </section>
);

export default HeroSection;
