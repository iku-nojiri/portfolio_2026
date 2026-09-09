import type { Metadata } from "next";
import { FONTS } from "./constants/fonts";
import { Header } from "./components/compositions/layouts/Header";
import { Main } from "./components/compositions/layouts/Main";
import { Footer } from "./components/compositions/layouts/Footer";
import "./globals.css";

const { robotoFlex, notoSansJP } = FONTS;

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
      <body className={`${robotoFlex.variable} ${notoSansJP.variable}`}>
        <div id="burgerOuterContainer">
          <Header />
          <Main>{children}</Main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
