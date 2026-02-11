import Link from "next/link";
import { motion } from "motion/react";
import { useState } from "react";
import {
  Calendar,
  Clock,
  Search,
  Tag,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import type { BlogIndexItem } from "@/lib/blog";

type BlogPageProps = {
  posts: BlogIndexItem[];
};

export function BlogPage({ posts }: BlogPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const categories = ["All", ...new Set(posts.map((post) => post.category))];
  const allTags = Array.from(new Set(posts.flatMap((post) => post.tags))).sort();

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const filteredPosts = posts.filter((post) => {
    const matchesCategory =
      selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch =
      post.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerptEn.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags =
      selectedTags.length === 0 ||
      selectedTags.some((tag) => post.tags.includes(tag));
    return matchesCategory && matchesSearch && matchesTags;
  });

  return (
    <div className="min-h-screen bg-white pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-10 md:mb-16 text-center"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 bg-purple-100 rounded-full mb-4 md:mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <BookOpen className="w-3.5 h-3.5 md:w-4 md:h-4 text-purple-600" />
            <span className="text-xs md:text-sm text-purple-600 font-semibold">BLOG</span>
          </motion.div>

          <h1 className="text-3xl md:text-7xl font-bold text-slate-900 mb-4 md:mb-6">
            Writing
          </h1>
          <p className="text-base md:text-xl text-slate-600 max-w-2xl mx-auto">
            <span className="md:hidden">Engineering & product insights.</span>
            <span className="hidden md:inline">Deep dives on engineering decisions, architecture, and product craft.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search className="absolute left-3 md:left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 md:w-5 md:h-5 text-slate-400" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 md:pl-12 pr-3 md:pr-4 py-3 md:py-4 text-sm md:text-base bg-slate-50 border border-slate-200 rounded-xl md:rounded-2xl text-slate-900 placeholder-slate-500 focus:outline-none focus:border-purple-500 transition-colors"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-5 md:mb-6"
        >
          <div className="flex items-center gap-2 md:gap-3 flex-wrap justify-center">
            {categories.map((category) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-1.5 md:px-6 md:py-2 rounded-full text-sm md:text-base font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-linear-to-r from-purple-600 to-blue-600 text-white shadow-lg"
                    : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-8 md:mb-12"
        >
          <div className="flex items-center gap-2 md:gap-3 flex-wrap justify-center">
            <Tag className="w-4 h-4 text-slate-400" />
            {allTags.map((tag) => (
              <motion.button
                key={tag}
                onClick={() => toggleTag(tag)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  selectedTags.includes(tag)
                    ? "bg-purple-600 text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {tag}
              </motion.button>
            ))}
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-slate-600 mb-8 text-center"
        >
          {filteredPosts.length} posts
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-10 md:mb-16">
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
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
                className="bg-white rounded-2xl overflow-hidden border border-slate-200 hover:border-purple-300 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-100 h-full flex flex-col"
              >
                <div className="relative h-44 md:h-56 overflow-hidden">
                  <motion.img
                    src={post.image}
                    alt={post.titleEn}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-slate-900/70 to-transparent" />

                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-purple-600 text-sm font-semibold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                <div className="p-4 md:p-6 flex-1 flex flex-col">
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

                  <p className="text-slate-600 leading-relaxed line-clamp-3 mb-4 flex-1">
                    {post.excerptEn}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

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

        {filteredPosts.length === 0 && (
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
