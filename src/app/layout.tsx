import type { Metadata } from "next";
import localFont from "next/font/local";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: {
    default: "관상커리어 - AI 관상 분석으로 찾는 나만의 직업",
    template: "%s | 관상커리어",
  },
  description:
    "AI 관상 분석으로 당신의 얼굴에 숨겨진 커리어 DNA를 찾아보세요. 사진 한 장으로 나만의 직업 적성을 무료로 분석합니다.",
  keywords: [
    "관상",
    "AI 관상",
    "관상 분석",
    "직업 추천",
    "커리어",
    "얼굴 분석",
    "관상커리어",
    "직업 적성",
  ],
  authors: [{ name: "관상커리어" }],
  creator: "관상커리어",
  publisher: "관상커리어",
  metadataBase: new URL("https://gwansang-career.vercel.app"),
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "ko_KR",
    url: "https://gwansang-career.vercel.app",
    siteName: "관상커리어",
    title: "관상커리어 - AI 관상 분석으로 찾는 나만의 직업",
    description:
      "사진 한 장으로 AI가 분석하는 나만의 직업 적성. 당신의 얼굴에 숨겨진 커리어 DNA를 찾아보세요.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "관상커리어 - AI 관상 분석",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "관상커리어 - AI 관상 분석으로 찾는 나만의 직업",
    description: "사진 한 장으로 AI가 분석하는 나만의 직업 적성",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2931046384647465"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "관상커리어",
              url: "https://gwansang-career.vercel.app",
              description:
                "AI 관상 분석으로 당신에게 어울리는 직업을 찾아보세요",
              applicationCategory: "EntertainmentApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "KRW",
              },
              inLanguage: "ko",
            }),
          }}
        />
      </head>
      <body className={`${geistSans.variable} antialiased`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
