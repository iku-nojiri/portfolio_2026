import { Panel } from "@/app/components/premitives/Panel";
import { Heading } from "@/app/components/premitives/Heading";
import { Text } from "@/app/components/premitives/Text";
import { Badge } from "@/app/components/premitives/Badge";
import { Calendar as CalIcon } from "lucide-react";

type Props = Record<"slug" | "category" | "date" | "title" | "lead", string>;

export const NewsCard = ({ slug, category, date, title, lead }: Props) => {
  return (
    <Panel as="a" href={`/news/${slug}`}>
      <div className="pt-6 px-6 pb-4">
        <div className="flex gap-1.5 items-center">
          <Badge appearance="secondary">{category}</Badge>
          <Text as="time" size="sm" className="flex gap-1.5 items-center">
            <CalIcon size={14} aria-hidden /> {date}
          </Text>
        </div>
        <Heading as="h2" size="md" className="mt-3">
          {title}
        </Heading>
        <Text className="mt-2">{lead}</Text>
      </div>
    </Panel>
  );
};
