"use client"

import { NAV_MAP } from "../../constants/NAV_MAP";
import { Container } from "../../components/premitives/Container";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";
import { Grid } from "@/app/components/premitives/Grid";
import { WorksCard } from "@/app/components/compositions/pages/works/WorksCard";
import { usePostData } from "@/app/hooks/usePostData";
import type { WorksPost } from "@/app/types/WorksPost.type";
import { postDataAdapter } from "@/app/libs/postDataAdapter";

export default function Works() {
  const data = usePostData<WorksPost>("works");

  return (
    <>
      {/* Hero */}
      <Container as="div" size="lg">
        <PageHeading heading={NAV_MAP.works.name} text={NAV_MAP.works.text} />
      </Container>
      {/* works */}
      <Container as="section" size="lg">
        <Grid as="ul">
          {data
            ? data.map((post) => (
                <WorksCard key={post.id} {...postDataAdapter.worksPost(post)} />
              ))
            : null}
        </Grid>
      </Container>
    </>
  );
}
