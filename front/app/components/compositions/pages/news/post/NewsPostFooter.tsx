import { Container } from "@/app/components/premitives/Container";
import { Heading } from "@/app/components/premitives/Heading";
import { Grid } from "@/app/components/premitives/Grid";
import { NewsCard } from "../NewsCard";
import { Link } from "@/app/components/premitives/Link";
import { NAV_MAP } from "@/app/constants/NAV_MAP";
import { ArrowLeft as LeftIcon } from "lucide-react";
import type { NewsPost } from "@/app/types/NewsPost.type";
import { postDataAdapter } from "@/app/libs/postDataAdapter";

type Props = {
  posts: NewsPost[];
};

export const NewsPostFooter = ({ posts }: Props) => {
  return (
    <Container as="aside" size="md">
      <Heading as="h2" size="lg">
        その他の最新ニュース
      </Heading>

      <Grid col={1} className="mt-8">
        {posts.map((post) => (
          <NewsCard
            key={post.slug}
            {...postDataAdapter.newsPost(post)}
          />
        ))}
      </Grid>

      <div className="flex justify-center mt-6">
        <Link href={NAV_MAP.news.href} appearance="ghost">
          <LeftIcon size={16} className="text-fg" aria-hidden />
          ニュース一覧に戻る
        </Link>
      </div>
    </Container>
  );
};
