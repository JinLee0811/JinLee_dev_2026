import Link from "next/link";
import { motion } from "motion/react";
import { Calendar, Clock, ArrowRight, BookOpen, TrendingUp } from "lucide-react";
import type { BlogIndexItem } from "@/lib/blog";

interface BlogSectionProps {
  onViewAll: () => void;
  posts: BlogIndexItem[];
}

export function BlogSection({ onViewAll, posts }: BlogSectionProps) {
  return (
    <section className="py-16 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-transparent via-purple-500 to-transparent" />

      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-purple-100 rounded-full mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-600" />
            <span className="text-xs md:text-sm text-purple-600 font-semibold">
              BLOG & INSIGHTS
            </span>
          </motion.div>

          <h2 className="text-3xl md:text-6xl font-bold text-slate-900 mb-4 md:mb-6">
            Insights
          </h2>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
            <span className="md:hidden">Lessons from products & tech.</span>
            <span className="hidden md:inline">Lessons learned while building products and exploring new technologies.</span>
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <Link
                href={`/blog/${post.slug}`}
                onClick={() => {
                  if (typeof window !== "undefined") {
                    window.sessionStorage.setItem(
                      "blog:return",
                      `${window.location.pathname}${window.location.search}`
                    );
                  }
                }}
                className="block bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-100"
              >
                <div className="relative h-44 md:h-56 overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.titleEn}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/50 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-600 text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>

                  <div className="absolute top-4 right-4 flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full">
                    <TrendingUp className="w-3 h-3 text-slate-600" />
                    <span className="text-xs text-slate-600 font-medium">
                      {post.readTime}
                    </span>
                  </div>
                </div>

                <div className="p-4 md:p-6">
                  <div className="flex items-center gap-4 text-sm text-slate-500 mb-3">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-2 md:mb-3 group-hover:text-purple-600 transition-colors line-clamp-2">
                    {post.titleEn}
                  </h3>

                  <p className="text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {post.excerptEn}
                  </p>

                  <motion.div
                    className="flex items-center gap-2 text-purple-600 font-semibold"
                    whileHover={{ x: 5 }}
                  >
                    <span>Read more</span>
                    <ArrowRight className="w-4 h-4" />
                  </motion.div>
                </div>
              </Link>
            </motion.article>
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
            className="group inline-flex items-center gap-2 md:gap-3 px-6 py-3 md:px-10 md:py-5 bg-slate-900 text-white rounded-full font-bold text-base md:text-lg hover:bg-purple-600 transition-all shadow-lg hover:shadow-xl"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View all posts</span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowRight className="w-5 h-5 md:w-6 md:h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
