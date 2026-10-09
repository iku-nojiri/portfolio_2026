"use client";

import { use } from "react";
import { Container } from "@/app/components/premitives/Container";
import { WorksPostHeading } from "@/app/components/compositions/pages/works/post/WorksPostHeading";
import { WorksPostBody } from "@/app/components/compositions/pages/works/post/WorksPostBody";
import { WorksPostSidebar } from "@/app/components/compositions/pages/works/post/WorksPostSidebar";
import { WorksPostFooter } from "@/app/components/compositions/pages/works/post/WorksPostFooter";
import { usePostData } from "@/app/hooks/usePostData";
import type { WorksPost } from "@/app/types/WorksPost.type";
import { postDataAdapter } from "@/app/libs/postDataAdapter";

type Props = {
  params: Promise<{
    slug: string;
  }>;
};

export default function Post({ params }: Props) {
  const { slug } = use(params);
  const data = usePostData<WorksPost>("works");
  const thisPost = data?.find((item) => item.slug === slug);

  const otherPosts = data?.filter((item) => item.slug !== slug).slice(0, 2);
  return thisPost ? (
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
  ) : null;
}
