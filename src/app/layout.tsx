import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Site-wide metadata. Used for Google + social-card previews when the
// store listing or any blog post links to the site. The French primary
// audience matches the legal docs (Politique de Confidentialité +
// CGU NAFA PAY) which are both in French.
export const metadata: Metadata = {
  metadataBase: new URL("https://nafapay.africa"),
  title: {
    default: "Nafa Pay — Épargnez maintenant, achetez plus tard",
    template: "%s · Nafa Pay",
  },
  description:
    "La marketplace sénégalaise qui sécurise vos paiements progressifs. Fonds conservés sur un compte de cantonnement chez FBN Bank Sénégal. Édité par IMCO Digital.",
  keywords: [
    "Nafa Pay", "NafaPay", "marketplace Sénégal", "paiement progressif",
    "save now buy later", "épargne achat", "IMCO Digital", "FBN Bank",
  ],
  authors: [{ name: "IMCO Digital S.A.U" }],
  openGraph: {
    type: "website",
    locale: "fr_SN",
    title: "Nafa Pay — Épargnez maintenant, achetez plus tard",
    description:
      "Achetez progressivement via la marketplace Nafa Pay. Vos fonds sont sécurisés sur un compte de cantonnement chez FBN Bank Sénégal.",
    siteName: "Nafa Pay",
    images: ["/nafapay-logo.png"],
  },
  icons: {
    icon: "/nafapay-logo.png",
    apple: "/nafapay-logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
