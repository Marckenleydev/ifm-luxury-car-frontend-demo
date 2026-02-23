import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Image from "next/image";
import { Toaster } from "sonner";





export const metadata: Metadata = {
  metadataBase: new URL("https://www.ifmluxurycars.com"), // replace with your real domain

  title: {
    default: "IFM Luxury Car Rentals Dubai | Exotic & Premium Car Hire UAE",
    template: "%s | IFM Luxury Car Rentals Dubai",
  },

  description:
    "Rent luxury and exotic cars in Dubai with IFM Luxury Car Rentals. Ferrari, Lamborghini, Rolls-Royce, Bentley & premium SUVs available daily, weekly or monthly. Fast delivery across UAE.",

  keywords: [
    "Luxury car rental Dubai",
    "Exotic car rental Dubai",
    "Supercar rental UAE",
    "Ferrari rental Dubai",
    "Lamborghini rental Dubai",
    "Rolls Royce rental Dubai",
    "Premium car hire Dubai",
    "Sports car rental UAE",
    "Dubai luxury car hire",
    "IFM Luxury Car Rentals",
  ],

  authors: [{ name: "IFM Luxury Car Rentals" }],
  creator: "IFM Luxury Car Rentals",
  publisher: "IFM Luxury Car Rentals",

  openGraph: {
    title: "Luxury & Exotic Car Rental in Dubai | IFM Luxury Cars",
    description:
      "Drive Ferrari, Lamborghini, Rolls-Royce & more. Premium luxury car rental service in Dubai with fast delivery & competitive rates.",
    url: "https://www.ifmluxurycars.com",
    siteName: "IFM Luxury Car Rentals",
    locale: "en_AE",
    type: "website",
    images: [
      {
        url: "/og-image.jpg", // create a luxury car banner image 1200x630
        width: 1200,
        height: 630,
        alt: "IFM Luxury Car Rentals Dubai",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Luxury Car Rental Dubai | IFM Luxury Cars",
    description:
      "Premium & exotic car rentals in Dubai. Book Ferrari, Lamborghini & Rolls-Royce today.",
    images: ["/og-image.jpg"],
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

  alternates: {
    canonical: "https://www.ifmluxurycars.com",
  },

  icons: {
    icon: "/ifm_logo.svg",
  },

  category: "Automotive",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const message = "Hello I’m interested in your luxury car rental services. Can you share availability and pricing? ";
  return (
    <html lang="en">
      <body
        className={``}
      >
          <Toaster  position="top-center"
          toastOptions={{
            duration: 4000,
            style: {
              background: '#111',
              border: '1px solid rgba(201,168,76,0.3)',
              color: '#F5F0E8',
            },
          }} />
        <Providers>
          {children}
        </Providers>
        <div className="fixed bottom-6 right-6 z-9999 pointer-events-auto">
        <a
          aria-label="Chat on WhatsApp"
          href={`https://wa.me/971559990003?text=${encodeURIComponent(message)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-2xl hover:scale-110
          transition-transform
          sm:animate-bounce"
        >
          <Image src="/whatsapp.svg" alt="WhatsApp" width={42} height={42} />
        </a>
      </div>
      </body>
    </html>
  );
}
