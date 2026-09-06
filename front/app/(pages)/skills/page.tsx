import Image from "next/image";
import { NAV_MAP } from "../../constants/navMap";
import { Container } from "../../components/premitives/Container";
import { Inner } from "../../components/premitives/Inner";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";
import { Heading } from "@/app/components/premitives/Heading";
import { SKILLSET } from "@/app/constants/skillset";
import { SkillsCard } from "@/app/components/compositions/pages/skills/SkillsCard";
import { CtaArea } from "../../components/compositions/layouts/CtaArea";

export default function Skills() {
  return (
    <>
      {/* Hero */}
      <Container as="div">
        <Inner size="lg">
          <PageHeading
            heading={NAV_MAP.skills.name}
            text={NAV_MAP.skills.text}
          />
        </Inner>
      </Container>
      {/* Skill set */}
      <Container as="section">
        <Inner size="lg">
          <Heading as="h2" className="sr-only">
            Skillset List
          </Heading>
          <div className="sm:grid-cols-2 md:grid-cols-3 grid grid-cols-1 gap-6">
            {SKILLSET.map((item) => (
              <SkillsCard
                key={item.category}
                category={item.category}
                icon={item.icon}
                skills={item.skills}
              />
            ))}
          </div>
        </Inner>
      </Container>
    </>
  );
}
