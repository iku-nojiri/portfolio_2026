import Image from "next/image";
import { NAV_MAP } from "../../constants/NAV_MAP";
import { Container } from "../../components/premitives/Container";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";
import { Grid } from "@/app/components/premitives/Grid";
import { WorksCard } from "@/app/components/compositions/pages/works/WorksCard";

export default function Works() {
  return (
    <>
      {/* Hero */}
      <Container as="div" size="lg">
        <PageHeading heading={NAV_MAP.blog.name} text={NAV_MAP.blog.text} />
      </Container>
      {/* articless */}
      <Container as="section" size="lg">
        <Grid as="ul">
          <WorksCard />
          <WorksCard />
          <WorksCard />
        </Grid>
      </Container>
    </>
  );
}
