import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const links = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Gallery", href: "#gallery" },
    { label: "Reviews", href: "#testimonials" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-muted/95 backdrop-blur-md border-b border-border/50">
      <div className="container flex items-center justify-between h-18 py-3">
        <a href="#hero" className="font-heading text-2xl font-black tracking-tight">
          <span className="text-primary">RM&K</span>{" "}
          <span className="text-foreground">Gardening</span>
        </a>
        <div className="hidden lg:flex items-center gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors duration-300">
              {l.label}
            </a>
          ))}
          <a href="tel:07397666008" className="flex items-center gap-2 text-sm text-primary font-bold">
            <Phone size={16} /> 07397 666008
          </a>
          <a href="#contact" className="bg-accent text-accent-foreground px-6 py-2.5 rounded-full text-sm font-bold hover:brightness-110 transition-all duration-300 shadow-lg shadow-accent/30">
            Book a Quote
          </a>
        </div>
        <button className="lg:hidden text-foreground" onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>
      {open && (
        <div className="lg:hidden bg-muted border-t border-border/50 pb-5">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="block px-6 py-3 text-foreground/80 hover:text-primary transition-colors font-medium">
              {l.label}
            </a>
          ))}
          <div className="px-6 pt-3 space-y-3">
            <a href="tel:07397666008" className="flex items-center gap-2 text-primary font-bold">
              <Phone size={16} /> 07397 666008
            </a>
            <a href="#contact" onClick={() => setOpen(false)} className="block text-center bg-accent text-accent-foreground px-6 py-2.5 rounded-full font-bold">
              Book a Quote
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
