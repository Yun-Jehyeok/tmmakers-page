import { motion } from "motion/react";
import {
    Clock,
    Users,
    Code,
    Star,
    CheckCircle2,
    BookOpen,
    Target,
    Award,
} from "lucide-react";
import { useState } from "react";
import { ApplicationModal } from "./ApplicationModal";

interface Track {
    id: string;
    name: string;
    price: string;
    duration: string;
    isPremium?: boolean;
    badge?: string;
    features: string[];
    highlights: string[];
}

interface WeekContent {
    week: number;
    title: string;
    topics: string[];
}

interface JobTrackContent {
    category: string;
    icon: any;
    items: string[];
}

const tracks: Track[] = [
    {
        id: "basic",
        name: "기초 트랙",
        price: "15만원",
        duration: "2개월 과정",
        badge: "유연한 시간",
        features: [
            "하루 1시간 온라인 강의",
            "오전반: 10~11시 / 오후반: 20~21시",
            "Zep 상주 및 무제한 질문 가능",
            "Zep 내 인원들과 스터디 형성 가능",
        ],
        highlights: ["HTML, CSS, JavaScript", "React", "Git"],
    },
    {
        id: "project",
        name: "프로젝트 트랙",
        price: "15만원",
        duration: "2개월 과정",
        badge: "협업 중심",
        features: [
            "온라인 진행 (Zep 상주 & 질문 가능)",
            "4인 1팀 구성",
            "Next, T-Q, Zustand 등 라이브 강의 제공",
            "Github 기반 코드 리뷰",
            "성능 개선 사항 정리",
        ],
        highlights: ["Next.js", "Tanstack-Query", "Zustand", "TailwindCSS"],
    },
    {
        id: "premium",
        name: "취업 트랙",
        price: "20만원",
        duration: "2개월 과정",
        isPremium: true,
        badge: "소수 정예 5명",
        features: [
            "매일 Full-time 오프라인 진행",
            "이력서 피드백",
            "프로젝트 리팩토링 및 최적화",
            "코딩테스트 집중 대비",
            "면접 대비 및 발표 연습 (유튜브 업로드)",
            "주니어/시니어 개발자 멘토링",
        ],
        highlights: [],
    },
];

const basicCurriculum: WeekContent[] = [
    {
        week: 1,
        title: "웹 & HTML 기초",
        topics: [
            "웹이란? (브라우저, 프론트엔드, 백엔드)",
            "HTML, CSS, JavaScript의 역할",
            "HTML 태그 및 문서 구조",
            "자기소개 페이지 만들기",
        ],
    },
    {
        week: 2,
        title: "CSS 기초 & 레이아웃",
        topics: [
            "CSS 기본 문법 (색상, 글자, 여백 등)",
            "Flexbox, Grid Layout",
            "프론트엔드 개발자의 개발 흐름",
            "회원가입 화면 만들기",
        ],
    },
    {
        week: 3,
        title: "JavaScript 기초",
        topics: [
            "JavaScript가 필요한 이유",
            "변수, 데이터 타입, 연산자",
            "console.log, 조건문",
        ],
    },
    {
        week: 4,
        title: "JavaScript",
        topics: ["배열과 반복문", "함수", "여러 문제 풀며 JavaScript 익히기"],
    },
    {
        week: 5,
        title: "DOM & 미니 프로젝트",
        topics: ["DOM 개념", "Element Selector", "이벤트", "TodoList 만들기"],
    },
    {
        week: 6,
        title: "React 기초",
        topics: [
            "React란?",
            "컴포넌트와 JSX",
            "state와 props",
            "useState",
            "카운터 만들기 실습",
        ],
    },
    {
        week: 7,
        title: "React",
        topics: ["useEffect 및 Hooks", "라이브러리", "TodoList (React ver.)"],
    },
    {
        week: 8,
        title: "Git & Github",
        topics: [
            "Git과 Github 소개",
            "Git 명령어",
            "Github Repository 생성",
            "Issue, PR, Merge",
        ],
    },
];

const projectCurriculum: WeekContent[] = [
    {
        week: 1,
        title: "주제 선정 & Next.js 기초",
        topics: [
            "팀 빌딩 및 프로젝트 주제 선정",
            "프로젝트 세팅",
            "강의 : Next.js App Router",
            "강의 : SSR vs CSR",
        ],
    },
    {
        week: 2,
        title: "프로젝트 기획 - 1",
        topics: [
            "기능정의서 및 마일스톤 작성",
            "피그마 템플릿 선정",
            "강의 : 데이터 통신의 이해",
            "강의 : TailwindCSS",
        ],
    },
    {
        week: 3,
        title: "프로젝트 기획 - 2",
        topics: [
            "IA 작성",
            "DB 구조 및 기본 API 설계 (멘토와 함께합니다)",
            "강의 : Tanstack-Query, Zustand (State 관리)",
        ],
    },
    {
        week: 4,
        title: "프로젝트 개발 - 1",
        topics: ["주요 기능 UI 개발, API 연동"],
    },
    {
        week: 5,
        title: "프로젝트 개발 - 2",
        topics: ["주요 기능 UI 개발, API 연동"],
    },
    {
        week: 6,
        title: "프로젝트 개발 - 3",
        topics: ["주요 기능 UI 개발, API 연동"],
    },
    {
        week: 7,
        title: "테스트 & 배포",
        topics: ["QA 테스트 및 프로젝트 배포", "문서화", "최종 발표 준비"],
    },
    {
        week: 8,
        title: "최종 발표 & 성능 개선 정리",
        topics: ["최종 발표", "Lighthouse 성능 테스트", "성능 개선 사항 정리"],
    },
];

const jobTrackContents: JobTrackContent[] = [
    {
        category: "프로젝트 리팩토링",
        icon: Code,
        items: [
            "기존 프로젝트 코드 리뷰 및 리팩토링",
            "성능 최적화 - 수치 기반 개선",
            "디자인 패턴 및 아키텍처 개선",
            "프로젝트 문서화",
        ],
    },
    {
        category: "코딩테스트 대비",
        icon: Target,
        items: [
            "매일 코딩테스트 문제 풀이",
            "프로그래머스 Level 2-3 문제 풀이",
            "백준 문제 풀이",
            "시간복잡도 분석",
            "주차별 코딩테스트 강의 제공",
        ],
    },
    {
        category: "면접 준비",
        icon: Users,
        items: [
            "CS 기본 지식 (네트워크, OS)",
            "JavaScript & React 심화 질문 대비",
            "매주 CS 발표 진행",
            "유튜브 발표 영상 촬영 및 업로드",
        ],
    },
    {
        category: "주니어/시니어 멘토링",
        icon: Award,
        items: [
            "이력서 및 포트폴리오 검토",
            "3년차 개발자와 10 to 7 대면 학습",
            "시니어 개발자 멘토링 세션",
        ],
    },
];

export function ProgramTracks() {
    const [activeTab, setActiveTab] = useState<string>("basic");
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="relative w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 px-4">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.1, 0.2, 0.1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl text-white mb-4 font-bold">
                        프로그램 트랙
                    </h2>
                    <p className="text-lg text-slate-400">
                        목표에 맞는 트랙을 선택하세요
                    </p>
                    <p className="text-sm text-slate-500 mt-2">
                        프로젝트 및 취업 트랙은 이전 트랙을 수료하거나&nbsp;
                        <br className="md:hidden" />
                        심사 후 등록 가능합니다.
                    </p>
                </motion.div>

                {/* Tracks Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-20">
                    {tracks.map((track, index) => (
                        <motion.div
                            key={track.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className={`relative group ${
                                track.isPremium ? "lg:scale-105" : ""
                            }`}
                        >
                            {track.isPremium && (
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500 rounded-3xl blur opacity-30 group-hover:opacity-50 transition-opacity" />
                            )}

                            <div
                                className={`relative h-full p-8 rounded-3xl backdrop-blur-sm transition-all duration-300 flex flex-col ${
                                    track.isPremium
                                        ? "bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-cyan-500/10 border-2 border-cyan-400/50 hover:border-cyan-400/70"
                                        : "bg-slate-900/50 border border-white/10 hover:border-white/20"
                                }`}
                            >
                                {/* Badge */}
                                {track.badge && (
                                    <div className="flex items-center gap-2 mb-4">
                                        {track.isPremium ? (
                                            <div className="flex items-center gap-2 px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full">
                                                <Star className="w-4 h-4 text-white" />
                                                <span className="text-xs text-white">
                                                    {track.badge}
                                                </span>
                                            </div>
                                        ) : (
                                            <div className="px-3 py-1 bg-cyan-500/20 border border-cyan-500/30 rounded-full">
                                                <span className="text-xs text-cyan-400">
                                                    {track.badge}
                                                </span>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {/* Track Name */}
                                <h3
                                    className={`text-2xl mb-2 font-bold ${
                                        track.isPremium
                                            ? "text-white"
                                            : "text-white"
                                    }`}
                                >
                                    {track.name}
                                </h3>

                                {/* Price & Duration */}
                                <div className="mb-6">
                                    <div className="flex items-baseline gap-2 mb-1">
                                        <span
                                            className={`text-3xl ${
                                                track.isPremium
                                                    ? "text-cyan-400"
                                                    : "text-cyan-400"
                                            }`}
                                        >
                                            월 {track.price}
                                        </span>
                                    </div>
                                    <p className="text-sm text-slate-400">
                                        {track.duration}
                                    </p>
                                </div>

                                {/* Features */}
                                <div className="space-y-3 mb-6 flex-grow">
                                    {track.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="flex items-start gap-2"
                                        >
                                            <CheckCircle2
                                                className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                                                    track.isPremium
                                                        ? "text-cyan-400"
                                                        : "text-cyan-500/70"
                                                }`}
                                            />
                                            <span className="text-sm text-slate-300">
                                                {feature}
                                            </span>
                                        </div>
                                    ))}
                                </div>

                                {/* Tech Stack Highlights */}
                                {track.highlights.length > 0 && (
                                    <div className="pt-6 border-t border-white/10 mb-6">
                                        <p className="text-xs text-slate-400 mb-3">
                                            주요 기술 스택
                                        </p>
                                        <div className="flex flex-wrap gap-2">
                                            {track.highlights.map(
                                                (tech, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-xs text-cyan-400"
                                                    >
                                                        {tech}
                                                    </span>
                                                )
                                            )}
                                        </div>
                                    </div>
                                )}

                                {/* CTA Button */}
                                <button
                                    className={`w-full mt-auto px-6 py-3 rounded-xl transition-colors duration-300 cursor-pointer ${
                                        track.isPremium
                                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white"
                                            : "bg-blue-600 hover:bg-blue-700 text-white"
                                    }`}
                                    onClick={() => setIsModalOpen(true)}
                                >
                                    지원하기
                                </button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Detailed Curriculum Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <h3 className="text-3xl md:text-4xl text-white mb-8 text-center font-bold">
                        트랙별 상세 커리큘럼
                    </h3>

                    {/* Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-12">
                        {tracks.map((track) => (
                            <button
                                key={track.id}
                                onClick={() => setActiveTab(track.id)}
                                className={`px-4 md:px-6 py-3 rounded-xl transition-all duration-300 cursor-pointer ${
                                    activeTab === track.id
                                        ? track.isPremium
                                            ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/30"
                                            : "bg-blue-600 text-white shadow-lg shadow-blue-500/30"
                                        : "bg-slate-900/50 border border-white/10 text-slate-400 hover:border-white/20 hover:text-white"
                                }`}
                            >
                                {track.name}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="relative">
                        {/* Basic Track Curriculum */}
                        {activeTab === "basic" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {basicCurriculum.map((week, index) => (
                                    <motion.div
                                        key={week.week}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                                                <span className="text-cyan-400 font-bold">
                                                    {week.week}주
                                                </span>
                                            </div>
                                            <h4 className="text-lg text-white font-bold">
                                                {week.title}
                                            </h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {week.topics.map((topic, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2"
                                                >
                                                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-500/70" />
                                                    <span className="text-sm text-slate-300">
                                                        {topic}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {/* Project Track Curriculum */}
                        {activeTab === "project" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {projectCurriculum.map((week, index) => (
                                    <motion.div
                                        key={week.week}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                                    >
                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-cyan-500/20 border border-cyan-500/30">
                                                <span className="text-cyan-400 font-bold">
                                                    {week.week}주
                                                </span>
                                            </div>
                                            <h4 className="text-lg text-white font-bold">
                                                {week.title}
                                            </h4>
                                        </div>
                                        <ul className="space-y-2">
                                            {week.topics.map((topic, idx) => (
                                                <li
                                                    key={idx}
                                                    className="flex items-start gap-2"
                                                >
                                                    <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-500/70" />
                                                    <span className="text-sm text-slate-300">
                                                        {topic}
                                                    </span>
                                                </li>
                                            ))}
                                        </ul>
                                    </motion.div>
                                ))}
                            </motion.div>
                        )}

                        {/* Job Track Content */}
                        {activeTab === "premium" && (
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5 }}
                                className="grid grid-cols-1 md:grid-cols-2 gap-6"
                            >
                                {jobTrackContents.map((content, index) => {
                                    const IconComponent = content.icon;
                                    return (
                                        <motion.div
                                            key={content.category}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.05 }}
                                            className="p-6 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-400/30 hover:border-cyan-400/50 transition-all duration-300"
                                        >
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500">
                                                    <IconComponent className="w-6 h-6 text-white" />
                                                </div>
                                                <h4 className="text-lg text-white font-bold">
                                                    {content.category}
                                                </h4>
                                            </div>
                                            <ul className="space-y-2">
                                                {content.items.map(
                                                    (item, idx) => (
                                                        <li
                                                            key={idx}
                                                            className="flex items-start gap-2"
                                                        >
                                                            <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0 text-cyan-400" />
                                                            <span className="text-sm text-slate-300">
                                                                {item}
                                                            </span>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </motion.div>
                                    );
                                })}
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
            <ApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </div>
    );
}
