import Image from "next/image";
import { NAV_MAP } from "../../constants/NAV_MAP";
import { Container } from "../../components/premitives/Container";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";
import { Heading } from "@/app/components/premitives/Heading";
import { BlogCard } from "@/app/components/compositions/pages/blog/BlogCard";
import { Grid } from "@/app/components/premitives/Grid";

export default function Works() {
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
        <BlogCard featured />
      </Container>
      <Container as="section" size="lg">
        <Heading as="h2" size="xl">
          Recent Article
        </Heading>
        <Grid as="ul" className="mt-8">
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
          <BlogCard />
        </Grid>
      </Container>
    </>
  );
}
