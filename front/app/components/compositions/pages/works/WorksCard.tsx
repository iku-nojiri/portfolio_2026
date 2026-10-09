import { Panel } from "@/app/components/premitives/Panel";
import { Heading } from "@/app/components/premitives/Heading";
import { Text } from "@/app/components/premitives/Text";
import { Badge } from "@/app/components/premitives/Badge";
import Image from "next/image";

type Props = Record<"slug" | "title" | "img" | "lead", string>;

export const WorksCard = ({ slug, title, img, lead }: Props) => {
  return (
    <Panel as="a" href={`/works/${slug}`}>
      <Image
        src={img}
        className="w-full h-auto"
        width={302}
        height={170}
        alt=""
      />
      <div className="px-6 py-12">
        <Heading as="h2" size="xs">
          {title}
        </Heading>
        <Text className="mt-1.5">{lead}</Text>
        <ul className="flex gap-1.5 flex-wrap mt-6">
          <Badge as="li" appearance="secondary">
            React
          </Badge>
          <Badge as="li" appearance="secondary">
            TypeScript
          </Badge>
          <Badge as="li" appearance="secondary">
            Tailwind CSS
          </Badge>
        </ul>
      </div>
    </Panel>
  );
};
