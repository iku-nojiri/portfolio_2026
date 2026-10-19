"use client";

import { useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { Container } from "@/app/components/premitives/Container";
import { WorksPostHeading } from "@/app/components/compositions/pages/works/post/WorksPostHeading";
import { WorksPostBody } from "@/app/components/compositions/pages/works/post/WorksPostBody";
import { WorksPostSidebar } from "@/app/components/compositions/pages/works/post/WorksPostSidebar";
import { WorksPostFooter } from "@/app/components/compositions/pages/works/post/WorksPostFooter";
import { usePostData } from "@/app/hooks/usePostData";
import type { WorksPost } from "@/app/types/WorksPost.type";
import { postDataAdapter } from "@/app/libs/postDataAdapter";

export default function Contents() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = searchParams.get("slug");

  const data = usePostData<WorksPost>("works");
  const thisPost = data?.find((item) => item.slug === slug);
  const otherPosts = data
    ?.filter((item) => item.slug !== slug)
    .slice(0, 3);

  useEffect(() => {
    if (data === null) return;

    if (!slug || !thisPost) {
      router.replace("/works/");
    }
     // ページ遷移時の位置のずれをリセットする
    scroll(0, 0)
  }, [data, slug, thisPost, router]);

  if (!thisPost) return null;

  return (
    <>
      <Container as="article" size="md">
        <WorksPostHeading {...postDataAdapter.worksPost(thisPost)} />

        <div className="mt-12 lg:grid lg:grid-cols-4 lg:gap-9">
          <WorksPostBody {...postDataAdapter.worksPost(thisPost)} />
          <WorksPostSidebar {...postDataAdapter.worksPost(thisPost)} />
        </div>
      </Container>

      <WorksPostFooter posts={otherPosts ?? []} />
    </>
  );
}