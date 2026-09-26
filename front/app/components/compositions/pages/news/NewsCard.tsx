import { Panel } from "@/app/components/premitives/Panel";
import { Heading } from "@/app/components/premitives/Heading";
import { Text } from "@/app/components/premitives/Text";
import { Badge } from "@/app/components/premitives/Badge";
import { Calendar as CalIcon } from "lucide-react";

export const NewsCard = () => {
  return (
    <Panel as="a" href="#">
      <div className="pt-6 px-6 pb-4">
        <div className="flex gap-1.5 items-center">
          <Badge appearance="secondary">お知らせ</Badge>
          <Text as="time" size="sm" className="flex gap-1.5 items-center">
            <CalIcon size={14} aria-hidden /> 2026年2月15日
          </Text>
        </div>
        <Heading as="h2" size="md" className="mt-3">
          Tech Innovation Award 2026受賞
        </Heading>
        <Text className="mt-2">
          ウェブ開発とオープンソースプロジェクトへの優れた貢献により、Tech
          Innovation Awardを受賞しました。
        </Text>
      </div>
    </Panel>
  );
};
