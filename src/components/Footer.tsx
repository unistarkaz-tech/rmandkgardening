import { Phone } from "lucide-react";

const Footer = () => (
  <footer className="bg-muted border-t border-border py-14">
    <div className="container max-w-5xl">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="font-heading text-2xl font-black mb-3">
            <span className="text-primary">RM&K</span>{" "}
            <span className="text-foreground">Gardening</span>
          </h3>
          <p className="text-muted-foreground text-sm mb-4">Bringing Life Back to Your Garden.</p>
          <a href="tel:07397666008" className="inline-flex items-center gap-2 text-primary font-bold text-sm">
            <Phone size={14} /> 07397 666008
          </a>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4 text-foreground">Quick Links</h4>
          <div className="flex flex-col gap-2.5 text-sm text-muted-foreground">
            <a href="#hero" className="hover:text-primary transition-colors duration-300">Home</a>
            <a href="#services" className="hover:text-primary transition-colors duration-300">Services</a>
            <a href="#gallery" className="hover:text-primary transition-colors duration-300">Gallery</a>
            <a href="#contact" className="hover:text-primary transition-colors duration-300">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-bold mb-4 text-foreground">Follow Us</h4>
          <div className="flex gap-3">
            {[
              { name: "Instagram", url: "https://www.instagram.com/rmkgardening/" },
              { name: "Facebook", url: "https://www.facebook.com/p/RMK-Gardning-Services-100050372993717/" },
            ].map((s) => (
              <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer" className="bg-secondary text-muted-foreground text-xs font-semibold px-4 py-2 rounded-full hover:text-primary hover:bg-primary/10 transition-all duration-300">
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-6 text-center text-sm text-muted-foreground">
        © 2024 RM&K Gardening. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
