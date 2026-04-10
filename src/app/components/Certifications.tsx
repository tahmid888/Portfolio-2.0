import { motion } from "motion/react";
import { Award, ExternalLink, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Software Quality and Testing",
    issuer: "AIUB",
    date: "2022",
    credentialId: "AIUB-XNTL-2022-09145",
    color: "from-emerald-500/10 to-emerald-500/5",
    borderColor: "border-emerald-500/20",
    iconBg: "bg-emerald-500/10 text-emerald-600",
    link:"https://web.inilabs.dev/admin/items/show/58"
  },
  {
    title: "Appium Mobile Automation Testing (Android & iOS)",
    issuer: "Udemy",
    date: "2026",
    credentialId: "AWS-CCP-2023-78432",
    color: "from-amber-500/10 to-amber-500/5",
    borderColor: "border-amber-500/20",
    iconBg: "bg-amber-500/10 text-amber-600",
    link:"https://drive.google.com/file/d/1ir1wNQQip_5CWNMzuhQdd_jy6Znk0GH3/view?usp=drive_link"
  },
  {
    title: "Learn JMETER from Scratch on Live Apps -Performance Testing",
    issuer: "Udemy",
    date: "2026",
    credentialId: "ATA-CSP-2023-56201",
    color: "from-blue-500/10 to-blue-500/5",
    borderColor: "border-blue-500/20",
    iconBg: "bg-blue-500/10 text-blue-600",
    link:"https://youtu.be/sFMRqxCexDk?si=GykucLvSrYXkfaYG"
  },
  // {
  //   title: "Postman API Fundamentals Expert",
  //   issuer: "Postman",
  //   date: "2024",
  //   credentialId: "PM-AFE-2024-31087",
  //   color: "from-orange-500/10 to-orange-500/5",
  //   borderColor: "border-orange-500/20",
  //   iconBg: "bg-orange-500/10 text-orange-600",
  // },
  // {
  //   title: "Certified Agile Tester (CAT)",
  //   issuer: "International Council on Systems Engineering",
  //   date: "2024",
  //   credentialId: "ICAT-2024-44293",
  //   color: "from-purple-500/10 to-purple-500/5",
  //   borderColor: "border-purple-500/20",
  //   iconBg: "bg-purple-500/10 text-purple-600",
  // },
  // {
  //   title: "JIRA Service Management Fundamentals",
  //   issuer: "Atlassian",
  //   date: "2025",
  //   credentialId: "ATL-JSM-2025-19874",
  //   color: "from-sky-500/10 to-sky-500/5",
  //   borderColor: "border-sky-500/20",
  //   iconBg: "bg-sky-500/10 text-sky-600",
  // },
];

export function Certifications() {
  return (
    <section
      id="certifications"
      className="py-24 md:py-32 px-6 md:px-12 bg-neutral-50"
    >
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
            Certifications
          </span>
          <h2
            className="font-[Plus_Jakarta_Sans] text-black max-w-3xl mx-auto tracking-tight"
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Validated expertise,
            <br />
            industry recognized.
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {certifications.map((cert, i) => (
            <motion.a
             href={cert.link}
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: i * 0.08 }}
              className={`cursor-pointer group relative bg-white rounded-2xl p-6 border ${cert.borderColor} hover:shadow-lg hover:shadow-black/5 transition-all duration-300 cursor-default overflow-hidden`}
            >
              {/* Subtle gradient bg */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
              />

              <div className="relative z-10">
                {/* Icon and date row */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl ${cert.iconBg} flex items-center justify-center`}
                  >
                    <Award size={20} />
                  </div>
                  <div className="flex items-center gap-1.5 text-neutral-400">
                    <Calendar size={13} />
                    <span style={{ fontSize: "0.75rem", fontWeight: 500 }}>
                      {cert.date}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <h3
                  className="font-[Plus_Jakarta_Sans] text-black mb-1.5"
                  style={{ fontSize: "1rem", fontWeight: 650 }}
                >
                  {cert.title}
                </h3>

                {/* Issuer */}
                <p
                  className="text-neutral-500 mb-4"
                  style={{ fontSize: "0.825rem", fontWeight: 400, lineHeight: 1.5 }}
                >
                  {cert.issuer}
                </p>

                {/* Credential ID and link */}
                <div className="flex items-center justify-between pt-4 border-t border-neutral-100">
                  <span
                    className="text-neutral-400 font-mono"
                    style={{ fontSize: "0.7rem" }}
                  >
                    {cert.credentialId}
                  </span>
                  <span className="flex items-center gap-1 text-neutral-400 group-hover:text-black transition-colors duration-300">
                    <span style={{ fontSize: "0.7rem", fontWeight: 500 }}>
                      Verify
                    </span>
                    <ExternalLink
                      size={11}
                      className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300"
                    />
                  </span>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
