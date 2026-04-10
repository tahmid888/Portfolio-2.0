import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "motion/react";
import { Briefcase, GraduationCap, MapPin, Calendar } from "lucide-react";

const experience = [
  {
    title: "QA Engineer",
    company: "SSL Wireless",
    location: "Karwan Bazar, Dhaka",
    period: "April 2026 – Present",
    description:
      "Leading the QA team in building scalable automation frameworks using Playwright and Cypress. Reduced regression testing time by 70% and implemented shift-left testing practices across 5 product teams.",
    skills: ["Playwright", "Cypress", "CI/CD", "Team Leadership"],
  },
  {
    title: "SQA Engineer",
    company: "iNiLabs",
    location: "Mirpur DOHS, Dhaka",
    period: "January 2025 – March 2026",
    description:
      "Designed and executed comprehensive test strategies for a SaaS platform serving 50K+ users. Built API test suites with Postman and automated performance monitoring with k6 and Grafana.",
    skills: ["Postman", "k6", "Grafana", "API Testing"],
  },
  {
    title: "Junior SQA Engineer",
    company: "SIMEC System Ltd",
    location: "Uttara, Dhaka",
    period: "February 2024 – December 2024",
    description:
      "Performed manual and automated testing for web and mobile applications. Created Selenium-based test scripts and maintained detailed test documentation in TestRail and JIRA.",
    skills: ["Selenium", "JIRA", "TestRail", "Manual Testing"],
  },
  {
    title: "SQA Intern",
    company: "MTB Ltd",
    location: "Gulshan, Dhaka",
    period: "September 2023 – December 2023",
    description:
      "Assisted the QA team in writing test cases, executing smoke and regression tests, and reporting bugs. Gained hands-on experience with Agile methodologies and sprint workflows.",
    skills: ["Test Cases", "Bug Reporting", "Agile", "Scrum"],
  },
];

const education = [
  // {
  //   title: "M.Sc. in Software Engineering",
  //   company: "University of Texas at Austin",
  //   location: "Austin, TX",
  //   period: "2021 – 2023",
  //   description:
  //     "Specialized in software testing and quality assurance. Thesis focused on AI-driven test case generation for complex web applications. GPA: 3.85/4.0.",
  //   skills: ["Software Testing", "AI/ML", "Research", "Thesis"],
  // },
  {
    title: "B.Sc. in Computer Science & Engineering",
    company: "American International University-Bangladesh(AIUB)",
    location: "Dhaka, Bangladesh",
    period: "2020 – 2023",
    description:
      "Graduated with honors. Completed coursework in software engineering, data structures, algorithms, and database management. Final year project on automated UI testing.",
    skills: ["Data Structures", "Algorithms", "Databases", "UI Testing"],
  },
  {
    title: "Higher Secondary Certificate (HSC)",
    company: "BCIC College",
    location: "Dhaka, Bangladesh",
    period: "2017 – 2019",
    description:
      "Science group with focus on Mathematics, Physics, and Chemistry. Achieved GPA 5.0/5.0 and participated in national math olympiad competitions.",
    skills: ["Mathematics", "Physics", "Chemistry"],
  },
  {
    title: "Secondary School Certificate (SSC)",
    company: "BCIC College",
    location: "Dhaka, Bangladesh",
    period: "2016 – 2017",
    description:
      "Science group with focus on Mathematics, Physics, and Chemistry. Achieved GPA 5.0/5.0 and participated in national math olympiad competitions.",
    skills: ["Mathematics", "Physics", "Chemistry"],
  },
];

const tabs = [
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
] as const;

type TabId = (typeof tabs)[number]["id"];

function TimelineItem({
  item,
  index,
  isFirst,
  totalItems,
}: {
  item: (typeof experience)[number];
  index: number;
  isFirst: boolean;
  totalItems: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="relative flex gap-5 md:gap-8 group">
      {/* Timeline column */}
      <div className="relative flex flex-col items-center">
        {/* Animated dot */}
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : { scale: 0 }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
            delay: index * 0.15,
          }}
          className="relative z-10 mt-1.5"
        >
          {/* Pulse ring for first item */}
          {isFirst && (
            <motion.div
              className="absolute inset-0 rounded-full bg-emerald-500/30"
              animate={{
                scale: [1, 2.2, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{ width: 14, height: 14, margin: "-1px" }}
            />
          )}
          <div
            className={`w-3 h-3 rounded-full border-[2.5px] transition-colors duration-500 ${
              isFirst
                ? "border-emerald-500 bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.4)]"
                : "border-neutral-300 bg-white group-hover:border-emerald-500 group-hover:bg-emerald-500 group-hover:shadow-[0_0_8px_rgba(16,185,129,0.3)]"
            }`}
          />
        </motion.div>

        {/* Animated connecting line */}
        {index < totalItems - 1 && (
          <motion.div
            className="w-px flex-1 origin-top bg-gradient-to-b from-emerald-500/40 via-neutral-200 to-neutral-200"
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : { scaleY: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15 + 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          />
        )}
      </div>

      {/* Content card */}
      <div className="flex-1 pb-8">
        <motion.div
          initial={{ opacity: 0, x: -20, filter: "blur(4px)" }}
          animate={
            isInView
              ? { opacity: 1, x: 0, filter: "blur(0px)" }
              : { opacity: 0, x: -20, filter: "blur(4px)" }
          }
          transition={{
            duration: 0.5,
            delay: index * 0.15 + 0.1,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="bg-neutral-50 rounded-2xl p-6 border border-neutral-100 group-hover:border-emerald-200/50 group-hover:shadow-lg group-hover:shadow-emerald-500/[0.04] transition-all duration-500 relative overflow-hidden"
        >
          {/* Hover gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/0 to-emerald-50/0 group-hover:from-emerald-50/40 group-hover:to-transparent transition-all duration-500 pointer-events-none" />

          <div className="relative z-10">
            {/* Date and location */}
            <div className="flex flex-wrap items-center gap-3 mb-3">
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ duration: 0.4, delay: index * 0.15 + 0.25 }}
                className="inline-flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md"
                style={{ fontSize: "0.7rem", fontWeight: 600 }}
              >
                <Calendar size={11} />
                {item.period}
              </motion.span>
              <span
                className="inline-flex items-center gap-1 text-neutral-400"
                style={{ fontSize: "0.72rem", fontWeight: 500 }}
              >
                <MapPin size={11} />
                {item.location}
              </span>
            </div>

            {/* Title and company */}
            <h3
              className="font-[Plus_Jakarta_Sans] text-black mb-0.5"
              style={{ fontSize: "1.05rem", fontWeight: 650 }}
            >
              {item.title}
            </h3>
            <p
              className="text-neutral-500 mb-3"
              style={{ fontSize: "0.85rem", fontWeight: 500 }}
            >
              {item.company}
            </p>

            {/* Description */}
            <p
              className="text-neutral-500 mb-4"
              style={{
                fontSize: "0.85rem",
                fontWeight: 400,
                lineHeight: 1.7,
              }}
            >
              {item.description}
            </p>

            {/* Skills / tags */}
            <div className="flex flex-wrap gap-2">
              {item.skills.map((skill, si) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, y: 8 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 8 }
                  }
                  transition={{
                    duration: 0.3,
                    delay: index * 0.15 + 0.3 + si * 0.05,
                  }}
                  className="px-2.5 py-1 rounded-md bg-white border border-neutral-100 text-neutral-600 group-hover:border-emerald-100 transition-colors duration-300"
                  style={{ fontSize: "0.72rem", fontWeight: 500 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export function ExperienceEducation() {
  const [activeTab, setActiveTab] = useState<TabId>("experience");

  const data = activeTab === "experience" ? experience : education;

  return (
    <section
      id="experience"
      className="py-24 md:py-32 px-6 md:px-12 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span
            className="inline-block text-neutral-400 mb-4 tracking-widest uppercase"
            style={{ fontSize: "0.75rem", fontWeight: 500 }}
          >
            Background
          </span>
          <h2
            className="font-[Plus_Jakarta_Sans] text-black max-w-3xl mx-auto tracking-tight"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Experience &amp; Education.
          </h2>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex justify-center mb-14"
        >
          <div className="inline-flex items-center bg-neutral-100 rounded-xl p-1 gap-1">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative flex items-center gap-2 px-5 py-2.5 rounded-lg transition-all duration-300 cursor-pointer ${
                    isActive
                      ? "text-black"
                      : "text-neutral-500 hover:text-neutral-700"
                  }`}
                  style={{ fontSize: "0.85rem", fontWeight: 550 }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="expTabPill"
                      className="absolute inset-0 bg-white rounded-lg shadow-sm"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center gap-2">
                    <tab.icon size={16} />
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* Animated Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <div className="flex flex-col">
              {data.map((item, i) => (
                <TimelineItem
                  key={item.title + item.company}
                  item={item}
                  index={i}
                  isFirst={i === 0}
                  totalItems={data.length}
                />
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
