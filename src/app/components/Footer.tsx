import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Linkedin, Github, Twitter, Mail, Phone } from "lucide-react";

const rotatingWords = ["build", "create", "design", "test"];

const socialLinks = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "#" },
];

const menuLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Terms of Service", href: "#" },
  { label: "Privacy Policy", href: "#" },
];

export function Footer() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setWordIndex((prev) => (prev + 1) % rotatingWords.length);
    }, 2400);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="bg-[#0a0a0a] text-white pt-24 md:pt-32 pb-0 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        {/* CTA Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-20 md:mb-24"
        >
          <h2
            className="font-[Plus_Jakarta_Sans] text-white tracking-tight"
            style={{
              fontSize: "clamp(2rem, 5.5vw, 3.75rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Let's{" "}
            <span className="relative inline-flex w-[3.5em] text-left overflow-hidden" style={{ height: "1.2em", verticalAlign: "bottom" }}>
              <AnimatePresence mode="wait">
                <motion.span
                  key={rotatingWords[wordIndex]}
                  initial={{ y: "100%", opacity: 0, filter: "blur(4px)" }}
                  animate={{ y: "0%", opacity: 1, filter: "blur(0px)" }}
                  exit={{ y: "-100%", opacity: 0, filter: "blur(4px)" }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 text-neutral-500"
                >
                  {rotatingWords[wordIndex]}
                </motion.span>
              </AnimatePresence>
            </span>
            <br />
            incredible work together.
          </h2>
        </motion.div>

        {/* Info Row: Email | Call Me | Social */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mb-12"
        >
          {/* Email */}
          <div>
            <p
              className="text-neutral-500 mb-2 font-[Plus_Jakarta_Sans]"
              style={{ fontSize: "0.75rem", fontWeight: 500 }}
            >
              Email
            </p>
            <a
              href="mailto:tahamidul@example.com"
              className="text-white hover:text-emerald-400 transition-colors font-[Plus_Jakarta_Sans] flex items-center gap-2"
              style={{ fontSize: "0.95rem", fontWeight: 500 }}
            >
              <Mail size={14} className="text-neutral-500" />
              tahmidulanon@gmail.com
            </a>
          </div>

          {/* Call Me */}
          <div>
            <p
              className="text-neutral-500 mb-2 font-[Plus_Jakarta_Sans]"
              style={{ fontSize: "0.75rem", fontWeight: 500 }}
            >
              Call Me
            </p>
            <a
              href="#contact"
              className="text-white hover:text-emerald-400 transition-colors font-[Plus_Jakarta_Sans] flex items-center gap-2"
              style={{ fontSize: "0.95rem", fontWeight: 500 }}
            >
              <Phone size={14} className="text-neutral-500" />
              Book Now
            </a>
          </div>

          {/* Social */}
          <div>
            <p
              className="text-neutral-500 mb-2 font-[Plus_Jakarta_Sans]"
              style={{ fontSize: "0.75rem", fontWeight: 500 }}
            >
              Social
            </p>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded-full border border-neutral-700 flex items-center justify-center text-neutral-400 hover:text-white hover:border-emerald-500 hover:bg-emerald-500/10 transition-all duration-300"
                >
                  <social.icon size={15} />
                </a>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Divider */}
        <div className="w-full h-px bg-neutral-800 mb-10" />

        {/* Bottom Row: Menu | Legal | Copyright */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-8 sm:gap-6 mb-16 md:mb-20"
        >
          {/* Menu */}
          <div>
            <p
              className="text-neutral-500 mb-4 font-[Plus_Jakarta_Sans]"
              style={{ fontSize: "0.75rem", fontWeight: 500 }}
            >
              Menu
            </p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2.5">
              {menuLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-neutral-300 hover:text-white transition-colors font-[Plus_Jakarta_Sans]"
                  style={{ fontSize: "0.85rem", fontWeight: 400 }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Legal */}
          <div>
            <p
              className="text-neutral-500 mb-4 font-[Plus_Jakarta_Sans]"
              style={{ fontSize: "0.75rem", fontWeight: 500 }}
            >
              Legal
            </p>
            <div className="flex flex-col gap-2.5">
              {legalLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-neutral-300 hover:text-white transition-colors font-[Plus_Jakarta_Sans]"
                  style={{ fontSize: "0.85rem", fontWeight: 400 }}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Copyright */}
          <div className="flex items-start sm:justify-end">
            <p
              className="text-neutral-500 font-[Plus_Jakarta_Sans]"
              style={{ fontSize: "0.82rem", fontWeight: 400 }}
            >
              &copy; 2026 Tahamidul Haque
            </p>
          </div>
        </motion.div>
      </div>

      {/* Giant Name at Bottom */}
      <div className="relative w-full overflow-hidden" style={{ height: "clamp(80px, 14vw, 180px)" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 0.06, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="absolute left-0 right-0 flex justify-center pointer-events-none select-none"
          style={{
            bottom: "-30%",
          }}
        >
          <span
            className="font-[Plus_Jakarta_Sans] text-white whitespace-nowrap tracking-tighter"
            style={{
              fontSize: "clamp(6rem, 18vw, 16rem)",
              fontWeight: 800,
              lineHeight: 1,
            }}
          >
            TAHAMIDUL
          </span>
        </motion.div>
      </div>
    </footer>
  );
}