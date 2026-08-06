import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Mengenal Desa Derik - Banjarnegara",
  description: "Eksplorasi keindahan alam, budaya, dan potensi lokal Desa Derik, Kecamatan Susukan, Banjarnegara.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className="min-h-screen bg-slate-50 text-slate-900 antialiased selection:bg-slate-200">
        <Navbar />
        <main className="pt-28 pb-16 px-4 max-w-5xl mx-auto">
          {children}
        </main>
      </body>
    </html>
  );
}