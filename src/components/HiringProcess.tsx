import { ChevronRight } from 'lucide-react';

const steps = [
  { name: '서류전형', highlighted: false },
  { name: '코딩테스트', highlighted: true },
  { name: '기술면접', highlighted: true },
  { name: '인성면접', highlighted: false },
  { name: '처우협의', highlighted: false },
  { name: '최종합격', highlighted: false }
];

export function HiringProcess() {
  return (
    <div className="relative w-full bg-slate-950 py-20 px-4">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-center text-4xl md:text-5xl text-white mb-4 font-bold">
          이게 끝일까요?
        </h2>

        {/* Subtitle */}
        <p className="text-center text-lg text-slate-400 mb-16">
          채용 절차도 확인해야합니다.
        </p>

        {/* Hiring Process Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center gap-6">
                  {/* Step */}
                  <div className="flex flex-col items-center gap-3">
                    <div className={`w-16 h-16 rounded-full flex items-center justify-center ${
                      step.highlighted 
                        ? 'bg-cyan-500 border-2 border-cyan-400 shadow-lg shadow-cyan-500/50' 
                        : 'bg-cyan-500/10 border border-cyan-500/20'
                    }`}>
                      <span className={step.highlighted ? 'text-white' : 'text-cyan-400'}>{index + 1}</span>
                    </div>
                    <span className={`text-center whitespace-nowrap ${
                      step.highlighted ? 'text-cyan-400' : 'text-white'
                    }`}>
                      {step.name}
                    </span>
                  </div>

                  {/* Arrow */}
                  {index < steps.length - 1 && (
                    <ChevronRight className="w-6 h-6 text-slate-600 hidden md:block flex-shrink-0" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}