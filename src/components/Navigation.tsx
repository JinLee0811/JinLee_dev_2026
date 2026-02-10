import { motion } from "motion/react";
import { useState, useEffect } from "react";
import { Menu, X, Code2 } from "lucide-react";

export type NavigationPage = "home" | "projects" | "blog" | "qna";

interface NavigationProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Blog 페이지는 처음부터 배경이 밝아서 상단바를 어둡게 처리
  const hasDarkBackground = isScrolled || currentPage === "blog";

  const navItems: Array<{ id: NavigationPage; label: string }> = [
    { id: "home", label: "Home" },
    { id: "projects", label: "Projects" },
    { id: "blog", label: "Blog" },
    { id: "qna", label: "AI Chat" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        hasDarkBackground
          ? "bg-slate-900/80 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          <motion.button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-2 bg-linear-to-br from-purple-500 to-blue-500 rounded-lg group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
              <Code2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              Jin Lee
            </span>
          </motion.button>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const className = `px-6 py-2 rounded-full transition-all ${
                isActive
                  ? "bg-linear-to-r from-purple-500 to-blue-500 text-white"
                  : "text-white/80 hover:text-white hover:bg-white/10"
              }`;

              return (
                <motion.button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={className}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item.label}
                </motion.button>
              );
            })}
          </div>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-white"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden bg-slate-900/95 backdrop-blur-lg border-t border-white/10"
        >
          <div className="container mx-auto px-6 py-4 space-y-2">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              const className = `w-full text-left px-4 py-3 rounded-lg transition-all ${
                isActive
                  ? "bg-linear-to-r from-purple-500 to-blue-500 text-white"
                  : "text-white/80 hover:bg-white/10"
              }`;

              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setIsMobileMenuOpen(false);
                  }}
                  className={className}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
