import { motion } from "motion/react";
import { Github, Linkedin, Mail, FileText, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-10 md:py-12">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-6 md:mb-8"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-2 bg-linear-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent text-center">
              Open to collaborations?
            </h3>
            <p className="text-sm md:text-base text-slate-400 text-center">
              <span className="md:hidden">Reach out anytime.</span>
              <span className="hidden md:inline">Reach out anytime about new projects or opportunities.</span>
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-3 md:gap-4 mb-6 md:mb-8"
          >
            <a
              href="https://github.com/JinLee0811"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <Github className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/jin-lee-72b653272/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <Linkedin className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="mailto:jinlee.engineer@gmail.com"
              className="p-3 md:p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <Mail className="w-5 h-5 md:w-6 md:h-6" />
            </a>
            <a
              href="https://docs.google.com/document/d/1kNtBOncHUM6n4OWfZKeex-dorXs-CgUPRkM03NQU9cY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 md:p-4 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
            >
              <FileText className="w-5 h-5 md:w-6 md:h-6" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center"
          >
            <p className="text-sm md:text-base text-slate-400 flex items-center justify-center gap-2">
              Made with <Heart className="w-3.5 h-3.5 md:w-4 md:h-4 text-red-500 fill-red-500" />{" "}
              by Jin Lee
            </p>
            <p className="text-xs md:text-sm text-slate-500 mt-2">© 2026 All rights reserved.</p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
