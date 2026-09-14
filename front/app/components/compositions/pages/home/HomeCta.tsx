import { NAV_MAP } from "@/app/constants/NAV_MAP";
import { Container } from "@/app/components/premitives/Container";
import { Heading } from "@/app/components/premitives/Heading";
import { Text } from "@/app/components/premitives/Text";
import { Link } from "@/app/components/premitives/Link";
import { ArrowRight } from "lucide-react";

export const HomeCta = () => {
  return (
    <Container as="aside" size="lg">
      <div className="grid place-items-center">
        <Heading as="h2" lang="en" size="xxl">
          Get in Touch
        </Heading>
        <Text className="mt-3.5 text-center">
          ご質問やご相談がございましたら、お気軽にお問い合わせください。
        </Text>
        <Link className="mt-8" href={NAV_MAP.contact.href}>
          お問い合わせ
          <ArrowRight size={16} className="text-primary-fg" />
        </Link>
      </div>
    </Container>
  );
};
