import { Heading } from "@/app/components/premitives/Heading";
import { Text } from "@/app/components/premitives/Text";

type Props = Record<"overview" | "approach", string>;

export const WorksPostBody = ({ overview, approach }: Props) => {
  return (
    <div className="lg:col-span-3">
      <div>
        <Heading as="h2" size="lg" lang="en">
          Overview
        </Heading>
        <Text className="mt-6">{overview}</Text>
      </div>
      <div className="mt-12">
        <Heading as="h2" size="lg" lang="en">
          Approach
        </Heading>
        <Text className="mt-6">{approach}</Text>
      </div>
    </div>
  );
};
