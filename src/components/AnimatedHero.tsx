import Image from "next/image";
import { motion } from "motion/react";
import { useMemo, useEffect, useState } from "react";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Instagram,
  ArrowDown,
  Sparkles,
} from "lucide-react";

const socialLinks = [
  {
    Icon: Github,
    href: "https://github.com/JinLee0811",
    gradientClass: "from-purple-500 to-purple-600",
  },
  {
    Icon: Linkedin,
    href: "https://www.linkedin.com/in/jin-lee-72b653272/",
    gradientClass: "from-blue-500 to-blue-600",
  },
  {
    Icon: Mail,
    href: "mailto:jinlee.engineer@gmail.com",
    gradientClass: "from-cyan-500 to-cyan-600",
  },
  {
    Icon: FileText,
    href: "https://docs.google.com/document/d/1kNtBOncHUM6n4OWfZKeex-dorXs-CgUPRkM03NQU9cY/edit?usp=sharing",
    gradientClass: "from-emerald-500 to-teal-500",
  },
];

export function AnimatedHero() {
  const [hasMounted, setHasMounted] = useState(false);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const particles = useMemo(
    () =>
      Array.from({ length: 90 }, (_, index) => ({
        id: index,
        x: Math.random(),
        y: Math.random(),
        opacity: Math.random() * 0.7 + 0.1,
        size: Math.random() * 2 + 0.5,
        duration: Math.random() * 12 + 8,
      })),
    [],
  );

  const [shootingStars, setShootingStars] = useState<
    {
      id: number;
      x: number;
      y: number;
      delay: number;
      duration: number;
      driftX: number;
      driftY: number;
    }[]
  >([]);

  useEffect(() => {
    setHasMounted(true);
    const updateSize = () =>
      setDimensions({ width: window.innerWidth, height: window.innerHeight });
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    if (!hasMounted) {
      return;
    }

    const generateStars = () =>
      Array.from({ length: 3 }, (_, index) => ({
        id: index,
        x: Math.random(),
        y: Math.random(),
        delay: Math.random() * 6,
        duration: Math.random() * 3 + 5,
        driftX: Math.random() * 400 + 240,
        driftY: Math.random() * 300 + 200,
      }));

    setShootingStars(generateStars());
    const interval = window.setInterval(() => {
      setShootingStars(generateStars());
    }, 12000);

    return () => window.clearInterval(interval);
  }, [hasMounted]);

  const width = dimensions.width || 1200;
  const height = dimensions.height || 800;

  return (
    <section className='min-h-screen flex items-center justify-center relative overflow-hidden'>
      <div className='absolute inset-0 bg-linear-to-br from-slate-950 via-purple-950 to-slate-950'>
        <div className='absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_top,rgba(99,102,241,0.25),transparent_55%)]' />
        <div className='absolute inset-0 opacity-30'>
          <div className='absolute top-0 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob' />
          <div className='absolute top-0 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000' />
          <div className='absolute bottom-0 left-1/3 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000' />
        </div>
      </div>

      <div className='absolute inset-0 overflow-hidden'>
        {hasMounted &&
          particles.map((particle) => (
            <motion.div
              key={particle.id}
              className='absolute rounded-full bg-white'
              initial={{
                x: particle.x * width,
                y: particle.y * height,
                opacity: particle.opacity,
              }}
              animate={{
                y: [null, Math.random() * height],
                opacity: [null, 0, particle.opacity],
                scale: [1, 1.4, 1],
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                ease: "linear",
              }}
              style={{
                width: particle.size,
                height: particle.size,
                boxShadow: "0 0 12px rgba(255,255,255,0.6)",
              }}
            />
          ))}
        {hasMounted &&
          shootingStars.map((star) => (
            <span
              key={star.id}
              className='absolute top-0 left-0 h-px w-40 bg-linear-to-r from-transparent via-white to-transparent shooting-star'
              style={{
                transform: `translate(${star.x * width}px, ${star.y * height}px) rotate(25deg)`,
                animationDelay: `${star.delay}s`,
                animationDuration: `${star.duration}s`,
                ["--sx" as string]: `${star.x * width}px`,
                ["--sy" as string]: `${star.y * height}px`,
                ["--dx" as string]: `${star.driftX}px`,
                ["--dy" as string]: `${star.driftY}px`,
              }}
            />
          ))}
      </div>

      <div className='container mx-auto px-6 relative z-10'>
        <div className='max-w-5xl mx-auto'>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className='text-center'>
            <motion.div
              className='relative inline-block mb-8 group'
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className='absolute inset-0 bg-linear-to-r from-purple-500 to-blue-500 rounded-full blur-2xl opacity-50'
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
              <div className='relative w-48 h-48 md:w-56 md:h-56 rounded-full bg-linear-to-br from-purple-500 via-blue-500 to-cyan-500 p-1 planet-core'>
                <div className='w-full h-full rounded-full bg-slate-900 overflow-hidden'>
                  <Image
                    src='/profile.png'
                    alt='Jin Lee portrait'
                    width={224}
                    height={224}
                    className='h-full w-full object-cover object-[50%_20%] scale-110'
                    priority
                  />
                </div>
                <div className='absolute inset-0 rounded-full bg-slate-950/40 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />
                <a
                  href='https://www.instagram.com/jin.lee811/'
                  target='_blank'
                  rel='noopener noreferrer'
                  className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100'
                  aria-label='Visit Instagram'
                >
                  <span className='inline-flex h-16 w-16 items-center justify-center rounded-full shadow-lg'>
                    <span className='absolute inset-0 rounded-full bg-white/90' />
                    <Instagram className='h-7 w-7 text-[#E1306C] relative' />
                  </span>
                </a>
              </div>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className='text-6xl md:text-8xl font-bold mb-4'>
              <span className='bg-linear-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent'>
                Jin Lee
              </span>
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className='mb-6'>
              <div className='inline-flex items-center gap-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10'>
                <Sparkles className='w-5 h-5 text-yellow-400' />
                <span className='text-2xl text-white font-semibold'>Software Engineer</span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9 }}
              className='text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed'>
              I enjoy turning complex problems into simple, maintainable web solutions. Currently
              focused on building production-ready applications with React, Next.js, and Node.js.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className='flex gap-4 justify-center mb-12'>
              {socialLinks.map(({ Icon, href, gradientClass }) => (
                <motion.a
                  key={href}
                  href={href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='p-4 bg-white/5 backdrop-blur-sm hover:bg-white/10 rounded-2xl border border-white/10 transition-all group relative overflow-hidden'
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}>
                  <motion.div
                    className={`absolute inset-0 bg-linear-to-br ${gradientClass} opacity-0 group-hover:opacity-20 transition-opacity`}
                  />
                  <Icon className='w-6 h-6 text-white relative z-10' />
                </motion.a>
              ))}
            </motion.div>

          </motion.div>
        </div>
      </div>

      <motion.div
        className='absolute bottom-10 left-1/2 transform -translate-x-1/2'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}>
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className='flex flex-col items-center gap-2'>
          <span className='text-sm text-slate-400'>Scroll</span>
          <ArrowDown className='w-6 h-6 text-purple-400' />
        </motion.div>
      </motion.div>

      <style>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes shootingStar {
          0% {
            opacity: 0;
            transform: translate3d(var(--sx), var(--sy), 0) rotate(25deg);
          }
          10% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translate3d(
              calc(var(--sx) + var(--dx)),
              calc(var(--sy) + var(--dy)),
              0
            )
            rotate(25deg);
          }
        }
        .shooting-star {
          animation-name: shootingStar;
          animation-timing-function: ease-in;
          animation-iteration-count: infinite;
          opacity: 0;
        }
        .planet-core {
          box-shadow:
            0 0 30px rgba(99, 102, 241, 0.35),
            0 0 60px rgba(34, 211, 238, 0.2);
        }
      `}</style>
    </section>
  );
}
