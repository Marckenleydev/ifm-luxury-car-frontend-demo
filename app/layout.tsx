import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Image from "next/image";



export const metadata: Metadata = {
  title: "IFM Luxury Car Rentals",
  description: "IFM Luxury Car Rentals - Your elite driving experience",
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
