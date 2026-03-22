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
    subtitle: "Restaurant Review Analytics Platform",
    description:
      "A full-stack web application that aggregates Google Maps reviews and generates AI-based summaries to reduce information overload for travellers.",
    overview:
      "Built to summarise long review streams into practical insights. Implemented a cache-first pipeline using Supabase to minimise redundant Google Places API calls, with Gemini API handling structured summarisation into pros, cons, and key themes.",
    date: "01 Apr 2025",
    category: "Personal",
    image: "/projects/before-you-go/cover.png",
    galleryImages: [
      "/projects/before-you-go/cover.png",
      "/projects/before-you-go/login.png",
      "/projects/before-you-go/restraurants_list.png",
      "/projects/before-you-go/review_summary.png",
    ],
    tags: ["Next.js", "TypeScript", "Supabase", "Gemini API", "React Query", "Zustand"],
    liveUrl: "https://before-you-go-ai.vercel.app/",
    githubUrl: "https://github.com/JinLee0811/BeforeYouGO",
    features: [
      "Gemini API summarisation pipeline structured into pros, cons, and key themes per restaurant",
      "Supabase-backed caching layer that stores fetched reviews to avoid repeated Google Places API calls",
      "React Query for server-state management with stale-time configuration and background refetching",
      "Zustand for lightweight client-side state across search and history views",
    ],
    techStack: ["Next.js", "TypeScript", "Supabase", "Tailwind CSS", "Vercel"],
    apis: ["Google Places API", "Gemini API", "Supabase Auth & Storage"],
    challenges: [
      "Designing a cache-first strategy to prevent redundant Places API calls while keeping data fresh enough to be useful",
      "Normalising and cleaning multilingual, unstructured review text for consistent AI summarisation quality",
    ],
    takeaways: [
      "Cache-first pipelines are critical for cost control when dependent on third-party usage-billed APIs",
      "Structured prompt design (pros/cons/themes) produces significantly more actionable summaries than open-ended generation",
    ],
  },
  {
    id: 2,
    slug: "smart-farm-monitoring",
    title: "Smart Farm Monitoring",
    subtitle: "Abnormal Cattle Behaviour Detection System",
    description:
      "A modular monitoring system combining a React dashboard, Node.js REST API, and a Python-based YOLOv8 video analysis service for detecting abnormal livestock behaviour.",
    overview:
      "Designed to support live CCTV streams. Due to infrastructure constraints, pre-recorded video was used to simulate real-time input through OpenCV frame sampling. YOLOv8 handled object detection and posture classification, with alerts routed through the Node.js backend to the React dashboard.",
    date: "01 Apr 2025",
    category: "Team Projects",
    image: "/projects/smart-farm-monitoring/cover.png",
    galleryImages: [
      "/projects/smart-farm-monitoring/cover.png",
      "/projects/smart-farm-monitoring/Screenshot 2026-02-10 at 8.46.42 PM.png",
      "/projects/smart-farm-monitoring/Screenshot 2026-02-10 at 8.46.52 PM.png",
      "/projects/smart-farm-monitoring/Screenshot 2026-02-10 at 8.47.11 PM.png",
    ],
    tags: ["React", "TypeScript", "Node.js", "Python", "YOLOv8", "OpenCV"],
    liveUrl: "https://www.canva.com/design/DAHAtsAZpic/q2x8lIIOW1ayPc_cwyxqwA/edit",
    githubUrl: "https://github.com/JinLee0811/smart-farm-monitoring",
    features: [
      "YOLOv8-based object detection for livestock posture and movement classification in video frames",
      "OpenCV preprocessing pipeline with frame sampling, resizing, and normalisation before model inference",
      "Node.js REST API for ML service orchestration, alert state management, and event logging to PostgreSQL",
      "React monitoring dashboard with live event feed, alert history, and detection status indicators",
    ],
    techStack: ["React", "TypeScript", "Node.js (REST API)", "Python", "PostgreSQL"],
    apis: ["YOLOv8 inference pipeline", "OpenCV video capture", "REST-based inter-service communication"],
    challenges: [
      "Sourcing and labelling cattle behaviour video datasets suitable for YOLOv8 fine-tuning",
      "Simulating real-time inference conditions using pre-recorded footage with controlled frame rate injection",
      "Defining reliable detection confidence thresholds to reduce false positive alerts in varied lighting conditions",
    ],
    takeaways: [
      "Labelled dataset quality directly determines detection reliability — model selection matters less than data quality",
      "Clean service boundaries between the ML inference layer and the API layer simplify debugging and independent iteration",
    ],
  },
  {
    id: 3,
    slug: "ai-crop-doctor",
    title: "AI Crop Doctor",
    subtitle: "AI-powered Plant Disease Diagnosis",
    description:
      "An AI-powered web platform that analyses uploaded plant images using a TensorFlow CNN model to identify diseases and provide treatment recommendations.",
    overview:
      "The ML model was trained with transfer learning on a curated plant disease image dataset covering 30+ disease categories. A Dockerised Python inference service was decoupled from the Next.js frontend, communicating via a RESTful API. Prisma managed user sessions and diagnosis history in a relational database.",
    date: "01 Apr 2023",
    category: "Team Projects",
    image: imageSet.portfolio,
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "TensorFlow", "Python", "Docker"],
    githubUrl: "https://github.com/JinLee0811/CropDoctor-Ai-webservice",
    features: [
      "CNN image classification model built with TensorFlow, trained via transfer learning on 30+ plant disease categories",
      "Dockerised Python inference service exposing a REST endpoint consumed by the Next.js frontend",
      "Real-time diagnosis results with confidence scores and treatment recommendation text",
      "Prisma ORM for structured storage of user accounts, diagnosis history, and feedback records",
    ],
    techStack: ["Next.js", "TypeScript", "TensorFlow", "Python", "Prisma", "Docker"],
    apis: ["Custom TensorFlow inference REST API", "Prisma Client", "Docker container runtime"],
    challenges: [
      "Curating and augmenting training data to address class imbalance across rare and common disease categories",
      "Optimising inference latency to meet real-time response expectations under web request constraints",
      "Containerising the ML service with Docker to isolate Python dependencies from the Node.js application layer",
    ],
    takeaways: [
      "Transfer learning significantly reduces training data requirements for image classification tasks",
      "Containerised ML services improve deployment reliability by eliminating environment inconsistency issues",
    ],
  },
  {
    id: 5,
    slug: "first-react-portfolio",
    title: "First React Portfolio",
    subtitle: "React + Styled-components Portfolio",
    description:
      "My first portfolio website built with a component-based React architecture and Styled-components for scoped, maintainable styling.",
    overview:
      "Focused on learning React fundamentals — component composition, props, and state — while structuring a clean portfolio layout. Styled-components was used to enforce scoped CSS and explore theming patterns.",
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
      "GitHub Pages deployment with a custom build pipeline",
    ],
    techStack: ["React", "Styled-components", "JavaScript", "CSS3"],
    apis: ["Styled-components ThemeProvider", "GitHub Pages deployment"],
    challenges: [
      "Structuring component hierarchy for a clear information architecture without over-engineering",
      "Keeping styles maintainable and avoiding specificity conflicts without a pre-built design system",
    ],
    takeaways: [
      "Component-based architecture improves long-term maintainability even for small projects",
      "Starting with a clear content hierarchy before writing code leads to cleaner component structure",
    ],
  },
  {
    id: 6,
    slug: "netflix-clone",
    title: "Netflix Clone",
    subtitle: "Full-stack Streaming Clone",
    description:
      "A full-stack Netflix clone with NextAuth.js OAuth authentication, server-side movie catalogue rendering via Prisma, and MongoDB-backed wishlist management.",
    overview:
      "Built to practise full-stack development with Next.js, Prisma, and MongoDB. NextAuth.js handles Google and GitHub OAuth flows with a Prisma adapter for session persistence. Movie data and wishlists are served through Next.js API routes backed by MongoDB.",
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
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "MongoDB"],
    liveUrl: "https://jin-netflix-clone.vercel.app/",
    githubUrl: "https://github.com/JinLee0811/jin-netflix-clone",
    features: [
      "NextAuth.js OAuth integration with Google and GitHub providers, using Prisma adapter for session storage",
      "Server-side Prisma queries via Next.js API routes for movie catalogue and user data fetching",
      "MongoDB document model for flexible user profile and wishlist persistence",
      "Protected routes with NextAuth.js session callbacks to gate authenticated content",
    ],
    techStack: ["Next.js", "TypeScript", "Prisma", "MongoDB", "Tailwind CSS"],
    apis: ["NextAuth.js (OAuth + Prisma adapter)", "Prisma Client", "Next.js API Routes"],
    challenges: [
      "Configuring NextAuth.js session callbacks and JWT strategy correctly with the Prisma MongoDB adapter",
      "Handling Prisma's relational query patterns against MongoDB's document model for joined data fetching",
    ],
    takeaways: [
      "NextAuth.js with a Prisma adapter simplifies OAuth integration while keeping session data in your own database",
      "Server-side rendering with Prisma on Next.js API routes reduces client-side data-fetching complexity",
    ],
  },
  {
    id: 8,
    slug: "data-analysis-web-service",
    title: "Data Analysis Web Service",
    subtitle: "Public Transport Data Visualisation",
    description:
      "A web service that processes subway travel time datasets using a Python pandas pipeline and visualises perceived travel times as interactive map overlays.",
    overview:
      "A Python data processing pipeline using pandas and NumPy computed station-to-station travel estimates from raw transit data. A Node.js REST layer served the processed results to a React frontend, where interactive map overlays rendered travel-time choropleth visualisations.",
    date: "01 Mar 2023",
    category: "Team Projects",
    image: imageSet.data,
    tags: ["React", "JavaScript", "Styled-components", "Node.js", "Python", "AWS"],
    githubUrl: "https://github.com/JinLee0811/subway-time-project",
    features: [
      "Python data pipeline using pandas and NumPy for travel-time computation from raw subway datasets",
      "Interactive choropleth map with travel-time overlays rendered via React Leaflet",
      "Node.js REST API bridging the Python analysis results to the React frontend",
      "Admin panel for uploading updated transit datasets and triggering reprocessing",
    ],
    techStack: ["React", "Node.js", "Python (pandas, NumPy)", "AWS", "Prisma"],
    apis: ["Leaflet.js map API", "Node.js REST API", "Python pandas pipeline"],
    challenges: [
      "Processing and cleaning large-scale transit datasets with inconsistent formats and missing station records",
      "Maintaining map rendering performance with high-density data point overlays on low-end devices",
    ],
    takeaways: [
      "Pandas preprocessing pipelines make large-scale, inconsistent data manipulation manageable and reproducible",
      "Aggregating data server-side before delivery significantly improves client-side map rendering performance",
    ],
  },
  {
    id: 9,
    slug: "pokemon-volleyball",
    title: "Pokémon Volleyball Mini Game",
    subtitle: "Pygame-based Mini Game",
    description:
      "A Pokémon-themed volleyball mini-game built with Pygame, featuring vector-based collision detection, delta-time physics, and sprite sheet animation.",
    overview:
      "A focused game project to practise real-time input handling, 2D physics implementation, and animation state management using Python and Pygame.",
    date: "01 Apr 2024",
    category: "Personal",
    image: "/projects/pokemon-volleyball/pocketmon.gif",
    galleryImages: ["/projects/pokemon-volleyball/pocketmon.gif"],
    tags: ["Python", "Pygame", "2D Graphics"],
    githubUrl: "https://github.com/JinLee0811/python_pygame_pj",
    features: [
      "Vector-based collision detection for ball-player and ball-boundary interactions",
      "Delta-time frame-rate-independent physics ensuring consistent gameplay across hardware speeds",
      "Sprite sheet animation with per-character frame cycling and state transitions (idle, jump, hit)",
      "Score tracking with a game state machine handling start, play, and end states",
    ],
    techStack: ["Python", "Pygame"],
    apis: ["Pygame display module", "Pygame sprite module", "Pygame event system"],
    challenges: [
      "Tuning physics constants (gravity, restitution coefficient) for responsive yet realistic ball movement",
      "Maintaining stable frame rate with multiple animated sprites and simultaneous collision checks",
    ],
    takeaways: [
      "Delta-time physics is essential for hardware-agnostic game feel across different machines",
      "Game state machines simplify loop management and prevent state-transition bugs",
    ],
  },
  {
    id: 10,
    slug: "jin-dev-portfolio-2",
    title: "Jin.Dev Portfolio 2.0",
    subtitle: "Modern Portfolio Website",
    description:
      "A modern portfolio site with responsive layouts, scroll-triggered Framer Motion animations, and Next.js Image-optimised project documentation.",
    overview:
      "Built to showcase projects with polished UI and smooth animations. Framer Motion variants and stagger effects were used for section transitions, while Next.js Image handled automatic WebP conversion and lazy loading for gallery assets.",
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
      "Responsive layout built with Tailwind's mobile-first breakpoint system",
      "Detailed project modal sections with live links, tech stack badges, and gallery views",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    apis: ["Framer Motion animation variants API", "Next.js Image optimisation API"],
    challenges: [
      "Preventing cumulative layout shift (CLS) caused by image loading during animation sequences",
      "Coordinating staggered animation variants without blocking interactive elements on initial load",
    ],
    takeaways: [
      "Framer Motion's variant system makes complex staggered animations maintainable through declarative config",
      "Next.js Image with explicit dimensions eliminates layout shift and improves Core Web Vitals scores",
    ],
  },
  {
    id: 11,
    slug: "university-management-system",
    title: "University Management System",
    subtitle: "CLI + GUI Data Management App",
    description:
      "A Python-based university management system with both CLI and Tkinter GUI interfaces sharing a single SQLite data layer, following an MVC-structured architecture.",
    overview:
      "Designed to keep business logic in a shared service layer consumed by both interfaces. SQLite handled offline persistence, and role-based access controlled admin vs. student workflows across the dual interfaces.",
    date: "01 Mar 2024",
    category: "Team Projects",
    image: "/projects/dotnet-uniplanner/cover.png",
    galleryImages: ["/projects/dotnet-uniplanner/cover.png"],
    tags: ["Python", "Tkinter", "SQLite", "Git"],
    githubUrl: "https://github.com/JinLee0811/UTS_TeamProject_CLIUniApp-and-GUIUniApp_by_Python",
    features: [
      "Dual-interface architecture (CLI + Tkinter GUI) consuming a shared MVC service layer without logic duplication",
      "Role-based access control separating admin and student workflows across both interfaces",
      "SQLite-backed persistence with schema bootstrapping on first run",
      "Reporting module with tabular output and CSV export for admin users",
    ],
    techStack: ["Python", "Tkinter", "SQLite"],
    apis: ["SQLite3 Python module", "Tkinter widget toolkit", "csv standard library"],
    challenges: [
      "Keeping CLI and GUI interfaces in sync through a shared model layer without duplicating data access logic",
      "Handling concurrent read patterns and schema versioning in an SQLite single-file database",
    ],
    takeaways: [
      "Separating data access into a shared service layer eliminates logic duplication between multiple interface types",
      "SQLite is well-suited for offline, single-user desktop applications where server infrastructure is unnecessary",
    ],
  },
  {
    id: 12,
    slug: "parttimemate",
    title: "PartTimeMate",
    subtitle: "Multilingual Job Matching Platform",
    description:
      "A multilingual job matching platform for international students and local businesses in Australia, with NestJS JWT authentication, role-based Guards, Firebase Cloud Messaging notifications, and react-i18next internationalisation.",
    overview:
      "Separate authentication flows and dashboards were built for employers and job seekers, enforced via NestJS role-based Guards. react-i18next covered English, Korean, and Chinese. Firebase Cloud Messaging delivered real-time application status notifications to both web and React Native Expo mobile clients.",
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
    tags: ["React", "TypeScript", "Tailwind CSS", "NestJS", "MySQL", "Expo"],
    githubUrl: "https://github.com/JinLee0811/partTimeMate_FE",
    features: [
      "NestJS backend with JWT authentication and role-based Guards enforcing employer vs. job-seeker access at the controller level",
      "react-i18next internationalisation covering English, Korean, and Chinese across the full UI",
      "Firebase Cloud Messaging for real-time push notifications on application status changes, bridging web and mobile",
      "Advanced job search with multi-field filtering backed by MySQL full-text queries",
      "React Native + Expo mobile app sharing business logic and API layer with the web frontend",
    ],
    techStack: ["React", "NestJS", "MySQL", "React Native", "Expo"],
    apis: ["NestJS REST API", "Firebase Cloud Messaging", "react-i18next"],
    challenges: [
      "Designing separate authentication flows, Guards, and dashboard views for two distinct user roles without duplicating route logic",
      "Structuring i18n namespaces early enough to avoid large-scale refactoring as the UI component library scaled",
    ],
    takeaways: [
      "NestJS role-based Guards cleanly enforce authorisation at the controller level, keeping business logic decoupled from access control",
      "i18n namespace planning at project start prevents costly restructuring as copy volume grows across languages",
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
      "Delivered a polished, statically generated site with responsive design, subtle motion, and optimised asset delivery. Iterated rapidly on client feedback while tracking Lighthouse scores throughout development to prevent performance regressions.",
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
      "A conversion-focused freelance business homepage built with Next.js, featuring SEO-optimised metadata, Open Graph tags, and a serverless contact pipeline via Resend API.",
    overview:
      "Built as a business website to present web freelance services and streamline inbound client inquiries. Resend API powered the contact form with server-side validation via Next.js API routes, while Open Graph and structured metadata improved discoverability.",
    date: "01 Feb 2026",
    category: "Personal",
    image: "/projects/lub-let-us-build/431225417-aceb5248-105f-4695-8843-23f36c837ff9.png",
    galleryImages: [
      "/projects/lub-let-us-build/431225417-aceb5248-105f-4695-8843-23f36c837ff9.png",
      "/projects/lub-let-us-build/431225479-773b63df-5421-4286-9aaa-7f52ef863ea2.png",
      "/projects/lub-let-us-build/431225557-9d2fb9cb-dfef-443a-b8d2-255cae9620f7.png",
      "/projects/lub-let-us-build/431225662-c6a5ed59-c95c-4a6b-91e5-e978d3de692c.png",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Freelance Business"],
    liveUrl: "https://jl-studio-amber.vercel.app/",
    githubUrl: "https://github.com/JinLee0811/JL_Studio",
    features: [
      "Conversion-focused service sections with clear CTAs and structured service pricing layout",
      "Contact form with server-side validation and transactional email delivery via Resend API",
      "SEO-optimised Next.js metadata API with Open Graph tags for social sharing previews",
      "Fully responsive UI optimised for both desktop discovery and mobile inquiry workflows",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
    apis: ["Resend email API", "Next.js Metadata API", "Vercel serverless functions"],
    challenges: [
      "Writing service messaging that communicates clear value proposition to non-technical clients without jargon",
      "Building a reliable serverless contact pipeline without a persistent backend, handling form validation and error states gracefully",
    ],
    takeaways: [
      "Clear value proposition copy improves inquiry quality more than visual design alone",
      "Serverless contact pipelines via API routes and Resend are a lightweight, low-maintenance alternative to full backend setups",
    ],
  },
  {
    id: 15,
    slug: "ai-platform",
    title: "AI Platform",
    subtitle: "AI SaaS with Subscriptions",
    description:
      "A full-stack SaaS platform integrating multiple OpenAI-powered AI features with Stripe subscription billing, idempotent webhook handling, usage tracking, and a self-service customer portal.",
    overview:
      "Built to explore end-to-end AI product delivery. Stripe webhooks manage subscription lifecycle events (created, updated, cancelled) with idempotency key handling. Prisma models cover User, Subscription, and ApiUsage tables, with middleware enforcing free-tier usage limits before AI calls are made.",
    date: "01 Aug 2024",
    category: "Personal",
    image: "/projects/ai-platform/Ai_platform.png",
    galleryImages: ["/projects/ai-platform/Ai_platform.png"],
    tags: ["Next.js", "TypeScript", "Prisma", "Stripe", "OpenAI"],
    githubUrl: "https://github.com/JinLee0811/Ai-platform-with-Next-js",
    features: [
      "Stripe subscription integration with webhook handlers for lifecycle events (created, updated, cancelled, payment_failed)",
      "Idempotent webhook processing to prevent duplicate subscription state updates from retry events",
      "Multiple OpenAI API feature endpoints (text generation, image, audio) with per-user usage tracking via Prisma",
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
    subtitle: "Portfolio with AI Chatbot",
    description:
      "A portfolio website featuring an AI assistant powered by a custom RAG pipeline — using OpenAI Embeddings to index portfolio content and Chat Completions to deliver context-aware responses.",
    overview:
      "Portfolio content (projects, experience, skills) was chunked and embedded using OpenAI's text-embedding model, then retrieved at query time to augment the system prompt before calling the Chat Completions API. Context window trimming managed token limits for multi-turn conversations.",
    date: "01 May 2025",
    category: "Personal",
    image: "/projects/jin-dev-portfolio-2025/main.png",
    galleryImages: [
      "/projects/jin-dev-portfolio-2025/main.png",
      "/projects/jin-dev-portfolio-2025/chatbot.png",
      "/projects/jin-dev-portfolio-2025/projectSection.png",
    ],
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "OpenAI API"],
    liveUrl: "https://jinleedev.vercel.app/",
    githubUrl: "https://github.com/JinLee0811/JinLee_Portfolio",
    features: [
      "RAG pipeline using OpenAI Embeddings to index portfolio content and retrieve relevant chunks at query time",
      "Chat Completions API with retrieved context injected into the system prompt for accurate, grounded responses",
      "Context window trimming to manage token limits across multi-turn conversations",
      "Streaming API responses to minimise perceived latency in the chat UI",
      "Dark mode with system preference detection and manual toggle persistence",
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    apis: ["OpenAI Chat Completions API", "OpenAI Embeddings API", "Custom RAG retrieval pipeline"],
    challenges: [
      "Chunking portfolio content at the right granularity — too coarse reduces relevance, too fine loses context",
      "Balancing AI response quality and end-to-end latency within a 2–3 second UX budget using streaming",
    ],
    takeaways: [
      "Effective RAG requires careful document chunking strategy and retrieval threshold tuning — prompt engineering alone is insufficient",
      "Streaming Chat Completions responses dramatically improve perceived latency even when total generation time is unchanged",
    ],
  },
  {
    id: 17,
    slug: "au-korean-community",
    title: "AU-Korean Community",
    subtitle: "Community Platform for Koreans in Australia",
    description:
      "A community platform for reviews, tips, and marketplace discussions tailored to Koreans in Australia, built with Supabase Row Level Security, Realtime subscriptions, and role-based content moderation.",
    overview:
      "Built with a focus on trust, moderation, and scalable community workflows. Supabase RLS policies enforce per-user data isolation at the database level. Realtime subscriptions power live post and marketplace updates, while Supabase Storage handles image uploads with server-side validation.",
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
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase", "PostgreSQL"],
    githubUrl: "https://github.com/JinLee0811/AUS_business_private",
    features: [
      "Supabase Row Level Security (RLS) policies enforcing per-user data isolation across all community tables",
      "Realtime subscriptions for live post feed, marketplace listing, and comment updates",
      "Structured review system with moderation flags and admin approval workflow",
      "Supabase Storage for image uploads with file-type and size validation before persistence",
      "PostgreSQL triggers for maintaining accurate like, comment, and view counters without application-layer race conditions",
    ],
    techStack: ["Next.js", "Supabase", "PostgreSQL", "Tailwind CSS"],
    apis: ["Supabase Auth", "Supabase Realtime", "Supabase Storage API", "PostgreSQL triggers"],
    challenges: [
      "Designing RLS policies granular enough to enforce moderation access without blocking legitimate user reads",
      "Maintaining accurate engagement counters (likes, views) using PostgreSQL triggers to avoid race conditions under concurrent updates",
    ],
    takeaways: [
      "Supabase RLS is the correct layer for community safety enforcement — application-layer checks alone are insufficient",
      "PostgreSQL triggers for counter maintenance are more reliable than application-side increment logic under concurrent load",
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
      "Built to keep student data local and reliable, with a three-layered architecture and hybrid data access for performance and maintainability. Dapper handles performance-critical read queries while EF Core manages schema migrations and complex relational writes.",
    date: "01 Sep 2025",
    category: "Team Projects",
    image: "/projects/dotnet-uniplanner/cover.png",
    galleryImages: ["/projects/dotnet-uniplanner/cover.png"],
    tags: ["C#", ".NET 8", "SQLite", "Windows Forms", "Dapper", "EF Core"],
    githubUrl: "https://github.com/JinLee0811/.NET_UniPlanner-/tree/main",
    features: [
      "Subject management with colour coding, credit tracking, and cross-field validation",
      "Weekly timetable scheduling with conflict detection across time slots and venues",
      "Assignment, task, and personal todo tracking with priority and deadline management",
      "Hybrid Dapper + EF Core data access: Dapper for performance-critical reads, EF Core for schema management and writes",
      "Offline-first SQLite storage with runtime schema bootstrapping on first launch",
    ],
    techStack: ["C#", ".NET 8", "Windows Forms", "SQLite", "Dapper", "Entity Framework Core 8"],
    apis: ["SQLite (local file)", "Dapper micro-ORM", "EF Core 8"],
    challenges: [
      "Designing a coherent hybrid data access strategy that uses Dapper and EF Core without duplication or inconsistency",
      "Keeping validation rules consistent across service and UI layers to prevent invalid state from reaching the database",
      "Handling schema evolution with runtime bootstrapping to support clean first-run setup without a migration server",
    ],
    takeaways: [
      "Hybrid Dapper + EF Core is a practical pattern — use each tool where it excels rather than forcing one ORM to do everything",
      "Offline-first design simplifies reliability, removes network dependencies, and improves data privacy for end users",
    ],
  },
];
