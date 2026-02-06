"use client";

import { useState } from "react";
import Link from "next/link";

const FAQ_DATA = [
  {
    q: "관상커리어는 무엇인가요?",
    a: "관상커리어는 AI 관상 분석으로 당신의 얼굴 특징에 어울리는 직업을 추천해주는 무료 엔터테인먼트 서비스입니다. 동양의 전통 관상학을 현대 AI 기술로 재해석하여 재미있는 결과를 제공합니다.",
  },
  {
    q: "업로드한 사진은 안전한가요?",
    a: "네, 안전합니다. 업로드한 사진은 서버 메모리에서 AI 분석을 위해 일시적으로 처리된 후 즉시 삭제됩니다. 사진을 별도로 저장하거나 보관하지 않으며, 분석이 끝나면 어떠한 흔적도 남지 않습니다.",
  },
  {
    q: "분석 결과는 얼마나 정확한가요?",
    a: "분석 결과는 AI가 전통 관상학의 원리를 재미있게 적용한 엔터테인먼트 콘텐츠입니다. 과학적 근거에 기반한 직업 적성 검사가 아니므로, 재미로 즐겨주시고 실제 커리어 결정은 전문 상담사와 상담하시기 바랍니다.",
  },
  {
    q: "어떤 사진이 가장 좋은 결과를 주나요?",
    a: "정면을 바라보는 밝은 조명의 사진이 가장 좋습니다. 선글라스, 마스크, 모자 등 얼굴을 가리는 액세서리는 벗고, 자연스러운 표정으로 촬영한 사진을 사용하세요. 혼자 찍은 사진이 가장 정확한 결과를 줍니다.",
  },
  {
    q: "분석에 비용이 들나요?",
    a: "아니요, 관상커리어는 완전 무료 서비스입니다. 별도의 회원가입이나 결제 없이 바로 사진을 업로드하고 분석 결과를 확인할 수 있습니다.",
  },
  {
    q: "하루에 몇 번까지 분석할 수 있나요?",
    a: "서버 안정성을 위해 1분당 최대 5회까지 분석이 가능합니다. 일반적인 사용에는 제한이 거의 없으며, 잠시 후 다시 시도하시면 됩니다.",
  },
  {
    q: "결과를 친구에게 공유할 수 있나요?",
    a: "네! 결과 페이지의 '결과 공유하기' 버튼을 누르면 결과 페이지의 URL이 클립보드에 복사됩니다. 이 링크를 카카오톡, 문자, SNS 등으로 공유하면 친구도 같은 결과를 확인할 수 있습니다.",
  },
  {
    q: "모바일에서도 사용할 수 있나요?",
    a: "네, 관상커리어는 모바일 환경에 최적화되어 있습니다. 스마트폰 브라우저에서 바로 접속하여 사용할 수 있으며, 카메라로 직접 촬영한 사진도 업로드 가능합니다.",
  },
  {
    q: "관상 분석에 사용되는 AI 기술은 무엇인가요?",
    a: "Google의 최신 멀티모달 AI 모델인 Gemini를 사용합니다. 이 AI는 이미지와 텍스트를 동시에 이해할 수 있어, 얼굴의 특징을 종합적으로 분석하고 관상학적 해석을 적용합니다.",
  },
  {
    q: "문의사항이 있으면 어디로 연락하나요?",
    a: "서비스 관련 문의사항은 gwansang.career@gmail.com으로 이메일을 보내주시면 됩니다. 가능한 빠르게 답변드리겠습니다.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full py-5 flex items-center justify-between text-left gap-4"
      >
        <span className="text-sm font-semibold text-gray-900">{q}</span>
        <svg
          className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-180" : ""
          }`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-96 pb-5" : "max-h-0"
        }`}
      >
        <p className="text-sm text-gray-500 leading-relaxed">{a}</p>
      </div>
    </div>
  );
}

export default function FaqPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <div className="text-center mb-12">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          자주 묻는 질문
        </h1>
        <p className="mt-4 text-gray-500">
          관상커리어 서비스에 대해 궁금한 점을 확인하세요
        </p>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 px-6 shadow-sm">
        {FAQ_DATA.map((item) => (
          <FaqItem key={item.q} q={item.q} a={item.a} />
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-sm text-gray-400 mb-6">
          원하는 답변을 찾지 못하셨나요?
        </p>
        <Link
          href="/"
          className="inline-block px-10 py-3.5 rounded-full bg-[#0070f3] text-white font-semibold shadow-lg shadow-blue-500/25 hover:scale-105 hover:shadow-xl transition-all duration-200"
        >
          관상 분석 시작하기
        </Link>
      </div>

      {/* FAQ JSON-LD structured data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: FAQ_DATA.map((item) => ({
              "@type": "Question",
              name: item.q,
              acceptedAnswer: {
                "@type": "Answer",
                text: item.a,
              },
            })),
          }),
        }}
      />
    </main>
  );
}
