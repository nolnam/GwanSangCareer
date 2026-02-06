import { NextRequest, NextResponse } from "next/server";

const SYSTEM_PROMPT = `너는 현대적 관상가이자 커리어 전문가야. 사용자의 사진을 보고 눈매, 이마, 입꼬리 등 특징을 분석해줘.

결과는 반드시 아래 JSON 형식으로만 응답해. 다른 텍스트 없이 순수 JSON만 줘:
{
  "mainJob": "직업명",
  "description": "위트 있는 설명 (2~3문장)",
  "stats": {
    "리더십": 0~100 사이 숫자,
    "창의성": 0~100 사이 숫자,
    "분석력": 0~100 사이 숫자,
    "사교성": 0~100 사이 숫자,
    "끈기": 0~100 사이 숫자
  }
}

설명은 위트 있게 '부장님도 눈치 볼 전설의 관상' 같은 느낌으로 써줘.
stats의 각 항목은 얼굴 특징에 기반해서 재미있게 수치를 매겨줘.`;

// ── Server-side rate limit (per IP, in-memory) ──
const rateLimitMap = new Map<string, number[]>();
const RATE_WINDOW_MS = 60_000; // 1 minute
const RATE_MAX_REQUESTS = 5; // max 5 per minute per IP

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) || []).filter(
    (t) => now - t < RATE_WINDOW_MS
  );

  if (timestamps.length >= RATE_MAX_REQUESTS) {
    rateLimitMap.set(ip, timestamps);
    return true;
  }

  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
}

// ── Max request body size guard (roughly 5MB base64) ──
const MAX_BODY_SIZE = 5 * 1024 * 1024;

export async function POST(request: NextRequest) {
  try {
    // ── Server-side spam prevention ──
    const forwarded = request.headers.get("x-forwarded-for");
    const ip = forwarded?.split(",")[0]?.trim() || "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "요청이 너무 많아요. 1분 후 다시 시도해주세요." },
        { status: 429 }
      );
    }

    const apiKey =
      process.env.GEMINI_API_KEY || process.env.NEXT_PUBLIC_GEMINI_API_KEY;

    if (!apiKey || apiKey === "여기에_실제_API_키를_입력하세요") {
      return NextResponse.json(
        {
          error:
            "API 키가 설정되지 않았어요. .env.local 파일을 확인해주세요.",
        },
        { status: 500 }
      );
    }

    // ── Body size check ──
    const contentLength = parseInt(
      request.headers.get("content-length") || "0",
      10
    );
    if (contentLength > MAX_BODY_SIZE) {
      return NextResponse.json(
        { error: "이미지가 너무 커요. 더 작은 사진으로 시도해주세요." },
        { status: 413 }
      );
    }

    const { image, mimeType } = await request.json();

    if (!image) {
      return NextResponse.json(
        { error: "이미지가 전달되지 않았어요." },
        { status: 400 }
      );
    }

    const geminiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

    const geminiResponse = await fetch(geminiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        system_instruction: {
          parts: [{ text: SYSTEM_PROMPT }],
        },
        contents: [
          {
            parts: [
              {
                text: "이 사진의 관상을 분석해서 어울리는 직업을 알려줘.",
              },
              {
                inline_data: {
                  mime_type: mimeType || "image/jpeg",
                  data: image,
                },
              },
            ],
          },
        ],
        generation_config: {
          temperature: 0.9,
          max_output_tokens: 1024,
        },
      }),
    });

    if (!geminiResponse.ok) {
      const errorData = await geminiResponse.json().catch(() => null);
      const message =
        errorData?.error?.message ||
        `Gemini API 오류 (${geminiResponse.status})`;
      return NextResponse.json(
        { error: message },
        { status: geminiResponse.status }
      );
    }

    const data = await geminiResponse.json();
    const rawText =
      data?.candidates?.[0]?.content?.parts?.[0]?.text ?? "";

    // Extract JSON from the response (handles markdown code fences)
    const jsonMatch = rawText.match(/\{[\s\S]*\}/);
    if (!jsonMatch) {
      return NextResponse.json(
        { error: "AI 응답을 해석할 수 없어요. 다시 시도해주세요." },
        { status: 502 }
      );
    }

    const result = JSON.parse(jsonMatch[0]);

    return NextResponse.json({ result });
  } catch (err: unknown) {
    const message =
      err instanceof Error ? err.message : "알 수 없는 오류가 발생했어요.";
    return NextResponse.json(
      { error: `분석 중 문제가 발생했어요: ${message}` },
      { status: 500 }
    );
  }
}
