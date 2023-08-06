"use client";
import "./globals.css";
import { Inter,Poppins } from "next/font/google";

import { ChakraProvider, background,Box } from "@chakra-ui/react";
import { Providers } from "./providers";
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  weight: '400',
  subsets: ['latin'],
})
 
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Providers>
          {children}
          </Providers>
      </body>
    </html>
  );
}
