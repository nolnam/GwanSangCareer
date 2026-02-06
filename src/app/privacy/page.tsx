import { Metadata } from "next";

export const metadata: Metadata = {
  title: "개인정보처리방침",
  description:
    "관상커리어의 개인정보처리방침입니다. 사진 데이터 처리, 쿠키 사용, 광고 관련 정보를 안내합니다.",
};

export default function PrivacyPage() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold text-gray-900 mb-2">개인정보처리방침</h1>
      <p className="text-sm text-gray-400 mb-12">시행일: 2025년 1월 1일</p>

      <div className="space-y-10 text-gray-600 leading-relaxed">
        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제1조 (목적)</h2>
          <p>
            본 개인정보처리방침은 관상커리어(이하 &ldquo;서비스&rdquo;)가 이용자의
            개인정보를 어떻게 수집, 이용, 보관, 파기하는지에 대한 사항을
            규정함을 목적으로 합니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제2조 (수집하는 개인정보)</h2>
          <p className="mb-3">서비스는 다음과 같은 정보를 수집할 수 있습니다:</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <strong>업로드한 사진:</strong> 관상 분석을 위해 일시적으로 처리됩니다.
              사진은 서버 메모리에서 분석 후 즉시 폐기되며, 별도로 저장하지 않습니다.
            </li>
            <li>
              <strong>IP 주소:</strong> 서비스 남용 방지를 위한 접속 빈도 제한(레이트 리밋)
              목적으로 일시적으로 수집됩니다.
            </li>
            <li>
              <strong>쿠키 및 유사 기술:</strong> Google 애드센스 광고 제공을 위해
              제3자 쿠키가 사용될 수 있습니다.
            </li>
            <li>
              <strong>로컬 스토리지 데이터:</strong> 분석 결과와 미리보기 사진은
              이용자의 브라우저(localStorage)에만 저장되며, 서버로 전송되지 않습니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제3조 (개인정보의 이용 목적)</h2>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>업로드된 사진: AI 관상 분석 서비스 제공</li>
            <li>IP 주소: 서비스 남용 방지 및 접속 빈도 제한</li>
            <li>쿠키: 맞춤형 광고 제공 및 서비스 개선</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제4조 (개인정보의 보관 및 파기)</h2>
          <p>
            업로드된 사진은 서버에 저장되지 않으며, 분석 처리 후 메모리에서
            즉시 삭제됩니다. IP 주소 기반의 접속 기록은 서버 메모리에서
            최대 1분간 유지된 후 자동으로 삭제됩니다. 브라우저 로컬 스토리지에
            저장된 데이터는 이용자가 직접 삭제할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제5조 (제3자 제공)</h2>
          <p className="mb-3">서비스는 다음의 제3자에게 정보를 전달할 수 있습니다:</p>
          <ul className="list-disc list-inside space-y-2 text-sm">
            <li>
              <strong>Google Gemini API:</strong> 업로드된 사진을 AI 분석을 위해
              Google의 Gemini API로 전송합니다. 전송된 데이터는 Google의
              개인정보처리방침에 따라 처리됩니다.
            </li>
            <li>
              <strong>Google 애드센스:</strong> 광고 제공을 위해 쿠키 등의 기술을
              사용할 수 있으며, 이는 Google의 광고 정책에 따릅니다.
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제6조 (쿠키 사용)</h2>
          <p>
            본 서비스는 Google 애드센스를 통해 광고를 제공하며, 이 과정에서
            쿠키가 사용될 수 있습니다. Google은 쿠키를 사용하여 이용자의
            관심사에 기반한 광고를 표시합니다. 이용자는 브라우저 설정에서
            쿠키를 비활성화할 수 있으나, 이 경우 서비스 이용에 제한이
            있을 수 있습니다. Google의 광고 쿠키 사용에 대한 자세한 내용은{" "}
            <a
              href="https://policies.google.com/technologies/ads"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0070f3] hover:underline"
            >
              Google 광고 정책
            </a>
            에서 확인할 수 있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제7조 (이용자의 권리)</h2>
          <p>이용자는 다음과 같은 권리를 행사할 수 있습니다:</p>
          <ul className="list-disc list-inside space-y-2 text-sm mt-3">
            <li>브라우저의 로컬 스토리지를 삭제하여 저장된 분석 결과를 제거할 수 있습니다.</li>
            <li>브라우저 설정에서 쿠키를 관리하거나 삭제할 수 있습니다.</li>
            <li>개인정보 관련 문의사항은 아래 연락처로 문의할 수 있습니다.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제8조 (광고)</h2>
          <p>
            본 서비스는 Google 애드센스를 통해 광고를 게재합니다. Google 및
            제3자 광고 업체는 쿠키를 사용하여 이용자가 본 서비스 또는 다른
            웹사이트를 방문한 이력을 기반으로 광고를 게재할 수 있습니다.
            이용자는 Google 광고 설정 페이지에서 맞춤 광고를 비활성화할 수
            있습니다.
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold text-gray-900 mb-3">제9조 (문의)</h2>
          <p>
            개인정보처리방침에 관한 문의사항은 아래 이메일로 연락해 주시기 바랍니다.
          </p>
          <p className="mt-2 text-sm font-medium text-gray-900">
            이메일: gwansang.career@gmail.com
          </p>
        </section>
      </div>
    </main>
  );
}
