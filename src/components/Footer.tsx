import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="text-lg font-bold text-[#0070f3]">
              관상커리어
            </Link>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              AI 관상 분석으로 당신에게 어울리는
              <br />
              직업을 찾아보세요.
            </p>
          </div>

          {/* Service links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">서비스</h3>
            <ul className="space-y-2.5">
              {[
                { href: "/", label: "홈" },
                { href: "/guide", label: "관상 가이드" },
                { href: "/faq", label: "자주 묻는 질문" },
                { href: "/about", label: "서비스 소개" },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-gray-500 hover:text-[#0070f3] transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-sm font-semibold text-gray-900 mb-4">법적 고지</h3>
            <ul className="space-y-2.5">
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-500 hover:text-[#0070f3] transition-colors"
                >
                  개인정보처리방침
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-500 hover:text-[#0070f3] transition-colors"
                >
                  이용약관
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-gray-200">
          <p className="text-xs text-gray-400 text-center">
            &copy; {new Date().getFullYear()} 관상커리어. All rights reserved.
          </p>
          <p className="text-xs text-gray-400 text-center mt-1">
            본 서비스는 재미를 위한 것이며, 실제 커리어 결정에 참고하지 마세요.
          </p>
        </div>
      </div>
    </footer>
  );
}
