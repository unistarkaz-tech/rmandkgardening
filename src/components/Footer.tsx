const Footer = () => (
  <footer className="bg-foreground text-primary-foreground py-12">
    <div className="container max-w-5xl">
      <div className="grid md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="font-heading text-xl font-bold mb-3">
            RM&K <span className="text-secondary">Gardening</span>
          </h3>
          <p className="text-primary-foreground/70 text-sm">Bringing Life Back to Your Garden.</p>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <a href="#hero" className="hover:text-secondary transition-colors">Home</a>
            <a href="#services" className="hover:text-secondary transition-colors">Services</a>
            <a href="#gallery" className="hover:text-secondary transition-colors">Gallery</a>
            <a href="#contact" className="hover:text-secondary transition-colors">Contact</a>
          </div>
        </div>
        <div>
          <h4 className="font-heading font-semibold mb-3">Follow Us</h4>
          <div className="flex gap-4 text-sm text-primary-foreground/70">
            <a href="#" className="hover:text-secondary transition-colors">Instagram</a>
            <a href="#" className="hover:text-secondary transition-colors">Facebook</a>
            <a href="#" className="hover:text-secondary transition-colors">Google</a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10 pt-6 text-center text-sm text-primary-foreground/50">
        © 2024 RM&K Gardening. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
