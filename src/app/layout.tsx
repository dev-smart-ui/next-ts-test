import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next App",
  description: "Next App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="mt-8 pb-10">
          <div className="sm:max-w-xl lg:max-w-3xl w-full mx-auto px-4 sm:px-0">
            {children}
          </div>
        </main>
        <Footer />
      </body>
    </html>
  );
}
