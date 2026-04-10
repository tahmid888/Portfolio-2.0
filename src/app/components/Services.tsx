import { motion } from "motion/react";
import { Bug, Zap, Shield, Smartphone, GitBranch, BarChart3 } from "lucide-react";

const services = [
  {
    icon: Bug,
    title: "Test Automation",
    description: "End-to-end automation frameworks using Selenium, Cypress, and Playwright for reliable, repeatable testing.",
  },
  {
    icon: Zap,
    title: "Performance Testing",
    description: "Load and stress testing with JMeter and k6 to ensure your application handles real-world traffic.",
  },
  {
    icon: Shield,
    title: "Security Testing",
    description: "Vulnerability assessments and penetration testing integrated into your CI/CD pipeline.",
  },
  {
    icon: Smartphone,
    title: "Mobile QA",
    description: "Cross-platform mobile testing with Appium and device farms for iOS and Android applications.",
  },
  {
    icon: GitBranch,
    title: "CI/CD Integration",
    description: "Seamless test integration into Jenkins, GitHub Actions, and Azure DevOps pipelines.",
  },
  {
    icon: BarChart3,
    title: "Test Strategy",
    description: "Comprehensive test plans, risk analysis, and quality metrics dashboards for informed decision-making.",
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 md:py-32 px-6 md:px-12 bg-neutral-950 text-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span
            className="inline-block text-neutral-500 mb-4 tracking-widest uppercase"
            style={{ fontSize: "0.75rem", fontWeight: 500 }}
          >
            What I Do
          </span>
          <h2
            className="font-[Plus_Jakarta_Sans] text-white max-w-3xl mx-auto tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, lineHeight: 1.15 }}
          >
            Giving your products
            <br />
            the quality edge.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-neutral-800 rounded-2xl overflow-hidden">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="bg-neutral-950 p-8 md:p-10 group hover:bg-neutral-900 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-neutral-800 flex items-center justify-center mb-6 group-hover:bg-white group-hover:text-black transition-colors">
                <service.icon size={22} />
              </div>
              <h3
                className="font-[Plus_Jakarta_Sans] text-white mb-3"
                style={{ fontSize: "1.15rem", fontWeight: 600 }}
              >
                {service.title}
              </h3>
              <p className="text-neutral-400" style={{ fontSize: "0.9rem", fontWeight: 400, lineHeight: 1.7 }}>
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}