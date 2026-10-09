import { Container } from "@/app/components/premitives/Container";
import { Heading } from "@/app/components/premitives/Heading";
import { Grid } from "@/app/components/premitives/Grid";
import { WorksCard } from "../WorksCard";
import { Link } from "@/app/components/premitives/Link";
import { NAV_MAP } from "@/app/constants/NAV_MAP";
import { ArrowLeft as LeftIcon } from "lucide-react";
import type { WorksPost } from "@/app/types/WorksPost.type";
import { postDataAdapter } from "@/app/libs/postDataAdapter";

type Props = {
  posts: WorksPost[];
};

export const WorksPostFooter = ({ posts }: Props) => {
  return (
    <Container as="aside" size="md">
      {posts.length ? (
        <>
          <Heading as="h2" size="lg">
            Related Works
          </Heading>
          <Grid col={3} className="mt-8">
            {posts.map((post) => (
              <WorksCard {...postDataAdapter.worksPost(post)} />
            ))}
          </Grid>
        </>
      ) : null}
      <div className="flex justify-center mt-6">
        <Link href={NAV_MAP.works.href} appearance="ghost">
          <LeftIcon size={16} className="text-fg" aria-hidden />
          制作物一覧に戻る
        </Link>
      </div>
    </Container>
  );
};
