import LoginSuccessToast from "@/components/shared/LoginSuccessToast";
import LogoutSuccessToast from "@/components/shared/LogoutSuccessToast";
import type { Metadata } from "next";
import {  Sue_Ellen_Francisco , Montserrat } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "sonner";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const sueEllenFrancisco = Sue_Ellen_Francisco({
  variable: "--font-sue-ellen-francisco",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "NextMed | Health-Care-With-AI",
  description: "A healthcare application built with Next.js and AI. Get personalized recommendations and book appointments effortlessly.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} ${sueEllenFrancisco.variable} antialiased`}
      >
        {children}
        <Toaster position="bottom-right" richColors />
        <Suspense fallback={null}>
          <LoginSuccessToast />
          <LogoutSuccessToast />
        </Suspense>
      </body>
    </html>
  );
}
