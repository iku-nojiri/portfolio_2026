import { ComponentType } from "react";
import { Panel } from "@/app/components/premitives/Panel";
import { Tile } from "@/app/components/premitives/Tile";
import { Heading } from "@/app/components/premitives/Heading";
import { Text } from "@/app/components/premitives/Text";
import type { LucideProps } from "lucide-react";
import type { CustomIconProps } from "@/app/components/premitives/shared/props/CustomIconProps.types";

type Props = {
  pageName: string;
  text: string;
  href: string;
  icon: ComponentType<LucideProps> | ComponentType<CustomIconProps>;
};

export const HomeCard = ({ pageName, text, href, icon }: Props) => {
  const Icon = icon;

  return (
    <Panel as="a" href={href}>
      <div className="grid gap-4 p-6">
        <Tile>
          <Icon className="text-primary" />
        </Tile>
        <Heading as="h3" weight="bold" size="xs">
          {pageName}
        </Heading>
        <Text>{text}</Text>
      </div>
    </Panel>
  );
};
