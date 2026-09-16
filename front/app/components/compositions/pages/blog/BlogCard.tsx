import { tv } from "tailwind-variants";
import { Panel } from "@/app/components/premitives/Panel";
import { Heading } from "@/app/components/premitives/Heading";
import { Text } from "@/app/components/premitives/Text";
import { Badge } from "@/app/components/premitives/Badge";
import { Calendar } from "lucide-react";

const variants = tv({
  slots: {
    heading: "",
    text: "",
    time: "flex gap-1.5 items-center"
  },
  variants: {
    featured: {
      true: {
        heading: "mt-4.5",
        text: "md:mt-8 mt-7",
        time: "md:mt-5 mt-9"
      },
      false: {
        heading: "mt-3",
        text: "mt-3.5",
        time: "mt-9"
      },
    },
  },
  defaultVariants: {
    featured: false,
  },
});

type Props = {
  featured?: boolean;
};

export const BlogCard = ({ featured }: Props) => {
  const { heading, text, time } = variants({ featured });
  return (
    <Panel as="a" href="#">
      <div className="p-6">
        <ul className="flex gap-1.5 flex-wrap">
          <Badge as="li" appearance={featured ? "primary" : "secondary"}>
            React
          </Badge>
        </ul>
        <Heading as="h2" size={featured ? "xl" : "sm"} className={heading()}>
          React Server Componentsを始めよう
        </Heading>
        <Text className={text()}>
          React Server
          Componentsがアプリケーションのパフォーマンスとユーザー体験をどのように改善できるかを学びます。
        </Text>
        <Text as="time" size="sm" className={time()}>
          <Calendar size={14} /> 2026年2月15日
        </Text>
      </div>
    </Panel>
  );
};
