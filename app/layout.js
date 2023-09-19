"use client";
import "./globals.css";
import { Poppins } from "next/font/google";

import { Providers } from "./providers";
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})
 

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Melih Kaan Arac</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </head>
      <body className={poppins.className} >
        <Providers>

          {children}
          </Providers>
      </body>
    </html>
  );
}
