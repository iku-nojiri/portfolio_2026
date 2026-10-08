import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";
import { Panel } from "@/app/components/premitives/Panel";
import { Heading } from "@/app/components/premitives/Heading";
import { Text } from "@/app/components/premitives/Text";
import { Badge } from "@/app/components/premitives/Badge";
import { Calendar as CalIcon } from "lucide-react";
import { ExternalLink as ExternalIcon } from "lucide-react";

const variants = tv({
  slots: {
    heading: "",
    text: "",
    time: "flex gap-1.5 items-center",
  },
  variants: {
    featured: {
      true: {
        heading: "mt-4.5",
        text: "md:mt-8 mt-7",
        time: "md:mt-5 mt-9",
      },
      false: {
        heading: "mt-3",
        text: "mt-3.5",
        time: "mt-9",
      },
    },
  },
  defaultVariants: {
    featured: false,
  },
});

type Props = VariantProps<typeof variants> & Record<"href" | "category" | "date" | "title" | "lead", string>;

export const BlogCard = ({ href, category, date, title, lead, featured }: Props) => {
  const { heading, text, time } = variants({ featured });

  return (
    <Panel as="a" href={href} target="_blank">
      <div className="p-6">
        <ul className="flex gap-1.5 flex-wrap">
          <Badge as="li" appearance={featured ? "primary" : "secondary"}>
            {category}
          </Badge>
        </ul>
        <Heading as="h2" size={featured ? "xl" : "sm"} className={heading()}>
          {title}
        </Heading>
        <Text className={text()}>
          {lead}
        </Text>
        <div className="flex justify-between items-end gap-2">
          <Text as="time" size="sm" className={time()}>
            <CalIcon size={14} aria-hidden /> {date}
          </Text>
          <ExternalIcon size={16} className="text-fg--muted" aria-hidden />
        </div>
      </div>
    </Panel>
  );
};
