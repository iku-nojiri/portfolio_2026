import Image from "next/image";
import { Text } from "./components/premitives/Text";
import { Link } from "./components/premitives/Link";
import { Button } from "./components/premitives/Button";
import { Heading } from "./components/premitives/Heading";

export default function Home() {
  return (
    <>
      <br />
      <Heading lang="en" as="h1" size="large">Heading</Heading>
      <Text as="label">ほげ</Text>
      <Link href={""} appearance={"primary"} className="mr-10">リンク</Link>
      <Link href={""} appearance={"secondary"}>リンク</Link>
      <Link href={""} appearance={"outline"}>リンク</Link>
      <Link href={""} appearance={"ghost"}>リンク</Link>
      <Button size={"lg"} disabled={true} type={"button"} appearance={"primary"}>ボタン</Button>
      <Button size={"sm"} appearance={"secondary"}>ボタン</Button>
      <Button appearance={"outline"}>ボタン</Button>
      <Button appearance={"ghost"}>ボタン</Button>
    </>
  );
}
