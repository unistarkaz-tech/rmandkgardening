import heroImg from "@/assets/gardener-bg.png";

const HeroSection = () => (
  <section id="hero" className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    <img src={heroImg} alt="Professional gardener maintaining a beautiful lawn in Hayes, London" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover" />
    <div className="absolute inset-0 bg-foreground/50" />
    <div className="relative z-10 text-center px-4 max-w-3xl mx-auto animate-fade-up">
      <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-primary-foreground leading-tight mb-6">
        Professional Gardening Services in Hayes
      </h1>
      <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 font-body">
        Transforming Overgrown Gardens into Beautiful Outdoor Spaces
      </p>
      <a
        href="#contact"
        className="inline-block bg-accent text-accent-foreground px-8 py-4 rounded-lg text-lg font-bold hover:scale-105 transition-transform shadow-lg"
      >
        Get Your Free Quote
      </a>
    </div>
  </section>
);

export default HeroSection;
