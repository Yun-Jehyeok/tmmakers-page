import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface JobPosting {
  company: string;
  title: string;
  requirements: string[];
}

interface TechStack {
  title: string;
  technologies: string[];
}

interface Slide {
  job: JobPosting;
  techStack: TechStack;
}

const slides: Slide[] = [
  {
    job: {
      company: '토스',
      title: '채용 정보',
      requirements: [
        'React, Vue, Angular 등 SPA 프레임워크 사용에 능숙하신 분이면 좋아요.',
        '단순히 주어진 개발을 해내는 것보다, 주도적으로 문제를 발견하고 분석해 솔루션을 제안할 수 있는 분이 필요해요.',
        '복잡하고 어려운 요구사항을 단순한 문제로 추상화하고, 이를 코드로 녹여낼 수 있는 분을 찾고 있어요.',
        'TypeScript, Flow를 이용한 JavaScript 정적 타입 분석을 경험해보신 분이면 좋아요.'
      ]
    },
    techStack: {
      title: '사용 기술',
      technologies: [
        'React',
        'TypeScript',
        'Next.js',
        'TanStack Query',
        'Jotai',
        'Emotion',
        'Yarn Berry',
        "PNPM",
        'Vite',
        'ESBuild'
      ]
    }
  },
  {
    job: {
      company: '두나무(업비트)',
      title: '채용 정���',
      requirements: [
        '블록체인과 웹/앱 기술에 관심이 많은 분',
        'Typescript, React 등으로 서비스 개발 경험이 있으신 분',
        '스타일링 라이브러리(Emotion, Styled-component, Tailwindcss 등)의 경험이 있으신 분',
        '다양한 직군과 유연하게 협업과 커뮤니케이션이 가능하신 분'
      ]
    },
    techStack: {
      title: '사용 기술',
      technologies: [
        'React',
        'TypeScript',
        'Next.js',
        'React Query',
        'Redux',
        'Zustand',
        'Emotion',
        'Styled-Component',
        'Yarn',
        "PNPM",
        'Vite',
      ]
    }
  },
  {
    job: {
      company: '스타트업',
      title: '채용 정보',
      requirements: [
        'HTML, CSS, JavaScript, TypeScript에 대한 깊은 이해가 있는 분',
        'Redux, Recoil, Jotai 등 상태 관리 도구 사용 경험이 있으신 분',
        '반응형 디자인, 웹 접근성, 웹 표준을 고려한 UI 개발 경험이 있는 분',
        '비즈니스의 복잡한 문제를 단순하게 풀어내는 것에 대해 높은 가치를 두고 있는 분',
        '자유로운 환경에서 스스로의 목표와 일정을 관리하고 책임감 있게 업무를 수행할 수 있는 분'
      ]
    },
    techStack: {
      title: '사용 기술',
      technologies: [
        'React',
        'TypeScript',
        'Next.js',
        'Recoil',
        'Redux',
        'Jotai',
        'Styled-Component',
        'Github Actions',
      ]
    }
  }
];

export function JobPostings() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full bg-slate-950 py-20 px-4">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl text-white mb-4 font-bold">
          실제 채용 공고를 보신 적 있나요?
        </h2>

        {/* Subtitle */}
        <p className="text-center text-lg text-slate-400 mb-16">
          채용 공고는 저희가 아는 현실과 다릅니다
        </p>

        {/* Slider Container */}
        <div className="relative max-w-5xl mx-auto">
          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="hidden lg:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-20 w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-white/10 items-center justify-center transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={nextSlide}
            className="hidden lg:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-16 z-20 w-12 h-12 rounded-full bg-slate-800/50 hover:bg-slate-700/50 border border-white/10 items-center justify-center transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Job Posting Card */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="mb-6">
                <p className="text-sm text-slate-400 mb-2">채용정보</p>
                <h3 className="text-2xl text-white">
                  {slides[currentSlide].job.company} {slides[currentSlide].job.title}
                </h3>
              </div>
              <ul className="space-y-4">
                {slides[currentSlide].job.requirements.map((req, index) => (
                  <li key={index} className="flex gap-3 text-slate-300">
                    <span className="text-cyan-400 flex-shrink-0">•</span>
                    <span className="text-sm leading-relaxed">{req}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Card */}
            <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
              <div className="mb-6">
                <p className="text-sm text-slate-400 mb-2">{slides[currentSlide].techStack.title}</p>
                <h3 className="text-2xl text-white">
                  {slides[currentSlide].job.company}
                </h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {slides[currentSlide].techStack.technologies.map((tech, index) => {
                  const isCommon = tech === 'React' || tech === 'TypeScript' || tech === 'Vite';
                  return (
                    <span
                      key={index}
                      className={`px-4 py-2 rounded-full text-sm ${
                        isCommon
                          ? 'bg-cyan-500/10 border border-cyan-500/20 text-cyan-400'
                          : 'bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400/50 text-white shadow-lg shadow-cyan-500/20'
                      }`}
                    >
                      {tech}
                    </span>
                  );
                })}
              </div>
              <p className="text-xs text-cyan-400/80 mt-6 flex items-center gap-2">
                <span className="inline-block w-4 h-4 rounded-full bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400/50"></span>
                타사 부트캠프에서 진행하지 않는 내용
              </p>
            </div>
          </div>

          {/* Mobile Navigation Dots */}
          <div className="flex lg:hidden justify-center gap-2 mt-8">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  currentSlide === index
                    ? 'bg-cyan-400 w-8'
                    : 'bg-slate-600 hover:bg-slate-500'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}