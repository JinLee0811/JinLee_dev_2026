import { motion } from "motion/react";
import { GraduationCap, Award, BookOpen } from "lucide-react";

interface EducationItem {
  id: number;
  institution: string;
  degree: string;
  major: string;
  period: string;
  description: string;
  achievements?: string[];
}

interface CertificationItem {
  id: number;
  name: string;
  issuer: string;
  date: string;
}

const education: EducationItem[] = [
  {
    id: 1,
    institution: "Korea University",
    degree: "B.S.",
    major: "Computer Science",
    period: "2015.03 - 2019.02",
    description: "Focused on software engineering and web development.",
    achievements: [
      "GPA 4.2/4.5",
      "Selected for an outstanding capstone project",
      "Led the Algorithms Study Club",
    ],
  },
  {
    id: 2,
    institution: "Fast Campus",
    degree: "Bootcamp",
    major: "Full Stack Web Development",
    period: "2019.03 - 2019.08",
    description: "Intensive, project-based learning program.",
    achievements: [
      "Completed a 6-month immersive course",
      "Awarded best team project",
      "Participated in hiring-linked program",
    ],
  },
];

const certifications: CertificationItem[] = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect - Associate",
    issuer: "Amazon Web Services",
    date: "2024.01",
  },
  {
    id: 2,
    name: "Engineer Information Processing",
    issuer: "HRD Korea",
    date: "2023.06",
  },
  {
    id: 3,
    name: "SQL Developer (SQLD)",
    issuer: "Korea Data Agency",
    date: "2022.09",
  },
];

export function Education() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">
            Education & Certifications
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Continuous learning through formal education and industry
            certifications.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-3 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl">
                <GraduationCap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">Education</h3>
            </motion.div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h4 className="text-xl font-bold text-slate-900 mb-1">
                        {edu.institution}
                      </h4>
                      <p className="text-purple-600 font-semibold">
                        {edu.degree} • {edu.major}
                      </p>
                    </div>
                    <span className="text-sm text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-slate-600 mb-3">{edu.description}</p>
                  {edu.achievements && (
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <li
                          key={i}
                          className="text-sm text-slate-700 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900">
                Certifications
              </h3>
            </motion.div>

            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-5 shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-start gap-4">
                    <div className="p-2 bg-blue-100 rounded-lg mt-1">
                      <BookOpen className="w-5 h-5 text-blue-600" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-slate-900 mb-1">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-slate-600 mb-1">
                        {cert.issuer}
                      </p>
                      <span className="text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded">
                        {cert.date}
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl p-6 text-white"
            >
              <h4 className="font-bold text-lg mb-3">Skills Summary</h4>
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <p className="text-sm text-purple-100 mb-2">Frontend</p>
                  <p className="text-sm">React, TypeScript, Next.js</p>
                </div>
                <div>
                  <p className="text-sm text-purple-100 mb-2">Backend</p>
                  <p className="text-sm">Node.js, Express, NestJS</p>
                </div>
                <div>
                  <p className="text-sm text-purple-100 mb-2">Database</p>
                  <p className="text-sm">PostgreSQL, MongoDB</p>
                </div>
                <div>
                  <p className="text-sm text-purple-100 mb-2">DevOps</p>
                  <p className="text-sm">Docker, AWS, CI/CD</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
