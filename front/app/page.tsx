import Image from "next/image";
import { Text } from "./components/premitives/Text";
import { Link } from "./components/premitives/Link";
import { Button } from "./components/premitives/Button";

export default function Home() {
  return (
    <>
      <br />
      <Text as="label">ほげ</Text>
      <Link href={""} appearance={"primary"}>リンク</Link>
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
