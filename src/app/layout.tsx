import type { Metadata } from "next";
import { Playfair_Display, Manrope, Barlow_Condensed } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

/* Substituta livre da DIN Condensed Light, que é comercial (Monotype) e não
   pode ser embutida sem licença. A pilha em --font-titulo (globals.css) tenta
   a DIN primeiro: basta instalá-la ou adicioná-la via next/font/local para
   ela assumir, sem mexer em nenhum componente. */
const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["300"],
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
      className={`${playfair.variable} ${manrope.variable} ${barlowCondensed.variable} h-full antialiased`}
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
