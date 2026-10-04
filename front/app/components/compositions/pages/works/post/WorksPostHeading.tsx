import { ReactNode } from "react";
import { Heading } from "@/app/components/premitives/Heading";
import { Badge } from "@/app/components/premitives/Badge";
import Image from "next/image";

type Props = Record<"category" | "title", ReactNode> & {
  img: string;
};

export const WorksPostHeading = ({ category, title, img }: Props) => {
  return (
    <>
      <Badge appearance="secondary">{category}</Badge>
      <Heading as="h1" size="xxl" className="mt-3">
        {title}
      </Heading>
      <Image
        src={img}
        className="w-full h-auto mt-8 rounded-2xl"
        width={896}
        height={504}
        alt=""
      />
    </>
  );
};
