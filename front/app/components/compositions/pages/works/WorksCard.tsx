import { Panel } from "@/app/components/premitives/Panel";
import { Heading } from "@/app/components/premitives/Heading";
import { Text } from "@/app/components/premitives/Text";
import { Badge } from "@/app/components/premitives/Badge";
import Image from "next/image";

type Props = {
  slug: string;
  title: string,
  img: string,
  lead: string,
  techStack: string[]
}

export const WorksCard = ({ slug, title, img, lead, techStack }: Props) => {
  const isComingSoon = slug === "commingsoon";

  return (
    <Panel
      as={isComingSoon ? "div" : "a"}
      {...(!isComingSoon && {
        href: `/works/post?slug=${encodeURIComponent(slug)}`,
      })}
    >
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
          {techStack.map((item) => (
            <Badge key={item} as="li" appearance="secondary">
              {item}
            </Badge>
          ))}
        </ul>
      </div>
    </Panel>
  );
};