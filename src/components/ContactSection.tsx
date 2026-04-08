import { useState } from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", phone: "", email: "", service: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.phone.trim()) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-20 bg-muted">
      <div className="container max-w-5xl">
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-center mb-4">Request a Free Quote Today</h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Let RM&K Gardening handle your outdoor transformation. Fill in your details below, and we'll get back to you promptly!
        </p>
        <div className="grid md:grid-cols-5 gap-10">
          <div className="md:col-span-3">
            {submitted ? (
              <div className="bg-secondary/50 rounded-xl p-10 text-center">
                <h3 className="font-heading text-2xl font-bold text-primary mb-3">Thank You!</h3>
                <p className="text-muted-foreground">We've received your request and will get back to you shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="bg-background rounded-xl p-8 shadow-sm space-y-5">
                <div>
                  <label className="block text-sm font-medium mb-1.5">Name *</label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full border rounded-lg px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary/30 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    maxLength={20}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border rounded-lg px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary/30 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Email Address</label>
                  <input
                    type="email"
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border rounded-lg px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary/30 outline-none transition"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Service Required</label>
                  <select
                    value={form.service}
                    onChange={(e) => setForm({ ...form, service: e.target.value })}
                    className="w-full border rounded-lg px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary/30 outline-none transition"
                  >
                    <option value="">Select a service</option>
                    <option>Lawn Mowing</option>
                    <option>Hedge Trimming</option>
                    <option>Garden Clearance</option>
                    <option>General Maintenance</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1.5">Message</label>
                  <textarea
                    rows={4}
                    maxLength={1000}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full border rounded-lg px-4 py-3 bg-background text-foreground focus:ring-2 focus:ring-primary/30 outline-none transition resize-none"
                  />
                </div>
                <button type="submit" className="w-full bg-accent text-accent-foreground py-3.5 rounded-lg font-bold text-lg hover:opacity-90 transition-opacity">
                  Get My Free Quote
                </button>
              </form>
            )}
          </div>
          <div className="md:col-span-2 flex flex-col gap-6 justify-center">
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm">Phone</p>
                <p className="text-muted-foreground">020-xxxx-xxxx</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm">Email</p>
                <p className="text-muted-foreground">info@rmkgardening.co.uk</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-11 h-11 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <p className="font-semibold text-sm">Location</p>
                <p className="text-muted-foreground">Hayes, London</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
