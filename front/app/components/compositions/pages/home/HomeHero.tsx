import { NAV_MAP } from "@/app/constants/navMap";
import { Container } from "@/app/components/premitives/Container";
import { Inner } from "@/app/components/premitives/Inner";
import { Text } from "@/app/components/premitives/Text";
import { Link } from "@/app/components/premitives/Link";
import { ArrowRight } from "lucide-react";

export const HomeHero = () => {
  return (
    <Container as="div">
      <Inner size="lg">
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
          ">
          Hi, I'm a Web<br />Developer
        </h1>
        <Text color="muted" className="mt-5 text-center md:text-left">モダンな技術を活用し、ユーザーにとって使いやすく価値のあるウェブサイトや<br />アプリケーションの開発を目指しています。</Text>
        <nav className="flex justify-center items-center gap-2 mt-8 md:justify-start">
          <Link href={NAV_MAP.works.href}>作品を見る<ArrowRight size={16} className="text-primary-fg" /></Link>
          <Link href={NAV_MAP.contact.href}  appearance="outline">お問い合わせ</Link>
        </nav>
      </Inner>
    </Container>
  );
};
