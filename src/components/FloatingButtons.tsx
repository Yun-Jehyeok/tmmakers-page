import { MessageCircle, Clock } from "lucide-react";
import { useState, useEffect } from "react";
import { ApplicationModal } from "./ApplicationModal";

export function FloatingButtons() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    useEffect(() => {
        // 마감일: 2026년 1월 23일 밤 12시
        const calculateTimeLeft = () => {
            const now = new Date();
            const deadline = new Date(2026, 0, 23, 0, 0, 0, 0); // 2026년 1월 22일 00:00:00

            const difference = deadline.getTime() - now.getTime();

            if (difference > 0) {
                setTimeLeft({
                    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                    minutes: Math.floor((difference / 1000 / 60) % 60),
                    seconds: Math.floor((difference / 1000) % 60),
                });
            }
        };

        calculateTimeLeft();
        const timer = setInterval(calculateTimeLeft, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
                <div className="max-w-7xl mx-auto flex flex-col-reverse gap-4 md:flex-row">
                    {/* 문의하기 버튼 */}
                    <a
                        href="https://open.kakao.com/o/szTaxr9h"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 md:flex-none md:px-8 py-4 rounded-xl bg-slate-800 hover:bg-slate-700 text-white transition-all duration-300 cursor-pointer flex items-center justify-center gap-2 shadow-lg border border-white/10"
                    >
                        <MessageCircle className="w-5 h-5" />
                        <span>문의하기</span>
                    </a>

                    {/* 지원하기 버튼 */}
                    <button
                        onClick={() => setIsModalOpen(true)}
                        className="flex-[2] md:flex-1 py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-all duration-300 cursor-pointer shadow-lg shadow-cyan-500/30 relative overflow-hidden"
                    >
                        {/* 할인 배지 */}
                        <div
                            className="absolute top-0 right-0 bg-yellow-400 text-black text-xs font-bold px-2 py-1 rounded-bl-lg"
                            style={{
                                padding: "4px 8px",
                                color: "black",
                                borderBottomLeftRadius: "0.5rem",
                            }}
                        >
                            30% 할인
                        </div>

                        <div className="flex flex-col items-center justify-center gap-0.5">
                            {/* 타이머 */}
                            <div className="flex items-center gap-1 text-xs md:text-sm">
                                <span className="font-medium text-white/80">
                                    할인 마감까지{" "}
                                    <span
                                        className="font-bold text-yellow-300"
                                        style={{ color: "#FFDF20" }}
                                    >
                                        {timeLeft.days}일 {timeLeft.hours}시간{" "}
                                        {timeLeft.minutes}분 {timeLeft.seconds}
                                        초
                                    </span>
                                </span>
                            </div>

                            {/* 메인 텍스트 */}
                            <span className="font-bold text-base md:text-lg text-white drop-shadow-lg">
                                지금 신청하기
                            </span>
                        </div>
                    </button>
                </div>
            </div>

            <ApplicationModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
