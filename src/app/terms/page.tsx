import { Metadata } from "next";

export const metadata: Metadata = {
  title: "이용약관",
  description:
    "관상커리어 서비스 이용약관입니다. 서비스 이용 조건, 면책사항, 저작권 등을 안내합니다.",
};

export default function TermsPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">이용약관</h1>
      <p className="text-sm text-gray-400 mb-12">시행일: 2025년 1월 1일</p>

      <div className="space-y-10 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제1조 (목적)</h2>
          <p>
            본 약관은 관상커리어(이하 &ldquo;서비스&rdquo;)의 이용 조건 및
            절차, 이용자와 서비스 제공자 간의 권리와 의무에 관한 사항을
            규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제2조 (서비스 내용)</h2>
          <p>
            서비스는 이용자가 업로드한 사진을 AI로 분석하여 관상에 기반한
            직업 추천 결과를 제공하는 무료 엔터테인먼트 서비스입니다.
            분석 결과에는 추천 직업, 위트 있는 설명, 그리고 리더십, 창의성,
            분석력, 사교성, 끈기 등 5가지 능력치 점수가 포함됩니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제3조 (서비스 이용)</h2>
          <p className="mb-3">이용자는 서비스 이용 시 다음 사항을 준수해야 합니다:</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>본인의 사진 또는 정당한 권한이 있는 사진만 업로드해야 합니다.</li>
            <li>타인의 사진을 무단으로 업로드하거나, 불쾌감을 줄 수 있는 이미지를 업로드해서는 안 됩니다.</li>
            <li>자동화된 도구를 이용하여 대량으로 분석을 요청하는 행위는 금지됩니다.</li>
            <li>서비스의 정상적인 운영을 방해하는 행위를 해서는 안 됩니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제4조 (면책사항)</h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              분석 결과는 AI가 생성한 엔터테인먼트 콘텐츠이며, 과학적 근거에
              기반한 직업 적성 평가가 아닙니다.
            </li>
            <li>
              서비스 제공자는 분석 결과의 정확성, 완전성, 신뢰성을
              보장하지 않습니다.
            </li>
            <li>
              이용자가 분석 결과를 기반으로 내린 결정에 대해 서비스 제공자는
              책임을 지지 않습니다.
            </li>
            <li>
              중요한 커리어 결정은 전문 진로 상담사와 상담하시기 바랍니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제5조 (지적재산권)</h2>
          <p>
            서비스의 디자인, 로고, 텍스트, 코드 등 모든 콘텐츠에 대한
            지적재산권은 서비스 제공자에게 귀속됩니다. 이용자는 서비스를
            통해 제공받은 분석 결과를 개인적인 용도로 자유롭게 공유할 수
            있으나, 상업적 목적으로 사용할 수 없습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제6조 (서비스 변경 및 중단)</h2>
          <p>
            서비스 제공자는 운영상, 기술상의 필요에 따라 서비스의 전부 또는
            일부를 변경하거나 중단할 수 있습니다. 서비스 변경 또는 중단으로
            인한 이용자의 손해에 대해 서비스 제공자는 별도의 보상 의무를
            지지 않습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제7조 (광고)</h2>
          <p>
            서비스는 Google 애드센스를 통한 광고를 포함할 수 있습니다.
            광고 콘텐츠는 서비스 제공자가 직접 제작한 것이 아니며,
            광고 내용에 대한 책임은 해당 광고주에게 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제8조 (준거법)</h2>
          <p>
            본 약관의 해석 및 적용에 관하여는 대한민국 법률을 준거법으로
            합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제9조 (문의)</h2>
          <p>
            이용약관에 관한 문의사항은 아래 이메일로 연락해 주시기 바랍니다.
          </p>
          <p className="mt-2 text-sm font-medium text-gray-900">
            이메일: gwansang.career@gmail.com
          </p>
        </section>
      </div>
    </main>
  );
}
