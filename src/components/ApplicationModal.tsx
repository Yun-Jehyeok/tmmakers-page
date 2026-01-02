import { motion, AnimatePresence } from "motion/react";
import { X, ChevronDown, Check, CheckCircle2 } from "lucide-react";
import { useState } from "react";
import { projectId, publicAnonKey } from "../utils/supabase/info";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ApplicationModal({ isOpen, onClose }: ApplicationModalProps) {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    track: "",
    message: "",
  });

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const tracks = [
    { value: "기초", label: "기초 트랙" },
    { value: "프로젝트", label: "프로젝트 트랙" },
    { value: "취업", label: "취업 트랙" },
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!formData.name.trim()) {
      setError("이름을 입력해주세요.");
      return;
    }

    if (!formData.phone.trim()) {
      setError("전화번호를 입력해주세요.");
      return;
    }

    const phoneRegex = /^\d{3}-\d{4}-\d{4}$/;
    if (!phoneRegex.test(formData.phone)) {
      setError("전화번호는 XXX-XXXX-XXXX 형식으로 입력해주세요. (예: 010-1234-5678)");
      return;
    }

    if (!formData.track) {
      setError("희망 트랙을 선택해주세요.");
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-b5548700/applications`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${publicAnonKey}`,
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "신청 처리 중 오류가 발생했습니다.");
      }

      console.log("Application submitted successfully:", data);
      setShowSuccess(true);
      
      // Reset form
      setFormData({
        name: "",
        phone: "",
        track: "",
        message: "",
      });
      
      onClose();
    } catch (err) {
      console.error("Error submitting application:", err);
      setError(err instanceof Error ? err.message : "신청 처리 중 오류가 발생했습니다.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear error when user types
  };

  const handleTrackSelect = (value: string) => {
    setFormData({
      ...formData,
      track: value,
    });
    setIsDropdownOpen(false);
    setError(""); // Clear error when user selects
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-2xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20"
            >
              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-slate-800 hover:bg-slate-700 border border-white/10 flex items-center justify-center transition-colors cursor-pointer z-10"
              >
                <X className="w-5 h-5 text-white" />
              </button>

              {/* Header */}
              <div className="p-4 sm:p-6 md:p-8 pb-4 sm:pb-6 border-b border-white/10">
                <h2 className="text-2xl sm:text-3xl text-white font-bold mb-2">
                  멘토링 신청하기
                </h2>
                <p className="text-sm sm:text-base text-slate-400">
                  프론트엔드 취업 멘토링 3기에 지원해주셔서 감사합니다
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-4 sm:p-6 md:p-8">
                <div className="space-y-6">
                  {/* 이름 */}
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-white mb-2 font-bold"
                    >
                      이름 <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="홍길동"
                    />
                  </div>

                  {/* 전화번호 */}
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-white mb-2 font-bold"
                    >
                      전화번호 <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
                      placeholder="010-1234-5678"
                    />
                  </div>

                  {/* 트랙 선택 */}
                  <div>
                    <label
                      htmlFor="track"
                      className="block text-white mb-2 font-bold"
                    >
                      희망 트랙 <span className="text-cyan-400">*</span>
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white focus:outline-none focus:border-cyan-500/50 transition-colors cursor-pointer"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                      >
                        {formData.track ? (
                          tracks.find((track) => track.value === formData.track)?.label
                        ) : (
                          <span className="text-slate-500">트랙을 선택해주세요</span>
                        )}
                        <ChevronDown className="absolute right-4 top-1/2 transform -translate-y-1/2" />
                      </button>
                      {isDropdownOpen && (
                        <div className="absolute z-10 w-full mt-1 bg-slate-800 border border-white/10 rounded-xl shadow-lg">
                          {tracks.map((track) => (
                            <button
                              key={track.value}
                              type="button"
                              className="w-full px-4 py-3 text-left text-white hover:bg-slate-700 transition-colors"
                              onClick={() => handleTrackSelect(track.value)}
                            >
                              {track.label}
                              {formData.track === track.value && (
                                <Check className="absolute right-4 top-1/2 transform -translate-y-1/2" />
                              )}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* 문의사항 */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-white mb-2 font-bold"
                    >
                      지원 동기 및 문의사항
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors resize-none"
                      placeholder="자유롭게 작성해주세요"
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="mt-6 p-4 rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-white text-sm">
                  * 지원 완료 후 개별적으로 연락드리겠습니다.
                </div>

                {/* Error Message */}
                {error && (
                  <div className="mt-4 p-4 rounded-xl bg-red-500/10 border border-red-500/30">
                    <p className="text-red-400">{error}</p>
                  </div>
                )}

                {/* Success Message */}
                {showSuccess && (
                  <div className="mt-4 p-4 rounded-xl bg-green-500/10 border border-green-500/30 text-white text-sm">
                    <CheckCircle2 className="inline-block w-5 h-5 mr-2" />
                    신청이 완료되었습니다!
                  </div>
                )}

                {/* Buttons */}
                <div className="flex gap-4 mt-8">
                  <button
                    type="button"
                    onClick={onClose}
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 rounded-xl bg-slate-800 hover:bg-slate-700 text-white border border-white/10 transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold transition-all shadow-lg shadow-cyan-500/30 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "제출 중..." : "신청하기"}
                  </button>
                </div>
              </form>
            </motion.div>
          </div>
        </>
      )}
      
      {/* Success Modal */}
      {showSuccess && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowSuccess(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60]"
          />

          {/* Success Modal */}
          <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: 20 }}
              transition={{ duration: 0.3, type: "spring" }}
              className="relative w-full max-w-md bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl border border-cyan-500/50 shadow-2xl shadow-cyan-500/30 p-8 text-center"
            >
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 mb-6 shadow-lg shadow-cyan-500/50"
              >
                <CheckCircle2 className="w-10 h-10 text-white" />
              </motion.div>

              {/* Success Message */}
              <h3 className="text-2xl text-white font-bold mb-3">
                신청이 완료되었습니다!
              </h3>
              <p className="text-slate-300 mb-6">
                지원해주셔서 감사합니다.<br />
                빠른 시일 내에 개별적으로 연락드리겠습니다.
              </p>

              {/* Close Button */}
              <button
                onClick={() => setShowSuccess(false)}
                className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white font-bold transition-all shadow-lg shadow-cyan-500/30 cursor-pointer"
              >
                확인
              </button>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}