import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "관상커리어 - AI 관상 분석";
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
          background: "linear-gradient(135deg, #0070f3 0%, #4338ca 100%)",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            fontSize: 72,
            fontWeight: 800,
            color: "white",
            letterSpacing: "-2px",
          }}
        >
          관상커리어
        </div>
        <div
          style={{
            fontSize: 32,
            color: "rgba(255,255,255,0.8)",
            marginTop: 16,
          }}
        >
          AI 관상 분석으로 찾는 나만의 직업
        </div>
        <div
          style={{
            fontSize: 20,
            color: "rgba(255,255,255,0.6)",
            marginTop: 40,
            padding: "12px 32px",
            borderRadius: 9999,
            border: "2px solid rgba(255,255,255,0.3)",
          }}
        >
          사진 한 장으로 무료 분석
        </div>
      </div>
    ),
    { ...size }
  );
}
