import { motion } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Menu, X, Code2 } from "lucide-react";

export type NavigationPage = "home" | "projects" | "blog" | "qna";

interface NavigationProps {
  currentPage: NavigationPage;
  onNavigate: (page: NavigationPage) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesktopMenuOpen, setIsDesktopMenuOpen] = useState(false);
  const desktopCloseTimerRef = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (desktopCloseTimerRef.current) {
        window.clearTimeout(desktopCloseTimerRef.current);
      }
    };
  }, []);

  // Blog 페이지는 처음부터 배경이 밝아서 상단바를 어둡게 처리
  const hasDarkBackground = isScrolled || currentPage === "blog";

  const navItems: Array<{ key: string; id?: NavigationPage; label: string; href?: string }> = [
    { key: "home", id: "home", label: "Home" },
    { key: "projects", id: "projects", label: "Projects" },
    { key: "blog", id: "blog", label: "Blog" },
    { key: "qna", id: "qna", label: "AI Chat" },
    { key: "business", label: "Business", href: "https://jl-studio-amber.vercel.app/" },
  ];
  const currentItem =
    navItems.find((item) => item.id === currentPage) ?? navItems[0];

  const openDesktopMenu = () => {
    if (desktopCloseTimerRef.current) {
      window.clearTimeout(desktopCloseTimerRef.current);
      desktopCloseTimerRef.current = null;
    }
    setIsDesktopMenuOpen(true);
  };

  const scheduleDesktopMenuClose = () => {
    if (desktopCloseTimerRef.current) {
      window.clearTimeout(desktopCloseTimerRef.current);
    }
    desktopCloseTimerRef.current = window.setTimeout(() => {
      setIsDesktopMenuOpen(false);
      desktopCloseTimerRef.current = null;
    }, 220);
  };

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
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <motion.button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="p-1.5 md:p-2 bg-linear-to-br from-purple-500 to-blue-500 rounded-lg group-hover:shadow-lg group-hover:shadow-purple-500/50 transition-all">
              <Code2 className="w-5 h-5 md:w-6 md:h-6 text-white" />
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              Jin Lee
            </span>
          </motion.button>

          <div
            className="hidden md:block"
            onMouseEnter={openDesktopMenu}
            onMouseLeave={scheduleDesktopMenuClose}
            onFocusCapture={openDesktopMenu}
            onBlurCapture={(event) => {
              if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                scheduleDesktopMenuClose();
              }
            }}
          >
            <motion.div
              layout
              className="flex items-center gap-2 rounded-full border border-white/15 bg-slate-900/80 p-2 backdrop-blur-lg shadow-lg"
            >
              {navItems.map((item) => {
                const isActive = Boolean(item.id) && currentPage === item.id;
                const isVisible = isDesktopMenuOpen || item.key === currentItem.key;
                const className = `block overflow-hidden whitespace-nowrap rounded-full text-sm transition-all duration-200 ${
                  isVisible
                    ? "max-w-40 px-4 py-2 opacity-100"
                    : "max-w-0 px-0 py-2 opacity-0 pointer-events-none"
                } ${
                  isActive
                    ? "bg-linear-to-r from-purple-500 to-blue-500 text-white"
                    : "text-white/80 hover:text-white hover:bg-white/10"
                }`;

                if (item.href) {
                  return (
                    <a key={item.key} href={item.href} className={className}>
                      {item.label}
                    </a>
                  );
                }

                return (
                  <button
                    key={item.key}
                    onClick={() => {
                      if (!item.id) {
                        return;
                      }
                      onNavigate(item.id);
                      setIsDesktopMenuOpen(false);
                    }}
                    className={className}
                  >
                    {item.label}
                  </button>
                );
              })}
            </motion.div>
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
          <div className="container mx-auto px-4 py-3 space-y-1 md:px-6 md:py-4 md:space-y-2">
            {navItems.map((item) => {
              const isActive = Boolean(item.id) && currentPage === item.id;
              const className = `w-full text-left px-4 py-2.5 md:py-3 rounded-lg text-sm md:text-base transition-all ${
                isActive
                  ? "bg-linear-to-r from-purple-500 to-blue-500 text-white"
                  : "text-white/80 hover:bg-white/10"
              }`;

              return (
                <div key={item.key}>
                  {item.href ? (
                    <a
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`${className} block`}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <button
                      onClick={() => {
                        if (!item.id) {
                          return;
                        }
                        onNavigate(item.id);
                        setIsMobileMenuOpen(false);
                      }}
                      className={className}
                    >
                      {item.label}
                    </button>
                  )}
                </div>
              );
            })}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}
