import { Hero } from "./components/Hero";
import { JobPostings } from "./components/JobPostings";
import { HiringProcess } from "./components/HiringProcess";
import { CurriculumComparison } from "./components/CurriculumComparison";
import { MentoringValue } from "./components/MentoringValue";
import { ProgramTracks } from "./components/ProgramTracks";
import { RealityCheck } from "./components/RealityCheck";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { FloatingButtons } from "./components/FloatingButtons";

/**
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 * 📌 추가 SEO 최적화 팁
 * ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 *
 * 1. OG 이미지 준비 (1200x630px 권장)
 *    - 멘토링 프로그램 소개 이미지 제작
 *    - public/og-image.jpg로 저장
 *
 * 2. robots.txt 생성 (public/robots.txt)
 *    User-agent: *
 *    Allow: /
 *    Sitemap: https://yourdomain.com/sitemap.xml
 *
 * 3. sitemap.xml 생성 (주요 페이지 URL 포함)
 *
 * 4. Google Search Console & Analytics 연동
 *
 * 5. 구조화된 데이터 (JSON-LD) 추가 고려
 *    - Course, EducationalOrganization 스키마
 */

export default function App() {
    return (
        <div className="min-h-screen">
            <Hero />
            <JobPostings />
            <HiringProcess />
            <CurriculumComparison />
            <ProgramTracks />
            <RealityCheck />
            <MentoringValue />
            <Testimonials />
            <FAQ />
            <FloatingButtons />
        </div>
    );
}
