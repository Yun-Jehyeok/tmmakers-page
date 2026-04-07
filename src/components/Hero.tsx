import { motion } from "motion/react";
import { Calendar, Clock } from "lucide-react";

export function Hero() {
    return (
        <div className="relative min-h-screen w-full overflow-hidden bg-linear-to-br from-slate-950 via-blue-950 to-slate-900">
            {/* Animated background elements */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.3, 0.5, 0.3],
                    }}
                    transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -top-1/2 -left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        scale: [1.2, 1, 1.2],
                        opacity: [0.2, 0.4, 0.2],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                    className="absolute -bottom-1/2 -right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                />
            </div>

            {/* Grid pattern overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-size-[72px_72px]" />

            {/* Content */}
            <div className="relative z-10 min-h-screen flex items-center justify-center px-4 py-20">
                <div className="max-w-5xl w-full">
                    {/* Main Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-center mb-8"
                    >
                        <h1 className="px-4 text-4xl leading-[1.25] font-bold tracking-tight text-white sm:text-5xl md:text-6xl md:leading-[1.2] mb-4">
                            프론트엔드 개발자가&nbsp;
                            <br className="hidden max-md:block" />
                            되고 싶나요?
                            <br />
                            <span className="bg-linear-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                                모든 것을 알려드립니다
                            </span>
                        </h1>
                    </motion.div>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-center text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-12 px-4"
                    >
                        <b>취업 불경기 속에서도 검증된 멘토링</b>
                        <br />
                        체계적인 커리큘럼과 24시간 멘토링으로{" "}
                        <br className="hidden max-md:block" />
                        여러분의 취업을 책임집니다
                    </motion.p>

                    {/* Info Cards */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mb-12"
                    >
                        <div className="flex-1 flex items-center gap-3 px-4 sm:px-6 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-colors min-h-[100px] sm:min-h-[120px]">
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                            <div className="text-left">
                                <div className="text-xs text-slate-400 mb-1">
                                    멘토링 기간
                                </div>
                                <div className="text-sm sm:text-base text-white">
                                    26년 5월 01일 - 취업 될 때까지
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center gap-3 px-4 sm:px-6 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-colors min-h-[100px] sm:min-h-[120px]">
                            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                            <div className="text-left">
                                <div className="text-xs text-slate-400 mb-1">
                                    멘토링 시간
                                </div>
                                <div className="text-sm sm:text-base text-white mb-1">
                                    24시간 언제나
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 flex items-center gap-3 px-4 sm:px-6 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-colors min-h-[100px] sm:min-h-[120px]">
                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
                            <div className="text-left">
                                <div className="text-xs text-slate-400 mb-1">
                                    지원 마감
                                </div>
                                <div className="text-sm sm:text-base text-white mb-1">
                                    26년 4월 26일(일)
                                </div>
                                <div className="text-xs text-slate-400">
                                    * 조기마감 될 수 있습니다
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
