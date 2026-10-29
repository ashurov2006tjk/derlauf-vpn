import type { Metadata, Viewport } from "next";
import { Inter, Unbounded } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const display = Unbounded({ subsets: ["latin", "cyrillic"], variable: "--font-display", display: "swap" });
const body = Inter({ subsets: ["latin", "cyrillic"], variable: "--font-body", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "DERLAUF VPN — Твоя конфиденциальность. Твоё соединение.", template: "%s — DERLAUF VPN" },
  description: site.description,
  openGraph: { type: "website", locale: "ru_RU", siteName: site.name, title: site.name, description: site.description, images: ["/logo.png"] },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#050506", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ru" className={`${display.variable} ${body.variable}`}>
      <body>
        <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-50 focus:rounded-lg focus:bg-white focus:px-4 focus:py-2 focus:text-ink">
          Перейти к содержимому
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
