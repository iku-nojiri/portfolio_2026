
"use client";

import { NAV_MAP } from "../../constants/NAV_MAP";
import { Container } from "../../components/premitives/Container";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";
import { Heading } from "@/app/components/premitives/Heading";
import { BlogCard } from "@/app/components/compositions/pages/blog/BlogCard";
import { Grid } from "@/app/components/premitives/Grid";
import { usePostData } from "@/app/hooks/usePostData";
import { postDataAdapter } from "@/app/libs/postDataAdapter";
import type { BlogPost } from "@/app/types/BlogPost.type";
import { Loading } from "@/app/components/features/loading";

export default function Works() {
  const data = usePostData<BlogPost>("blog");

  const featurePost = data?.[0];
  const recentPosts = data?.slice(1);

  return (
    <>
      <Container as="div" size="lg">
        <PageHeading heading={NAV_MAP.blog.name} text={NAV_MAP.blog.text} />
      </Container>

      {data ? (
        <>
          <Container as="section" size="lg">
            <Heading as="h2" className="sr-only">
              Feature Article
            </Heading>
            {featurePost ? (
              <BlogCard {...postDataAdapter.blogPost(featurePost)} featured />
            ) : null}
          </Container>

          <Container as="section" size="lg">
            <Heading as="h2" size="xl" lang="en">
              Recent Article
            </Heading>
            <Grid as="ul" className="mt-8">
              {recentPosts?.map((post) => (
                <BlogCard
                  key={post.id}
                  {...postDataAdapter.blogPost(post)}
                />
              ))}
            </Grid>
          </Container>
        </>
      ) : (
        <Loading />
      )}
    </>
  );
}
