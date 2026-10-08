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

export default function Works() {
  const data = usePostData<BlogPost>("blog");

  let featurePost;
  let recentPost;

  if (data) {
    featurePost = [...data][0];
    recentPost = [...data].slice(1);
  }

  return (
    <>
      {/* Hero */}
      <Container as="div" size="lg">
        <PageHeading heading={NAV_MAP.blog.name} text={NAV_MAP.blog.text} />
      </Container>
      {/* articles */}
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
          {recentPost
            ? recentPost.map((post) => (
                <BlogCard key={post.id} {...postDataAdapter.blogPost(post)} />
              ))
            : null}
        </Grid>
      </Container>
    </>
  );
}
