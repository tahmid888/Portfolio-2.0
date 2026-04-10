import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "E-Commerce Test Automation Suite",
    category: "Automation",
    description: "Built end-to-end Cypress test framework covering 800+ test scenarios for a large e-commerce platform, reducing manual testing time by 70%.",
    // image: "./images/201.png",
    image: "https://images.unsplash.com/photo-1763568258492-9569a0af2127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBjb2RlJTIwc2NyZWVufGVufDF8fHx8MTc3MjYwMzcyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Cypress", "JavaScript", "CI/CD"],
    color: "bg-orange-50",
  },
  {
    id: 2,
    title: "Performance Testing Dashboard",
    category: "Performance",
    description: "Designed and implemented performance testing strategy using JMeter and Grafana, identifying bottlenecks that improved response times by 45%.",
    image: "https://images.unsplash.com/photo-1731846584223-81977e156b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVzdGluZyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzI2ODE3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["JMeter", "Grafana", "Load Testing"],
    color: "bg-neutral-900",
    dark: true,
  },
  // {
  //   id: 3,
  //   title: "Mobile App QA Framework",
  //   category: "Mobile Testing",
  //   description: "Established Appium-based mobile testing framework for iOS and Android, achieving 95% automation coverage across both platforms.",
  //   image: "https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjB0ZXN0aW5nfGVufDF8fHx8MTc3MjY4MTc1Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   tags: ["Appium", "Swift", "Kotlin"],
  //   color: "bg-stone-100",
  // },
  {
    id: 4,
    title: "API Testing & Monitoring System",
    category: "API Testing",
    description: "Created comprehensive API testing suite with Postman/Newman and custom monitoring dashboards, catching 300+ defects pre-production.",
    image: "https://images.unsplash.com/photo-1758522964483-4c92775a83b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjB0ZXN0aW5nJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NzI2ODE3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Postman", "Newman", "REST API"],
    color: "bg-neutral-800",
    dark: true,
  },
  // {
  //   id: 5,
  //   title: "Security Testing Integration",
  //   category: "Security",
  //   description: "Integrated OWASP ZAP and Burp Suite into CI/CD pipeline for automated security scanning, identifying critical vulnerabilities early.",
  //   image: "https://images.unsplash.com/photo-1761519609249-c0ca325f81db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWN1cml0eSUyMHRlc3RpbmclMjBjeWJlcnNlY3VyaXR5fGVufDF8fHx8MTc3MjYxNzAzM3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   tags: ["OWASP", "Burp Suite", "DevSecOps"],
  //   color: "bg-amber-50",
  // },
  //  {
  //   id: 6,
  //   title: "API Testing & Monitoring System",
  //   category: "API Testing",
  //   description: "Created comprehensive API testing suite with Postman/Newman and custom monitoring dashboards, catching 300+ defects pre-production.",
  //   image: "https://images.unsplash.com/photo-1758522964483-4c92775a83b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjB0ZXN0aW5nJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NzI2ODE3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  //   tags: ["Postman", "Newman", "REST API"],
  //   color: "bg-neutral-800",
  //   dark: true,
  // },
   {
    id: 7,
    title: "Electronic Defence Procurement (e-DP) System",
    category: "Automation",
    description: "Built a scalable end-to-end test automation framework using Cypress and JavaScript with the Page Object Model (POM) for a government ERP system. Automated 100+ test scenarios, reducing manual testing effort by 70% and improving overall release reliability.",
    image: "https://simecsystem.com/wp-content/uploads/2025/03/dgdp-1.png",
    tags: ["Cypress", "JavaScript", "POM", "Government Project", "Web Application"],
    color: "bg-orange-50",
  },
  {
    id: 8,
    title: "Labour Information Management System (LIMS)",
    category: "QA / Manual Testing",
    description: "Worked on the Bangladesh Labour Information Management System (LIMS), a government platform for digital worker and establishment management. Performed comprehensive manual testing to ensure data accuracy, system reliability, and smooth user workflows across worker registration, verification, and job portal features, contributing to a transparent and efficient digital ecosystem.",
    image: "https://simecsystem.com/wp-content/uploads/2025/03/lims-1.png",
    tags: ["Manual Testing", "QA", "Functional Testing", "System Testing", "Government Project", "Web Application"],
    color: "bg-neutral-900",
    dark: true,
  },
    {
    id: 9,
    title: "E-Commerce Test Automation Suite",
    category: "Automation",
    description: "Built end-to-end Cypress test framework covering 800+ test scenarios for a large e-commerce platform, reducing manual testing time by 70%.",
    image: "./images/foodking.png",
    // image: "https://images.unsplash.com/photo-1763568258492-9569a0af2127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBjb2RlJTIwc2NyZWVufGVufDF8fHx8MTc3MjYwMzcyNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["Cypress", "JavaScript", "CI/CD"],
    color: "bg-orange-50",
  },
  {
    id: 10,
    title: "Performance Testing Dashboard",
    category: "Performance",
    description: "Designed and implemented performance testing strategy using JMeter and Grafana, identifying bottlenecks that improved response times by 45%.",
    image: "./images/foodking-user-app.png",
    // image: "https://images.unsplash.com/photo-1731846584223-81977e156b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVzdGluZyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzI2ODE3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    tags: ["JMeter", "Grafana", "Load Testing"],
    color: "bg-neutral-900",
    dark: true,
  },
  
];

export function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 px-6 md:px-12 bg-white">
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
            Selected Work
          </span>
          <h2
            className="font-[Plus_Jakarta_Sans] text-black max-w-3xl mx-auto tracking-tight"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.75rem)", fontWeight: 700, lineHeight: 1.15 }}
          >
            Projects that prove
            <br />
            quality matters.
          </h2>
        </motion.div>

        <div className="flex flex-col gap-6">
          {/* First row: 2 cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(0, 2).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>

          {/* Second row: full width */}
          <ProjectCard project={projects[2]} index={2} wide />

          {/* Third row: 2 cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(3, 7).map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i + 3} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  index,
  wide = false,
}: {
  project: (typeof projects)[0];
  index: number;
  wide?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={`group rounded-2xl overflow-hidden ${project.color} ${
        project.dark ? "text-white" : "text-black"
      } cursor-pointer transition-all hover:shadow-xl hover:shadow-black/5`}
    >
      <div className={`${wide ? "grid md:grid-cols-2" : "flex flex-col"}`}>
        <div className="p-8 md:p-10 flex flex-col justify-between min-h-[200px]">
          <div>
            <span
              className={`${project.dark ? "text-neutral-400" : "text-neutral-500"}`}
              style={{ fontSize: "0.75rem", fontWeight: 500, letterSpacing: "0.05em" }}
            >
              {project.category}
            </span>
            <h3
              className="font-[Plus_Jakarta_Sans] mt-2 tracking-tight"
              style={{ fontSize: "1.5rem", fontWeight: 700, lineHeight: 1.2 }}
            >
              {project.title}
            </h3>
            <p
              className={`mt-3 ${project.dark ? "text-neutral-300" : "text-neutral-500"}`}
              style={{ fontSize: "0.9rem", fontWeight: 400, lineHeight: 1.6 }}
            >
              {project.description}
            </p>
          </div>

          <div className="flex items-center justify-between mt-6">
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className={`px-3 py-1 rounded-full ${
                    project.dark
                      ? "bg-white/10 text-neutral-300"
                      : "bg-black/5 text-neutral-600"
                  }`}
                  style={{ fontSize: "0.7rem", fontWeight: 500 }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                project.dark
                  ? "bg-white/10 group-hover:bg-white/20"
                  : "bg-black/5 group-hover:bg-black/10"
              } transition-colors`}
            >
              <ArrowUpRight size={18} />
            </div>
          </div>
        </div>

        <div className={`${wide ? "aspect-auto" : "aspect-[16/10]"} overflow-hidden`}>
          <ImageWithFallback
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
      </div>
    </motion.div>
  );
}