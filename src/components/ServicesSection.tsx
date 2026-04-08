import { Scissors, TreePine, Trash2, Recycle, CalendarDays } from "lucide-react";

const services = [
  { icon: Scissors, title: "Lawn Mowing", desc: "Precision cutting for a clean, even lawn." },
  { icon: TreePine, title: "Hedge Trimming", desc: "Shaping and pruning for healthy growth." },
  { icon: Trash2, title: "Garden Clearance", desc: "Removing overgrowth, debris, and waste." },
  { icon: Recycle, title: "Green Waste Removal", desc: "Eco-conscious cleanup and disposal." },
  { icon: CalendarDays, title: "Seasonal Maintenance", desc: "Keeping your outdoor space ready year-round." },
];

const ServicesSection = () => (
  <section id="services" className="py-20">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Our Services</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        From routine lawn care to complete garden transformations, we've got you covered.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {services.map((s) => (
          <div key={s.title} className="group bg-card border rounded-xl p-8 hover:shadow-md hover:border-primary/30 transition-all">
            <div className="w-12 h-12 rounded-lg bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
              <s.icon className="text-primary" size={24} />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">{s.title}</h3>
            <p className="text-muted-foreground text-sm">{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-10">
        <a href="#contact" className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity">
          View All Services
        </a>
      </div>
    </div>
  </section>
);

export default ServicesSection;
