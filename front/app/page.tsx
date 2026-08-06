import Image from "next/image";
import { Container } from "./components/premitives/Container";
import { Inner } from "./components/premitives/Inner";
import { Tile } from "./components/premitives/Tile";

export default function Home() {
  return (
    <>
      <Container as="section" colored={true}>
        <Inner size="lg">
          <p>ほげ</p>
          <Tile as="div">a</Tile>
        </Inner>
      </Container>
      <Container>
        <Inner size="md">
          <p>ほげ</p>
          <Tile as="span" appearance={"secondary"}>a</Tile>
        </Inner>
      </Container>
      <Container colored={true}>
        <Inner size="sm">
          <p>ほげ</p>
          <Tile as="li" appearance={"destructive"} size="lg">a</Tile>
        </Inner>
      </Container>
      <Container colored={true}>
        <Inner size="xs">
          <p>ほげ</p>
          <Tile as="p" circle={true}>a</Tile>
        </Inner>
      </Container>
    </>
  );
}
