import Image from "next/image";
import { Container } from "./components/premitives/Container";
import { Inner } from "./components/premitives/Inner";

export default function Home() {
  return (
    <>
      <Container as="section" colored={true}>
        <Inner size="lg">
          <p>ほげ</p>
        </Inner>
      </Container>
      <Container>
        <Inner size="md">
          <p>ほげ</p>
        </Inner>
      </Container>
      <Container colored={true}>
        <Inner size="sm">
          <p>ほげ</p>
        </Inner>
      </Container>
      <Container colored={true}>
        <Inner size="xs">
          <p>ほげ</p>
        </Inner>
      </Container>
    </>
  );
}
