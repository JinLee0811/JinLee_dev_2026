import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import { ExternalLink, Github, Search, Filter } from "lucide-react";
import { projects } from "@/data/projects";

const categories = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.category))),
];

export function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const formatMonthYear = (date: string) => {
    const parts = date.split(" ");
    if (parts.length >= 3) {
      return `${parts[1]} ${parts[2]}`;
    }
    return date;
  };

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "All" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchQuery.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-slate-950 pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16"
        >
          <h1 className="text-3xl md:text-7xl font-bold mb-4 md:mb-6">
            <span className="bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              All Projects
            </span>
          </h1>
          <p className="text-base md:text-xl text-slate-400 max-w-2xl">
            <span className="md:hidden">{projects.length} projects.</span>
            <span className="hidden md:inline">Explore {projects.length} projects across product, data, and platform engineering.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8 md:mb-12 space-y-4 md:space-y-6"
        >
          <div className="relative max-w-2xl">
            <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 text-sm md:text-base bg-white/5 border border-white/10 rounded-xl md:rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-4 h-4 md:w-5 md:h-5 text-slate-400" />
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30"
                    : "bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 mb-8"
        >
          {filteredProjects.length} projects
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="relative h-40 md:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-950 to-transparent" />

                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-semibold text-slate-900">
                      {formatMonthYear(project.date)}
                    </span>
                  </div>

                  <div className="absolute inset-0 bg-linear-to-t from-purple-900/90 to-blue-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <Link
                      href={`/projects/${project.slug}`}
                      onClick={() => {
                        if (typeof window !== "undefined") {
                          window.sessionStorage.setItem(
                            "projects:return",
                            `${window.location.pathname}${window.location.search}`
                          );
                        }
                      }}
                      className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-slate-900 rounded-full font-semibold"
                    >
                      <span>View details</span>
                    </Link>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-white/5 text-slate-400 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-white/5 text-slate-400 text-xs rounded">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>
                  {(project.liveUrl || project.githubUrl) && (
                    <div className="mt-4 flex flex-wrap gap-3">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live demo</span>
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 text-sm text-purple-300 hover:text-purple-200"
                        >
                          <Github className="w-4 h-4" />
                          <span>View code</span>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-lg md:text-2xl text-slate-400">No results found.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
