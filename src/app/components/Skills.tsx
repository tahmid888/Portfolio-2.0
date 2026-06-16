import { motion } from "motion/react";
import {
  Braces,
  FlaskConical,
  Gauge,
  Workflow,
  ClipboardList,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const skillGroups = [
  {
    icon: Braces,
    title: "Programming Languages",
    description:
      "The languages behind every framework I build — enough fluency to read, debug, and extend automation code, not just run it.",
    tags: ["JavaScript (ES6+)", "Java", "OOP Concepts", "JSON"],
  },
  {
    icon: FlaskConical,
    title: "Test Automation",
    description:
      "Building maintainable automation suites from the ground up — frameworks the rest of the team can actually extend.",
    tags: [
      "Playwright (JS)",
      "Selenium (Java)",
      "Appium",
      "Page Object Model",
      "TestNG",
      "Allure Reports",
    ],
  },
  {
    icon: Gauge,
    title: "API & Performance Testing",
    description:
      "Validating behavior beyond the UI — request and response correctness, and how the system holds up under load.",
    tags: ["Postman", "REST API Testing", "JMeter", "k6", "Schema Validation"],
  },
  {
    icon: Workflow,
    title: "DevOps & CI/CD",
    description:
      "Wiring tests into the delivery pipeline so failures get caught before they reach a release branch.",
    tags: [
      "Jenkins",
      "GitHub Actions",
      "Docker",
      "Webhook Triggers (ngrok)",
      "WSL2 / Linux",
    ],
  },
  {
    icon: ClipboardList,
    title: "Manual QA & Test Strategy",
    description:
      "Translating complex business workflows — FMCG distribution, fintech payments, order pipelines, commissions — into clear, traceable test coverage",
    tags: [
      "Test Case Design",
      "Bug Reporting",
      "Regression Suites",
      "Domain Analysis",
      "Excel QA Docs",
    ],
  },
  {
    icon: Wrench,
    title: "Tools & Collaboration",
    description:
      "The day-to-day toolkit for tracking work, version control, and operating across both major dev environments.",
    tags: ["JIRA","ClickUp","TestRail", "Git / GitHub", "Bitbucket"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 md:px-12 bg-white">
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
            Skills
          </span>
          <h2
            className="font-[Plus_Jakarta_Sans] text-black max-w-3xl mx-auto tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, lineHeight: 1.15 }}
          >
            What I bring,
            <br />
            and where I'm headed.
          </h2>
        </motion.div>

        {/* Core skill clusters */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillGroups.map((group, i) => {
            const Icon = group.icon;
            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className="bg-neutral-50 rounded-2xl p-7 border border-neutral-100 hover:border-neutral-200 transition-colors flex flex-col"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-black flex items-center justify-center shrink-0">
                    <Icon size={18} className="text-white" />
                  </div>
                  <h3
                    className="text-black"
                    style={{ fontSize: "1rem", fontWeight: 600, lineHeight: 1.3 }}
                  >
                    {group.title}
                  </h3>
                </div>

                <p
                  className="text-neutral-500 mb-6"
                  style={{ fontSize: "0.88rem", fontWeight: 400, lineHeight: 1.6 }}
                >
                  {group.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {group.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3.5 py-1.5 rounded-full bg-white border border-neutral-200 text-neutral-600"
                      style={{ fontSize: "0.76rem", fontWeight: 500 }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Signature: currently leveling up */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 rounded-2xl p-8 md:p-10 bg-black text-white"
        >
          <div className="flex items-center gap-2 mb-4">
            <ArrowUpRight size={16} className="text-amber-400" />
            <span
              className="text-amber-400 tracking-widest uppercase"
              style={{ fontSize: "0.75rem", fontWeight: 600 }}
            >
              Currently leveling up
            </span>
          </div>

          <p
            className="text-neutral-300 max-w-2xl mb-8"
            style={{ fontSize: "0.95rem", fontWeight: 400, lineHeight: 1.7 }}
          >
            QA is shifting fast, especially with AI in the loop. Here's what
            I'm actively building toward as I move from SQA into a broader
            SDET role.
          </p>

          <div className="grid sm:grid-cols-3 gap-6">
            {[
              {
                label: "Performance Testing",
                detail: "k6 — load testing and reporting workflows",
              },
              {
                label: "AI-Assisted QA",
                detail: "AI Champion program — prompt-driven test design & review",
              },
              {
                label: "CI/CD Ownership",
                detail: "End-to-end pipelines: triggers, reports, notifications",
              },
            ].map((item) => (
              <div key={item.label}>
                <p
                  className="text-white mb-1"
                  style={{ fontSize: "0.9rem", fontWeight: 600 }}
                >
                  {item.label}
                </p>
                <p
                  className="text-neutral-400"
                  style={{ fontSize: "0.82rem", fontWeight: 400, lineHeight: 1.6 }}
                >
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}