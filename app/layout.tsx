import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";



export const metadata: Metadata = {
  title: "IFM Luxury Car Rentals",
  description: "IFM Luxury Car Rentals - Your elite driving experience",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={``}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
