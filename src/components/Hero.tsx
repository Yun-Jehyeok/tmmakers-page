import { motion } from "motion/react";
import { Calendar, ArrowRight, Clock } from "lucide-react";

export function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
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
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

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
            <div className="inline-block text-sm sm:text-base md:text-lg text-white mb-4 tracking-wide px-4 sm:px-6 py-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-400/30 relative" style={{ clipPath: 'polygon(0.5rem 0%, calc(100% - 0.5rem) 0%, 100% 50%, calc(100% - 0.5rem) 100%, 0.5rem 100%, 0% 50%)' }}>
              내일을 만드는 사람들
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-white mb-4 tracking-tight px-4">
              프론트엔드
              <br />
              <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
                취업 멘토링 3기
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
            진짜 취업에 필요한 내용을 모두 담았습니다.
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
                  교육 기간
                </div>
                <div className="text-sm sm:text-base text-white">
                  26년 2월 16일 - 26년 4월 12일
                </div>
              </div>
            </div>
            <div className="flex-1 flex items-center gap-3 px-4 sm:px-6 py-4 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:border-white/20 transition-colors min-h-[100px] sm:min-h-[120px]">
              <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400 flex-shrink-0" />
              <div className="text-left">
                <div className="text-xs text-slate-400 mb-1">
                  교육 시간
                </div>
                <div className="text-sm sm:text-base text-white mb-1">
                  10:00 - 19:00
                </div>
                <div className="text-xs text-slate-400">
                  * 선택하신 트랙에 따라 변동됩니다
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
                  26년 2월 6일
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