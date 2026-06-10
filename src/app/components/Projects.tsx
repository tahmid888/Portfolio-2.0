import { motion } from "motion/react";
import { ArrowUpRight, Github } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

const projects = [
  {
    id: 1,
    title: "FinKart — AI-Powered Financial Product Discovery Platform",
    category: "Product · Fintech · AI-Powered",
    description:
      "Bangladesh's first intelligent and unbiased financial product discovery platform, built by SSL Wireless and powered by SSLCOMMERZ. FinKart leverages AI-driven technology to help users find the right credit cards, loans, savings accounts, DPS, and FDR from top partner banks — in just 3 simple steps, completely free of charge.",
    image:
      "https://images.unsplash.com/photo-1758522964483-4c92775a83b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcGklMjB0ZXN0aW5nJTIwbW9uaXRvcmluZ3xlbnwxfHx8fDE3NzI2ODE3NTN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["AI-Powered", "Fintech", "Enterprise", "SSL Wireless"],
    color: "bg-slate-50",
    dark: false,
    liveUrl: "https://finkart.sslwireless.com",
    //githubUrl: "https://github.com/tahmid888/finkart",
  },
  {
    id: 2,
    title: "British American Tobacco (BAT) Partner App — Retail Empowerment & KPI Management",
    category: "Product · Enterprise · Mobile App",
    description:
      "An enterprise-grade mobile solution developed by SSL Wireless for British American Tobacco (BAT). The Partner App empowers BAT's retail partners by digitizing their entire retail operation — from performance tracking and inventory management to rewards and brand communication. Rated 4.8★ on Google Play with 10,000+ downloads.",
    image:
      "https://images.unsplash.com/photo-1731846584223-81977e156b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVzdGluZyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzI2ODE3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Enterprise", "Mobile App", "Retail Tech", "BAT × SSL Wireless"],
    color: "bg-slate-50",
    dark: false,
    liveUrl: "https://play.google.com/store/apps/details?id=com.sslwireless.partner_app",
    //githubUrl: "https://github.com/tahmid888/bat-partner-app",
  },
  {
    id: 3,
    title: "CashBaba — e-Wallet & Digital Payment Platform",
    category: "Product · Fintech · Licensed PSP",
    description:
      "Bangladesh's first Licensed Payment Service Provider (PSP), regulated by the Central Bank of Bangladesh. CashBaba is a fully certified e-Wallet and online payment gateway — PCI-DSS compliant, ISO-27001 certified, and EMVCo standard — enabling individuals and businesses to go completely cashless.",
    image:
      "https://images.unsplash.com/photo-1763568258492-9569a0af2127?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2Z0d2FyZSUyMHRlc3RpbmclMjBjb2RlJTIwc2NyZWVufGVufDF8fHx8MTc3MjYwMzcyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Fintech", "e-Wallet", "PCI-DSS", "Licensed PSP"],
    color: "bg-slate-50",
    dark: false,
    liveUrl: "https://cashbaba.com.bd",
    //githubUrl: "https://github.com/tahmid888/cashbaba",
  },
  {
    id: 4,
    title: "NRB Click — Mobile Banking App",
    category: "Product · Fintech · Banking",
    description:
      "The official mobile banking application of NRB Bank Limited — an innovative fourth-generation bank dedicated to serving Non-Resident Bangladeshis. NRB Click brings a full suite of retail banking services to users' fingertips, including transfers, QR payments, MFS wallet integrations, and self-service features.",
    image:
      "https://images.unsplash.com/photo-1731846584223-81977e156b2c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRvbWF0aW9uJTIwdGVzdGluZyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzI2ODE3NTJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    tags: ["Mobile Banking", "Fintech", "iOS & Android", "NRB Bank"],
    color: "bg-slate-50",
    dark: false,
    liveUrl: "https://apps.apple.com/us/app/nrb-click/id1537290482",
    //githubUrl: "https://github.com/tahmid888/nrb-click",
  },
  {
    id: 5,
    title: "e-DP System — Electronic Defence Procurement Platform",
    category: "Government Project · Enterprise",
    description:
      "A national-scale digital procurement platform developed for the Directorate General of Defence Purchase (DGDP) under the Ministry of Defence, Bangladesh. Modernizes end-to-end defense procurement — from managing requests and vendor bids to issuing purchase orders and real-time tracking.",
    image: "https://simecsystem.com/wp-content/uploads/2025/03/dgdp-1.png",
    tags: ["Government Project", "Enterprise", "Cypress", "JavaScript", "POM"],
    color: "bg-slate-50",
    dark: false,
    liveUrl: "https://edp.dgdp.gov.bd",
    githubUrl: "https://github.com/tahmid888/e-DP-System",
  },
  {
    id: 6,
    title: "LIMS — Labour Information Management System",
    category: "Government Project · Enterprise",
    description:
      "A government digital initiative under DIFE aimed at transforming labour management across Bangladesh. Enables verification and registration of workers and establishments, maintains a centralized national workforce database, and connects job seekers through an integrated national job portal.",
    image: "https://simecsystem.com/wp-content/uploads/2025/03/lims-1.png",
    tags: ["Government Project", "Manual Testing", "QA", "DIFE"],
    color: "bg-slate-50",
    dark: false,
    liveUrl: "https://lims.dife.gov.bd",
    //githubUrl: "https://github.com/tahmid888/lims-dife",
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
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
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

          {/* Third row: remaining cards */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.slice(3).map((project, i) => (
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
              className={`${
                project.dark ? "text-neutral-400" : "text-neutral-500"
              }`}
              style={{
                fontSize: "0.75rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
              }}
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
              className={`mt-3 ${
                project.dark ? "text-neutral-300" : "text-neutral-500"
              }`}
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

            <div className="flex items-center gap-2 ml-4 shrink-0">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    project.dark
                      ? "bg-white/10 hover:bg-white/20"
                      : "bg-black/5 hover:bg-black/10"
                  } transition-colors`}
                  title="View on GitHub"
                >
                  <Github size={16} />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className={`w-10 h-10 rounded-full flex items-center justify-center ${
                    project.dark
                      ? "bg-white/10 hover:bg-white/20"
                      : "bg-black/5 hover:bg-black/10"
                  } transition-colors`}
                  title="View Live"
                >
                  <ArrowUpRight size={18} />
                </a>
              )}
            </div>
          </div>
        </div>

        <div
          className={`${
            wide ? "aspect-auto" : "aspect-[16/10]"
          } overflow-hidden`}
        >
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