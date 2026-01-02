import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  content: string;
}

const testimonials: Testimonial[] = [
  {
    content:
      "아주 친절하게 잘가르쳐주세요!! 맞춤형으로 굉장히 만족합니다 ㅎㅎ",
  },
  {
    content:
      "html css를 배운지 얼마 안돼서 실력이 많이 부족했는데도 모르는 부분들을 친절히 잘 알려주셨어요~ 원하는 것들을 빠르게 집어주고 알려주셔서 편하게 수업 들을 수 있었습니다 !!",
  },
  {
    content:
      "최근 제 역량 자체를 의심하고 이것저것 뭐해야하나 고민하고 있었는데, 안심이 되는 것 같습니다.",
  },
  {
    content:
      "프로그램 참여를 통해 인턴이지만 취업에 성공할 수 있었어요! 게으른 성격 탓에 학습을 미루거나 어떤 내용을 공부해야할지 몰라서 답답함을 겪고 있었는데, 취업에 필요한 내용을 꾸준히 준비할 수 있는 큰 동기부여가 되었습니다!",
  },
  {
    content:
      "목표를 위해 몰입할 수 있는 환경을 만들 수 있었고, 서류 합격률도 점점 올라가기 시작해서 너무 좋습니다!",
  },
  {
    content:
      "객관적인 피드백을 해주셔서 너무 좋았습니다! 또 차일피일 미루기만 하던 일들을 꾸준히 할 수 있어 좋은 것 같습니다",
  },
];

export function Testimonials() {
  return (
    <div className="relative w-full bg-gradient-to-br from-black via-slate-900 to-slate-950 py-20 px-4">
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
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.15, 0.1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
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
            수강생 후기
          </h2>
          <p className="text-slate-400 text-lg">
            1, 2기 수강생들의 생생한 후기를 확인해보세요
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-6 rounded-2xl bg-slate-900/50 border border-white/10 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-500/10">
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 opacity-20">
                  <Quote className="w-8 h-8 text-cyan-400" />
                </div>

                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-cyan-400 text-cyan-400"
                    />
                  ))}
                </div>

                {/* Content */}
                <p className="text-slate-300 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Gradient Overlay on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-300 pointer-events-none" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
