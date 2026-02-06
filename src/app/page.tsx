import { Metadata } from "next";
import HomeContent from "@/components/HomeContent";

export const metadata: Metadata = {
  title: "관상커리어 - AI 관상 분석으로 찾는 나만의 직업",
  description:
    "사진 한 장으로 AI가 분석하는 나만의 직업 적성. 지금 바로 무료로 분석해보세요.",
  alternates: { canonical: "/" },
};

export default function Home() {
  return <HomeContent />;
}
