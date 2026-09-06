import { ComponentType } from "react";
import { Code, CodeXml, Package, PcCase, Wrench, Palette } from "lucide-react";
import type { LucideProps } from "lucide-react";

type SkillsetItem = Readonly<{
  category: string;
  icon: ComponentType<LucideProps>;
  skills: readonly string[];
}>;

export const SKILLSET: SkillsetItem[] = [
  {
    category: "Languages",
    icon: Code,
    skills: ["HTML", "CSS", "JavaScript", "TypeScript", "PHP"],
  },
  {
    category: "Meta Languages",
    icon: CodeXml,
    skills: ["Pug", "Stylus", "Sass"],
  },
  {
    category: "Libraries & Frameworks",
    icon: Package,
    skills: ["React", "Next.js", "jQuery", "Tailwind CSS"],
  },
  {
    category: "CMS",
    icon: PcCase,
    skills: ["WordPress", "Movable Type", "PowerCMS"],
  },
  {
    category: "Development Tools",
    icon: Wrench,
    skills: [
      "Vite",
      "Webpack",
      "Gulp",
      "Babel",
      "Node.js",
      "Git",
      "GitHub",
      "Docker",
    ],
  },
  {
    category: "Design Tools",
    icon: Palette,
    skills: ["Figma", "Photoshop", "Illustrator", "XD"],
  },
];
