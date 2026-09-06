import { ComponentType } from "react";
import { Panel } from "@/app/components/premitives/Panel";
import { Tile } from "@/app/components/premitives/Tile";
import { Heading } from "@/app/components/premitives/Heading";
import { Badge } from "@/app/components/premitives/Badge";
import type { LucideProps } from "lucide-react";

type Props = {
  category: string;
  icon: ComponentType<LucideProps>;
  skills: readonly string[];
};

export const SkillsCard = ({ category, icon, skills }: Props) => {
  const Icon = icon;

  return (
    <Panel as="div" className="p-6">
      <Tile>
        <Icon className="text-primary" />
      </Tile>
      <Heading as="h3" lang="en" weight="bold" size="xs" className="mt-4.5">
        {category}
      </Heading>
      <ul className="flex gap-2 flex-wrap mt-6">
        {skills.map((skill) => (
          <Badge key={skill} as="li" appearance="secondary">{skill}</Badge>
        ))}
      </ul>
    </Panel>
  );
};
