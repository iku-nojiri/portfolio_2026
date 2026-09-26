import { Container } from "./components/premitives/Container";
import { NotFoundHeading } from "./components/compositions/pages/not-found/NotFoundHeading";
import { NotFoundLinks } from "./components/compositions/pages/not-found/NotFoundLinks";
import { Text } from "./components/premitives/Text";

export default function NotFound() {
  return (
    <Container as="div" size="lg" space-t="md">
      <NotFoundHeading />
      <Text className="mt-4 text-center" size="lg">お探しのページが見つかりません。移動または削除された可能性があります。</Text>
      <NotFoundLinks />
    </Container>
  );
}
