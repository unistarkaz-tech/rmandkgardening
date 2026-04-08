import { useState } from "react";
import { Phone, Mail, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setSubmitted(true);
  };

  const inputClass = "w-full border border-border bg-secondary/50 rounded-xl px-4 py-3.5 text-foreground placeholder:text-muted-foreground/50 focus:ring-2 focus:ring-primary/40 focus:border-primary/40 outline-none transition-all duration-300";

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute -bottom-40 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="container max-w-5xl relative">
        <div className="text-center mb-16">
          <span className="inline-block text-primary text-sm font-bold tracking-widest uppercase mb-3">Get In Touch</span>
          <h2 className="font-heading text-4xl md:text-5xl font-black text-foreground mb-4">
            Book a <span className="text-accent">Quote</span> Today
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto">
            Fill in your details and we'll get back to you promptly!
          </p>
        </div>
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-primary/10 border border-primary/30 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-5">
                  <Send className="text-primary" size={28} />
                </div>
                <h3 className="font-heading text-2xl font-bold text-foreground mb-3">Thank You!</h3>
                <p className="text-muted-foreground">We've received your request and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-card border border-border rounded-2xl p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Name *</label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Phone *</label>
                    <input
                      type="tel"
                      required
                      maxLength={20}
                      placeholder="Your phone number"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Email</label>
                    <input
                      type="email"
                      maxLength={255}
                      placeholder="Your email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className={inputClass}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2 text-foreground">Service</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm({ ...form, service: e.target.value })}
                      className={inputClass}
                    >
                      <option value="">Select a service</option>
                      <option>Lawn Mowing</option>
                      <option>Hedge Trimming</option>
                      <option>Garden Clearance</option>
                      <option>General Maintenance</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2 text-foreground">Message</label>
                  <textarea
                    rows={4}
                    maxLength={1000}
                    placeholder="Tell us about your garden..."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className={inputClass + " resize-none"}
                  />
                </div>
                <button type="submit" className="w-full bg-accent text-accent-foreground py-4 rounded-xl font-bold text-lg hover:brightness-110 transition-all duration-300 shadow-lg shadow-accent/20">
                  Book My Quote
                </button>
              </form>
            )}
          </div>
          <div className="md:col-span-2 flex flex-col gap-8 justify-center">
            <div className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4 hover:border-primary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={22} />
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">Call Us</p>
                <a href="tel:07397666008" className="text-primary font-semibold hover:underline">07397 666008</a>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4 hover:border-primary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={22} />
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">Email Us</p>
                <p className="text-muted-foreground text-sm">info@rmkgardening.co.uk</p>
              </div>
            </div>
            <div className="bg-card border border-border rounded-2xl p-6 flex items-center gap-4 hover:border-primary/40 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={22} />
              </div>
              <div>
                <p className="font-bold text-sm text-foreground">Location</p>
                <p className="text-muted-foreground text-sm">Hayes, London</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
