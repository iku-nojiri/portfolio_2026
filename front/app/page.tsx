import Image from "next/image";
import { Container } from "./components/premitives/Container";
import { Inner } from "./components/premitives/Inner";
import { HomeHero } from "./components/compositions/pages/home/HomeHero";

export default function Home() {
  return (
    <>
      <Container as="div">
        <Inner size="lg">
          <HomeHero />
        </Inner>
      </Container>
      <Container as="section" colored>
        <Inner size="lg">
          hoge
        </Inner>
      </Container>
      <Container as="aside">
        <Inner size="lg">
          fuga
        </Inner>
      </Container>
    </>
  );
}
