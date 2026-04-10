import { useState } from "react";
import { motion } from "motion/react";
import { Send, Mail, MapPin, ArrowUpRight } from "lucide-react";

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="py-24 md:py-32 px-6 md:px-12 bg-neutral-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-neutral-400 mb-4 tracking-widest uppercase"
            style={{ fontSize: "0.75rem", fontWeight: 500 }}
          >
            Contact
          </span>
          <h2
            className="font-[Plus_Jakarta_Sans] text-black max-w-3xl mx-auto tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, lineHeight: 1.15 }}
          >
            Get in Touch
          </h2>
          <p className="mt-4 text-neutral-500 max-w-lg mx-auto" style={{ fontSize: "1rem", fontWeight: 400, lineHeight: 1.7 }}>
            Have a project that needs quality assurance? Let's talk about how I can help ship your product with confidence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-5 gap-12 max-w-5xl mx-auto">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="md:col-span-2 flex flex-col gap-8"
          >
            <div className="bg-black text-white rounded-2xl p-8">
              <p className="text-neutral-400 mb-6" style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.05em" }}>
                REACH OUT
              </p>

              <div className="flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <Mail size={16} />
                  </div>
                  <div>
                    <p className="text-neutral-400" style={{ fontSize: "0.75rem", fontWeight: 400 }}>Email</p>
                    <p className="text-white" style={{ fontSize: "0.9rem", fontWeight: 500 }}>tahmidulanon@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                    <MapPin size={16} />
                  </div>
                  <div>
                    <p className="text-neutral-400" style={{ fontSize: "0.75rem", fontWeight: 400 }}>Location</p>
                    <p className="text-white" style={{ fontSize: "0.9rem", fontWeight: 500 }}>Dhaka, Bangladesh</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3">
              {["LinkedIn", "GitHub", "Twitter"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="flex items-center justify-between px-5 py-3.5 rounded-xl border border-neutral-200 hover:bg-white hover:border-neutral-300 transition-all group"
                >
                  <span className="text-neutral-600" style={{ fontSize: "0.9rem", fontWeight: 500 }}>{social}</span>
                  <ArrowUpRight size={16} className="text-neutral-400 group-hover:text-black transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            onSubmit={handleSubmit}
            className="md:col-span-3 bg-white rounded-2xl p-8 md:p-10 border border-neutral-100"
          >
            <div className="flex flex-col gap-6">
              <div>
                <label
                  className="block text-neutral-500 mb-2"
                  style={{ fontSize: "0.8rem", fontWeight: 500 }}
                >
                  Name
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-black placeholder:text-neutral-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  style={{ fontSize: "0.95rem" }}
                  placeholder="Your name"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-neutral-500 mb-2"
                  style={{ fontSize: "0.8rem", fontWeight: 500 }}
                >
                  Email
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-black placeholder:text-neutral-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                  style={{ fontSize: "0.95rem" }}
                  placeholder="your@email.com"
                  required
                />
              </div>

              <div>
                <label
                  className="block text-neutral-500 mb-2"
                  style={{ fontSize: "0.8rem", fontWeight: 500 }}
                >
                  Message
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3.5 text-black placeholder:text-neutral-300 focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors resize-none"
                  style={{ fontSize: "0.95rem" }}
                  placeholder="Tell me about your project..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-black text-white py-4 rounded-full hover:bg-neutral-800 transition-all flex items-center justify-center gap-2 shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
                style={{ fontSize: "0.95rem", fontWeight: 500 }}
              >
                {submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message
                    <Send size={16} />
                  </>
                )}
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}