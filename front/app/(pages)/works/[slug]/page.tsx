import { Container } from "@/app/components/premitives/Container";
import { WorksPostHeading } from "@/app/components/compositions/pages/works/post/WorksPostHeading";
import { WorksPostBody } from "@/app/components/compositions/pages/works/post/WorksPostBody";
import { WorksPostSidebar } from "@/app/components/compositions/pages/works/post/WorksPostSidebar";
import { WorksPostFooter } from "@/app/components/compositions/pages/works/post/WorksPostFooter";

export default function Post() {
  return (
    <>
      <Container as="article" size="md">
        <WorksPostHeading
          category={"Webサイト"}
          title={"タスク管理アプリ"}
          img={"https://picsum.photos/seed/picsum/896/504"}
        />
        <div className="mt-12 lg:grid lg:grid-cols-4 lg:gap-9">
          <WorksPostBody
            overview={
              "小規模チームの日常業務を効率化するためのタスク管理ウェブアプリです。Kanbanボード、リスト表示、カレンダー表示を切り替えながら、チーム全体の進捗をリアルタイムに把握できます。"
            }
            approach={
              "まずユーザーインタビューでチームの課題を洗い出し、MVP機能をKanbanボードに絞って初期リリース。その後フィードバックを受けながらリスト・カレンダーを追加しました。リアルタイム同期はSupabaseのRealtimeを採用し、複雑なWebSocket管理を省略。オフライン対応はService Workerと楽観的更新で実装しています。"
            }
          />
          <WorksPostSidebar
            period="2025年6月 〜 2025年8月"
            role="フルスタック開発"
            technologies={["React", "TypeScript", "Tailwind CSS"]}
            href="https://example.com"
          />
        </div>
      </Container>
      <WorksPostFooter />
    </>
  );
}
