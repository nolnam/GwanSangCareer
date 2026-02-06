"use client";

import { useState, useRef, useCallback, useEffect } from "react";
import { useRouter } from "next/navigation";

const ANALYSIS_MESSAGES = [
  "AI가 관상을 현대적으로 해석하는 중...",
  "커리어 데이터를 마이닝하는 중...",
  "얼굴 특징에서 잠재력을 추출하는 중...",
  "당신만의 직업 DNA를 매칭하는 중...",
  "최종 결과를 생성하는 중...",
];

const MIN_ANIMATION_MS = 6000;
const MAX_IMAGE_DIMENSION = 1024;
const COOLDOWN_MS = 5000;

// ── Image resize helper ──
function resizeImage(dataUrl: string, maxDim: number): Promise<string> {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = () => {
      const { width, height } = img;
      if (width <= maxDim && height <= maxDim) {
        resolve(dataUrl);
        return;
      }
      const scale = maxDim / Math.max(width, height);
      const canvas = document.createElement("canvas");
      canvas.width = Math.round(width * scale);
      canvas.height = Math.round(height * scale);
      const ctx = canvas.getContext("2d")!;
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      resolve(canvas.toDataURL("image/jpeg", 0.85));
    };
    img.src = dataUrl;
  });
}

export default function HomeContent() {
  const router = useRouter();
  const [preview, setPreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [analyzing, setAnalyzing] = useState(false);
  const [messageIndex, setMessageIndex] = useState(0);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const apiDone = useRef(false);
  const animDone = useRef(false);
  const lastCallTime = useRef(0);

  const handleFile = useCallback((file: File) => {
    if (!file.type.startsWith("image/")) return;
    const reader = new FileReader();
    reader.onload = (e) => setPreview(e.target?.result as string);
    reader.readAsDataURL(file);
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0];
      if (file) handleFile(file);
    },
    [handleFile]
  );

  const handleReset = useCallback(() => {
    setPreview(null);
    setError(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  }, []);

  const tryNavigate = useCallback(() => {
    if (apiDone.current && animDone.current) {
      const encoded = localStorage.getItem("gwansang-result-id") || "";
      router.push(`/result?data=${encoded}`);
    }
  }, [router]);

  const handleAnalyze = useCallback(async () => {
    if (!preview) return;

    const now = Date.now();
    if (now - lastCallTime.current < COOLDOWN_MS) {
      setError("너무 빠른 요청이에요. 잠시 후 다시 시도해주세요.");
      return;
    }
    lastCallTime.current = now;

    setAnalyzing(true);
    setMessageIndex(0);
    setError(null);
    apiDone.current = false;
    animDone.current = false;

    setTimeout(() => {
      animDone.current = true;
      tryNavigate();
    }, MIN_ANIMATION_MS);

    try {
      const resized = await resizeImage(preview, MAX_IMAGE_DIMENSION);

      const match = resized.match(/^data:(image\/\w+);base64,(.+)$/);
      if (!match) {
        setError("이미지 데이터를 읽을 수 없어요. 다른 사진으로 시도해주세요.");
        setAnalyzing(false);
        return;
      }
      const [, mimeType, base64Data] = match;

      const res = await fetch("/api/analyze", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          image: base64Data,
          mimeType,
          _t: now,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "서버 오류가 발생했어요.");
      }

      const encoded = btoa(
        encodeURIComponent(JSON.stringify(data.result))
      );
      localStorage.setItem("gwansang-photo", preview);
      localStorage.setItem("gwansang-result-id", encoded);

      apiDone.current = true;
      tryNavigate();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "알 수 없는 오류가 발생했어요.";
      setError(message);
      setAnalyzing(false);
    }
  }, [preview, tryNavigate]);

  useEffect(() => {
    if (!analyzing) return;

    const interval = setInterval(() => {
      setMessageIndex((prev) => {
        if (prev >= ANALYSIS_MESSAGES.length - 1) return prev;
        return prev + 1;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, [analyzing]);

  return (
    <main className="max-w-2xl mx-auto px-6 pt-24 pb-32 flex flex-col items-center">
      {!analyzing ? (
        <>
          <h1 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 leading-snug tracking-tight">
            얼굴에 숨겨진 당신의
            <br />
            <span className="text-[#0070f3]">커리어 DNA</span>를 찾으세요
          </h1>
          <p className="mt-4 text-gray-500 text-center text-base">
            사진 한 장으로 AI가 분석하는 나만의 직업 적성
          </p>

          {error && (
            <div className="mt-6 w-full max-w-md px-5 py-4 rounded-xl bg-red-50 border border-red-200 text-red-700 text-sm animate-fadeIn">
              <p className="font-semibold mb-1">분석에 실패했어요</p>
              <p>{error}</p>
            </div>
          )}

          <div
            className={`
              relative mt-12 w-full aspect-[4/3] max-w-md rounded-2xl
              border-2 border-dashed transition-colors duration-200 cursor-pointer
              flex flex-col items-center justify-center overflow-hidden
              ${
                isDragging
                  ? "border-[#0070f3] bg-blue-50/60"
                  : preview
                  ? "border-gray-200 bg-gray-50"
                  : "border-gray-300 bg-gray-50 hover:border-[#0070f3] hover:bg-blue-50/40"
              }
            `}
            onClick={() => fileInputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
          >
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleInputChange}
            />

            {preview ? (
              <>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={preview}
                  alt="미리보기"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReset();
                  }}
                  className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 text-white flex items-center justify-center text-sm hover:bg-black/70 transition-colors"
                >
                  ✕
                </button>
              </>
            ) : (
              <>
                <svg
                  className="w-12 h-12 text-gray-400 mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M12 16V4m0 0l-4 4m4-4l4 4M4 14v4a2 2 0 002 2h12a2 2 0 002-2v-4"
                  />
                </svg>
                <p className="text-gray-500 font-medium">
                  사진을 드래그하거나 클릭하여 업로드
                </p>
                <p className="text-gray-400 text-sm mt-1">
                  JPG, PNG 파일 지원
                </p>
              </>
            )}
          </div>

          <button
            disabled={!preview}
            onClick={handleAnalyze}
            className={`
              mt-8 px-10 py-3.5 rounded-full text-base font-semibold
              transition-all duration-200 ease-out
              ${
                preview
                  ? "bg-[#0070f3] text-white shadow-lg shadow-blue-500/25 hover:scale-105 hover:shadow-xl hover:shadow-blue-500/30 active:scale-100"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }
            `}
          >
            나의 직업상 분석하기
          </button>

          {/* Trust badges */}
          <div className="mt-10 flex items-center gap-6 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              사진 미저장
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              무료 분석
            </div>
            <div className="flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              AI 기반
            </div>
          </div>
        </>
      ) : (
        <div className="flex flex-col items-center pt-12 animate-fadeIn">
          <div className="relative w-48 h-48 rounded-full overflow-hidden mb-10 shadow-xl shadow-blue-500/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={preview!}
              alt="분석 중"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 rounded-full overflow-hidden">
              <div className="scan-line" />
            </div>
            <div className="absolute inset-0 rounded-full border-2 border-[#0070f3] animate-pulseRing" />
          </div>

          <div className="flex gap-1.5 mb-8">
            <span className="dot dot-1" />
            <span className="dot dot-2" />
            <span className="dot dot-3" />
          </div>

          <p
            key={messageIndex}
            className="text-lg font-medium text-gray-700 animate-fadeIn text-center"
          >
            {ANALYSIS_MESSAGES[messageIndex]}
          </p>

          <div className="mt-8 w-64 h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div
              className="h-full bg-[#0070f3] rounded-full transition-all duration-500 ease-out"
              style={{
                width: `${((messageIndex + 1) / ANALYSIS_MESSAGES.length) * 100}%`,
              }}
            />
          </div>
        </div>
      )}
    </main>
  );
}
