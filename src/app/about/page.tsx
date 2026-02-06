import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "서비스 소개",
  description:
    "관상커리어는 AI 관상 분석으로 당신에게 어울리는 직업을 추천하는 서비스입니다. 서비스 소개와 작동 원리를 알아보세요.",
};

const STEPS = [
  {
    num: "1",
    title: "사진 업로드",
    desc: "정면이 잘 보이는 사진을 업로드하세요. 드래그 앤 드롭 또는 클릭으로 간편하게 올릴 수 있어요.",
  },
  {
    num: "2",
    title: "AI 관상 분석",
    desc: "최신 AI가 얼굴의 이마, 눈, 코, 입, 턱 등 주요 특징을 종합적으로 분석합니다.",
  },
  {
    num: "3",
    title: "직업 추천 결과",
    desc: "당신의 관상에 어울리는 직업과 능력치 분석 결과를 확인하고 친구에게 공유하세요.",
  },
];

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          관상커리어를 소개합니다
        </h1>
        <p className="mt-4 text-gray-500 text-lg">
          동양의 지혜와 현대 AI의 만남
        </p>
      </div>

      {/* 서비스 소개 */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 mb-4">서비스 소개</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            관상(觀相)은 수천 년간 동양 문화에서 전해 내려온 전통으로,
            얼굴의 생김새를 통해 그 사람의 성격과 운명을 읽는 학문입니다.
            이마의 넓이, 눈매의 모양, 코의 높낮이, 입꼬리의 방향 등
            얼굴의 각 부위에는 고유한 의미가 담겨 있다고 전해집니다.
          </p>
          <p>
            관상커리어는 이러한 전통적인 관상학의 원리를 현대 AI 기술로
            재해석하여, 당신의 얼굴 특징에서 잠재된 직업 적성을 찾아주는
            엔터테인먼트 서비스입니다. Google의 최신 생성형 AI 모델을 활용하여
            얼굴의 특징을 분석하고, 리더십, 창의성, 분석력, 사교성, 끈기 등
            5가지 핵심 능력치를 수치화하여 제공합니다.
          </p>
          <p>
            재미있는 결과를 친구들과 공유하고, 서로의 직업상을 비교해보세요.
            단, 본 서비스는 과학적 근거에 기반한 진로 상담이 아닌
            재미를 위한 엔터테인먼트 콘텐츠임을 알려드립니다.
          </p>
        </div>
      </section>

      {/* 이용 방법 */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">
          어떻게 작동하나요?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {STEPS.map((step) => (
            <div
              key={step.num}
              className="bg-white rounded-2xl border border-gray-100 p-6 text-center shadow-sm"
            >
              <div className="w-10 h-10 rounded-full bg-[#0070f3] text-white flex items-center justify-center text-lg font-bold mx-auto mb-4">
                {step.num}
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 기술 소개 */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 mb-4">사용 기술</h2>
        <p className="text-gray-600 leading-relaxed">
          관상커리어는 Google Gemini AI의 멀티모달(이미지+텍스트) 분석 기능을
          활용합니다. 업로드된 사진은 서버 메모리에서 일시적으로 처리된 후
          즉시 폐기되며, 별도로 저장하지 않습니다. 분석 결과는 URL에
          인코딩되어 공유할 수 있으며, 사진 자체는 공유되지 않습니다.
        </p>
      </section>

      {/* 면책 조항 */}
      <section className="mb-16 p-6 bg-gray-50 rounded-2xl border border-gray-100">
        <h2 className="text-lg font-semibold text-gray-900 mb-3">면책 조항</h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          관상커리어는 엔터테인먼트 목적으로 제작된 서비스입니다. 분석 결과는
          AI가 생성한 것으로, 실제 직업 적성이나 능력을 과학적으로 판단하는
          것이 아닙니다. 중요한 커리어 결정은 전문 상담사와 상담하시기 바랍니다.
        </p>
      </section>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/"
          className="inline-block px-10 py-3.5 rounded-full bg-[#0070f3] text-white font-semibold shadow-lg shadow-blue-500/25 hover:scale-105 hover:shadow-xl transition-all duration-200"
        >
          지금 분석해보기
        </Link>
      </div>
    </main>
  );
}
