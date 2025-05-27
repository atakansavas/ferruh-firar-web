import ClientPage from "./ClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Ferruh Firar - Sufi Techno Artist from Turkey",
  description:
    "Discover the mystical world of Ferruh Firar, a pioneering Sufi techno artist from Turkey. Experience the fusion of ancient Sufi traditions with modern electronic beats. Stream now on Spotify.",
  keywords: [
    "Ferruh Firar",
    "Sufi techno",
    "Turkish music",
    "electronic music",
    "mystical music",
    "Sufi music",
    "techno",
    "Turkey",
    "spiritual music",
    "electronic artist",
    "SERÜVEN",
    "artık firar",
  ].join(", "),
  authors: [{ name: "Ferruh Firar" }],
  creator: "Ferruh Firar",
  publisher: "Ferruh Firar",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#78716c",
  openGraph: {
    type: "website",
    locale: "en_US",
    alternateLocale: "tr_TR",
    url: "https://ferruhfirar.com",
    title: "Ferruh Firar - Sufi Techno Artist from Turkey",
    description:
      "Experience the mystical fusion of ancient Sufi traditions with modern electronic beats. Ferruh Firar creates transcendent Sufi techno music from Turkey.",
    siteName: "Ferruh Firar",
    images: [
      {
        url: "/images/seruven-album.jpg",
        width: 1200,
        height: 1200,
        alt: "Ferruh Firar - SERÜVEN Album Cover",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferruh Firar - Sufi Techno Artist from Turkey",
    description: "Experience the mystical fusion of ancient Sufi traditions with modern electronic beats.",
    images: ["/images/seruven-album.jpg"],
    creator: "@ferruhfirar",
  },
  alternates: {
    canonical: "https://ferruhfirar.com",
    languages: {
      "en-US": "https://ferruhfirar.com",
      "tr-TR": "https://ferruhfirar.com/tr",
    },
  },
  category: "music",
}

export default function Component() {
  return <ClientPage />
}
