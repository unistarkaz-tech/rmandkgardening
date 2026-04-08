import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";
import ba3 from "@/assets/before-after-3.jpg";

const images = [
  { src: ba1, caption: "Overgrown grass and untidy beds transformed into a clean, vibrant garden." },
  { src: ba2, caption: "Wild hedges expertly shaped and pruned to perfection." },
  { src: ba3, caption: "Debris-filled space turned into a beautiful, usable garden." },
];

const GallerySection = () => (
  <section id="gallery" className="py-24">
    <div className="container">
      <div className="text-center mb-16">
        <span className="inline-block text-primary text-sm font-bold tracking-widest uppercase mb-3">Our Work</span>
        <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-4">
          Before <span className="text-accent">&</span> After
        </h2>
        <p className="text-muted-foreground max-w-xl mx-auto text-lg">
          Real transformations delivered for homeowners across Hayes.
        </p>
      </div>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <div key={i} className="group bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5">
            <div className="overflow-hidden">
              <img
                src={img.src}
                alt={img.caption}
                loading="lazy"
                width={1280}
                height={720}
                className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="p-6">
              <p className="text-muted-foreground text-sm leading-relaxed">{img.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
