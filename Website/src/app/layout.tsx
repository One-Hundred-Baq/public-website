import type { Metadata } from "next";
import { Rubik, Audiowide } from "next/font/google";
import "./globals.css";
import { SiteProvider, noFlashScript } from "@/lib/providers";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
  display: "swap",
});

const audiowide = Audiowide({
  variable: "--font-audiowide",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://one-hundred-baq.github.io/public-website";
const SITE_TITLE = "One Hundred";
const SITE_DESCRIPTION =
  "One Hundred builds real AI products — talk to the agent to find out how.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_TITLE,
    template: "%s — One Hundred",
  },
  description: SITE_DESCRIPTION,
  robots: { index: true, follow: true },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    url: SITE_URL,
  },
  twitter: {
    card: "summary",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${rubik.variable} ${audiowide.variable}`}
      suppressHydrationWarning
    >
      <head>
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; connect-src 'self' https://*.cloudfunctions.net https://*.run.app; img-src 'self' data:; base-uri 'none'; frame-ancestors 'none'"
        />
        <meta name="theme-color" content="#0a0a0b" />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        <script dangerouslySetInnerHTML={{ __html: noFlashScript }} />
      </head>
      <body className="min-h-screen flex flex-col bg-canvas text-ink antialiased">
        <a
          href="#main"
          className="skip-link absolute -translate-y-full opacity-0 focus:opacity-100"
        >
          Skip to content
        </a>
        <SiteProvider>
          <Header />
          {children}
          <Footer />
        </SiteProvider>
      </body>
    </html>
  );
}
