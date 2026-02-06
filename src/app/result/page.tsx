"use client";

import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Suspense } from "react";

interface AnalysisResult {
  mainJob: string;
  description: string;
  stats: Record<string, number>;
}

const STAT_ICONS: Record<string, string> = {
  리더십: "👑",
  창의성: "💡",
  분석력: "🔬",
  사교성: "🤝",
  끈기: "🔥",
};

function getGrade(avg: number): { label: string; color: string } {
  if (avg >= 90) return { label: "S", color: "from-yellow-400 to-amber-500" };
  if (avg >= 75) return { label: "A", color: "from-[#0070f3] to-blue-600" };
  if (avg >= 60) return { label: "B", color: "from-emerald-400 to-green-500" };
  return { label: "C", color: "from-gray-400 to-gray-500" };
}

function ResultContent() {
  const searchParams = useSearchParams();
  const [result, setResult] = useState<AnalysisResult | null>(null);
  const [photo, setPhoto] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [copied, setCopied] = useState(false);
  const [isOwner, setIsOwner] = useState(false);

  useEffect(() => {
    const dataParam = searchParams.get("data");
    if (dataParam) {
      try {
        const decoded = JSON.parse(decodeURIComponent(atob(dataParam)));
        setResult(decoded);
      } catch {
        setResult(null);
      }
    }

    // Photo is only available for the person who took the analysis (localStorage)
    const storedPhoto = localStorage.getItem("gwansang-photo");
    const storedId = localStorage.getItem("gwansang-result-id");
    if (storedPhoto && storedId === dataParam) {
      setPhoto(storedPhoto);
      setIsOwner(true);
    }

    requestAnimationFrame(() => setMounted(true));
  }, [searchParams]);

  const handleCopyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = window.location.href;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      document.body.removeChild(ta);
    }

    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, []);

  // ── Empty state ──
  if (!result) {
    return (
      <div className="min-h-screen bg-white">
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
            <Link href="/" className="text-xl font-bold tracking-tight text-[#0070f3]">
              관상커리어
            </Link>
          </div>
        </nav>
        <main className="max-w-2xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center text-center">
          <p className="text-gray-500">분석 결과가 없어요.</p>
          <Link
            href="/"
            className="mt-6 px-8 py-3 rounded-full bg-[#0070f3] text-white font-semibold hover:scale-105 transition-transform"
          >
            사진 분석하러 가기
          </Link>
        </main>
      </div>
    );
  }

  const statEntries = Object.entries(result.stats);
  const avgScore = Math.round(
    statEntries.reduce((sum, [, v]) => sum + v, 0) / statEntries.length
  );
  const grade = getGrade(avgScore);

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center">
          <Link href="/" className="text-xl font-bold tracking-tight text-[#0070f3]">
            관상커리어
          </Link>
        </div>
      </nav>

      <main className="max-w-xl mx-auto px-5 pt-10 pb-28">
        {/* ── Hero Card ── */}
        <div className="result-card relative bg-white rounded-3xl shadow-xl shadow-gray-200/60 overflow-hidden slide-up">
          <div className="h-28 bg-gradient-to-br from-[#0070f3] via-blue-500 to-indigo-600 relative">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_30%_50%,white_0%,transparent_60%)]" />
          </div>

          <div className="flex flex-col items-center -mt-16 relative z-10 px-6">
            {photo ? (
              <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-white shadow-lg">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={photo} alt="분석 사진" className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-200 ring-4 ring-white shadow-lg flex items-center justify-center">
                <span className="text-4xl">🧑</span>
              </div>
            )}

            <div
              className={`
                mt-4 w-12 h-12 rounded-2xl bg-gradient-to-br ${grade.color}
                flex items-center justify-center text-white text-xl font-black
                shadow-lg rotate-3 grade-pop
              `}
            >
              {grade.label}
            </div>

            <p className="mt-4 text-xs font-semibold text-[#0070f3] tracking-widest uppercase">
              AI 관상 분석 결과
            </p>
            <h1 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 text-center">
              {result.mainJob}
            </h1>
          </div>

          <div className="mx-6 mt-6 mb-8 p-5 bg-slate-50 rounded-2xl border border-slate-100">
            <p className="text-gray-600 text-center leading-relaxed text-[15px]">
              &ldquo;{result.description}&rdquo;
            </p>
          </div>
        </div>

        {/* ── Stats Card ── */}
        <div className="mt-6 bg-white rounded-3xl shadow-xl shadow-gray-200/60 p-6 slide-up" style={{ animationDelay: "0.15s" }}>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">능력치 분석</h2>
            <span className="text-sm text-gray-400">
              평균{" "}
              <span className="font-bold text-[#0070f3]">{avgScore}</span>점
            </span>
          </div>

          <div className="space-y-5">
            {statEntries.map(([label, value], i) => (
              <div key={label} className="stat-row" style={{ animationDelay: `${0.3 + i * 0.1}s` }}>
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{STAT_ICONS[label] || "📊"}</span>
                    <span className="text-sm font-semibold text-gray-800">{label}</span>
                  </div>
                  <span className="text-sm font-bold text-[#0070f3] tabular-nums">
                    {value}
                  </span>
                </div>
                <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="stat-bar h-full rounded-full"
                    style={{
                      width: mounted ? `${value}%` : "0%",
                      transitionDelay: `${0.4 + i * 0.12}s`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Summary Card ── */}
        <div
          className="mt-6 bg-gradient-to-br from-[#0070f3] to-indigo-600 rounded-3xl p-6 text-white shadow-xl shadow-blue-500/20 slide-up"
          style={{ animationDelay: "0.3s" }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-lg">
              🎯
            </div>
            <h2 className="text-lg font-bold">종합 평가</h2>
          </div>
          <p className="text-blue-100 text-sm leading-relaxed">
            당신의 관상 적합 직업은{" "}
            <span className="font-bold text-white">{result.mainJob}</span>이며,
            종합 점수 <span className="font-bold text-white">{avgScore}점</span>으로{" "}
            <span className="font-bold text-white">{grade.label}등급</span>을
            받았어요.
            {avgScore >= 80
              ? " 타고난 재능이 빛나는 관상이네요!"
              : avgScore >= 60
              ? " 잠재력이 가득한 관상이에요!"
              : " 숨은 가능성이 무궁무진해요!"}
          </p>
        </div>

        {/* ── CTA Buttons ── */}
        <div
          className="mt-8 flex flex-col sm:flex-row gap-3 slide-up"
          style={{ animationDelay: "0.45s" }}
        >
          <Link
            href="/"
            className="flex-1 py-3.5 rounded-full bg-[#0070f3] text-white text-center font-semibold shadow-lg shadow-blue-500/25 hover:scale-[1.03] hover:shadow-xl hover:shadow-blue-500/30 active:scale-100 transition-all duration-200"
          >
            {isOwner ? "다시 분석하기" : "나도 분석해보기"}
          </Link>
          <button
            onClick={handleCopyLink}
            className={`
              flex-1 py-3.5 rounded-full text-center font-semibold
              transition-all duration-200
              ${
                copied
                  ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/25"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-50 hover:scale-[1.03] active:scale-100"
              }
            `}
          >
            {copied ? "✓ 복사 완료!" : "결과 공유하기"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default function ResultPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-white flex items-center justify-center">
          <div className="flex gap-1.5">
            <span className="dot dot-1" />
            <span className="dot dot-2" />
            <span className="dot dot-3" />
          </div>
        </div>
      }
    >
      <ResultContent />
    </Suspense>
  );
}
