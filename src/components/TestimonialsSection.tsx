import { Star, Quote } from "lucide-react";

const testimonials = [
  { name: "Sarah T.", text: "RM&K Gardening completely transformed my garden – reliable and professional!", rating: 5 },
  { name: "James P.", text: "Excellent hedge trimming and fast, friendly service. Highly recommended!", rating: 5 },
  { name: "Linda M.", text: "My garden has never looked so good. The team were punctual and very thorough.", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-24 bg-muted relative overflow-hidden">
    <div className="absolute top-20 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />
    <div className="container relative max-w-5xl">
      <div className="text-center mb-16">
        <span className="inline-block text-primary text-sm font-bold tracking-widest uppercase mb-3">Testimonials</span>
        <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground">
          What Customers <span className="text-primary">Say</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card border border-border rounded-2xl p-8 relative hover:border-primary/40 transition-all duration-300">
            <Quote className="text-primary/20 absolute top-6 right-6" size={32} />
            <div className="flex gap-1 mb-5">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="text-accent fill-accent" size={18} />
              ))}
            </div>
            <p className="text-foreground/80 mb-6 leading-relaxed italic">"{t.text}"</p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center font-heading font-bold text-primary text-sm">
                {t.name.charAt(0)}
              </div>
              <p className="font-heading font-bold text-foreground">{t.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
