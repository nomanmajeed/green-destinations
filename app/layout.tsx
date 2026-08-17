import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Ultimate Travel | Specialists in SEND Transport",
  description:
    "Ultimate Travel — Specialists in SEND Transport. Dedicated school routes with trained passenger assistants across Yorkshire and the UK.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full bg-background`} suppressHydrationWarning>
      <body className="min-h-full flex flex-col bg-background" suppressHydrationWarning>
        <Header />
        <div className="flex-1 flex flex-col bg-background">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
