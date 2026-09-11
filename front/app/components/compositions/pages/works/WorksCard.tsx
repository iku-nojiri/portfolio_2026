import { Panel } from "@/app/components/premitives/Panel";
import { Heading } from "@/app/components/premitives/Heading";
import { Text } from "@/app/components/premitives/Text";
import { Badge } from "@/app/components/premitives/Badge";
import Image from "next/image";

export const WorksCard = () => {
  return (
    <Panel as="a" href="#">
      <Image
        src="https://picsum.photos/seed/picsum/302/170"
        className="w-full h-auto"
        width={302}
        height={170}
        alt=""
      />
      <div className="px-6 py-12">
        <Heading as="h2" size="xs">
          ポートフォリオサイト
        </Heading>
        <Text className="mt-1.5">
          アニメーションとダークモードサポートを備えたモダンなポートフォリオサイト
        </Text>
        <ul className="flex gap-1.5 mt-6">
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
