import { Roboto_Flex, Noto_Sans_JP } from "next/font/google";

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

export const FONTS = {
  robotoFlex,
  notoSansJP
}