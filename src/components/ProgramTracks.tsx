import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { ApplicationModal } from "./ApplicationModal";

interface RoadmapPhase {
    title: string;
    period: string;
    summary: string;
    details: string[];
    accent: string;
}
const roadmapPhases: RoadmapPhase[] = [
    {
        title: "기초 공부",
        period: "2026.05.01 ~ 2026.05.31",
        summary: "1개월 라이브 강의로 프론트엔드 기초를 빠르게 정리합니다.",
        details: [
            "라이브 강의 진행",
            "HTML / CSS / JavaScript / React 학습",
            "https://www.notion.so/319fbaff894c80398839db4982666ea7?source=copy_link",
        ],
        accent: "기초 다지기",
    },
    {
        title: "개인 프로젝트 1차",
        period: "2026.06",
        summary: "흥미 있는 주제로 개발 흐름을 익히고 완주 경험을 만듭니다.",
        details: [
            "AI를 활용해 개발 흥미 붙이기",
            "웹사이트 개발 전체 흐름 숙달",
            "HTML, CSS, JavaScript, React만 사용",
        ],
        accent: "개발 재미 붙이기",
    },
    {
        title: "팀 프로젝트",
        period: "2026.07 ~ 2026.08",
        summary: "팀을 이뤄 함께 협업 경험을 쌓습니다.",
        details: [
            "자유 주제 진행",
            "커뮤니케이션 역량 증명",
            "기술 스택은 7월 협의 후 확정",
        ],
        accent: "협업 경험",
    },
    {
        title: "개인 프로젝트 2차",
        period: "2026.09 ~ 2026.11",
        summary: "기존 결과물을 리팩토링하며 성능 개선 중심으로 고도화합니다.",
        details: [
            "리팩토링 및 고도화",
            "문제점 개선과 기술적 향상심 반영",
            "성능 개선 중심으로 진행",
        ],
        accent: "리팩토링",
    },
    {
        title: "코딩테스트",
        period: "2026.05 ~ 전체 기간",
        summary:
            "전 기간 동안 JavaScript로 실전 문제 풀이 감각을 끌어올립니다.",
        details: [
            "플랫폼: 백준, 프로그래머스",
            "목표: 백준 골드 2 이상 또는 프로그래머스 Lv.3 수준",
            "사용 언어: JavaScript",
        ],
        accent: "실전 대비",
    },
    {
        title: "면접 준비",
        period: "2026.06 ~ 전체 기간",
        summary: "기술 이해도와 전달력을 함께 끌어올리는 장기 준비 구간입니다.",
        details: [
            "Velog에 학습 내용 정리: 2주 1회",
            "면접 발표 진행: 2026.09 ~ 2주 1회",
            "JavaScript, React, CS, 브라우저 중심 준비",
        ],
        accent: "기술 설명력",
    },
    {
        title: "이력서 작성 및 시니어 멘토링",
        period: "2026.11",
        summary: "11월 한 달 동안 이력서 다듬기와 멘토링을 집중 진행합니다.",
        details: [
            "1차 작성: 11월 1주차",
            "2차 작성: 11월 2주차",
            "시니어 멘토링: 11월 3주차",
            "3차 작성: 11월 4주차",
        ],
        accent: "취업 마무리",
    },
    {
        title: "이력서 제출 및 지속적 멘토링",
        period: "2026.12~",
        summary:
            "이 기간엔 비용을 받지 않습니다. 취업이 될 때까지 멘토링을 이어가며, 이력서 작성과 면접 준비를 계속 지원합니다.",
        details: [
            "취업될 때까지 멘토링 지속",
            "이력서 업데이트 및 피드백 계속 제공",
            "면접 준비 지원 지속",
        ],
        accent: "취업 마무리",
    },
];

export function ProgramTracks() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="relative w-full bg-linear-to-br from-slate-950 via-blue-950 to-slate-900 py-20 px-4">
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
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[72px_72px]" />

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
                        ROADMAP
                    </h2>
                    <p className="text-lg text-slate-400">
                        프론트엔드 개발자가 되기 위한 전체 일정을 한눈에
                        확인하세요.
                    </p>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="mb-20 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.04] p-6 md:p-8"
                >
                    <div className="flex flex-col gap-6 border-b border-white/10 pb-8 lg:flex-row lg:items-end lg:justify-between">
                        <div className="max-w-3xl">
                            <p className="text-sm font-semibold tracking-[0.24em] text-cyan-300 uppercase">
                                2026 Roadmap
                            </p>
                            <h3 className="mt-4 text-3xl font-bold text-white md:text-4xl">
                                전체 일정
                            </h3>
                            <p className="mt-4 text-base leading-7 text-slate-300">
                                기초부터 프로젝트, 코딩테스트, 면접, 이력서까지
                                취업에 필요한 흐름을 한 번에 이어가는
                                일정입니다.
                            </p>
                        </div>

                        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 px-5 py-4">
                            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                                총 기간
                            </p>
                            <p className="mt-2 text-2xl font-bold text-white">
                                2026.05.01 ~ 취업 시점까지
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 grid grid-cols-1 gap-5 xl:grid-cols-2">
                        {roadmapPhases.map((phase, index) => (
                            <div
                                key={phase.title}
                                className="rounded-[1.75rem] border border-white/10 bg-slate-950/60 p-6 backdrop-blur-sm"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                                            Step 0{index + 1}
                                        </p>
                                        <h4 className="mt-3 text-2xl font-semibold text-white">
                                            {phase.title}
                                        </h4>
                                    </div>
                                    <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
                                        {phase.accent}
                                    </span>
                                </div>

                                <p className="mt-4 text-sm font-medium text-cyan-300">
                                    {phase.period}
                                </p>
                                <p className="mt-3 text-sm leading-7 text-slate-300">
                                    {phase.summary}
                                </p>

                                <ul className="mt-5 space-y-3">
                                    {phase.details.map(
                                        (detail, detailIndex) => (
                                            <li
                                                key={detail}
                                                className="flex items-start gap-3"
                                            >
                                                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-cyan-400" />
                                                {index === 0 &&
                                                detailIndex === 2 ? (
                                                    <a
                                                        href={detail}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className="text-sm leading-6 text-slate-200 underline"
                                                    >
                                                        기초 강의 자료
                                                    </a>
                                                ) : (
                                                    <span className="text-sm leading-6 text-slate-200">
                                                        {detail}
                                                    </span>
                                                )}
                                            </li>
                                        ),
                                    )}
                                </ul>
                            </div>
                        ))}
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
