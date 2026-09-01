import type { Metadata, Viewport } from "next";
import { Bodoni_Moda, Libre_Caslon_Text } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import VerificacaoIdade from "@/components/VerificacaoIdade";
import JsonLd, { organizationSchema, websiteSchema } from "@/components/JsonLd";
import { OG_IMAGE, SITE_DESCRIPTION, SITE_NAME, SITE_URL, absoluteUrl } from "@/lib/site";

/* Didot (títulos) e Big Caslon (texto) são as fontes da identidade, mas
   ambas são comerciais. Bodoni Moda e Libre Caslon Text são as
   equivalentes livres mais próximas de cada uma.
   Só os pesos realmente usados são baixados: os títulos são todos regulares
   e o negrito aparece apenas no texto corrido. */
const bodoni = Bodoni_Moda({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

const caslon = Libre_Caslon_Text({
  variable: "--font-texto",
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Vinhos na Serra | Adega e confraria de vinhos brasileiros em Teresópolis",
    template: `%s | ${SITE_NAME}`,
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  alternates: { canonical: absoluteUrl("/") },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "pt_BR",
    siteName: SITE_NAME,
    url: absoluteUrl("/"),
    title: "Vinhos na Serra | Adega e confraria de vinhos brasileiros em Teresópolis",
    description: SITE_DESCRIPTION,
    images: [{ ...OG_IMAGE, url: absoluteUrl(OG_IMAGE.url) }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Vinhos na Serra | Adega e confraria de vinhos brasileiros em Teresópolis",
    description: SITE_DESCRIPTION,
    images: [absoluteUrl(OG_IMAGE.url)],
  },
  /* Preenchido pela variável de ambiente GOOGLE_SITE_VERIFICATION quando for
     conectar o Google Search Console (opção "tag HTML"). Sem a variável,
     nenhuma meta é gerada. */
  verification: process.env.GOOGLE_SITE_VERIFICATION
    ? { google: process.env.GOOGLE_SITE_VERIFICATION }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: "#2c3117",
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
        {/* Só aparece ao navegar por teclado; pula o menu e vai ao conteúdo. */}
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-off-white focus:px-5 focus:py-2 focus:text-sm focus:text-verde-serra"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="conteudo" className="flex-1 pt-20">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        {/* Porta de entrada: a pergunta de maioridade cobre o site inteiro. */}
        <VerificacaoIdade />
        <JsonLd data={organizationSchema()} />
        <JsonLd data={websiteSchema()} />
      </body>
    </html>
  );
}
