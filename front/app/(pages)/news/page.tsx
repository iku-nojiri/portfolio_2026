import { NAV_MAP } from "../../constants/NAV_MAP";
import { Container } from "../../components/premitives/Container";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";
import { Grid } from "@/app/components/premitives/Grid";
import { NewsCard } from "@/app/components/compositions/pages/news/NewsCard";

export default function Skills() {
  return (
    <>
      {/* Hero */}
      <Container as="div" size="lg">
        <PageHeading heading={NAV_MAP.news.name} text={NAV_MAP.news.text} />
      </Container>
      {/* news */}
      <Container size="lg">
        <Grid col={1}>
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
          <NewsCard />
        </Grid>
      </Container>
    </>
  );
}
