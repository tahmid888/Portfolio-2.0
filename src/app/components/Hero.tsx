import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 pb-16 bg-white relative overflow-hidden">
      {/* Subtle gradient orb */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-neutral-100 via-orange-50 to-neutral-50 rounded-full blur-3xl opacity-60 pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 text-center max-w-4xl"
      >
        <div
          className="inline-flex items-center gap-2 bg-neutral-100 text-neutral-600 px-4 py-1.5 rounded-full mb-8"
          style={{ fontSize: "0.8rem", fontWeight: 500 }}
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
          Available for Projects
        </div>

        <h1
          className="font-[Plus_Jakarta_Sans] text-black tracking-tight"
          style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 800, lineHeight: 1.05 }}
        >
          I ensure software
          <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-400">
            works the way
          </span>
          <br />
          you expect.
        </h1>

        <p
          className="mt-6 text-neutral-500 max-w-xl mx-auto"
          style={{ fontSize: "1.1rem", fontWeight: 400, lineHeight: 1.7 }}
        >
          SQA Engineer with 2+ years of experience in test automation, performance testing, and building quality-first engineering cultures.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#projects"
            className="bg-black text-white px-8 py-3.5 rounded-full hover:bg-neutral-800 transition-all shadow-[0_4px_14px_rgba(0,0,0,0.25)] hover:shadow-[0_6px_20px_rgba(0,0,0,0.35)]"
            style={{ fontSize: "0.95rem", fontWeight: 500 }}
          >
            View My Work
          </a>
          <a
            href="#about"
            className="text-neutral-600 border border-neutral-200 px-8 py-3.5 rounded-full hover:bg-neutral-50 transition-all"
            style={{ fontSize: "0.95rem", fontWeight: 500 }}
          >
            Learn More
          </a>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <a href="#about" className="flex flex-col items-center gap-2 text-neutral-400 hover:text-neutral-600 transition-colors">
          <span style={{ fontSize: "0.75rem", fontWeight: 400 }}>Scroll</span>
          <ArrowDown size={16} className="animate-bounce" />
        </a>
      </motion.div>
    </section>
  );
}