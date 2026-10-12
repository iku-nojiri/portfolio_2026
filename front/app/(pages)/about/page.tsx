import Image from "next/image";
import { NAV_MAP } from "../../constants/NAV_MAP";
import { Container } from "../../components/premitives/Container";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";
import { Heading } from "@/app/components/premitives/Heading";
import { Text } from "@/app/components/premitives/Text";
import { Link } from "@/app/components/premitives/Link";
import { AboutTimeline } from "@/app/components/compositions/pages/about/AboutTimeline";
import { ExternalLink } from "lucide-react";

const ExternalIcon = () => {
  return <ExternalLink size={16} className="text-primary" aria-hidden />;
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <Container as="div" size="lg">
        <PageHeading heading={NAV_MAP.about.name} text={NAV_MAP.about.text} />
      </Container>
      {/* My Journey< */}
      <Container as="section" size="sm">
        <Heading as="h2" size="xl" lang="en">
          My Journey
        </Heading>
        <div className="mt-5 space-y-6">
          <Text as="p">
            コロナ禍を機に飲食店勤務からWebサイト制作のキャリアをスタートさせました。
          </Text>
          <Text as="p">
            2022年にコーダーとしてのキャリアをスタート。実務経験を積む一方で、React、Next.js、TypeScript、Viteなどの技術を独学で学習。単にデザインを再現するだけでなく、チームワークや保守性を意識したコードを書くことを大切にしています。
          </Text>
          <Text as="p">
            現在はキャリアアップを目指し、時代が求めるモダンなフロントエンド技術と設計力を磨いています。ユーザー・運用者共に使いやすく、保守のしやすいWebサイトを実現することを目指しています。
          </Text>
        </div>
      </Container>
      {/* Career */}
      <Container as="section" size="sm">
        <Heading as="h2" size="xl" lang="en">
          Career
        </Heading>
        <div className="mt-5">
          <AboutTimeline
            items={[
              {
                title: "Webデザイナーとして就職",
                date: "2021.08 - 2022.01",
                text: (
                  <>
                    短期雇用で株式会社UGOOOに入社。Wixを使用したWebサイト制作を行う。
                  </>
                ),
              },
              {
                title: "職業訓練校に入校",
                date: "2022.07 - 2022.12",
                text: (
                  <>
                    求職者支援訓練校
                    <Link href="https://adjustacademy.com/" appearance="text" target="https://adjustacademy.com/">
                      アジャストアカデミー
                      <ExternalIcon />
                    </Link>
                    に入校。
                    <br />
                    「Webデザイナー・ディレクター・マーケティング養成科」でHTML、CSSをはじめとしたWebに関する技術を学ぶ。
                  </>
                ),
              },
              {
                title: "Webコーダーとして就職",
                date: "2022.10 - 2024.12",
                text: (
                  <>
                    派遣社員として
                    <Link href="https://www.sangonana.jp/" appearance="text" target="_blank">
                      株式会社357
                      <ExternalIcon />
                    </Link>
                    、
                    <Link href="https://www.nkz.ac.jp/" appearance="text" target="_blank">
                      学校法人 日本教育財団
                      <ExternalIcon />
                    </Link>
                    で勤務。
                    <br />
                    主に教育関連のWebサイトの運用を行う。
                  </>
                ),
              },
              {
                title: "チームリーダーに",
                date: "2022.10 - 2024.11",
                text: (
                  <>
                    派遣社員として
                    <Link href="https://orizo.co.jp/" appearance="text" target="_blank">
                      株式会社オリゾ
                      <ExternalIcon />
                    </Link>
                    で勤務。その後正社員として入社。
                    <br />
                    2023年5月よりコーディングチームのリーダーに就く。
                    美容医療系をはじめとした、様々なWebサイトの制作を行う。
                  </>
                ),
              },
              {
                title: "キャリアアップを目指す",
                date: "2024.12 - 現在",
                text: (
                  <>
                    <Link href="https://orizo.co.jp/" appearance="text" target="_blank">
                      株式会社オリゾ
                      <ExternalIcon />
                    </Link>
                    退社後、派遣社員として
                    <Link href="https://loft-am.co.jp/" appearance="text" target="_blank">
                      株式会社ロフト
                      <ExternalIcon />
                    </Link>
                    、
                    <Link href="https://asadigital.co.jp/jp/" appearance="text" target="_blank">
                      株式会社ASA
                      <ExternalIcon />
                    </Link>
                    で勤務。
                    <br />
                    ギフトスイーツのブランドサイト、教育機関の公式サイトをはじめとした大型サイトを中心に、幅広くWebサイトの制作・運用を行う。
                  </>
                ),
              },
            ]}
          />
        </div>
      </Container>
    </>
  );
}
