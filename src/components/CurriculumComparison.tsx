import { Check, X } from "lucide-react";

interface CurriculumItem {
    title: string;
    others: boolean;
    ours: boolean;
}

const curriculumItems: CurriculumItem[] = [
    {
        title: "HTML/CSS/JS",
        others: true,
        ours: true,
    },
    {
        title: "React 이론/실습",
        others: true,
        ours: true,
    },
    { title: "팀 프로젝트", others: true, ours: true },
    { title: "성능 최적화", others: false, ours: true },
    { title: "코딩테스트 대비", others: false, ours: true },
    { title: "기술면접 대비", others: false, ours: true },
];

export function CurriculumComparison() {
    return (
        <div className="relative w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 py-20 px-4">
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:72px_72px]" />

            <div className="relative z-10 max-w-6xl mx-auto">
                {/* Title */}
                <h2 className="text-center text-4xl md:text-5xl text-white mb-4 font-bold">
                    부트캠프와는 다릅니다
                </h2>

                {/* Subtitle */}
                <p className="text-center text-lg text-slate-400 mb-16">
                    진짜 취업을 위한 커리큘럼을 비교해보세요
                </p>

                {/* Comparison Table */}
                <div className="max-w-4xl mx-auto">
                    <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden">
                        {/* Header */}
                        <div className="grid grid-cols-3 gap-4 p-6 border-b border-white/10 items-center">
                            <div className="text-slate-400">커리큘럼 항목</div>
                            <div className="text-center text-slate-400">
                                부트캠프
                            </div>
                            <div className="text-center text-cyan-400">
                                내일을 만드는 사람들
                            </div>
                        </div>

                        {/* Body */}
                        <div className="divide-y divide-white/5">
                            {curriculumItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`grid grid-cols-3 gap-4 p-6 ${
                                        !item.others && item.ours
                                            ? "bg-cyan-500/5"
                                            : ""
                                    }`}
                                >
                                    <div className="text-white flex items-center text-sm sm:text-base break-words">
                                        {item.title}
                                    </div>
                                    <div className="flex justify-center items-center">
                                        {item.others ? (
                                            <div className="w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center">
                                                <Check className="w-5 h-5 text-slate-400" />
                                            </div>
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                                                <X className="w-5 h-5 text-red-400" />
                                            </div>
                                        )}
                                    </div>
                                    <div className="flex justify-center items-center">
                                        {item.ours ? (
                                            <div
                                                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                                                    !item.others && item.ours
                                                        ? "bg-cyan-500 shadow-lg shadow-cyan-500/50"
                                                        : "bg-cyan-500/20"
                                                }`}
                                            >
                                                <Check
                                                    className={`w-5 h-5 ${
                                                        !item.others &&
                                                        item.ours
                                                            ? "text-white"
                                                            : "text-cyan-400"
                                                    }`}
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-8 h-8 rounded-full bg-red-500/10 flex items-center justify-center">
                                                <X className="w-5 h-5 text-red-400" />
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
