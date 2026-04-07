import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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
            company: "토스",
            title: "채용 정보",
            requirements: [
                "React, Vue, Angular 등 SPA 프레임워크 사용에 능숙하신 분이면 좋아요.",
                "단순히 주어진 개발을 해내는 것보다, 주도적으로 문제를 발견하고 분석해 솔루션을 제안할 수 있는 분이 필요해요.",
                "복잡하고 어려운 요구사항을 단순한 문제로 추상화하고, 이를 코드로 녹여낼 수 있는 분을 찾고 있어요.",
                "TypeScript, Flow를 이용한 JavaScript 정적 타입 분석을 경험해보신 분이면 좋아요.",
            ],
        },
        techStack: {
            title: "사용 기술",
            technologies: [
                "React",
                "TypeScript",
                "Next.js",
                "TanStack Query",
                "Jotai",
                "Emotion",
                "Yarn Berry",
                "PNPM",
                "Vite",
                "ESBuild",
            ],
        },
    },
    {
        job: {
            company: "두나무(업비트)",
            title: "채용 정보",
            requirements: [
                "블록체인과 웹/앱 기술에 관심이 많은 분",
                "Typescript, React 등으로 서비스 개발 경험이 있으신 분",
                "스타일링 라이브러리(Emotion, Styled-component, Tailwindcss 등)의 경험이 있으신 분",
                "다양한 직군과 유연하게 협업과 커뮤니케이션이 가능하신 분",
            ],
        },
        techStack: {
            title: "사용 기술",
            technologies: [
                "React",
                "TypeScript",
                "Next.js",
                "React Query",
                "Redux",
                "Zustand",
                "Emotion",
                "Styled-Component",
                "Yarn",
                "PNPM",
                "Vite",
            ],
        },
    },
    {
        job: {
            company: "스타트업",
            title: "채용 정보",
            requirements: [
                "HTML, CSS, JavaScript, TypeScript에 대한 깊은 이해가 있는 분",
                "Redux, Recoil, Jotai 등 상태 관리 도구 사용 경험이 있으신 분",
                "반응형 디자인, 웹 접근성, 웹 표준을 고려한 UI 개발 경험이 있는 분",
                "비즈니스의 복잡한 문제를 단순하게 풀어내는 것에 대해 높은 가치를 두고 있는 분",
                "자유로운 환경에서 스스로의 목표와 일정을 관리하고 책임감 있게 업무를 수행할 수 있는 분",
            ],
        },
        techStack: {
            title: "사용 기술",
            technologies: [
                "React",
                "TypeScript",
                "Next.js",
                "Recoil",
                "Redux",
                "Jotai",
                "Styled-Component",
                "Github Actions",
            ],
        },
    },
];

const dropOffReasons = [
    "버티기 힘들어요",
    "너무 어려워요",
    "시간이 없어요",
    "일과 병행이 어려워요",
];

const successHighlights = [
    "피드백을 적극적으로 받아들이고 개선했습니다",
    "주어진 커리큘럼을 성실히 수행했습니다",
    "6개월 만에 모두 원하는 회사에 취업했습니다",
];

export function JobPostings() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [touchStart, setTouchStart] = useState<number | null>(null);
    const [touchEnd, setTouchEnd] = useState<number | null>(null);

    // 최소 스와이프 거리 (픽셀)
    const minSwipeDistance = 50;

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    const onTouchStart = (e: React.TouchEvent) => {
        setTouchEnd(null);
        setTouchStart(e.targetTouches[0].clientX);
    };

    const onTouchMove = (e: React.TouchEvent) => {
        setTouchEnd(e.targetTouches[0].clientX);
    };

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return;

        const distance = touchStart - touchEnd;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    };

    return (
        <div className="relative w-full bg-slate-950 py-20 px-4">
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[72px_72px]" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Title */}
                <h2 className="text-center text-4xl md:text-5xl text-white mb-4 font-bold">
                    검증된 결과
                </h2>

                {/* Subtitle */}
                <p className="text-center text-lg text-slate-400 mb-16">
                    단 6개월, 취업 불경기 속 이뤄냈습니다
                </p>

                <div className="relative max-w-5xl mx-auto">
                    {/* Cards */}
                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        {/* Job Posting Card */}
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col justify-center">
                            <div className="mb-6">
                                <h3 className="text-xl md:text-2xl text-white text-center leading-snug">
                                    서류 합격조차 되지 않던 전공자
                                </h3>
                            </div>
                            <div className="text-cyan-400 text-2xl md:text-4xl font-bold text-center leading-tight">
                                유명 코스닥 상장사 합격
                            </div>
                        </div>
                        {/* Job Posting Card */}
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 flex flex-col justify-center">
                            <div className="mb-6">
                                <h3 className="text-xl md:text-2xl text-white text-center leading-snug">
                                    2년간 취업하지 못한 비전공자
                                </h3>
                            </div>
                            <div className="text-cyan-400 text-2xl md:text-4xl font-bold text-center leading-tight">
                                멘토링 6개월 만에 취업 성공
                            </div>
                        </div>
                    </div>
                </div>

                {/* Slider Container */}
                {/* <div className="relative max-w-5xl mx-auto">
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

                    <div
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                        onTouchStart={onTouchStart}
                        onTouchMove={onTouchMove}
                        onTouchEnd={onTouchEnd}
                    >
                        <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <div className="mb-6">
                                <p className="text-sm text-slate-400 mb-2">
                                    채용정보
                                </p>
                                <h3 className="text-2xl text-white">
                                    {slides[currentSlide].job.company}{" "}
                                    {slides[currentSlide].job.title}
                                </h3>
                            </div>
                            <ul className="space-y-4">
                                {slides[currentSlide].job.requirements.map(
                                    (req, index) => (
                                        <li
                                            key={index}
                                            className="flex gap-3 text-slate-300"
                                        >
                                            <span className="text-cyan-400 flex-shrink-0">
                                                •
                                            </span>
                                            <span className="text-sm leading-relaxed">
                                                {req}
                                            </span>
                                        </li>
                                    ),
                                )}
                            </ul>
                        </div>

                        <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8">
                            <div className="mb-6">
                                <p className="text-sm text-slate-400 mb-2">
                                    {slides[currentSlide].techStack.title}
                                </p>
                                <h3 className="text-2xl text-white">
                                    {slides[currentSlide].job.company}
                                </h3>
                            </div>
                            <div className="flex flex-wrap gap-3">
                                {slides[
                                    currentSlide
                                ].techStack.technologies.map((tech, index) => {
                                    const isCommon =
                                        tech === "React" ||
                                        tech === "TypeScript" ||
                                        tech === "Vite";
                                    return (
                                        <span
                                            key={index}
                                            className={`px-4 py-2 rounded-full text-sm ${
                                                isCommon
                                                    ? "bg-cyan-500/10 border border-cyan-500/20 text-cyan-400"
                                                    : "bg-gradient-to-r from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400/50 text-white shadow-lg shadow-cyan-500/20"
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

                    <div className="flex lg:hidden justify-center gap-2 mt-8">
                        {slides.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentSlide(index)}
                                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                                    currentSlide === index
                                        ? "bg-cyan-400 w-8"
                                        : "bg-slate-600 hover:bg-slate-500"
                                }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div> */}
            </div>

            <div className="relative z-10 max-w-6xl mx-auto pt-40">
                {/* Title */}
                <h2 className="text-center text-4xl md:text-5xl text-white mb-4 font-bold">
                    더 말이 필요한가요?
                </h2>

                {/* Subtitle */}
                <p className="text-center text-lg text-slate-400 mb-16">
                    물론 포기한 사람들도 있습니다
                </p>

                <div className="grid grid-cols-1 gap-6 text-white md:grid-cols-2">
                    {dropOffReasons.map((reason, index) => (
                        <div
                            key={reason}
                            className="rounded-3xl border border-white/10 bg-slate-900/50 p-8 backdrop-blur-sm"
                        >
                            <div className="flex items-center gap-4">
                                <span className="text-sm font-semibold tracking-[0.18em] text-rose-300">
                                    0{index + 1}
                                </span>
                                <span className="h-px flex-1 bg-white/10" />
                            </div>
                            <h3 className="mt-6 text-2xl text-white text-center font-semibold">
                                {reason}
                            </h3>
                        </div>
                    ))}
                </div>

                <div className="mt-8 rounded-3xl border border-cyan-400/20 bg-cyan-400/10 p-6 md:p-8">
                    <p className="text-center text-3xl font-semibold tracking-[0.2em] text-cyan-300 max-md:tracking-[0.1em]">
                        하지만 끝까지 <br className="block md:hidden" />
                        포기하지 않은 분들은
                    </p>
                    <div className="mt-12 flex flex-col gap-3">
                        {successHighlights.map((highlight) => (
                            <div
                                key={highlight}
                                className="rounded-2xl border border-white/10 bg-slate-950/60 px-5 py-4 text-center text-lg leading-6 text-slate-200 max-md:text-sm"
                            >
                                {highlight}
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-20 rounded-[2rem] border border-white/10 bg-linear-to-r from-white/6 via-white/[0.03] to-white/6 px-6 py-8 text-center backdrop-blur-sm md:px-10 md:py-10">
                    <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/80">
                        Final Message
                    </p>
                    <p className="mt-4 text-2xl font-semibold leading-relaxed text-white md:text-3xl">
                        포기하지 않는 의지만 있다면,
                        <br className="block md:hidden" />
                        <span className="text-cyan-300">
                            저는 여러분을 반드시 취업시킬 자신이 있습니다.
                        </span>
                    </p>
                </div>
            </div>
        </div>
    );
}
