import Image from "next/image";
import { NAV_MAP } from "../../constants/NAV_MAP";
import { Container } from "../../components/premitives/Container";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";
import { Heading } from "@/app/components/premitives/Heading";
import { Grid } from "@/app/components/premitives/Grid";
import { SKILLSET } from "@/app/constants/SKILLSET";
import { SkillsCard } from "@/app/components/compositions/pages/skills/SkillsCard";

export default function Skills() {
  return (
    <>
      {/* Hero */}
      <Container as="div" size="lg">
        <PageHeading heading={NAV_MAP.skills.name} text={NAV_MAP.skills.text} />
      </Container>
      {/* Skill set */}
      <Container as="section" size="lg">
        <Heading as="h2" className="sr-only">
          Skillset List
        </Heading>
        <Grid>
          {SKILLSET.map((item) => (
            <SkillsCard
              key={item.category}
              category={item.category}
              icon={item.icon}
              skills={item.skills}
            />
          ))}
        </Grid>
      </Container>
    </>
  );
}
