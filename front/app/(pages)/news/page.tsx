"use client";

import { NAV_MAP } from "../../constants/NAV_MAP";
import { Container } from "../../components/premitives/Container";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";
import { Grid } from "@/app/components/premitives/Grid";
import { NewsCard } from "@/app/components/compositions/pages/news/NewsCard";
import { usePostData } from "@/app/hooks/usePostData";
import type { NewsPost } from "@/app/types/NewsPost.type";
import { postDataAdapter } from "@/app/libs/postDataAdapter";

export default function Skills() {
  const data = usePostData<NewsPost>("news");

  return (
    <>
      {/* Hero */}
      <Container as="div" size="lg">
        <PageHeading heading={NAV_MAP.news.name} text={NAV_MAP.news.text} />
      </Container>
      {/* news */}
      <Container size="lg">
        <Grid col={1}>
          {data ? (
            data.map((item) => (
              <NewsCard
                key={item.id}
                {...postDataAdapter.newsPost(item)}
              />
            ))
          ) : null}
        </Grid>
      </Container>
    </>
  );
}
