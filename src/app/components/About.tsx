import { motion } from "motion/react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const stats = [
  { number: "2+", label: "Years Experience" },
  { number: "25+", label: "Projects Tested" },
  { number: "1K+", label: "Test Cases Written" },
  { number: "98.9%", label: "Release Success Rate" },
];

export function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6 md:px-12 bg-neutral-50">
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
            About Me
          </span>
          <h2
            className="font-[Plus_Jakarta_Sans] text-black max-w-2xl mx-auto tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, lineHeight: 1.15 }}
          >
            Crafting quality into
            <br />
            every line of code.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-neutral-200">
              <ImageWithFallback
                src="./images/201.png"
                alt="SQA Engineer Portrait"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6"
          >
            <p
              className="text-neutral-600"
              style={{ fontSize: "1.05rem", fontWeight: 400, lineHeight: 1.8 }}
            >
              I'm a dedicated Software Quality Assurance Engineer who believes that great software starts with rigorous testing. My expertise spans across manual and automated testing, CI/CD pipelines, and building comprehensive test strategies that ship reliable products.
            </p>
            <p
              className="text-neutral-500"
              style={{ fontSize: "1.05rem", fontWeight: 400, lineHeight: 1.8 }}
            >
              From writing Selenium and Cypress frameworks to load testing with JMeter, I bring a systematic approach to identifying defects before they reach your users.
            </p>

            <div className="grid grid-cols-2 gap-6 mt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="border-l-2 border-black pl-4">
                  <span
                    className="font-[Plus_Jakarta_Sans] text-black block"
                    style={{ fontSize: "2rem", fontWeight: 700 }}
                  >
                    {stat.number}
                  </span>
                  <span className="text-neutral-500" style={{ fontSize: "0.85rem", fontWeight: 400 }}>
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}