import type { Metadata } from "next";
import { FONTS } from "./constants/fonts";
import { DrawerContextProvider } from "./providers/DrawerContextProvider";
import { Header } from "./components/compositions/layouts/Header";
import { Drawer } from "./components/compositions/layouts/Drawer";
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
          <DrawerContextProvider>
            <Header />
            <Drawer />
          </DrawerContextProvider>
          <Main>{children}</Main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
