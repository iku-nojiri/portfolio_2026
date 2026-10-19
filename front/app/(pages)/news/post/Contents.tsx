"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Container } from "@/app/components/premitives/Container";
import { NewsPostHeading } from "@/app/components/compositions/pages/news/post/NewsPostHeading";
import { NewsPostBody } from "@/app/components/compositions/pages/news/post/NewsPostBody";
import { NewsPostFooter } from "@/app/components/compositions/pages/news/post/NewsPostFooter";
import { usePostData } from "@/app/hooks/usePostData";
import type { NewsPost } from "@/app/types/NewsPost.type";
import { postDataAdapter } from "@/app/libs/postDataAdapter";

export default function Contents() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = searchParams.get("slug");

  const data = usePostData<NewsPost>("news");
  const thisPost = data?.find((item) => item.slug === slug);
  const otherPosts = data
    ?.filter((item) => item.slug !== slug)
    .slice(0, 2);

  useEffect(() => {
    if (data === null) return;

    if (!slug || !thisPost) {
      router.replace("/news/");
    }
     // ページ遷移時の位置のずれをリセットする
    scroll(0, 0)
  }, [data, slug, thisPost, router]);

  if (!thisPost) return null;

  return (
    <>
      <Container as="article" size="md">
        <NewsPostHeading {...postDataAdapter.newsPost(thisPost)} />
        <NewsPostBody {...postDataAdapter.newsPost(thisPost)} />
      </Container>

      <NewsPostFooter posts={otherPosts ?? []} />
    </>
  );
}