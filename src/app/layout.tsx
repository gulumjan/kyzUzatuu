import "./globals.scss";
import type { Metadata } from "next";
import { Noto_Serif, Noto_Sans, Marck_Script } from "next/font/google";

const serif = Noto_Serif({
  subsets: ["cyrillic", "latin"],
  weight: ["400", "600"],
  variable: "--f-serif",
});
const sans = Noto_Sans({
  subsets: ["cyrillic", "latin"],
  weight: ["300", "400", "500"],
  variable: "--f-sans",
});
const script = Marck_Script({
  subsets: ["cyrillic", "latin"],
  weight: "400",
  variable: "--f-script",
});

export const metadata: Metadata = {
  title: "Кыз узатуу — Сурмаш",
  description: "Сурмаш кыз узатуу тоюна чакыруу — 2026-жылдын 8-октябры",
  openGraph: {
    title: "Кыз узатуу — Сурмаш",
    description: "Тойго чакыруу",
    images: ["/heroImg.png"],
    locale: "ky_KG",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="ky"
      className={`${serif.variable} ${sans.variable} ${script.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
