import React from "react";

import "./globals.css";
// eslint-disable-next-line camelcase
import { Inter, Space_Grotesk } from "next/font/google";
import type { Metadata } from "next";
import { ThemeProvider } from "@/context/ThemeProvider";
import {
  ThirdwebProvider,
  embeddedWallet,
  useAddress,
} from "@/app/thirdweb";
import { client } from "./client";

const inter = Inter({
  subsets: ["latin"],
  weight: [
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
  ],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
  title: "Block Cred",
  description:
    "Block Cred is an onChhain Certification platform that allows you to verify your credentials on the blockchain.",
  icons: {
    icon: "/assets/images/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable}`}
      >
        <ThirdwebProvider
          client={client}
          supportedWallets={[
            embeddedWallet({
              auth: {
                options: [
                  "email",
                  "google",
                  "facebook",
                  "apple",
                ],
              },
            }),
          ]}
        >
          <ThemeProvider>{children}</ThemeProvider>
        </ThirdwebProvider>
      </body>
    </html>
  );
}
