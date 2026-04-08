import { Shield, Eye, Leaf, CheckCircle } from "lucide-react";

const features = [
  { icon: Shield, title: "Reliable & Trusted", desc: "Consistent, on-time service you can always count on." },
  { icon: Eye, title: "Meticulous Detail", desc: "Every edge trimmed, every corner perfectly cared for." },
  { icon: Leaf, title: "Eco-Friendly", desc: "Green waste handled responsibly and sustainably." },
];

const stats = [
  { value: "500+", label: "Gardens Maintained" },
  { value: "10+", label: "Years Experience" },
  { value: "100%", label: "Customer Satisfaction" },
];

const AboutSection = () => (
  <section id="about" className="py-24 relative overflow-hidden">
    {/* Decorative circle */}
    <div className="absolute -top-32 -right-32 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    
    <div className="container relative">
      <div className="text-center mb-16">
        <span className="inline-block text-primary text-sm font-bold tracking-widest uppercase mb-3">About Us</span>
        <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-6">
          Hayes' Most Trusted <span className="text-primary">Garden Team</span>
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
          At RM&K Gardening, we provide professional, affordable garden maintenance and outdoor cleaning services across Hayes and the surrounding London areas. Our experienced team ensures your garden stays neat, healthy, and beautiful all year round.
        </p>
      </div>

      {/* Stats bar */}
      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mb-16 bg-secondary/50 rounded-2xl p-8 border border-border">
        {stats.map((s) => (
          <div key={s.label} className="text-center">
            <p className="font-heading text-3xl md:text-4xl font-black text-primary">{s.value}</p>
            <p className="text-muted-foreground text-sm mt-1">{s.label}</p>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {features.map((f) => (
          <div key={f.title} className="bg-card border border-border rounded-2xl p-8 hover:border-primary/40 transition-all duration-300 group">
            <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <f.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-heading font-bold text-lg mb-2 text-foreground">{f.title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
