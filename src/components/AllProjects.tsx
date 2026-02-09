import { motion } from "motion/react";
import { useState } from "react";
import type { ReactNode } from "react";
import {
  ExternalLink,
  Github,
  Search,
  Filter,
  ShoppingCart,
  Smartphone,
  BarChart,
  Code2,
  MessageSquare,
  Zap,
  Globe,
  Database,
} from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  category: string;
  year: string;
  icon: ReactNode;
}

const allProjects: Project[] = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A scalable commerce platform with real-time inventory.",
    image:
      "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Full Stack",
    year: "2025",
    icon: <ShoppingCart className="w-5 h-5" />,
  },
  {
    id: 2,
    title: "Real-time Collaboration Suite",
    description: "CRDT-powered editing with video calls and presence.",
    image:
      "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Next.js", "WebSocket", "WebRTC", "MongoDB", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Full Stack",
    year: "2025",
    icon: <MessageSquare className="w-5 h-5" />,
  },
  {
    id: 3,
    title: "AI Analytics Dashboard",
    description: "Machine learning insights with interactive data visuals.",
    image:
      "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Data & AI",
    year: "2024",
    icon: <BarChart className="w-5 h-5" />,
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "Cross-platform health app with wearable integrations.",
    image:
      "https://images.unsplash.com/photo-1595234235838-2fc8984bc651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React Native", "Firebase", "Redux", "HealthKit"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Mobile",
    year: "2024",
    icon: <Smartphone className="w-5 h-5" />,
  },
  {
    id: 5,
    title: "Developer Community",
    description: "A Q&A platform for engineers with realtime updates.",
    image:
      "https://images.unsplash.com/photo-1561886362-a2b38ce83470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Next.js", "Prisma", "tRPC", "TailwindCSS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Full Stack",
    year: "2024",
    icon: <Code2 className="w-5 h-5" />,
  },
  {
    id: 6,
    title: "Real-time Chat Infrastructure",
    description: "Scalable chat services with Kafka and gRPC.",
    image:
      "https://images.unsplash.com/photo-1588690154757-badf4644190f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["Go", "gRPC", "Kafka", "Kubernetes", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Backend",
    year: "2024",
    icon: <Zap className="w-5 h-5" />,
  },
  {
    id: 7,
    title: "Portfolio Builder",
    description: "Drag-and-drop portfolio creator for creatives.",
    image:
      "https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["React", "DnD Kit", "Supabase", "Vercel"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Frontend",
    year: "2023",
    icon: <Globe className="w-5 h-5" />,
  },
  {
    id: 8,
    title: "GraphQL API Platform",
    description: "Composable backend services with GraphQL and Apollo.",
    image:
      "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    tags: ["GraphQL", "Apollo", "PostgreSQL", "Docker"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    category: "Backend",
    year: "2023",
    icon: <Database className="w-5 h-5" />,
  },
];

const categories = ["All", "Full Stack", "Frontend", "Backend", "Mobile", "Data & AI"];

export function AllProjects() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredProjects = allProjects.filter((project) => {
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
    <div className="min-h-screen bg-slate-950 pt-32 pb-20">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              All Projects
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl">
            Explore {allProjects.length} projects across product, data, and
            platform engineering.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-12 space-y-6"
        >
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>

          <div className="flex items-center gap-3 flex-wrap">
            <Filter className="w-5 h-5 text-slate-400" />
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-lg shadow-purple-500/30"
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group"
            >
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-transparent" />

                  <div className="absolute top-3 left-3 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <span className="text-xs font-semibold text-slate-900">
                      {project.year}
                    </span>
                  </div>

                  <div className="absolute top-3 right-3 p-2 bg-white/90 backdrop-blur-sm rounded-lg">
                    {project.icon}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 to-blue-900/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ExternalLink className="w-5 h-5 text-slate-900" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full"
                      whileHover={{ scale: 1.1, rotate: -5 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Github className="w-5 h-5 text-slate-900" />
                    </motion.a>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs font-semibold rounded-full">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
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
            <p className="text-2xl text-slate-400">No results found.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
