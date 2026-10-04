import { ReactNode } from "react";
import { Heading } from "@/app/components/premitives/Heading";
import { Text } from "@/app/components/premitives/Text";
import { Badge } from "@/app/components/premitives/Badge";
import { Calendar as CalIcon } from "lucide-react";
import Image from "next/image";

type Props = Record<"category" | "date" | "title", ReactNode> & {
  img?: string;
};

export const NewsPostHeading = ({ category, date, title, img }: Props) => {
  return (
    <>
      <div className="flex gap-1.5 items-center">
        <Badge appearance="secondary">{category}</Badge>
        <Text as="time" size="sm" className="flex gap-1.5 items-center">
          <CalIcon size={14} aria-hidden /> {date}
        </Text>
      </div>
      <Heading as="h1" size="xxl" className="mt-3">
        {title}
      </Heading>
      {img && (
        <Image
          src={img}
          className="w-full h-auto mt-8 rounded-2xl"
          width={896}
          height={504}
          alt=""
        />
      )}
    </>
  );
};
