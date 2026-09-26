import { NAV_MAP } from "@/app/constants/NAV_MAP";
import { Text } from "@/app/components/premitives/Text";
import { Link } from "@/app/components/premitives/Link";
import { ArrowRight as RightIcon } from "lucide-react";

export const HomeHero = () => {
  return (
    <div>
      <h1
        className="
            w-full
            text-5xl font-extrabold font-roboto-flex leading-none
            bg-linear-to-r from-[#155DFC] via-[#AD46FF] to-[#F6339A]
            bg-clip-text text-transparent
            text-center
            md:w-152
            md:text-left
            md:text-8xl
          "
      >
        Hi, I'm a Web
        <br />
        Developer
      </h1>
      <Text className="mt-5 text-center md:text-left">
        モダンな技術を活用し、ユーザーにとって使いやすく価値のあるウェブサイトや
        <br />
        アプリケーションの開発を目指しています。
      </Text>
      <nav className="flex justify-center items-center gap-2 mt-8 md:justify-start">
        <Link href={NAV_MAP.works.href}>
          作品を見る
          <RightIcon size={16} className="text-primary-fg" aria-hidden />
        </Link>
        <Link href={NAV_MAP.contact.href} appearance="outline">
          お問い合わせ
        </Link>
      </nav>
      <div className="absolute -top-[1.58vw] -right-[1.58vw] w-[31.93vw] h-[31.93vw] max-md:hidden bg-gradient-to-bl from-purple-600 via-blue-500 to-teal-400 opacity-70 rounded-full blur-3xl" />
      <div className="absolute top-[30%] -right-[1.58vw] w-[31.93vw] h-[31.93vw] max-md:hidden bg-gradient-to-bl from-purple-600 via-blue-500 to-teal-400 opacity-70 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-[1.58vw] w-[39.92vw] h-[39.92vw] max-md:hidden bg-gradient-to-tl from-indigo-500 via-fuchsia-500 to-pink-500 opacity-60 rounded-full blur-3xl" />
    </div>
  );
};
