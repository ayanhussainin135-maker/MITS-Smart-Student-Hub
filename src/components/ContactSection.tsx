import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const ContactSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Message sent! (Demo)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30" ref={ref}>
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={inView ? { opacity: 1, y: 0 } : {}} className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">Get in <span className="gradient-text">Touch</span></h2>
          <p className="text-muted-foreground max-w-xl mx-auto">Have questions? We'd love to hear from you.</p>
        </motion.div>

        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.2 }}
            className="glass-card-elevated p-8 space-y-5"
          >
            <div>
              <label className="block text-sm font-medium mb-1.5">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-secondary rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-secondary rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1.5">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                className="w-full px-4 py-2.5 text-sm bg-secondary rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none"
              />
            </div>
            <button type="submit" className="gradient-bg text-primary-foreground px-6 py-3 rounded-lg text-sm font-semibold flex items-center gap-2 hover:opacity-90 transition-opacity w-full justify-center">
              <Send className="w-4 h-4" /> Send Message
            </button>
          </motion.form>

          {/* Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
            className="space-y-5"
          >
            <div className="glass-card p-5 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-primary/10 shrink-0"><MapPin className="w-4 h-4 text-primary" /></div>
              <div>
                <h3 className="font-semibold text-sm mb-1">Address</h3>
                <p className="text-xs text-muted-foreground">Madhav Institute of Technology & Science, Gwalior, MP 474005</p>
              </div>
            </div>
            <div className="glass-card p-5 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-primary/10 shrink-0"><Mail className="w-4 h-4 text-primary" /></div>
              <div>
                <h3 className="font-semibold text-sm mb-1">Email</h3>
                <p className="text-xs text-muted-foreground">info@mitsgwalior.in</p>
              </div>
            </div>
            <div className="glass-card p-5 flex items-start gap-4">
              <div className="p-2.5 rounded-xl bg-primary/10 shrink-0"><Phone className="w-4 h-4 text-primary" /></div>
              <div>
                <h3 className="font-semibold text-sm mb-1">Phone</h3>
                <p className="text-xs text-muted-foreground">+91 751 2409300</p>
              </div>
            </div>
            <div className="glass-card overflow-hidden rounded-xl h-48">
              <iframe
                title="MITS Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3580.034!2d78.1828!3d26.2183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEzJzA2LjAiTiA3OMKwMTAnNTguMSJF!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
