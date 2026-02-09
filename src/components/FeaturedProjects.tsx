import { motion } from "motion/react";
import { ExternalLink, Github, ArrowRight, Star } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
  year: string;
}

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A production-scale commerce platform built with React, Node.js, and PostgreSQL. Includes real-time inventory, secure payments, and recommendations.",
    image:
      "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: "2025",
  },
  {
    id: 2,
    title: "Real-time Collaboration Suite",
    description:
      "A collaborative workspace with CRDT-based editing, video calls, and presence. Designed to feel as smooth as a native app.",
    image:
      "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Next.js", "WebSocket", "WebRTC", "MongoDB", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: "2025",
  },
  {
    id: 3,
    title: "AI Analytics Dashboard",
    description:
      "A decision intelligence platform combining ML and data visualization with interactive dashboards and forecasting.",
    image:
      "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    featured: true,
    year: "2024",
  },
];

interface FeaturedProjectsProps {
  onViewAll: () => void;
}

export function FeaturedProjects({ onViewAll }: FeaturedProjectsProps) {
  return (
    <section
      id="featured-projects"
      className="py-32 bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Star className="w-4 h-4 text-purple-400 fill-purple-400" />
            <span className="text-sm text-purple-300 font-semibold">
              FEATURED PROJECTS
            </span>
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent">
              Featured Work
            </span>
          </h2>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Selected projects that highlight product thinking, engineering, and
            craft.
          </p>
        </motion.div>

        <div className="space-y-32 mb-20">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              <motion.div
                className="lg:w-1/2 relative group"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative rounded-2xl overflow-hidden">
                  <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-500 to-blue-500 opacity-0 group-hover:opacity-30 transition-opacity duration-500 blur-xl" />

                  <div className="relative aspect-video rounded-2xl overflow-hidden border border-white/10">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-60" />
                  </div>

                  <div className="absolute top-4 left-4 px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full">
                    <span className="text-white font-semibold">
                      {project.year}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-6 h-6 text-slate-900" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-white/90 backdrop-blur-sm rounded-full shadow-lg"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-6 h-6 text-slate-900" />
                    </motion.a>
                  </div>
                </div>
              </motion.div>

              <div className="lg:w-1/2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                >
                  <h3 className="text-4xl font-bold text-white mb-4">
                    {project.title}
                  </h3>
                  <p className="text-lg text-slate-300 leading-relaxed">
                    {project.description}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap gap-3"
                >
                  {project.tags.map((tag, tagIndex) => (
                    <motion.span
                      key={tag}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + tagIndex * 0.05 }}
                      className="px-4 py-2 bg-white/5 backdrop-blur-sm border border-white/10 text-purple-300 rounded-full text-sm font-medium hover:bg-white/10 transition-colors"
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.7 }}
                  className="flex gap-4 pt-4"
                >
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all"
                  >
                    <span>Live demo</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-6 py-3 bg-white/5 border border-white/10 text-white rounded-full font-semibold hover:bg-white/10 transition-all"
                  >
                    <span>View code</span>
                    <Github className="w-4 h-4" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.button
            onClick={onViewAll}
            className="group inline-flex items-center gap-3 px-10 py-5 bg-white/5 backdrop-blur-sm border-2 border-white/10 text-white rounded-full font-bold text-lg hover:bg-white/10 hover:border-purple-500/50 transition-all"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View all projects</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
