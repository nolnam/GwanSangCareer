import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-[60vh] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="text-6xl font-bold text-[#0070f3]">404</h1>
      <p className="mt-4 text-xl text-gray-900 font-semibold">
        페이지를 찾을 수 없어요
      </p>
      <p className="mt-2 text-gray-500">
        요청하신 페이지가 존재하지 않거나 이동되었어요.
      </p>
      <Link
        href="/"
        className="mt-8 px-8 py-3 rounded-full bg-[#0070f3] text-white font-semibold hover:scale-105 transition-transform"
      >
        홈으로 돌아가기
      </Link>
    </main>
  );
}
