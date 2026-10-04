import { Panel } from "@/app/components/premitives/Panel";
import { Heading } from "@/app/components/premitives/Heading";
import { Text } from "@/app/components/premitives/Text";
import { Divider } from "@/app/components/premitives/Divider";
import { Badge } from "@/app/components/premitives/Badge";
import { Link } from "@/app/components/premitives/Link";
import { ArrowRight as RightIcon } from "lucide-react";

type Props = {
  period: string;
  role: string;
  technologies: string[];
  href: string;
};

export const WorksPostSidebar = ({
  period,
  role,
  technologies,
  href,
}: Props) => {
  return (
    <div>
      <Panel className="mt-12 p-6 lg:col-span-1 lg:mt-0">
        <Heading as="h2" size="sm">
          プロジェクト情報
        </Heading>
        <dl className="mt-7 flex flex-col gap-1">
          <Text as="dt" size="sm">
            制作期間
          </Text>
          <Text as="dd">{period}</Text>
        </dl>
        <Divider />
        <dl className="flex flex-col gap-1">
          <Text as="dt" size="sm">
            担当
          </Text>
          <Text as="dd">{role}</Text>
        </dl>
        <Divider />
        <dl className="flex flex-col gap-2">
          <Text as="dt" size="sm">
            使用技術
          </Text>
          <dd>
            <ul className="flex flex-wrap gap-1.5">
              {technologies.map((technology) => (
                <Badge key={technology} as="li" appearance="secondary">
                  {technology}
                </Badge>
              ))}
            </ul>
          </dd>
        </dl>
      </Panel>
      <Link href={href} className="mt-6 w-full">
        サイトを見る
        <RightIcon size={16} className="text-primary-fg" aria-hidden />
      </Link>
    </div>
  );
};
