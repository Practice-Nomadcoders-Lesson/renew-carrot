import type { Metadata } from "next";
import { Roboto, Rubik_Scribble } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: ["normal", "italic"],
  variable: "--roboto-text",
});

const rubik = Rubik_Scribble({
  weight: "400",
  style: "normal",
  subsets: ["latin"],
  variable: "--rubik-text",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Market",
    default: "Market",
  },
  description: "Sell and buy all the things!",
};

const pretendard = localFont({
  src: "./pretendard.woff2",
  variable: "--pretendard-text",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${rubik.variable} ${pretendard.variable} mx-auto max-w-screen-sm bg-gray-900 text-white`}
      >
        {children}
      </body>
    </html>
  );
}
