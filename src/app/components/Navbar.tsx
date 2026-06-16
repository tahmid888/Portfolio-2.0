import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, ArrowDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  //const links = ["About", "Projects", "Services", "Testimonials", "Contact"];
  const links = [
    "About",
    "Projects",
    "Experience",
    "Skills",
    "Certifications",
    "Contact",
  ];
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Detect active section
      const sections = links.map((l) => l.toLowerCase());
      for (let i = sections.length - 1; i >= 0; i--) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120) {
            setActiveSection(sections[i]);
            return;
          }
        }
      }
      setActiveSection("");
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        <div
          className={`max-w-5xl mx-auto px-4 md:px-6 transition-all duration-500 ${
            scrolled ? "mx-4 md:mx-auto" : ""
          }`}
        >
          <div
            className={`flex items-center justify-between px-5 md:px-6 transition-all duration-500 ${
              scrolled
                ? "h-14 bg-white/70 backdrop-blur-xl shadow-[0_2px_20px_rgba(0,0,0,0.06)] border border-white/60 rounded-2xl"
                : "h-16 bg-transparent"
            }`}
          >
            {/* Logo */}
            <a href="#" className="relative group flex items-center gap-2.5">
              <img
                src="./images/201.png"
                alt="Tahamidul Haque"
                className="w-8 h-8 rounded-full object-cover ring-2 ring-emerald-500/30"
              />
              <span
                className="font-[Plus_Jakarta_Sans] tracking-tight text-black"
                style={{ fontSize: "0.9rem", fontWeight: 700 }}
              >
                Tahamidul Haque
              </span>
            </a>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center">
              <div className="flex items-center bg-neutral-100/80 rounded-xl p-1 gap-0.5">
                {links.map((link) => {
                  const isActive = activeSection === link.toLowerCase();
                  return (
                    <a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      className={`relative px-3.5 py-1.5 rounded-lg transition-all duration-300 ${
                        isActive
                          ? "text-black"
                          : "text-neutral-500 hover:text-neutral-800"
                      }`}
                      style={{ fontSize: "0.8rem", fontWeight: 500 }}
                    >
                      {isActive && (
                        <motion.div
                          layoutId="activeNavPill"
                          className="absolute inset-0 bg-white rounded-lg shadow-sm"
                          transition={{
                            type: "spring",
                            stiffness: 380,
                            damping: 30,
                          }}
                        />
                      )}
                      <span className="relative z-10">{link}</span>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            {/* ArrowUpRight */}
            {/* group-hover:rotate-0 -rotate-12 */}
            {/* <a
              href="https://docs.google.com/spreadsheets/d/1ZvfIslWTmKK6rcEtzomGUJxHpRaqP5fnjVcJmAc0bfA/edit?gid=831281403#gid=831281403"
              className="hidden md:inline-flex items-center gap-1.5 bg-black text-white pl-4 pr-3 py-2 rounded-xl hover:bg-neutral-800 transition-all duration-300 group shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
              style={{ fontSize: "0.8rem", fontWeight: 600 }}
            >
              Download CV
              <span className="flex items-center justify-center w-5 h-5 bg-white/15 rounded-md group-hover:bg-emerald-500/80 transition-colors duration-300">
                <ArrowDown size={12} className=" transition-transform duration-300" />
                
              </span>
            </a> */}

            {/* Updated Download CV */}
            <a
              href="/pdf/Tahamidul Haque.pdf"
              download="Tahamidul Haque.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-1.5 bg-black text-white pl-4 pr-3 py-2 rounded-xl hover:bg-neutral-800 transition-all duration-300 group shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
              style={{ fontSize: "0.8rem", fontWeight: 600 }}
            >
              Download CV
              <span className="flex items-center justify-center w-5 h-5 bg-white/15 rounded-md group-hover:bg-emerald-500/80 transition-colors duration-300">
                <ArrowDown
                  size={12}
                  className="transition-transform duration-300"
                />
              </span>
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setOpen(!open)}
              className="md:hidden relative w-10 h-10 flex items-center justify-center rounded-xl bg-neutral-100 hover:bg-neutral-200 transition-colors"
            >
              <AnimatePresence mode="wait">
                {open ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={18} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={18} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden"
            >
              <div className="max-w-5xl mx-auto px-4 pt-2">
                <div className="bg-white/80 backdrop-blur-xl border border-white/60 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.08)] p-4 flex flex-col gap-1">
                  {links.map((link, i) => (
                    <motion.a
                      key={link}
                      href={`#${link.toLowerCase()}`}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.3 }}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 ${
                        activeSection === link.toLowerCase()
                          ? "bg-neutral-100 text-black"
                          : "text-neutral-600 hover:bg-neutral-50 hover:text-black"
                      }`}
                      style={{ fontSize: "0.95rem", fontWeight: 500 }}
                      onClick={() => setOpen(false)}
                    >
                      {link}
                      {activeSection === link.toLowerCase() && (
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      )}
                    </motion.a>
                  ))}
                  <motion.a
                    href="#contact"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.25, duration: 0.3 }}
                    className="flex items-center justify-center gap-2 bg-black text-white text-center px-5 py-3.5 rounded-xl mt-2 hover:bg-neutral-800 transition-colors shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
                    style={{ fontSize: "0.875rem", fontWeight: 600 }}
                    onClick={() => setOpen(false)}
                    // Get in Touch
                  >
                    Download CV
                    <ArrowDown size={14} />
                    {/* ArrowUpRight */}
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </>
  );
}
