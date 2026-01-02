import { motion } from "motion/react";
import { AlertCircle, Code2, Lightbulb, TrendingUp } from "lucide-react";

interface Message {
  text: string;
  highlight?: boolean;
  size?: "normal" | "large";
}

const messages: Message[] = [
  {
    text: "정말 취업이 가능할까요?",
    highlight: false,
    size: "large",
  },
  {
    text: "솔직히 말씀드리겠습니다. 지금 채용 시장은 냉혹합니다.",
    highlight: false,
  },
  {
    text: "하지만 그 속에서도 합격하는 사람들이 있습니다.",
    highlight: true,
  },
  {
    text: "그들의 공통점은 '진짜 엔지니어'라는 것입니다.",
    highlight: false,
  },
  {
    text: "엔지니어는 단순히 코드를 작성하는 사람이 아닙니다.",
    highlight: false,
  },
  {
    text: "문제를 정의하고, 해결책을 설계하며, 더 나은 방법을 끊임없이 고민하는 사람입니다.",
    highlight: true,
  },
  {
    text: "그리고 그 모든 것의 시작은 탄탄한 기초입니다.",
    highlight: false,
  },
  {
    text: "트렌드만 쫓는 개발자가 아닌, 본질을 이해하는 엔지니어가 되어야 합니다.",
    highlight: true,
  },
];

const principles = [
  {
    icon: Code2,
    title: "기초부터 탄탄하게",
    description: "HTML, CSS, JS의 동작 원리를 이해합니다",
  },
  {
    icon: Lightbulb,
    title: "문제 해결 능력",
    description: "문제를 분석하고 최적의 솔루션을 찾아냅니다",
  },
  {
    icon: TrendingUp,
    title: "지속적인 성장",
    description: "배운 것을 내 것으로 만들고 다음으로 나아갑니다",
  },
];

export function RealityCheck() {
  return (
    <div className="relative w-full bg-gradient-to-br from-slate-900 via-slate-950 to-black py-32 px-4">
      {/* Subtle background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Alert icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="flex justify-center mb-12"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-500/30 blur-2xl rounded-full" />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border-2 border-cyan-400/50 flex items-center justify-center">
              <AlertCircle className="w-10 h-10 text-cyan-400" />
            </div>
          </div>
        </motion.div>

        {/* Messages */}
        <div className="space-y-6 mb-20">
          {messages.map((message, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              {message.size === "large" ? (
                <h2 className="text-3xl md:text-5xl text-white mb-4 font-bold">
                  {message.text}
                </h2>
              ) : (
                <p
                  className={`text-lg md:text-2xl leading-relaxed ${
                    message.highlight
                      ? "text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-medium"
                      : "text-slate-300"
                  }`}
                >
                  {message.text}
                </p>
              )}
            </motion.div>
          ))}
        </div>

        {/* Divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          whileInView={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent mb-16"
        />

        {/* Principles */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {principles.map((principle, index) => {
            const IconComponent = principle.icon;
            return (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <IconComponent className="w-8 h-8 text-cyan-400" />
                  </div>
                </div>
                <h3 className="text-xl text-white mb-2 font-bold">
                  {principle.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {principle.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-xl md:text-2xl text-slate-300 leading-relaxed">
            여러분이{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400 font-bold">
              진짜 엔지니어
            </span>
            로 성장할 수 있도록 돕겠습니다.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
