import { motion } from "motion/react";
import { Quote, Youtube, Github, BookOpen, Code2, Play, X } from "lucide-react";
import { useState } from "react";

interface Quote {
    number: number;
    text: string;
}

const quotes: Quote[] = [
    {
        number: 1,
        text: "주니어 프론트엔드 개발자는 웹 코어(JavaScript, TypeScript, CSS, HTML), 브라우저 렌더링 엔진 원리, 네트워크, 개발자 도구 등 웹 기초 지식을 깊이 있게 학습해야 성장할 수 있습니다.",
    },
    {
        number: 2,
        text: "기술 공유(블로그, 강의, 발표)는 단순한 기록이 아니라, 피드백을 통해 자신의 지식을 검증하고 사고 과정을 정제하는 과정입니다. 이를 통해 논리적 사고력과 문제 해결 능력을 함께 성장시킬 수 있습니다.",
    },
    {
        number: 3,
        text: "좋은 코드는 단순한 구현이 아니라 건강한 의사결정의 결과입니다. 이를 위해서는 팀원 간의 합의 과정에 참여하고, 도메인을 이해하며, 자신의 선택에 대해 논리적 근거를 제시할 수 있어야 합니다.",
    },
];

interface Activity {
    icon: any;
    title: string;
    description: string;
    link?: string;
}

const activities: Activity[] = [
    {
        icon: Youtube,
        title: "유튜브 기술 공유",
        description: "실제 프로젝트 발표 및 기술 세션 영상",
        link: "#",
    },
    {
        icon: Github,
        title: "GitHub 포트폴리오",
        description: "실전 프로젝트 코드 리뷰 및 협업",
        link: "#",
    },
    {
        icon: BookOpen,
        title: "기술 블로그",
        description: "학습한 내용을 글로 정리하고 공유",
        link: "#",
    },
    {
        icon: Code2,
        title: "라이브 코딩",
        description: "실시간 코드 리뷰 및 페어 프로그래밍",
        link: "#",
    },
];

interface Video {
    title: string;
    thumbnail?: string;
    url?: string;
}

const videos: Video[] = [
    {
        title: "수강생 CS 발표 영상",
        url: "https://youtu.be/WnTQ_tIKZpA?si=0E6qPtVnyVKgy08u",
    },
    {
        title: "코딩테스트 강의 영상",
        url: "https://youtu.be/u8C0zNdrCao?si=iqn7nojdsAJFly3M",
    },
    {
        title: "웹 기초 강의 영상",
        url: "https://youtu.be/WnTQ_tIKZpA?si=0E6qPtVnyVKgy08u",
    },
    {
        title: "CS 강의 영상",
        url: "https://youtu.be/HYzwS_cSWMw?si=KxFAfJNdccRMNgYm",
    },
];

export function MentoringValue() {
    const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);

    // Extract video ID from YouTube URL
    const getVideoId = (url: string) => {
        if (!url) return "";

        // Handle youtu.be format
        if (url.includes("youtu.be/")) {
            return url.split("youtu.be/")[1]?.split("?")[0] || "";
        }

        // Handle youtube.com/watch?v= format
        if (url.includes("youtube.com/watch?v=")) {
            return url.split("v=")[1]?.split("&")[0] || "";
        }

        return "";
    };

    // Get YouTube thumbnail URL
    const getThumbnailUrl = (url: string) => {
        const videoId = getVideoId(url);
        if (!videoId) return "";
        return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
    };

    // Convert YouTube URL to embed URL
    const getEmbedUrl = (url: string) => {
        if (!url) return "";

        const videoId = getVideoId(url);
        if (!videoId) return url;

        return `https://www.youtube.com/embed/${videoId}`;
    };

    return (
        <div className="relative w-full bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900 py-20 px-4">
            {/* Background effects */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute top-1/3 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl text-white mb-4 font-bold">
                        현업 개발자의 조언을 실천합니다
                    </h2>
                </motion.div>

                {/* Two Column Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Left: Quotes */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-6"
                    >
                        {/* Quote Cards */}
                        {quotes.map((quote, index) => (
                            <motion.div
                                key={quote.number}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: index * 0.1,
                                }}
                                viewport={{ once: true }}
                                className="relative p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                            >
                                <div className="absolute -left-3 -top-3 w-8 h-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                                    <span className="text-white text-sm font-bold">
                                        {quote.number}
                                    </span>
                                </div>
                                <p className="text-slate-300 leading-relaxed">
                                    {quote.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* Right: Activities & Video */}
                    <motion.div
                        initial={{ opacity: 0, x: 0 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        viewport={{ once: true }}
                        className="space-y-8"
                    >
                        {/* Videos Grid */}
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {videos.map((video, index) => (
                                    <motion.div
                                        key={video.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.5,
                                            delay: index * 0.1,
                                        }}
                                        viewport={{ once: true }}
                                        onClick={() =>
                                            video.url && setSelectedVideo(video)
                                        }
                                        className="rounded-xl overflow-hidden bg-slate-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 group cursor-pointer"
                                    >
                                        <div className="aspect-video relative overflow-hidden">
                                            {/* Thumbnail */}
                                            {video.url && (
                                                <img
                                                    src={getThumbnailUrl(
                                                        video.url
                                                    )}
                                                    alt={video.title}
                                                    className="w-full h-full object-cover"
                                                />
                                            )}

                                            {/* Overlay */}
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-300" />

                                            {/* Play Button */}
                                            <div className="absolute inset-0 flex items-center justify-center">
                                                <div className="w-16 h-16 rounded-full bg-cyan-500/80 backdrop-blur-sm border-2 border-white/30 flex items-center justify-center group-hover:bg-cyan-400 group-hover:scale-110 transition-all duration-300 shadow-lg">
                                                    <Play className="w-8 h-8 text-white fill-white ml-1" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="p-3">
                                            <p className="text-white text-sm font-bold">
                                                {video.title}
                                            </p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Video Modal */}
            {selectedVideo && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setSelectedVideo(null)}
                    className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="relative w-full max-w-5xl bg-slate-900 rounded-2xl overflow-hidden border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-slate-800/80 hover:bg-slate-700 border border-white/10 flex items-center justify-center transition-colors cursor-pointer"
                        >
                            <X className="w-5 h-5 text-white" />
                        </button>

                        {/* Video Title */}
                        <div className="p-6 pb-4 border-b border-white/10">
                            <h3 className="text-2xl text-white font-bold">
                                {selectedVideo.title}
                            </h3>
                        </div>

                        {/* Video Container */}
                        <div className="aspect-video bg-black">
                            {selectedVideo.url ? (
                                <iframe
                                    src={getEmbedUrl(selectedVideo.url)}
                                    className="w-full h-full"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-slate-800 to-slate-900">
                                    <div className="text-center">
                                        <Youtube className="w-16 h-16 text-cyan-400 mx-auto mb-4" />
                                        <p className="text-slate-400">
                                            영상 URL이 설정되지 않았습니다
                                        </p>
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </div>
    );
}
