export type BlogPost = {
  id: number;
  slug: string;
  titleEn: string;
  titleKo: string;
  excerptEn: string;
  excerptKo: string;
  contentEn: string[];
  contentKo: string[];
  image: string;
  date: string;
  readTime: string;
  category: string;
  tags: string[];
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "react-18-concurrent-features",
    titleEn: "A Practical Guide to React 18 Concurrent Features",
    titleKo: "React 18 Concurrent Features 실전 가이드",
    excerptEn:
      "How Suspense, useTransition, and streaming improved perceived performance in production.",
    excerptKo:
      "Suspense, useTransition, streaming을 실제 서비스에 적용하며 체감 성능을 높인 과정.",
    contentEn: [
      "React 18 introduced a new mental model for rendering. The most valuable change isn't a single API—it’s the ability to keep the UI responsive under load.",
      "I started by auditing bottlenecks in data-heavy screens, then introduced Suspense boundaries to isolate slow paths without blocking the entire view.",
      "The biggest win came from useTransition. Moving low-priority updates into transitions reduced UI jank during search and filters.",
      "Streaming SSR helped improve TTFB while still delivering interactive content quickly. The tradeoff was more careful boundary design.",
    ],
    contentKo: [
      "React 18은 렌더링 방식에 대한 새로운 사고방식을 제시합니다. 가장 큰 가치는 단일 API가 아니라, 부하가 큰 상황에서도 UI를 끊김 없이 유지할 수 있다는 점입니다.",
      "먼저 데이터가 많은 화면의 병목을 점검한 뒤, 느린 경로를 분리하기 위해 Suspense 경계를 설계했습니다.",
      "가장 큰 효과는 useTransition에서 나왔습니다. 낮은 우선순위의 업데이트를 전환으로 처리하면서 검색·필터 UI의 끊김이 줄었습니다.",
      "Streaming SSR은 TTFB 개선에 도움이 되었고, 대신 경계 설계에 더 신경 써야 했습니다.",
    ],
    image:
      "https://images.unsplash.com/photo-1588690154757-badf4644190f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    date: "05 Feb 2026",
    readTime: "8 min",
    category: "React",
    tags: ["React", "Performance", "Frontend"],
  },
  {
    id: 2,
    slug: "monolith-to-microservices",
    titleEn: "From Monolith to Microservices: What Actually Worked",
    titleKo: "모놀리식에서 마이크로서비스로: 실제로 효과 있었던 것",
    excerptEn:
      "Tradeoffs, service boundaries, and deployment lessons from a gradual split.",
    excerptKo:
      "서비스 분리의 트레이드오프, 경계 설정, 배포 과정에서 얻은 교훈.",
    contentEn: [
      "The biggest mistake I see is trying to split everything at once. We started by carving out one service with a clear boundary and measurable ROI.",
      "Data ownership was the hardest part. We chose duplication in the short term to avoid cross-service coupling during migration.",
      "Observability made the transition possible. We instrumented latency budgets and error rates before moving any traffic.",
    ],
    contentKo: [
      "가장 큰 실수는 한 번에 모든 것을 분리하려는 시도였습니다. 우리는 경계가 명확하고 ROI가 보이는 서비스부터 분리했습니다.",
      "가장 어려웠던 부분은 데이터 소유권이었습니다. 마이그레이션 동안 서비스 간 결합을 줄이기 위해 단기 중복을 선택했습니다.",
      "관측 가능성이 전환을 가능하게 했습니다. 트래픽 이전 전에 지연 예산과 에러율을 먼저 계측했습니다.",
    ],
    image:
      "https://images.unsplash.com/photo-1561886362-a2b38ce83470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    date: "28 Jan 2026",
    readTime: "12 min",
    category: "Architecture",
    tags: ["Architecture", "Backend", "DevOps"],
  },
  {
    id: 3,
    slug: "typescript-beyond-basics",
    titleEn: "TypeScript Types Beyond the Basics",
    titleKo: "TypeScript 타입 고급 패턴",
    excerptEn:
      "Advanced patterns and generics for safer, more maintainable codebases.",
    excerptKo:
      "고급 타입 패턴과 제네릭으로 안전하고 유지보수하기 좋은 코드 작성.",
    contentEn: [
      "My focus has been on turning runtime errors into compile-time guarantees using mapped and conditional types.",
      "One approach is designing APIs so that invalid states are unrepresentable. This typically reduces the need for defensive code.",
      "The practical win is less QA time spent on regression edge cases.",
    ],
    contentKo: [
      "핵심은 런타임 오류를 컴파일 타임 보장으로 전환하는 것입니다. 이를 위해 매핑/조건부 타입을 적극 활용했습니다.",
      "잘못된 상태를 표현할 수 없도록 API를 설계하면 방어 코드가 줄어듭니다.",
      "결과적으로 회귀 테스트에서 시간 소모가 줄어드는 효과가 있었습니다.",
    ],
    image:
      "https://images.unsplash.com/photo-1582192904915-d89c7250b235?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    date: "15 Jan 2026",
    readTime: "10 min",
    category: "TypeScript",
    tags: ["TypeScript", "Programming", "Best Practices"],
  },
];
