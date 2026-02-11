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
    company: "Elice (EdTech Platform), Seoul",
    position: "Software Engineer",
    period: "Nov 2022 – Jun 2024",
    description: [
      "Maintained and extended production web applications using React, TypeScript, and Node.js",
      "Improved system stability, backward compatibility, and maintainability",
      "Investigated production issues by analysing logs, APIs, and frontend–backend data flows",
      "Collaborated through GitHub pull requests, code reviews, and incremental deployments",
      "Contributed to reliability improvements through targeted refactors and documentation",
    ],
    skills: ["React", "TypeScript", "Node.js", "REST APIs", "PostgreSQL", "Git"],
  },
  {
    id: 2,
    company: "Youniv, Seoul",
    position: "Senior Video Producer",
    period: "Jan 2020 – Jul 2022",
    description: [
      "Led a content team that grew a YouTube channel from 100K to 700K subscribers",
      "Applied data-driven storytelling and audience analytics to optimise performance",
    ],
    skills: ["Content Strategy", "Analytics", "Team Leadership"],
  },
];

export function Experience() {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-3 md:mb-4">
            Experience
          </h2>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
            <span className="md:hidden">Startups, scale-ups & agencies.</span>
            <span className="hidden md:inline">Building products across startups, scale-ups, and agencies.</span>
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 via-blue-500 to-cyan-500" />

            {experiences.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative mb-8 md:mb-12 last:mb-0"
              >
                <div className="absolute left-4 md:left-6 top-5 md:top-6 w-4 h-4 md:w-5 md:h-5 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full border-2 md:border-4 border-white shadow-lg" />

                <div className="ml-16 md:ml-20 bg-slate-50 rounded-xl p-4 md:p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-lg md:text-2xl font-bold text-slate-900 mb-1">
                        {exp.position}
                      </h3>
                      <div className="flex items-center gap-2 text-purple-600 mb-2">
                        <Briefcase className="w-4 h-4 md:w-5 md:h-5" />
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
