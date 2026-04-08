import { Shield, Eye, Leaf } from "lucide-react";

const features = [
  { icon: Shield, title: "Reliability", desc: "Consistent, on-time service you can count on." },
  { icon: Eye, title: "Attention to Detail", desc: "Every edge trimmed, every corner cared for." },
  { icon: Leaf, title: "Eco-Friendly Disposal", desc: "Green waste handled responsibly." },
];

const AboutSection = () => (
  <section id="about" className="py-20 bg-muted">
    <div className="container max-w-4xl text-center">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">About RM&K Gardening</h2>
      <p className="text-muted-foreground text-lg leading-relaxed mb-12">
        At RM&K Gardening, we provide professional, affordable garden maintenance and outdoor cleaning services across Hayes and the surrounding London areas. Our experienced team ensures your garden stays neat, healthy, and beautiful all year round.
      </p>
      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f) => (
          <div key={f.title} className="bg-background rounded-xl p-8 shadow-sm">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <f.icon className="text-primary" size={28} />
            </div>
            <h3 className="font-heading font-semibold text-lg mb-2">{f.title}</h3>
            <p className="text-muted-foreground text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default AboutSection;
