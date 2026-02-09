export type ProjectDetail = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  overview: string;
  date: string;
  category: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  features: string[];
  techStack: string[];
  apis: string[];
  challenges: string[];
  takeaways: string[];
};

const imageSet = {
  product:
    "https://images.unsplash.com/photo-1694599048261-a1de00f0117e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  data:
    "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  dashboard:
    "https://images.unsplash.com/photo-1649451844931-57e22fc82de3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  system:
    "https://images.unsplash.com/photo-1588690154757-badf4644190f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  portfolio:
    "https://images.unsplash.com/photo-1595234235838-2fc8984bc651?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
};

export const projects: ProjectDetail[] = [
  {
    id: 1,
    slug: "before-you-go",
    title: "Before You Go",
    subtitle: "Restaurant Review Analytics Platform",
    description:
      "A full-stack web application that aggregates Google Maps reviews and generates AI-based summaries to reduce information overload for travellers.",
    overview:
      "Built to summarise long review streams into practical insights. Focused on reliability, cost control, and clear user-facing summaries.",
    date: "01 Apr 2025",
    category: "Personal",
    image: imageSet.product,
    tags: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Gemini API",
      "React Query",
      "Zustand",
    ],
    liveUrl: "https://beforeyougo.vercel.app/",
    githubUrl: "https://github.com/JinLee0811/BeforeYouGO",
    features: [
      "AI review summarisation with pros/cons and key themes",
      "Google Maps review ingestion and caching",
      "Supabase-backed storage for summaries and history",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "Supabase",
      "Tailwind CSS",
      "Vercel",
    ],
    apis: ["Google Places API", "Gemini API"],
    challenges: [
      "Handling multilingual reviews and inconsistent formats",
      "Reducing repeated external API calls and cost spikes",
    ],
    takeaways: [
      "Cache-first pipelines are essential for cost control",
      "Clear summarisation improves decision speed for users",
    ],
  },
  {
    id: 2,
    slug: "smart-farm-monitoring",
    title: "Smart Farm Monitoring",
    subtitle: "Abnormal Cattle Behaviour Detection System",
    description:
      "A modular monitoring system combining frontend dashboards, backend APIs, and ML-based video analysis.",
    overview:
      "Designed to support live CCTV streams, with recorded video used to simulate real-time input due to infrastructure constraints.",
    date: "01 Apr 2025",
    category: "Team Projects",
    image: imageSet.dashboard,
    tags: ["React", "TypeScript", "Node.js", "Python", "YOLOv8", "OpenCV"],
    liveUrl: "https://www.canva.com/design/DAHAtsAZpic/q2x8lIIOW1ayPc_cwyxqwA/edit",
    githubUrl: "https://github.com/JinLee0811/smart-farm-monitoring",
    features: [
      "Video-based behaviour detection pipeline",
      "Backend alert processing and state management",
      "Monitoring dashboard for events and status",
    ],
    techStack: [
      "React",
      "TypeScript",
      "Node.js (REST API)",
      "Python",
      "PostgreSQL",
    ],
    apis: ["REST-based inter-service communication"],
    challenges: [
      "Selecting ML models and sourcing reliable video data",
      "Simulating real-time streams using recorded footage",
    ],
    takeaways: [
      "Clear service boundaries simplify multi-service systems",
      "Realistic constraints shape architecture decisions",
    ],
  },
  {
    id: 3,
    slug: "ai-crop-doctor",
    title: "AI Crop Doctor",
    subtitle: "AI-powered Plant Disease Diagnosis",
    description:
      "An AI-powered web platform that analyses plant images and provides disease identification with treatment recommendations.",
    overview:
      "Focused on delivering fast inference and a clear diagnosis experience through a modern web interface.",
    date: "01 Apr 2023",
    category: "Team Projects",
    image: imageSet.portfolio,
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Prisma",
      "TensorFlow",
      "Python",
    ],
    githubUrl: "https://github.com/JinLee0811/CropDoctor-Ai-webservice",
    features: [
      "Image-based AI disease detection",
      "Real-time analysis with treatment recommendations",
      "Dashboard for history and feedback tracking",
    ],
    techStack: [
      "Next.js",
      "TypeScript",
      "TensorFlow",
      "Python ML libraries",
      "Docker",
    ],
    apis: ["Custom AI API", "RESTful services", "Real-time inference API"],
    challenges: [
      "Training with large image datasets",
      "Optimising inference speed for real-time use",
      "Integrating AI services with the web app",
    ],
    takeaways: [
      "Data quality drives model reliability",
      "Inference optimisation directly impacts UX",
    ],
  },
  {
    id: 4,
    slug: "ai-analytics-dashboard",
    title: "AI Analytics Dashboard",
    subtitle: "Interactive ML Insights and Forecasting",
    description:
      "A decision intelligence dashboard combining ML insights with interactive data visualisation.",
    overview:
      "Focused on narrative dashboards and high-performance charting for data-heavy views.",
    date: "01 Sep 2024",
    category: "Personal",
    image: imageSet.data,
    tags: ["React", "Python", "TensorFlow", "D3.js", "FastAPI"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com",
    features: ["Forecast dashboards", "Custom report builder"],
    techStack: ["React", "FastAPI", "TensorFlow", "D3.js"],
    apis: ["Internal ML services"],
    challenges: ["Scaling data queries", "Chart performance at scale"],
    takeaways: ["Improved data-to-insight workflows for stakeholders"],
  },
  {
    id: 5,
    slug: "first-react-portfolio",
    title: "First React Portfolio",
    subtitle: "React + Styled-components Portfolio",
    description:
      "My first portfolio website built with a component-based architecture and Styled-components.",
    overview:
      "Focused on learning React fundamentals and structuring a portfolio for readability and clarity.",
    date: "01 Feb 2023",
    category: "Personal",
    image: imageSet.portfolio,
    tags: ["React", "JavaScript", "Styled-components", "CSS3"],
    liveUrl: "https://jinlee0811.github.io/portfolio/",
    githubUrl: "https://github.com/JinLee0811/portfolio",
    features: [
      "Responsive design with mobile-first layouts",
      "Reusable React components for project sections",
      "Styled-components for maintainable styling",
    ],
    techStack: ["React", "Styled-components", "JavaScript", "CSS3"],
    apis: ["Styled-components API"],
    challenges: [
      "Structuring information for a clear portfolio UX",
      "Keeping styles maintainable without a design system",
    ],
    takeaways: [
      "Component architecture improves maintainability",
      "Clear hierarchy improves portfolio readability",
    ],
  },
  {
    id: 6,
    slug: "netflix-clone",
    title: "Netflix Clone",
    subtitle: "Full-stack Streaming Clone",
    description:
      "A full-stack Netflix clone with OAuth authentication, movie browsing, and wishlist management.",
    overview:
      "Built to practise full-stack development with Next.js, Prisma, and MongoDB.",
    date: "01 Jul 2024",
    category: "Personal",
    image: imageSet.system,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB"],
    liveUrl: "https://jin-netflix-clone.vercel.app/",
    githubUrl: "https://github.com/JinLee0811/jin-netflix-clone",
    features: [
      "OAuth login with Google and GitHub",
      "Movie catalogue and playback views",
      "Wishlist stored in MongoDB",
    ],
    techStack: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Tailwind CSS"],
    apis: ["NextAuth.js", "Prisma Client"],
    challenges: [
      "Integrating Prisma with Next.js API routes",
      "Maintaining responsive layouts across screens",
    ],
    takeaways: [
      "Full-stack development benefits from strong schema design",
      "Consistent UI patterns improve usability",
    ],
  },
  {
    id: 7,
    slug: "shopping-website",
    title: "Shopping Website",
    subtitle: "Team E-commerce Platform",
    description:
      "A full-stack e-commerce platform with authentication, product management, and order processing.",
    overview:
      "Focused on team collaboration and building reliable REST APIs with a React frontend.",
    date: "01 Jan 2023",
    category: "Team Projects",
    image: imageSet.product,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "MongoDB", "Node.js"],
    githubUrl: "https://github.com/JinLee0811/Shoppingmall-Web-Service",
    features: [
      "Product CRUD and inventory management",
      "Shopping cart and checkout flow",
      "Responsive UI for mobile and desktop",
    ],
    techStack: ["Next.js", "Node.js", "MongoDB"],
    apis: ["REST API", "Express.js"],
    challenges: [
      "Coordinating frontend and backend integration",
      "Managing shared state for cart and orders",
    ],
    takeaways: [
      "Clear API contracts reduce integration friction",
      "Team communication directly impacts delivery quality",
    ],
  },
  {
    id: 8,
    slug: "data-analysis-web-service",
    title: "Data Analysis Web Service",
    subtitle: "Public Transport Data Visualisation",
    description:
      "A web service that analyses subway travel time data and visualises perceived travel times.",
    overview:
      "Combined Python data processing with a React frontend to deliver practical travel insights.",
    date: "01 Mar 2023",
    category: "Team Projects",
    image: imageSet.data,
    tags: ["React", "JavaScript", "Styled-components", "Node.js", "Python", "AWS"],
    githubUrl: "https://github.com/JinLee0811/subway-time-project",
    features: [
      "Interactive maps with travel-time overlays",
      "Python analysis pipeline for travel estimation",
      "Admin tools for data updates",
    ],
    techStack: ["React", "Node.js", "Python", "AWS", "Prisma"],
    apis: ["REST API", "Map APIs"],
    challenges: [
      "Optimising data processing for large datasets",
      "Maintaining performance with map rendering",
    ],
    takeaways: [
      "Data-heavy apps need careful performance planning",
      "API fallback plans reduce third-party risk",
    ],
  },
  {
    id: 9,
    slug: "pokemon-volleyball",
    title: "Pokémon Volleyball Mini Game",
    subtitle: "Pygame-based Mini Game",
    description:
      "A Pokémon-themed volleyball mini-game built with Pygame, focused on physics and sprite animation.",
    overview:
      "A small game project to practise real-time input handling and 2D animation.",
    date: "01 Apr 2024",
    category: "Personal",
    image: imageSet.system,
    tags: ["Python", "Pygame", "2D Graphics"],
    githubUrl: "https://github.com/JinLee0811/python_pygame_pj",
    features: [
      "Physics-driven ball movement and collisions",
      "Sprite animation and character control",
      "Score tracking and game states",
    ],
    techStack: ["Python", "Pygame"],
    apis: ["Pygame Physics Engine"],
    challenges: [
      "Balancing physics realism with playability",
      "Managing sprite performance and frame rate",
    ],
    takeaways: [
      "Small projects are great for deep technical learning",
      "Game loops require careful performance tuning",
    ],
  },
  {
    id: 10,
    slug: "jin-dev-portfolio-2",
    title: "Jin.Dev Portfolio 2.0",
    subtitle: "Modern Portfolio Website",
    description:
      "A modern portfolio site with responsive layouts, motion, and project documentation.",
    overview:
      "Built to showcase projects with polished UI and smooth animations.",
    date: "01 Aug 2024",
    category: "Personal",
    image: imageSet.portfolio,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://jin-lee-portfolio.vercel.app/",
    githubUrl: "https://github.com/JinLee0811/JinLee_Portfolio",
    features: [
      "Responsive layout and polished visual design",
      "Motion-driven UI transitions",
      "Detailed project sections with links",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    apis: ["Framer Motion API"],
    challenges: [
      "Maintaining cross-device layout consistency",
      "Balancing animation with performance",
    ],
    takeaways: [
      "Performance and design must be balanced together",
      "Reusable components speed up iteration",
    ],
  },
  {
    id: 11,
    slug: "university-management-system",
    title: "University Management System",
    subtitle: "CLI + GUI Data Management App",
    description:
      "A Python-based university management system built for both CLI and GUI workflows.",
    overview:
      "Focused on data consistency across CLI and GUI interfaces with a shared data layer.",
    date: "01 Mar 2024",
    category: "Team Projects",
    image: imageSet.system,
    tags: ["Python", "Tkinter", "SQLite", "Git"],
    githubUrl:
      "https://github.com/JinLee0811/UTS_TeamProject_CLIUniApp-and-GUIUniApp_by_Python",
    features: [
      "Dual interface (CLI + GUI) for data operations",
      "Role-based access and reporting tools",
      "SQLite-backed persistence",
    ],
    techStack: ["Python", "Tkinter", "SQLite"],
    apis: ["Python Standard Library"],
    challenges: [
      "Synchronising data across two interfaces",
      "Maintaining consistent business logic",
    ],
    takeaways: [
      "Shared data layers reduce duplicate logic",
      "Documentation improves team collaboration",
    ],
  },
  {
    id: 12,
    slug: "parttimemate",
    title: "PartTimeMate",
    subtitle: "Multilingual Job Matching Platform",
    description:
      "A multilingual job matching platform for international students and local businesses in Australia.",
    overview:
      "Focused on multi-language UX, real-time notifications, and dual user flows.",
    date: "01 Dec 2024",
    category: "Team Projects",
    image: imageSet.product,
    tags: ["React", "TypeScript", "Tailwind CSS", "NestJS", "MySQL", "Expo"],
    githubUrl: "https://github.com/JinLee0811/partTimeMate_FE",
    features: [
      "Multi-language support with i18n",
      "Advanced job search and filtering",
      "Real-time notifications for applications",
    ],
    techStack: ["React", "NestJS", "MySQL", "React Native", "Expo"],
    apis: ["NestJS API", "Firebase"],
    challenges: [
      "Managing dual user flows for employers and job seekers",
      "Scaling multi-language content across UI",
    ],
    takeaways: [
      "Internationalisation requires early planning",
      "Clear UX flows reduce onboarding friction",
    ],
  },
  {
    id: 13,
    slug: "modern-portfolio-freelance",
    title: "Modern Portfolio Website (Freelance)",
    subtitle: "Client Portfolio Build",
    description:
      "A minimalist portfolio website for a freelance client, focused on performance and clean UI.",
    overview:
      "Delivered a polished site with responsive design and subtle motion.",
    date: "01 Nov 2024",
    category: "Freelance",
    image: imageSet.portfolio,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    liveUrl: "https://chaebin.vercel.app/",
    features: [
      "Responsive layout across devices",
      "Custom UI components based on Figma",
      "Performance-focused build",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    apis: ["Image optimisation pipeline"],
    challenges: [
      "Iterating quickly with client feedback",
      "Maintaining performance while adding animation",
    ],
    takeaways: [
      "Client feedback loops improve final quality",
      "Performance should be measured early",
    ],
  },
  {
    id: 14,
    slug: "lub-let-us-build",
    title: "LUB (Let Us Build)",
    subtitle: "Freelance Request Platform",
    description:
      "A project inquiry platform with automated email delivery using Google APIs.",
    overview:
      "Built to streamline client requests with validation and automated responses.",
    date: "01 Dec 2024",
    category: "Personal",
    image: imageSet.product,
    tags: ["React", "TypeScript", "Tailwind CSS", "Google API"],
    liveUrl: "https://lub-letusbuild.vercel.app/",
    features: [
      "Validated project inquiry forms",
      "Automated email responses",
      "Responsive UI with Tailwind CSS",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS"],
    apis: ["Google OAuth API", "Email Service API"],
    challenges: [
      "Secure OAuth configuration and token handling",
      "Preventing spam and invalid submissions",
    ],
    takeaways: [
      "Security must be designed into form flows",
      "Small UX details improve conversion rates",
    ],
  },
  {
    id: 15,
    slug: "ai-platform",
    title: "AI Platform",
    subtitle: "AI SaaS with Subscriptions",
    description:
      "A SaaS platform with AI integration, subscription management, and payments.",
    overview:
      "Built to explore AI product delivery with Stripe-backed billing.",
    date: "01 Aug 2024",
    category: "Personal",
    image: imageSet.product,
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    githubUrl: "https://github.com/JinLee0811/Ai-platform-with-Next-js",
    features: [
      "Stripe subscription management",
      "AI model integration endpoints",
      "User dashboard for usage and billing",
    ],
    techStack: ["Next.js", "TypeScript", "Prisma", "Stripe"],
    apis: ["Stripe API", "AI Model APIs"],
    challenges: [
      "Managing subscription lifecycle complexity",
      "Designing for scalable AI usage",
    ],
    takeaways: [
      "Billing flows require careful edge-case handling",
      "Modular services simplify AI integration",
    ],
  },
  {
    id: 16,
    slug: "jin-dev-portfolio-2025",
    title: "Jin.Dev Portfolio 2025",
    subtitle: "Portfolio with AI Chatbot",
    description:
      "A portfolio website featuring an AI assistant with retrieval-augmented responses.",
    overview:
      "Focused on combining strong UI with AI-driven interactions.",
    date: "01 May 2025",
    category: "Personal",
    image: imageSet.portfolio,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "OpenAI API"],
    liveUrl: "https://jinleedev.vercel.app/",
    githubUrl: "https://github.com/JinLee0811/JinLee_Portfolio",
    features: [
      "AI chatbot with RAG-based responses",
      "Smooth animation and dark mode",
      "Detailed project showcase sections",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    apis: ["OpenAI API", "Custom RAG pipeline"],
    challenges: [
      "Balancing AI response quality and latency",
      "Designing a conversational UX that feels natural",
    ],
    takeaways: [
      "AI UX requires careful prompt and context design",
      "Performance budgets matter for AI-heavy UIs",
    ],
  },
  {
    id: 17,
    slug: "au-korean-community",
    title: "AU-Korean Community",
    subtitle: "Community Platform for Koreans in Australia",
    description:
      "A community platform for reviews, tips, and marketplace discussions tailored to Koreans in Australia.",
    overview:
      "Built with a focus on trust, moderation, and scalable community workflows.",
    date: "01 Jun 2025",
    category: "Team Projects",
    image: imageSet.dashboard,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/JinLee0811/AUS_business_private",
    features: [
      "Structured review system with moderation",
      "Tips, community boards, and marketplace sections",
      "Role-based access with RLS policies",
    ],
    techStack: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    apis: ["Supabase Auth", "Storage API", "Realtime"],
    challenges: [
      "Moderating user-generated content safely",
      "Maintaining accurate counters with triggers",
    ],
    takeaways: [
      "RLS policies are essential for community safety",
      "Clear data models enable multi-section platforms",
    ],
  },
];
