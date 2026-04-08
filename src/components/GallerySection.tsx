import ba1 from "@/assets/before-after-1.jpg";
import ba2 from "@/assets/before-after-2.jpg";
import ba3 from "@/assets/before-after-3.jpg";

const images = [
  { src: ba1, caption: "This garden in Hayes had overgrown grass and untidy beds. After RM&K's expert care, the space looked clean, tidy, and vibrant once again!" },
  { src: ba2, caption: "Overgrown hedges shaped and pruned to perfection — a complete hedge transformation by our team." },
  { src: ba3, caption: "From cluttered and debris-filled to a beautiful, usable outdoor space — garden clearance at its finest." },
];

const GallerySection = () => (
  <section id="gallery" className="py-20 bg-muted">
    <div className="container">
      <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Before & After</h2>
      <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
        See the transformations we've delivered for homeowners across Hayes.
      </p>
      <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <div key={i} className="bg-background rounded-xl overflow-hidden shadow-sm">
            <img src={img.src} alt={img.caption} loading="lazy" width={1280} height={720} className="w-full h-56 object-cover" />
            <p className="p-5 text-sm text-muted-foreground leading-relaxed">{img.caption}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default GallerySection;
