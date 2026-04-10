import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO, FinTech Startup",
    text: "Working with this QA engineer transformed our release process. We went from weekly hotfixes to zero-defect releases. The automation framework they built is still the backbone of our testing.",
    rating: 5,
  },
  {
    name: "Marcus Rodriguez",
    role: "Engineering Lead, SaaS Platform",
    text: "The performance testing uncovered bottlenecks we didn't even know existed. Our API response times dropped by 60% and our infrastructure costs were cut in half.",
    rating: 5,
  },
  {
    name: "Emily Watson",
    role: "Product Manager, E-commerce",
    text: "Finally, someone who thinks about quality from the user's perspective. The test strategy they developed caught critical UX issues that would have cost us thousands in lost revenue.",
    rating: 5,
  },
];

const tools = [
  "Selenium", "Cypress", "Playwright", "JMeter", "Postman",
  "Appium", "Jenkins", "GitHub Actions", "JIRA", "TestRail",
  "k6", "Grafana", "Docker", "AWS", "Azure DevOps",
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 px-6 md:px-12 bg-white">
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
            Testimonials
          </span>
          <h2
            className="font-[Plus_Jakarta_Sans] text-black max-w-3xl mx-auto tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, lineHeight: 1.15 }}
          >
            Trusted by teams
            <br />
            that ship quality.
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-neutral-50 rounded-2xl p-8 flex flex-col justify-between border border-neutral-100 hover:border-neutral-200 transition-colors"
            >
              <div>
                <Quote size={28} className="text-neutral-200 mb-4" />
                <p
                  className="text-neutral-600"
                  style={{ fontSize: "0.95rem", fontWeight: 400, lineHeight: 1.7 }}
                >
                  {t.text}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p className="text-black" style={{ fontSize: "0.9rem", fontWeight: 600 }}>
                    {t.name}
                  </p>
                  <p className="text-neutral-400" style={{ fontSize: "0.8rem", fontWeight: 400 }}>
                    {t.role}
                  </p>
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} size={14} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools marquee */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-20"
        >
          <p
            className="text-center text-neutral-400 mb-8"
            style={{ fontSize: "0.8rem", fontWeight: 500, letterSpacing: "0.05em" }}
          >
            TOOLS & TECHNOLOGIES
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {tools.map((tool) => (
              <span
                key={tool}
                className="px-5 py-2.5 rounded-full bg-neutral-100 text-neutral-600 hover:bg-black hover:text-white transition-colors cursor-default"
                style={{ fontSize: "0.85rem", fontWeight: 500 }}
              >
                {tool}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}