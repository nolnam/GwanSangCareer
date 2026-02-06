import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "관상커리어 - AI 관상 분석으로 찾는 나만의 직업";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0070f3 0%, #4338ca 50%, #6d28d9 100%)",
          fontFamily: "sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Decorative circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -60,
            left: -60,
            width: 250,
            height: 250,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.06)",
          }}
        />

        {/* Logo badge */}
        <div
          style={{
            width: 80,
            height: 80,
            borderRadius: 20,
            background: "rgba(255,255,255,0.2)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: 44,
            fontWeight: 900,
            color: "white",
            marginBottom: 24,
          }}
        >
          관
        </div>

        <div
          style={{
            fontSize: 64,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-2px",
            lineHeight: 1.1,
          }}
        >
          관상커리어
        </div>
        <div
          style={{
            fontSize: 28,
            color: "rgba(255,255,255,0.8)",
            marginTop: 16,
          }}
        >
          AI 관상 분석으로 찾는 나만의 직업
        </div>
        <div
          style={{
            fontSize: 18,
            color: "rgba(255,255,255,0.5)",
            marginTop: 40,
            padding: "10px 28px",
            borderRadius: 9999,
            border: "2px solid rgba(255,255,255,0.25)",
          }}
        >
          사진 한 장으로 무료 분석
        </div>
      </div>
    ),
    { ...size }
  );
}
