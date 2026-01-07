import { MessageCircle } from "lucide-react";
import { useState } from "react";
import { ApplicationModal } from "./ApplicationModal";

export function FloatingButtons() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClickApply = () => {
        if (window.gtag) {
            window.gtag("event", "click_order_button", {
                event_category: "engagement",
                event_label: "order_button",
            });
        }

        setIsModalOpen(true);
    };

    return (
        <>
            <div className="fixed bottom-0 left-0 right-0 z-50 px-4 pb-4">
                <div className="max-w-7xl mx-auto flex gap-4">
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
                        onClick={onClickApply}
                        className="flex-[2] md:flex-1 py-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white transition-all duration-300 cursor-pointer shadow-lg shadow-cyan-500/30"
                    >
                        <span className="font-bold">지금 신청하기</span>
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
