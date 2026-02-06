import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "관상 가이드 - 얼굴로 읽는 성격과 적성",
  description:
    "관상(觀相)이란 무엇일까요? 동양의 전통 관상학부터 현대 AI 관상 분석까지, 얼굴 특징별 의미를 알아보세요.",
};

const FEATURES = [
  {
    part: "이마",
    icon: "🧠",
    meaning: "지혜와 커리어 운",
    desc: "이마는 관상학에서 '천정(天庭)'이라 불리며, 지적 능력과 초년의 운세를 나타냅니다. 넓고 둥근 이마는 뛰어난 사고력과 리더십을, 높은 이마는 학문적 재능과 분석력을 의미한다고 전해집니다. 직업적으로는 기획, 경영, 연구 분야와 연관됩니다.",
  },
  {
    part: "눈",
    icon: "👁️",
    meaning: "내면의 성격과 의지",
    desc: "눈은 '마음의 창'으로, 관상에서 가장 중요한 부위 중 하나입니다. 크고 맑은 눈은 개방적이고 창의적인 성격을, 날카로운 눈매는 집중력과 분석력을 나타냅니다. 따뜻한 눈빛은 사교성과 공감 능력이 뛰어난 직업에 적합하다고 봅니다.",
  },
  {
    part: "코",
    icon: "👃",
    meaning: "재물운과 자신감",
    desc: "코는 관상에서 '재백궁(財帛宮)'으로, 재물운과 중년의 운세를 상징합니다. 오뚝한 코는 자신감과 독립심을, 넓은 콧방울은 재물을 모으는 능력을 의미합니다. 사업가, 금융, 투자 관련 직업과 연관되는 부위입니다.",
  },
  {
    part: "입",
    icon: "👄",
    meaning: "소통 능력과 사교성",
    desc: "입은 '출납관(出納官)'으로, 언어 능력과 인간관계를 나타냅니다. 입꼬리가 올라간 사람은 낙관적이고 사교적인 성격으로, 영업, 강연, 교육 등 소통이 중요한 직업에 적합합니다. 도톰한 입술은 감성적 표현력과 예술적 재능을 의미합니다.",
  },
  {
    part: "턱",
    icon: "🦴",
    meaning: "끈기와 의지력",
    desc: "턱은 '지각(地閣)'으로, 만년의 운세와 의지력을 상징합니다. 각진 턱은 강한 의지와 끈기를 나타내며, 둥근 턱은 유연한 적응력을 의미합니다. 턱이 발달한 관상은 끈기가 필요한 연구, 스포츠, 창업 분야에서 성공할 가능성이 높다고 합니다.",
  },
];

const TIPS = [
  {
    icon: "💡",
    title: "밝은 조명",
    desc: "자연광이나 밝은 실내 조명에서 촬영하면 얼굴 특징이 더 정확히 분석됩니다.",
  },
  {
    icon: "🧑",
    title: "정면 촬영",
    desc: "고개를 살짝 들고 카메라를 정면으로 바라보는 사진이 가장 좋습니다.",
  },
  {
    icon: "🕶️",
    title: "액세서리 제거",
    desc: "선글라스, 마스크, 모자 등 얼굴을 가리는 액세서리는 벗고 촬영하세요.",
  },
  {
    icon: "😊",
    title: "자연스러운 표정",
    desc: "과한 미소나 찡그림보다는 편안하고 자연스러운 표정이 정확한 결과를 줍니다.",
  },
];

export default function GuidePage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Hero */}
      <div className="text-center mb-16">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
          관상 가이드
        </h1>
        <p className="mt-4 text-gray-500 text-lg">
          동양의 전통 관상학부터 현대 AI 분석까지
        </p>
      </div>

      {/* 관상이란? */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 mb-4">관상(觀相)이란?</h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            관상(觀相)은 사람의 얼굴 생김새를 관찰하여 그 사람의 성격, 재능,
            운명을 파악하는 동양의 전통 학문입니다. 약 3,000년 이상의 역사를
            가진 관상학은 중국에서 시작되어 한국, 일본 등 동아시아 전역에
            널리 퍼졌습니다.
          </p>
          <p>
            한국에서는 조선 시대부터 관상이 일상생활에 깊이 뿌리내렸으며,
            &ldquo;관상이 좋다&rdquo;, &ldquo;복이 있는 얼굴&rdquo; 같은
            표현은 오늘날에도 자주 사용됩니다. 전통적으로 관상은 얼굴의
            12궁(宮)을 기반으로 각 부위의 형태, 색깔, 균형을 종합적으로
            분석하여 그 사람의 성향과 운세를 판단합니다.
          </p>
          <p>
            현대에 들어 관상은 과학적 근거보다는 문화적 전통이자 재미있는
            화제거리로 자리 잡았습니다. 관상커리어는 이러한 전통적 관상학의
            원리를 AI 기술로 재해석하여, 재미있는 직업 추천 콘텐츠로
            제공하는 서비스입니다.
          </p>
        </div>
      </section>

      {/* 얼굴 부위별 의미 */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">
          얼굴 부위별 의미
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {FEATURES.map((f) => (
            <div
              key={f.part}
              className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-3">
                <span className="text-2xl">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-gray-900">{f.part}</h3>
                  <p className="text-xs text-[#0070f3] font-medium">{f.meaning}</p>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* AI 관상 분석의 원리 */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 mb-4">
          AI 관상 분석의 원리
        </h2>
        <div className="space-y-4 text-gray-600 leading-relaxed">
          <p>
            관상커리어의 AI 분석은 Google의 최신 멀티모달 AI 모델(Gemini)을
            활용합니다. 이 모델은 이미지와 텍스트를 동시에 이해할 수 있어,
            업로드된 사진에서 얼굴의 주요 특징을 인식하고 전통 관상학의
            원리에 따라 해석합니다.
          </p>
          <p>
            AI는 이마의 넓이, 눈매의 형태, 코의 특징, 입의 모양, 턱의
            형태 등을 종합적으로 분석하여 리더십, 창의성, 분석력, 사교성,
            끈기 5가지 능력치를 수치화하고, 가장 어울리는 직업을 추천합니다.
          </p>
          <p>
            물론 이 분석은 과학적 검증을 거친 것이 아닌, AI가 관상학의
            전통적 해석을 재미있게 적용한 엔터테인먼트 콘텐츠입니다.
            같은 사진이라도 분석할 때마다 약간 다른 결과가 나올 수 있으며,
            이는 AI의 창의적 해석의 일부입니다.
          </p>
        </div>
      </section>

      {/* 더 정확한 분석을 위한 팁 */}
      <section className="mb-16">
        <h2 className="text-xl font-bold text-gray-900 mb-8 text-center">
          더 좋은 결과를 위한 팁
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {TIPS.map((tip) => (
            <div
              key={tip.title}
              className="flex gap-4 p-5 bg-blue-50/50 rounded-2xl border border-blue-100/50"
            >
              <span className="text-2xl flex-shrink-0">{tip.icon}</span>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{tip.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <Link
          href="/"
          className="inline-block px-10 py-3.5 rounded-full bg-[#0070f3] text-white font-semibold shadow-lg shadow-blue-500/25 hover:scale-105 hover:shadow-xl transition-all duration-200"
        >
          나의 관상 분석해보기
        </Link>
      </div>
    </main>
  );
}
