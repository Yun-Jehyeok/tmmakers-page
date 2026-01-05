import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

interface FAQItem {
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        question: "프로그래밍을 전혀 모르는데 참여할 수 있나요?",
        answer: "네, 프로그래밍을 전혀 모르셔도 기초 트랙으로 참여가 가능합니다.",
    },
    {
        question: "수료 후 취업이 보장되나요?",
        answer: "보장되지 않습니다. 이는 어느 교육을 듣더라도 마찬가지이며, 개인의 문제가 아닌 얼어붙은 취업 시장의 문제입니다. 하지만 저희는 타 교육에서 진행하지 않는, 진짜 취업을 위한 내용들을 진행함으로써 제대로 된 방향으로 달려나가실 수 있도록 도와드립니다.",
    },
    {
        question: "부트캠프와 다른게 있나요?",
        answer: "웹사이트 몇개 만들고 취업이 되는 시대는 끝났습니다. 만든 작업물에 대한 성능 최적화(Ex. 로딩 속도 개선), 사용하는 기술에 대한 제대로 된 고민, 코딩테스트, 기술 면접 준비 등 부트캠프에선 다루지 않는, 진짜 프론트엔드 개발자가 되기 위해 필요한 내용들을 가르칩니다.",
    },
    {
        question: "재직/재학 중 참여가 가능한가요?",
        answer: "정해진 일정에 맞출 수 있다면 참여가 가능합니다. 다만, 실시간 참여가 어려운 경우 녹화 영상을 제공하지 않으니 이 점 유의해주시기 바랍니다.",
    },
    {
        question: "교육 시간에 참여가 어려운데 녹화 영상을 볼 수 있나요?",
        answer: "취업 트랙의 일부 세션은 녹화되며, 수강생들에게 제공됩니다. 다만 기초/프로젝트 트랙은 녹화 영상이 제공되지 않습니다.",
    },
    {
        question: "환불 정책은 어떻게 되나요?",
        answer: "교육 시작 1주일 전까지는 100% 환불이 가능하며, 교육 시작 후 1주일 이내에는 70% 환불이 가능합니다. 그 이후에는 환불이 어려우니 신중하게 결정해주시기 바랍니다.",
    },
    {
        question: "멘토링 이수 후 어떤 지원을 받을 수 있나요?",
        answer: "이수 후에도 커뮤니티를 통한 네트워킹, 추가 학습 자료 제공, 취업 상담 등의 지원이 계속됩니다.",
    },
    {
        question: "준비물이나 사전 설치가 필요한 프로그램이 있나요?",
        answer: "개인 노트북(Mac 또는 Windows)이 필요합니다. 노트북은 지원되지 않습니다.",
    },
    {
        question: "혼자 학습하는 것과 멘토링의 차이점은 무엇인가요?",
        answer: "가장 큰 차이점은 시간입니다. 혼자 학습하시는 것에 비해 최소 2배의 시간은 아끼실 수 있으며, 타 부트캠프 수료 후에도 취업을 위해선 반드시 혼자 학습하는 시간이 필요합니다.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="relative w-full bg-gradient-to-br from-slate-950 via-slate-900 to-black py-20 px-4">
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
                    className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                />
            </div>

            {/* Grid pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

            <div className="relative z-10 max-w-4xl mx-auto">
                {/* Section Title */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl text-white mb-4 font-bold">
                        자주 묻는 질문
                    </h2>
                    <p className="text-slate-400 text-lg">
                        궁금한 점이 있으신가요? 여기서 답을 찾아보세요.
                    </p>
                </motion.div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.05 }}
                            viewport={{ once: true }}
                            className="rounded-xl overflow-hidden bg-slate-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300"
                        >
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full p-4 sm:p-6 flex items-center justify-between gap-4 text-left group cursor-pointer"
                            >
                                <span className="text-white text-base sm:text-lg font-bold flex-1">
                                    {faq.question}
                                </span>
                                <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:bg-cyan-500/20 transition-colors">
                                    {openIndex === index ? (
                                        <Minus className="w-5 h-5 text-cyan-400" />
                                    ) : (
                                        <Plus className="w-5 h-5 text-cyan-400" />
                                    )}
                                </div>
                            </button>

                            <AnimatePresence>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-0">
                                            <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-4" />
                                            <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                {/* Contact CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center p-8 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-cyan-500/10 border-2 border-cyan-400/30"
                >
                    <p className="text-white text-xl mb-4 font-bold">
                        더 궁금한 점이 있으신가요?
                    </p>
                    <p className="text-slate-300 mb-6">
                        언제든지 문의해주세요. 빠르게 답변드리겠습니다.
                    </p>
                    <a
                        href="https://open.kakao.com/o/szTaxr9h"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-8 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 text-white transition-colors duration-300 cursor-pointer inline-block"
                    >
                        문의하기
                    </a>
                </motion.div>
            </div>
        </div>
    );
}
