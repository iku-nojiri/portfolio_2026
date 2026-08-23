import { ReactNode } from "react";
import { Heading } from "@/app/components/premitives/Heading";
import { Text } from "@/app/components/premitives/Text";

type timelineItem = {
  title: string;
  date: string;
  text: ReactNode;
};

type Props = {
  items: timelineItem[];
};

export const AboutTimeline = ({ items }: Props) => {
  return (
    <ol className="space-y-8">
      {items.map((item, index, array) => {
        const maxMix = 100;
        const minMix = 30;

        const mix =
          array.length === 1
            ? maxMix
            : maxMix - ((maxMix - minMix) * index) / (array.length - 1);

        return (
          <li
            key={item.date}
            className="border-l-4 pl-7"
            style={{
              borderColor: `color-mix(in srgb, var(--color-primary) ${mix}%, var(--color-bg))`,
            }}
          >
            <Heading as="h3" size="md">{item.title}</Heading>
            <Text as="time" size="sm">{item.date}</Text>
            <Text as="p">{item.text}</Text>
          </li>
        );
      })}
    </ol>
  );
};
