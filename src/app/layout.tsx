import type { Metadata } from "next";
import { Bodoni_Moda, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

/* Didot (títulos) e Big Caslon (texto) são as fontes da identidade, mas
   ambas são comerciais. Bodoni Moda e Libre Caslon Text são as
   equivalentes livres mais próximas de cada uma. */
const bodoni = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const caslon = Libre_Caslon_Text({
  variable: "--font-texto",
  subsets: ["latin"],
  weight: ["400", "700"],
  style: ["normal", "italic"],
});


export const metadata: Metadata = {
  title: "Vinhos na Serra",
  description: "Uma experiência construída entre a terra, o tempo e a paixão pelo vinho brasileiro.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${bodoni.variable} ${caslon.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans">
        <Header />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
