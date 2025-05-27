import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ferruh Fırar",
  description: "Ferruh Fırar - Kişisel Web Sitesi",
  generator: "Next.js",
  applicationName: "Ferruh Fırar",
  authors: [{ name: "Ferruh Fırar" }],
  keywords: ["Ferruh Fırar", "Kişisel Web Sitesi"],
  creator: "Ferruh Fırar",
  publisher: "Ferruh Fırar",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://ferruhfirar.com"),
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: "https://ferruhfirar.com",
    title: "Ferruh Fırar",
    description: "Ferruh Fırar - Kişisel Web Sitesi",
    siteName: "Ferruh Fırar",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferruh Fırar",
    description: "Ferruh Fırar - Kişisel Web Sitesi",
    creator: "@ferruhfirar",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
