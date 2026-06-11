import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const baseUrl = "https://ajithautomobiles.vercel.app";

export const metadata: Metadata = {
  title: "Ajith Auto Mobiles | Three Wheeler Workshop in Idukki | Piaggio Ape, Atul Auto & Mahindra Alfa Service",
  description: "Best three wheeler workshop in Idukki, Kerala. Specialists in Piaggio Ape service, Atul Auto repair, and Mahindra Alfa diagnostics. 17+ years of experience near Kootar & Chettikuzhy.",
  metadataBase: new URL(baseUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Ajith Auto Mobiles | Three Wheeler Workshop in Idukki | Piaggio Ape, Atul Auto & Mahindra Alfa Service",
    description: "Best three wheeler workshop in Idukki, Kerala. Specialists in Piaggio Ape service, Atul Auto repair, and Mahindra Alfa diagnostics. 17+ years of experience near Kootar & Chettikuzhy.",
    url: baseUrl,
    siteName: "Ajith Auto Mobiles",
    locale: "en_IN",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Local Business structured data
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AutoRepair",
    "name": "Ajith Auto Mobiles",
    "image": `${baseUrl}/piaggio_brand.png`,
    "@id": `${baseUrl}/#localbusiness`,
    "url": baseUrl,
    "telephone": "+91-6282771225",
    "priceRange": "$$",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Lekshmivilasam Building, Chettikuzhy",
      "addressLocality": "Chettikuzhy",
      "addressRegion": "Idukki",
      "postalCode": "685552",
      "addressCountry": "India"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 9.5628,
      "longitude": 77.1895
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "08:30",
        "closes": "18:30"
      }
    ],
    "sameAs": [
      "https://wa.me/916282771225"
    ]
  };

  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-black text-zinc-100">
        {children}
      </body>
    </html>
  );
}

