import { Star } from "lucide-react";

const testimonials = [
  { name: "Sarah T.", text: "RM&K Gardening completely transformed my garden – reliable and professional!", rating: 5 },
  { name: "James P.", text: "Excellent hedge trimming and fast, friendly service. Highly recommended!", rating: 5 },
  { name: "Linda M.", text: "My garden has never looked so good. The team were punctual and very thorough.", rating: 5 },
];

const TestimonialsSection = () => (
  <section id="testimonials" className="py-20">
    <div className="container max-w-4xl">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-12">What Our Customers Say</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-card border rounded-xl p-8 text-center">
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="text-accent fill-accent" size={20} />
              ))}
            </div>
            <p className="text-foreground/80 italic mb-4">"{t.text}"</p>
            <p className="font-heading font-semibold text-primary">{t.name}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
