import { motion } from "motion/react";
import { Briefcase, Calendar } from "lucide-react";

interface ExperienceItem {
  id: number;
  company: string;
  position: string;
  period: string;
  description: string[];
  skills: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 1,
    company: "Tech Startup",
    position: "Senior Full Stack Developer",
    period: "2023.03 - Present",
    description: [
      "Designed and shipped React and Node.js web applications end-to-end",
      "Implemented a microservices architecture and standardized APIs",
      "Established code review practices and improved engineering workflows",
      "Mentored new hires and led onboarding",
    ],
    skills: ["React", "TypeScript", "Node.js", "PostgreSQL", "Docker", "AWS"],
  },
  {
    id: 2,
    company: "E-Commerce Platform",
    position: "Full Stack Developer",
    period: "2021.06 - 2023.02",
    description: [
      "Improved performance for high-traffic flows (40% faster response)",
      "Built payment, order, and inventory management systems",
      "Designed real-time stock synchronization services",
      "Refactored legacy modules and expanded test coverage",
    ],
    skills: ["Vue.js", "Express", "MongoDB", "Redis", "Jenkins"],
  },
  {
    id: 3,
    company: "Web Agency",
    position: "Frontend Developer",
    period: "2019.09 - 2021.05",
    description: [
      "Delivered 15+ marketing sites and product landing pages",
      "Built responsive UI with cross-browser compatibility",
      "Improved SEO and accessibility across client sites",
      "Collaborated closely with designers and PMs",
    ],
    skills: ["JavaScript", "HTML/CSS", "jQuery", "SASS", "Git"],
  },
];

export function Experience() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Experience
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Building products across startups, scale-ups, and agencies.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-12 last:mb-0"
              >
                <div className="absolute left-6 top-6 w-5 h-5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full border-4 border-white shadow-lg" />

                <div className="ml-20 bg-slate-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-purple-600 mb-2">
                        <Briefcase className="w-5 h-5" />
                        <span className="font-semibold">{exp.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 bg-white px-4 py-2 rounded-lg">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{exp.period}</span>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, i) => (
                      <li
                        key={i}
                        className="text-slate-700 flex items-start gap-2"
                      >
                        <span className="text-purple-500 mt-1.5">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white text-slate-700 text-sm rounded-full border border-slate-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
