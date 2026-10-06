import { ReactNode } from "react";
import { Text } from "@/app/components/premitives/Text";

type Props = {
  contents: ReactNode[];
};

export const NewsPostBody = ({ contents }: Props) => {
  return (
    <>
      <div className="mt-17 space-y-6">
        {contents.map((content, index) => (
          <Text key={index}>{content}</Text>
        ))}
      </div>
    </>
  );
};
