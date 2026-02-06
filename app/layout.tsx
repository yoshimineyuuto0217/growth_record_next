import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { isAuth } from "@/lib/auth/cookies";

export const metadata: Metadata = {
  title: "学習記録アプリ",
  description: "学習記録を付けるためのアプリです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`antialiased text-black min-h-screen flex flex-col `}
      >
        <Header auth={isAuth} />
        <main className="grow flex mb-[5%]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
