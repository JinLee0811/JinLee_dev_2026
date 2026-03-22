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
  galleryImages?: string[];
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
  data: "https://images.unsplash.com/photo-1605108222700-0d605d9ebafe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
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
    subtitle: "AI-Powered Restaurant Review Analytics Platform",
    description:
      "A full-stack web application that aggregates Google Maps reviews and generates AI summaries — with keyword and dish extraction, bookmark management, and a Stripe-backed usage quota system.",
    overview:
      "Built on Next.js Pages Router with Supabase as the backend. A cache-first pipeline avoids redundant Google Places API calls by storing fetched reviews in Supabase. Gemini API produces structured summaries (basic and detailed with keyword/dish extraction). Server-side usage quota is enforced per user via a user_api_usage table — exceeding the limit returns HTTP 429 and redirects to the pricing page. Stripe handles optional plan upgrades.",
    date: "01 Apr 2025",
    category: "Personal",
    image: "/projects/before-you-go/cover.png",
    galleryImages: [
      "/projects/before-you-go/cover.png",
      "/projects/before-you-go/login.png",
      "/projects/before-you-go/restraurants_list.png",
      "/projects/before-you-go/review_summary.png",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Gemini API", "React Query", "Stripe", "Framer Motion"],
    liveUrl: "https://before-you-go-ai.vercel.app/",
    githubUrl: "https://github.com/JinLee0811/BeforeYouGO",
    features: [
      "Gemini API two-tier summarisation: basic summary and detailed analysis with keyword and dish extraction",
      "Supabase-backed caching layer that stores fetched reviews to eliminate repeated Google Places API calls per restaurant",
      "Server-side per-user usage quota tracked in a user_api_usage table — returns HTTP 429 on limit exceeded and redirects to /pricing",
      "Stripe checkout and webhook integration for optional plan upgrades beyond the free quota",
      "Bookmark and personal review management on /my-page with Supabase Auth session handling",
      "React Query for server-state synchronisation and cache invalidation across search and detail flows",
    ],
    techStack: ["Next.js (Pages Router)", "TypeScript", "Supabase", "Tailwind CSS", "Framer Motion", "Vercel"],
    apis: ["Google Places API", "Gemini API", "Supabase Auth & Storage", "Stripe API + Webhooks"],
    challenges: [
      "Designing a cache-first strategy that prevents redundant Places API calls while keeping review data fresh enough to be accurate",
      "Implementing server-side per-user quota enforcement with idempotent usage tracking and graceful HTTP 429 handling on the frontend",
    ],
    takeaways: [
      "Cache-first pipelines are critical for cost control when dependent on usage-billed third-party APIs",
      "Combining quota enforcement at the API route level with frontend redirect logic creates a seamless upgrade funnel without disrupting UX",
    ],
  },
  {
    id: 2,
    slug: "smart-farm-monitoring",
    title: "Smart Farm Monitoring",
    subtitle: "Abnormal Cattle Behaviour Detection System",
    description:
      "A modular three-service monitoring system — React dashboard, Node.js REST API, and a Python YOLOv8/OpenCV ML service — for detecting abnormal livestock behaviour from video input.",
    overview:
      "Each component (frontend, backend, ML service) was developed and deployed independently to reflect a service-oriented architecture. Video input is processed by the ML service via OpenCV frame sampling, YOLOv8 detection, and behaviour classification. Detected events are routed through the Node.js backend to the React dashboard. Pre-recorded footage was used to simulate real-time CCTV streams due to infrastructure constraints, but the architecture is designed to support live sources with minimal changes.",
    date: "01 Apr 2025",
    category: "Team Projects",
    image: "/projects/smart-farm-monitoring/cover.png",
    galleryImages: [
      "/projects/smart-farm-monitoring/cover.png",
      "/projects/smart-farm-monitoring/Screenshot 2026-02-10 at 8.46.42 PM.png",
      "/projects/smart-farm-monitoring/Screenshot 2026-02-10 at 8.46.52 PM.png",
      "/projects/smart-farm-monitoring/Screenshot 2026-02-10 at 8.47.11 PM.png",
    ],
    tags: ["React", "TypeScript", "Node.js", "Python", "YOLOv8", "OpenCV", "MongoDB"],
    liveUrl: "https://www.canva.com/design/DAHAtsAZpic/q2x8lIIOW1ayPc_cwyxqwA/edit",
    githubUrl: "https://github.com/JinLee0811/smart-farm-monitoring",
    features: [
      "YOLOv8-based object detection classifying livestock posture and movement for abnormal behaviour indicators (prolonged inactivity, heat stress)",
      "OpenCV preprocessing pipeline with frame sampling, resizing, and normalisation before model inference",
      "Node.js REST API for ML service orchestration, alert state management, and event logging to MongoDB",
      "React monitoring dashboard with live event feed, alert history, and detection status indicators",
      "Service-oriented architecture with three independently deployable components: frontend, backend, and ML service",
    ],
    techStack: ["React", "TypeScript", "Node.js (REST API)", "Python", "MongoDB"],
    apis: ["YOLOv8 inference pipeline", "OpenCV video capture", "REST-based inter-service communication"],
    challenges: [
      "Sourcing and labelling cattle behaviour video datasets with sufficient variety for reliable YOLOv8 detection",
      "Simulating real-time inference conditions using pre-recorded footage with controlled frame injection to match live stream behaviour",
      "Defining confidence thresholds that minimise false positive alerts in varied lighting and occlusion conditions",
    ],
    takeaways: [
      "Clean service boundaries between the ML, API, and UI layers allow each component to be tested and iterated independently",
      "Labelled dataset quality is the primary determinant of detection reliability — model architecture selection is secondary",
    ],
  },
  {
    id: 3,
    slug: "ai-crop-doctor",
    title: "AI Crop Doctor",
    subtitle: "AI-Powered Plant Disease Diagnosis Platform",
    description:
      "A full-stack AI web platform for plant disease diagnosis using a MobileNetV2 transfer learning model, a FastAPI inference service, and a NestJS backend with JWT authentication.",
    overview:
      "The AI module uses MobileNetV2 (pretrained on ImageNet, fine-tuned for 20 plant disease categories) trained with TensorFlow. Weighted cross-entropy and data augmentation address class imbalance. The trained model is served via a FastAPI inference endpoint deployed on AWS. The NestJS backend handles JWT authentication (access + refresh tokens) and MySQL data management. The React frontend uses React Query and Jotai for state management, with Styled-components for scoped styling.",
    date: "01 Apr 2023",
    category: "Team Projects",
    image: imageSet.portfolio,
    tags: ["React", "Styled-components", "React Query", "Jotai", "NestJS", "MySQL", "TensorFlow", "FastAPI", "AWS"],
    githubUrl: "https://github.com/JinLee0811/cropdoctor-frontend",
    features: [
      "MobileNetV2 transfer learning model trained on 20 plant disease categories with weighted cross-entropy loss and data augmentation",
      "FastAPI inference service accepting image uploads (224×224), preprocessing, and returning predicted disease label with treatment recommendation",
      "NestJS backend with JWT authentication using access and refresh token rotation for secure session management",
      "React frontend with React Query for server-state management and Jotai for lightweight global state",
      "Diagnosis history and user session data persisted in MySQL via the NestJS API layer",
    ],
    techStack: ["React", "Styled-components", "React Query", "Jotai", "NestJS", "MySQL", "TensorFlow", "FastAPI", "AWS"],
    apis: ["FastAPI inference REST endpoint", "NestJS REST API", "AWS deployment infrastructure"],
    challenges: [
      "Addressing class imbalance across 20 disease categories using weighted cross-entropy loss and targeted augmentation strategies",
      "Optimising FastAPI inference latency under real-time web request constraints with uvicorn and model preloading",
      "Decoupling the Python ML inference service from the Node.js application layer to allow independent deployment and scaling",
    ],
    takeaways: [
      "MobileNetV2 transfer learning significantly reduces data requirements for image classification while maintaining strong accuracy on domain-specific datasets",
      "FastAPI with uvicorn is a production-ready choice for serving TensorFlow inference — lightweight, async, and straightforward to containerise",
    ],
  },
  {
    id: 5,
    slug: "first-react-portfolio",
    title: "First React Portfolio",
    subtitle: "React + Styled-components Portfolio",
    description:
      "My first portfolio website built with React component architecture and Styled-components, deployed via GitHub Pages.",
    overview:
      "Built to learn React fundamentals — component composition, props, and state management — while producing a functional portfolio. Styled-components was used for scoped CSS and theming. Deployed using gh-pages with npm run deploy.",
    date: "01 Feb 2023",
    category: "Personal",
    image: imageSet.portfolio,
    tags: ["React", "JavaScript", "Styled-components", "CSS3"],
    liveUrl: "https://jinlee0811.github.io/portfolio/",
    githubUrl: "https://github.com/JinLee0811/portfolio",
    features: [
      "Responsive mobile-first layout built with Styled-components media queries",
      "Reusable React components for project cards, skill badges, and section headers",
      "Styled-components ThemeProvider for consistent colour and spacing tokens across the site",
      "GitHub Pages deployment via gh-pages with npm run deploy workflow",
    ],
    techStack: ["React", "Styled-components", "JavaScript", "CSS3"],
    apis: ["Styled-components ThemeProvider", "GitHub Pages (gh-pages)"],
    challenges: [
      "Structuring a clear component hierarchy for portfolio content without over-engineering the architecture",
      "Keeping styles maintainable and avoiding CSS specificity conflicts without a pre-built design system",
    ],
    takeaways: [
      "Component-based architecture improves long-term maintainability even for small personal projects",
      "Starting with a clear content hierarchy before writing code produces a cleaner component structure",
    ],
  },
  {
    id: 6,
    slug: "netflix-clone",
    title: "Netflix Clone",
    subtitle: "Full-stack Streaming Clone",
    description:
      "A full-stack Netflix clone with Firebase authentication, TMDb API movie catalogue, Redux state management, and a Node.js + Express backend.",
    overview:
      "Built to practise full-stack web development. Firebase handles user authentication. Movie and TV show data is fetched from the TMDb API. Redux manages global client state across browsing and profile views. The backend is built with Node.js and Express, with MongoDB for data persistence.",
    date: "01 Jul 2024",
    category: "Personal",
    image: "/projects/netflix-clone/Video.png",
    galleryImages: [
      "/projects/netflix-clone/Video.png",
      "/projects/netflix-clone/VideoList.png",
      "/projects/netflix-clone/Modal.png",
      "/projects/netflix-clone/User.png",
      "/projects/netflix-clone/Login.png",
    ],
    tags: ["React", "JavaScript", "Firebase", "Redux", "Node.js", "Express", "MongoDB"],
    liveUrl: "https://jin-netflix-clone.vercel.app/",
    githubUrl: "https://github.com/JinLee0811/jin-netflix-clone",
    features: [
      "Firebase authentication for user sign-up, login, and session management",
      "TMDb API integration for fetching movie and TV show catalogues with poster images and metadata",
      "Redux for global client state management across browsing, search, and user profile views",
      "Node.js + Express backend with MongoDB for user profile and wishlist persistence",
      "Responsive design for consistent UI across desktop and mobile viewports",
    ],
    techStack: ["React", "JavaScript", "Firebase", "Redux", "Node.js", "Express", "MongoDB"],
    apis: ["Firebase Auth API", "TMDb API", "Axios HTTP client"],
    challenges: [
      "Integrating Firebase Auth with the Express backend to validate sessions for protected API routes",
      "Managing async TMDb API requests and loading states cleanly within Redux action flows",
    ],
    takeaways: [
      "Firebase Auth significantly reduces authentication boilerplate compared to building a custom JWT system",
      "Redux is effective for coordinating shared state across deeply nested components in a content-heavy UI",
    ],
  },
  {
    id: 8,
    slug: "data-analysis-web-service",
    title: "Where Should I Live?",
    subtitle: "Seoul Subway Perceived Commute Time Recommender",
    description:
      "An award-winning full-stack web service that recommends Seoul neighbourhoods based on perceived commute time — combining real estate transaction data with subway congestion weights via Dijkstra's algorithm.",
    overview:
      "Built as part of the Elice AI Full-Stack Engineer Track (6th cohort). Won the Award of Excellence (Ministry of Employment and Labour) and the Team Leadership Award. The core algorithm computes perceivedTime = travelTime × congestionWeight across the Seoul subway graph using Dijkstra's shortest path. Data was processed in Google Colab, served via a Node.js + Express + Prisma backend on AWS RDS (MySQL), and visualised on a Naver Maps canvas with Chart.js overlays. Kakao OAuth and JWT cookie-based auth were implemented for user flows.",
    date: "01 Mar 2023",
    category: "Team Projects",
    image: imageSet.data,
    tags: ["React", "Styled-components", "Node.js", "Express", "Prisma", "MySQL", "Naver Maps", "Chart.js", "AWS"],
    githubUrl: "https://github.com/JinLee0811/2-_MoveWithTrain_WebDataService",
    features: [
      "Dijkstra's algorithm across the Seoul subway station graph computing both raw and perceived commute time per node",
      "perceivedTime = travelTime × congestionWeight, derived from real subway congestion data by time slot, station, and direction",
      "Naver Maps API canvas with ranked neighbourhood markers and station detail panels",
      "Chart.js rush-hour congestion heatmaps and real estate price overlays per station",
      "Kakao Social Login (OAuth 2.0) and JWT (HTTP-only cookie) authentication with admin and user roles",
      "Time-of-day toggle to recalculate neighbourhood rankings based on AM/PM rush hour congestion weights",
      "Admin dashboard for managing users and reviews with paginated tables",
    ],
    techStack: ["React", "Styled-components", "Chart.js", "Node.js", "Express", "Prisma", "AWS RDS (MySQL)", "Google Colab"],
    apis: ["Naver Maps API", "Google Geocoding API", "Kakao OAuth 2.0", "Prisma Client"],
    challenges: [
      "Deriving reliable congestion weights from raw subway occupancy data with inconsistent time-slot granularity across stations",
      "Rendering performant Naver Maps marker sets and Chart.js heatmaps simultaneously without blocking the main thread",
    ],
    takeaways: [
      "Dijkstra's algorithm is highly effective for perceived-time pathfinding when edge weights encode real-world friction beyond distance",
      "Separating data processing (Google Colab) from the API layer allows the analytical pipeline to be iterated independently of the web service",
    ],
  },
  {
    id: 9,
    slug: "pokemon-volleyball",
    title: "Pokémon Mini Game",
    subtitle: "Pygame-based 2D Action Game",
    description:
      "A Pokémon-themed 2D action game built with Pygame, featuring vector-based collision detection, delta-time physics, sprite sheet animation, and background audio.",
    overview:
      "A focused Python game project to practise real-time input handling, 2D physics, and animation state management. The codebase is structured progressively across 7 modules — from frame setup and character control through ball mechanics, collision, ball division, game-over logic, and final game set.",
    date: "01 Apr 2024",
    category: "Personal",
    image: "/projects/pokemon-volleyball/pocketmon.gif",
    galleryImages: ["/projects/pokemon-volleyball/pocketmon.gif"],
    tags: ["Python", "Pygame", "2D Graphics"],
    githubUrl: "https://github.com/JinLee0811/python_pygame_pj",
    features: [
      "Vector-based collision detection for player-ball and ball-boundary interactions",
      "Delta-time frame-rate-independent physics ensuring consistent gameplay across different hardware speeds",
      "Sprite sheet animation with per-character frame cycling and state transitions (idle, move, hit)",
      "Ball division mechanics where balls split on collision, increasing difficulty progressively",
      "Background audio integration with Pygame mixer for ambient sound",
    ],
    techStack: ["Python", "Pygame"],
    apis: ["Pygame display module", "Pygame sprite module", "Pygame mixer (audio)"],
    challenges: [
      "Tuning physics constants (gravity, restitution) to produce responsive yet predictable ball movement",
      "Maintaining stable frame rate as simultaneous animated sprites and collision checks increase with ball division",
    ],
    takeaways: [
      "Delta-time physics is essential for hardware-agnostic game feel — without it, game speed varies with frame rate",
      "Structuring a game progressively across separate modules makes each mechanic easier to debug and extend",
    ],
  },
  {
    id: 10,
    slug: "jin-dev-portfolio-2",
    title: "Jin.Dev Portfolio 2.0",
    subtitle: "Next.js Portfolio with Framer Motion",
    description:
      "A modern portfolio site with scroll-triggered Framer Motion animations, Next.js Image optimisation, and responsive Tailwind CSS layouts.",
    overview:
      "Built to showcase projects with polished UI and smooth motion. Framer Motion variants and stagger effects drive section entrances. Next.js Image handles WebP conversion and lazy loading for all gallery assets. Deployed on Vercel with continuous integration.",
    date: "01 Aug 2024",
    category: "Personal",
    image: "/projects/second-react-portfolio/portfolio.png",
    galleryImages: [
      "/projects/second-react-portfolio/portfolio.png",
      "/projects/second-react-portfolio/Screenshot 2025-04-19 at 6.05.14 PM.png",
      "/projects/second-react-portfolio/Screenshot 2025-04-19 at 6.05.46 PM.png",
      "/projects/second-react-portfolio/Screenshot 2025-04-19 at 6.06.58 PM.png",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://jin-lee-portfolio.vercel.app/",
    githubUrl: "https://github.com/JinLee0811/JinLee_Portfolio",
    features: [
      "Scroll-triggered Framer Motion animations with stagger variants for section and card entrances",
      "Next.js Image component with automatic WebP conversion, lazy loading, and layout-shift prevention",
      "Responsive layout built with Tailwind CSS mobile-first breakpoint system",
      "Detailed project modal sections with live links, tech stack badges, and gallery views",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    apis: ["Framer Motion animation variants API", "Next.js Image optimisation API"],
    challenges: [
      "Preventing cumulative layout shift (CLS) caused by image loading during staggered animation sequences",
      "Coordinating animation variants without blocking interactive elements on initial page load",
    ],
    takeaways: [
      "Framer Motion's variant system makes complex staggered animations maintainable through declarative configuration",
      "Next.js Image with explicit dimensions eliminates layout shift and improves Core Web Vitals scores",
    ],
  },
  {
    id: 11,
    slug: "university-management-system",
    title: "University Management System",
    subtitle: "CLI + GUI Student Management App",
    description:
      "A Python-based university management system with both CLI and Tkinter GUI interfaces sharing a single MVC service layer, with data persisted in a local students.data file.",
    overview:
      "Designed to keep business logic in a shared service layer consumed by both the CLI and GUI without duplication. Student registration, login, subject enrolment (up to 4 subjects), password management, and admin reporting are all handled via the shared layer. Built with Python 3.12, Tkinter for the GUI, colorama for CLI styling, and Pillow for image handling.",
    date: "01 Mar 2024",
    category: "Team Projects",
    image: "/projects/dotnet-uniplanner/cover.png",
    galleryImages: ["/projects/dotnet-uniplanner/cover.png"],
    tags: ["Python", "Tkinter", "Pillow", "colorama", "Git"],
    githubUrl: "https://github.com/JinLee0811/FSD_Team_PJ_2024",
    features: [
      "Dual-interface architecture (CLI + Tkinter GUI) sharing a single MVC service layer without business logic duplication",
      "Student registration, credential-based login, and subject enrolment management (up to 4 subjects per student)",
      "Admin features: view all students, categorise students by grade, and clear student records",
      "colorama for styled terminal output in the CLI and Pillow for image rendering in the Tkinter GUI",
      "Local file-based persistence via students.data for lightweight, dependency-free data storage",
    ],
    techStack: ["Python 3.12", "Tkinter", "colorama", "Pillow (PIL)"],
    apis: ["Tkinter widget toolkit", "colorama terminal styling", "Pillow image processing"],
    challenges: [
      "Keeping CLI and GUI interfaces synchronised through a shared model layer without duplicating data access logic",
      "Ensuring data integrity with a flat file storage format (students.data) across concurrent read/write operations",
    ],
    takeaways: [
      "A shared service layer between two UI paradigms (CLI and GUI) proves that separation of concerns applies beyond web architecture",
      "File-based storage is sufficient for single-user offline applications where SQL overhead would be unnecessary complexity",
    ],
  },
  {
    id: 12,
    slug: "parttimemate",
    title: "PartTimeMate",
    subtitle: "Multilingual Part-Time Job Platform for Sydney",
    description:
      "A Sydney-focused part-time job matching platform for international students and local businesses, built with NestJS JWT authentication, Prisma + PostgreSQL, and react-i18next internationalisation.",
    overview:
      "Separate authentication flows and dashboards for employers and job seekers, enforced via NestJS role-based JWT Guards. react-i18next covers English and Korean. The backend uses NestJS with Prisma ORM on PostgreSQL, with clearly separated modules for auth, jobs, applications, and categories. React Context API manages global client state. Team: JinLee (Frontend) + Elodie Kim (Backend).",
    date: "01 Dec 2024",
    category: "Team Projects",
    image: "/projects/parttimemate/cover.png",
    galleryImages: [
      "/projects/parttimemate/cover.png",
      "/projects/parttimemate/431220862-c4401b88-78a7-4c71-9292-aa5070428132.png",
      "/projects/parttimemate/431221175-e455f0ad-ab6d-4e2f-8cfd-1c64e0f399a6.png",
      "/projects/parttimemate/431221577-4dd547fa-69dd-4536-97cb-5b7f3a4e5739.png",
      "/projects/parttimemate/431222220-38cb7b93-e78a-4cbe-b68a-0d61f7b04950.png",
    ],
    tags: ["React", "TypeScript", "Tailwind CSS", "NestJS", "PostgreSQL", "Prisma", "react-i18next"],
    githubUrl: "https://github.com/JinLee0811/partTimeMate_FE",
    features: [
      "NestJS backend with JWT authentication and role-based Guards enforcing employer vs. job-seeker access at the controller level",
      "Prisma ORM on PostgreSQL with separate modules for auth, jobs, applications, and job categories",
      "react-i18next internationalisation supporting English and Korean across the full UI",
      "Advanced job search with multi-field filters (location, industry, job type) and React Router-based navigation",
      "Job application system with resume/cover letter submission and application status management",
    ],
    techStack: ["React", "TypeScript", "Tailwind CSS", "NestJS", "Prisma", "PostgreSQL"],
    apis: ["NestJS REST API", "react-i18next", "Axios HTTP client"],
    challenges: [
      "Designing separate authentication flows and dashboards for two distinct user roles without duplicating route and guard logic in NestJS",
      "Structuring i18n translation namespaces early enough to avoid large-scale refactoring as the UI component library scaled across languages",
    ],
    takeaways: [
      "NestJS JWT Guards cleanly enforce role-based authorisation at the controller level, keeping business logic decoupled from access control",
      "Planning i18n namespace structure at project start prevents costly restructuring as copy volume grows across supported languages",
    ],
  },
  {
    id: 13,
    slug: "modern-portfolio-freelance",
    title: "Modern Portfolio Website (Freelance)",
    subtitle: "Client Portfolio Build",
    description:
      "A minimalist freelance portfolio website with pixel-accurate Figma-to-code implementation, Next.js Image optimisation, and a Lighthouse performance score of 95+.",
    overview:
      "Delivered a statically generated site with responsive design, subtle motion, and optimised asset delivery. Iterated rapidly on client feedback while tracking Lighthouse scores throughout to prevent performance regressions.",
    date: "01 Nov 2024",
    category: "Freelance",
    image: "/projects/modern-portfolio-freelance/cover.png",
    galleryImages: [
      "/projects/modern-portfolio-freelance/cover.png",
      "/projects/modern-portfolio-freelance/431224186-b25900f7-e460-4c9c-a890-03c1c53595f3.png",
      "/projects/modern-portfolio-freelance/431224281-cc385cc0-1583-4706-b83d-917da25c7471.png",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Figma"],
    liveUrl: "https://chaebin.vercel.app/",
    features: [
      "Pixel-accurate Figma-to-code implementation using Tailwind utility classes with responsive breakpoints",
      "Next.js Image component with WebP conversion, lazy loading, and explicit dimensions to eliminate layout shift",
      "Static generation via Next.js for consistent sub-second load times across all pages",
      "Lighthouse performance score maintained at 95+ through asset optimisation and minimal JavaScript payload",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS"],
    apis: ["Next.js Image optimisation API", "Vercel Edge Network CDN"],
    challenges: [
      "Translating Figma designs precisely into responsive Tailwind utility classes across multiple breakpoints",
      "Maintaining Lighthouse performance scores above 95 while incorporating client-requested animation additions",
    ],
    takeaways: [
      "Static generation with Next.js ensures consistent performance for content-focused client sites with no server overhead",
      "Early and repeated Lighthouse auditing catches performance regressions before they compound into delivery delays",
    ],
  },
  {
    id: 14,
    slug: "jl-studio",
    title: "JL-STUDIO",
    subtitle: "Web Freelance Business Homepage",
    description:
      "A conversion-focused freelance business homepage built with Vite + React + TypeScript, featuring SEO metadata and a serverless contact pipeline.",
    overview:
      "Built as a business website to present web freelance services and streamline inbound client inquiries. Uses Vite for fast development and optimised production builds. Contact flow and service messaging are designed for non-technical client audiences.",
    date: "01 Feb 2026",
    category: "Personal",
    image: "/projects/lub-let-us-build/431225417-aceb5248-105f-4695-8843-23f36c837ff9.png",
    galleryImages: [
      "/projects/lub-let-us-build/431225417-aceb5248-105f-4695-8843-23f36c837ff9.png",
      "/projects/lub-let-us-build/431225479-773b63df-5421-4286-9aaa-7f52ef863ea2.png",
      "/projects/lub-let-us-build/431225557-9d2fb9cb-dfef-443a-b8d2-255cae9620f7.png",
      "/projects/lub-let-us-build/431225662-c6a5ed59-c95c-4a6b-91e5-e978d3de692c.png",
    ],
    tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    liveUrl: "https://jl-studio-amber.vercel.app/",
    githubUrl: "https://github.com/JinLee0811/JL_Studio",
    features: [
      "Conversion-focused service sections with clear CTAs and structured service pricing layout",
      "Vite-powered development with HMR and optimised production bundle for fast load times",
      "Fully responsive UI optimised for both desktop discovery and mobile inquiry workflows",
      "ESLint + TypeScript strict mode configuration for consistent code quality",
    ],
    techStack: ["React", "TypeScript", "Vite", "Tailwind CSS"],
    apis: ["Vite build toolchain", "Vercel deployment"],
    challenges: [
      "Writing service messaging that communicates clear value proposition to non-technical clients without technical jargon",
      "Configuring Vite with TypeScript strict mode and ESLint rules for a maintainable freelance project setup",
    ],
    takeaways: [
      "Vite's HMR and fast build times make it an excellent choice for client-facing projects requiring rapid iteration",
      "Clear value proposition copy improves inquiry quality more than visual design refinements alone",
    ],
  },
  {
    id: 15,
    slug: "ai-platform",
    title: "AI Platform",
    subtitle: "AI SaaS with Stripe Subscriptions",
    description:
      "A full-stack SaaS platform integrating multiple OpenAI-powered AI features with Stripe subscription billing, idempotent webhook handling, usage tracking, and a self-service customer portal.",
    overview:
      "Built to explore end-to-end AI product delivery. Stripe webhooks manage subscription lifecycle events with idempotency key handling. Prisma models cover User, Subscription, and ApiUsage tables, with middleware enforcing free-tier usage limits before AI calls are made.",
    date: "01 Aug 2024",
    category: "Personal",
    image: "/projects/ai-platform/Ai_platform.png",
    galleryImages: ["/projects/ai-platform/Ai_platform.png"],
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe", "OpenAI"],
    githubUrl: "https://github.com/JinLee0811/Ai-platform-with-Next-js",
    features: [
      "Stripe subscription integration with webhook handlers for lifecycle events (created, updated, cancelled, payment_failed)",
      "Idempotent webhook processing to prevent duplicate subscription state updates from Stripe retry events",
      "Multiple OpenAI API feature endpoints with per-user usage tracking via Prisma ApiUsage model",
      "Free-tier usage middleware that gates AI calls based on monthly limit checks before forwarding to OpenAI",
      "Stripe Customer Portal integration for self-service plan upgrades, downgrades, and cancellations",
    ],
    techStack: ["Next.js", "TypeScript", "Prisma", "Stripe", "OpenAI API"],
    apis: ["Stripe API + Webhooks", "OpenAI API", "Prisma Client", "Stripe Customer Portal"],
    challenges: [
      "Implementing idempotent Stripe webhook handlers to prevent duplicate subscription state mutations from retry or out-of-order events",
      "Designing usage-gating middleware that degrades gracefully at free-tier limits without disrupting the UX mid-session",
    ],
    takeaways: [
      "Stripe webhook idempotency and event ordering are the most critical edge cases in subscription billing — handle them first",
      "Separating usage-gate logic into middleware keeps AI feature code clean and billing concerns fully decoupled",
    ],
  },
  {
    id: 16,
    slug: "jin-dev-portfolio-2025",
    title: "Jin.Dev Portfolio 2025",
    subtitle: "Portfolio with Gemini AI Chatbot",
    description:
      "A portfolio website featuring an embedded AI chatbot powered by Google Gemini API, delivering context-aware responses about projects, tech stack, and experience through a clean conversational UI.",
    overview:
      "Built with Next.js App Router and TypeScript. The Gemini API is used to answer visitor questions about portfolio content via controlled prompts with portfolio context injected into the system message. The chatbot is a real production UI feature — not a demo — with stateful conversation and responsive rendering. Framer Motion handles animations and dark/light mode is supported with system preference detection.",
    date: "01 May 2025",
    category: "Personal",
    image: "/projects/jin-dev-portfolio-2025/main.png",
    galleryImages: [
      "/projects/jin-dev-portfolio-2025/main.png",
      "/projects/jin-dev-portfolio-2025/chatbot.png",
      "/projects/jin-dev-portfolio-2025/projectSection.png",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Gemini API"],
    liveUrl: "https://jinleedev.vercel.app/",
    githubUrl: "https://github.com/JinLee0811/portfolio-AI-chatbot",
    features: [
      "Gemini API chatbot with portfolio context injected into system prompts for accurate, grounded responses about projects and experience",
      "Stateful conversation UI with controlled prompts — integrated as a real production feature, not a standalone demo",
      "Next.js App Router architecture with modular UI components and clean separation of data, components, and utilities",
      "Smooth Framer Motion animations with scroll-based section highlighting",
      "Dark / Light mode with system preference detection and manual toggle",
    ],
    techStack: ["Next.js (App Router)", "TypeScript", "Tailwind CSS", "Framer Motion"],
    apis: ["Google Gemini API", "Next.js App Router API routes"],
    challenges: [
      "Designing system prompts that keep Gemini responses accurate and grounded in portfolio content without hallucinating project details",
      "Balancing AI response quality and end-to-end latency to stay within a comfortable UX response budget",
    ],
    takeaways: [
      "Context injection via system prompts is an effective, low-overhead approach for domain-specific AI chatbots without a vector database",
      "Integrating an LLM as a real UI feature (rather than a demo) requires careful prompt design to handle unexpected visitor questions gracefully",
    ],
  },
  {
    id: 17,
    slug: "au-korean-community",
    title: "AU-Korean Community",
    subtitle: "Honest Review Platform for Koreans in Australia",
    description:
      "A community platform (working name: 호주 언니) for honest reviews of study abroad agencies, migration agents, and local businesses in Australia, with a marketplace, tips board, and Blind-style community forum.",
    overview:
      "Built with Next.js 14 App Router and Supabase. RLS policies enforce per-user data isolation at the database level across all tables. Realtime subscriptions power live feed updates. View, like, and comment counters are maintained via PostgreSQL triggers to avoid race conditions. An admin system handles content moderation, banner management, and report resolution.",
    date: "01 Jun 2025",
    category: "Team Projects",
    image: "/projects/au-korean-community/main.png",
    galleryImages: [
      "/projects/au-korean-community/main.png",
      "/projects/au-korean-community/login.png",
      "/projects/au-korean-community/community.png",
      "/projects/au-korean-community/market.png",
      "/projects/au-korean-community/review.png",
      "/projects/au-korean-community/tip.png",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL", "Framer Motion"],
    githubUrl: "https://github.com/JinLee0811/AUS_business_private",
    features: [
      "Structured review system for study abroad agencies, migration agents, schools, and Korean businesses — admin-controlled institution creation prevents fake entries",
      "꿀팁 (Tips) section with nested comment/reply system, auto-applied Best tag for high-liked posts, and image support",
      "Blind-style community board with region filters (Sydney, Melbourne, Brisbane) and keyword search",
      "Second-hand marketplace with category and location filters, view/like counters, and comment-based inquiry",
      "Supabase RLS policies enforcing per-user data isolation across all sensitive tables at the database level",
      "PostgreSQL triggers for accurate view, like, and comment counters without application-layer race conditions",
      "Admin system: banner ad management (sortable, date-controlled), report resolution, and manual content moderation",
    ],
    techStack: ["Next.js 14 (App Router)", "Supabase", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
    apis: ["Supabase Auth (Email + Google)", "Supabase Realtime", "Supabase Storage API", "PostgreSQL triggers & RLS"],
    challenges: [
      "Designing RLS policies granular enough to enforce moderation access without inadvertently blocking legitimate user reads",
      "Maintaining accurate engagement counters (likes, views, comments) using PostgreSQL triggers to handle concurrent updates without race conditions",
    ],
    takeaways: [
      "Supabase RLS is the correct enforcement layer for community safety — application-layer checks alone are insufficient for multi-role platforms",
      "PostgreSQL triggers for counter maintenance are more reliable than application-side increment logic under concurrent user activity",
    ],
  },
  {
    id: 18,
    slug: "uniplanner",
    title: "UniPlanner",
    subtitle: "Offline Student Timetable & Task Manager",
    description:
      "A Windows desktop application for managing subjects, schedules, assignments, and personal tasks in one offline-first system, built with C# .NET 8 and a hybrid Dapper + EF Core data access strategy.",
    overview:
      "Built to keep student data local and reliable with a three-layered architecture. Dapper handles performance-critical reads for subjects, schedules, and tasks; EF Core manages todos and schema migrations. A custom DbBootstrap initialiser runs at startup to create tables and apply schema evolution without external migration tooling. Application culture is set to en-AU for consistent date and time formatting. Contributors: Jin Lee (backend architecture, database design, services) and Seoyoon Kim (UI design, Windows Forms, testing).",
    date: "01 Sep 2025",
    category: "Team Projects",
    image: "/projects/dotnet-uniplanner/cover.png",
    galleryImages: ["/projects/dotnet-uniplanner/cover.png"],
    tags: ["C#", ".NET 8", "SQLite", "Windows Forms", "Dapper", "EF Core"],
    githubUrl: "https://github.com/JinLee0811/.NET_UniPlanner-",
    features: [
      "Subject management with colour coding, credit tracking, and cross-field validation",
      "Weekly timetable scheduling with time conflict detection across sessions and venues",
      "Assignment, task, and personal todo tracking with priority, due date, and subject association",
      "Hybrid data access: Dapper for performance-critical reads (subjects, schedule, tasks), EF Core for CRUD-focused todos",
      "DbBootstrap initialiser that creates tables and applies schema evolution at startup — no external migration tooling required",
      "en-AU locale set explicitly for consistent date and time formatting across all systems",
    ],
    techStack: ["C#", ".NET 8", "Windows Forms", "SQLite", "Dapper", "Entity Framework Core 8"],
    apis: ["SQLite (local file)", "Dapper micro-ORM", "EF Core 8"],
    challenges: [
      "Designing a coherent hybrid data access strategy using Dapper and EF Core without duplication or inconsistency in the service layer",
      "Implementing runtime schema bootstrapping that handles both fresh installs and backward-compatible upgrades without corrupting existing data",
    ],
    takeaways: [
      "Dapper + EF Core hybrid is a practical pattern — use each tool where it excels rather than forcing a single ORM to handle all access patterns",
      "Offline-first desktop design eliminates network dependencies and simplifies reliability, making SQLite a strong default for single-user apps",
    ],
  },
];
