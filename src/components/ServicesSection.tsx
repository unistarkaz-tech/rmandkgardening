import { Scissors, TreePine, Trash2, Recycle, CalendarDays } from "lucide-react";

const services = [
  { icon: Scissors, title: "Lawn Mowing", desc: "Precision cutting for a clean, even lawn every time.", color: "bg-primary/10" },
  { icon: TreePine, title: "Hedge Trimming", desc: "Expert shaping and pruning for healthy, beautiful hedges.", color: "bg-accent/10" },
  { icon: Trash2, title: "Garden Clearance", desc: "Complete removal of overgrowth, debris, and waste.", color: "bg-primary/10" },
  { icon: Recycle, title: "Green Waste Removal", desc: "Eco-conscious cleanup and responsible disposal.", color: "bg-accent/10" },
  { icon: CalendarDays, title: "Seasonal Care", desc: "Year-round maintenance to keep your garden perfect.", color: "bg-primary/10" },
];

const ServicesSection = () => (
  <section id="services" className="py-24 bg-muted relative overflow-hidden">
    <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />
    <div className="container relative">
      <div className="text-center mb-16">
        <span className="inline-block text-primary text-sm font-bold tracking-widest uppercase mb-3">What We Do</span>
        <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-4">
          Our <span className="text-primary">Services</span>
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          From routine lawn care to complete garden transformations — we handle it all.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s, i) => (
          <div
            key={s.title}
            className="group bg-card border border-border rounded-2xl p-8 hover:border-primary/50 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
          >
            <div className={`w-14 h-14 rounded-2xl ${s.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
              <s.icon className="text-primary" size={26} />
            </div>
            <h3 className="font-heading font-bold text-xl mb-3 text-foreground">{s.title}</h3>
            <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
          </div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a href="#contact" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-full font-bold hover:brightness-110 transition-all duration-300 shadow-lg shadow-primary/20">
          Book Any Service
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
