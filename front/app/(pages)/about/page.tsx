import Image from "next/image";
import { NAV_MAP } from "../../constants/navMap";
import { Container } from "../../components/premitives/Container";
import { Inner } from "../../components/premitives/Inner";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";
import { Heading } from "@/app/components/premitives/Heading";
import { Text } from "@/app/components/premitives/Text";
import { AboutTimeline } from "@/app/components/compositions/pages/about/AboutTimeline";

export default function About() {
  return (
    <>
      {/* Hero */}
      <Container as="div">
        <Inner size="lg">
          <PageHeading heading={NAV_MAP.about.name} text={NAV_MAP.about.text} />
        </Inner>
      </Container>
      {/* My Journey< */}
      <Container as="section">
        <Inner size="sm">
          <Heading as="h2" size="xl">
            My Journey
          </Heading>
          <div className="mt-5 space-y-6">
            <Text as="p">
              ウェブ開発への道は大学時代に初めてウェブサイトを作成したことから始まりました。
              最初は好奇心だったものが、すぐに情熱へと変わりました。
              わずか数行のコードで、何百万人もの人々が使用できるインタラクティブな体験を創造できることに魅了されました。
            </Text>
            <Text as="p">
              長年にわたり、React、TypeScript、Node.js、さまざまなデザインシステムなど、
              モダンなウェブ技術のスキルを磨いてきました。クリーンで保守しやすいコードを書き、
              見た目が美しいだけでなく、優れたユーザー体験を提供するインターフェースを作ることを信条としています。
            </Text>
            <Text as="p">
              コーディングをしていない時は、新しい技術を探求したり、オープンソースプロジェクトに貢献したり、
              ブログ記事を通じて知識を共有したり、意欲的な開発者をメンタリングしたりしています。
            </Text>
          </div>
        </Inner>
      </Container>
      {/* Career */}
      <Container as="section">
        <Inner size="sm">
          <Heading as="h2" size="xl">
            Career
          </Heading>
          <div className="mt-5">
            <AboutTimeline
              items={[
                {
                  title: "Web Coderとして就職",
                  date: "2022",
                  text: "Webサイトのコーディング業務を担当。",
                },
                {
                  title: "フロントエンド開発を開始",
                  date: "2023",
                  text: "ReactやTypeScriptを使った開発に携わる。",
                },
                {
                  title: "リードエンジニアを担当",
                  date: "2024",
                  text: "チームの開発をリードする役割を担当。",
                },
                {
                  title: "Next.jsを導入",
                  date: "2025",
                  text: "Next.jsを使ったWebアプリケーション開発を開始。",
                },
                {
                  title: "ポートフォリオ制作",
                  date: "2026",
                  text: "Webエンジニアとしての活動をまとめたサイトを制作。",
                },
              ]}
            />
          </div>
        </Inner>
      </Container>
    </>
  );
}
