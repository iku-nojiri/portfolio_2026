import type { Metadata } from "next";
import { Roboto_Flex, Noto_Sans_JP } from "next/font/google";
import { Header } from "./components/compositions/layouts/Header";
import { Main } from "./components/compositions/layouts/Main";
import { Footer } from "./components/compositions/layouts/Footer";
import "./globals.css";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  display: "swap",
});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Portfolio",
  description: "My Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="jp">
      <body className={`${robotoFlex.variable} ${notoSansJP.variable} dark`}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
