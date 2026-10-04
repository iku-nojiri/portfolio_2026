import { Container } from "@/app/components/premitives/Container";
import { NewsPostHeading } from "@/app/components/compositions/pages/news/post/NewsPostHeading";
import { NewsPostBody } from "@/app/components/compositions/pages/news/post/NewsPostBody";
import { NewsPostFooter } from "@/app/components/compositions/pages/news/post/NewsPostFooter";

export default function Post() {
  return (
    <>
      <Container as="article" size="md">
        <NewsPostHeading
          category={"お知らせ"}
          date={"2026年2月15日"}
          title={"Tech Innovation Award 2026受賞"}
        />
        <NewsPostBody
          contents={[
            "このたび、Tech Innovation Award 2026を受賞しましたことを、大変光栄に思います。この賞は、ウェブ開発における革新的な取り組みと、オープンソースコミュニティへの貢献を評価していただいたものです。",
            "受賞の対象となったのは、昨年リリースしたオープンソースのUIコンポーネントライブラリ「UI Kit Pro」と、React Server Componentsに関する一連の技術記事、そして開発者コミュニティでのメンタリング活動です。",
            "UI Kit Proは、リリースから1年で10,000以上のGitHubスターを獲得し、世界中の開発者に利用されています。TypeScriptによる完全な型サポート、アクセシビリティへの配慮、そして包括的なドキュメンテーションが高く評価されました。",
          ]}
        />
      </Container>
      <NewsPostFooter />
    </>
  );
}
