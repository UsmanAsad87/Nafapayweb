import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Pre-launch metadata — deliberately generic. Until 15 juillet 2026 we
// don't want search engines or social-card previews to expose product
// positioning (marketplace, "save-now buy-later", partner banks). Both
// the description and the OG copy stay neutral; the legal pages have
// their own per-page metadata that's allowed to be specific because
// store-listing reviewers will visit them directly.
export const metadata: Metadata = {
  metadataBase: new URL("https://nafapay.africa"),
  title: {
    default: "Nafa Pay",
    template: "%s · Nafa Pay",
  },
  description: "Nafa Pay — bientôt disponible.",
  authors: [{ name: "IMCO Digital S.A.U" }],
  openGraph: {
    type: "website",
    locale: "fr_SN",
    title: "Nafa Pay",
    description: "Nafa Pay — bientôt disponible.",
    siteName: "Nafa Pay",
    images: ["/nafapay-logo.png"],
  },
  icons: {
    icon: "/nafapay-logo.png",
    apple: "/nafapay-logo.png",
  },
  robots: {
    // Allow indexing so the legal URLs the stores need are
    // discoverable, but no aggressive crawling/preview while we're
    // still pre-launch.
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
