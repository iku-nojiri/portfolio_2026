import Image from "next/image";
import { NAV_MAP } from "../../constants/NAV_MAP";
import { Container } from "../../components/premitives/Container";
import { Inner } from "../../components/premitives/Inner";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";

export default function Works() {
  return (
    <>
      {/* Hero */}
      <Container as="div">
        <Inner size="lg">
          <PageHeading
            heading={NAV_MAP.works.name}
            text={NAV_MAP.works.text}
          />
        </Inner>
      </Container>
      {/* works */}
      <Container as="section">
        <Inner size="lg">
          <p></p>
        </Inner>
      </Container>
    </>
  );
}
