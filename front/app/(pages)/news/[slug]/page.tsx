"use client";

import { use } from "react";
import { Container } from "@/app/components/premitives/Container";
import { NewsPostHeading } from "@/app/components/compositions/pages/news/post/NewsPostHeading";
import { NewsPostBody } from "@/app/components/compositions/pages/news/post/NewsPostBody";
import { NewsPostFooter } from "@/app/components/compositions/pages/news/post/NewsPostFooter";
import { usePostData } from "@/app/hooks/usePostData";
import type { NewsPost } from "@/app/types/NewsPost.type";
import { postDataAdapter } from "@/app/libs/postDataAdapter";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default function Post({ params }: Props) {
  const { slug } = use(params);
  const data = usePostData<NewsPost>("news");
  const thisPost = data?.find((item) => item.slug === slug);

  const otherPosts = data
    ?.filter((item) => item.slug !== slug)
    .slice(0, 2);
  

  {
    return thisPost ? (
      <>
        <Container as="article" size="md">
          <NewsPostHeading
            {...postDataAdapter.newsPost(thisPost)}
          />

          <NewsPostBody
            {...postDataAdapter.newsPost(thisPost)}
          />
        </Container>

        <NewsPostFooter posts={otherPosts ?? []} />
      </>
    ) : null;
  }
}
