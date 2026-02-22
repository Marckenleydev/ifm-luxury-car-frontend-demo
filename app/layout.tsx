import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Image from "next/image";
import { Toaster } from "sonner";



export const metadata: Metadata = {
  title: "IFM Luxury Car Rentals",
  description: "IFM Luxury Car Rentals - Your elite driving experience",
  icons: {
    icon: '/ifm_logo.svg', // Optional: specify custom icon
  },
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
