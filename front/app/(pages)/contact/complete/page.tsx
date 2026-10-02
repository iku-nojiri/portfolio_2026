"use client";

import {
  Home as HomeIcon,
  ArrowLeft as LeftIcon,
  CircleCheck as SuccessIcon,
} from "lucide-react";
import { useContext, useEffect } from "react";
import { useRouter } from "next/navigation";

import { ContactFormContext } from "@/app/providers/ContactFormProvider";
import { NAV_MAP } from "@/app/constants/NAV_MAP";

import { Band } from "@/app/components/premitives/shared/Band";
import { Container } from "@/app/components/premitives/Container";
import { Heading } from "@/app/components/premitives/Heading";
import { Link } from "@/app/components/premitives/Link";
import { Text } from "@/app/components/premitives/Text";
import { Tile } from "@/app/components/premitives/Tile";

export default function Complete() {
  return (
    <Container as="div" size="sm">
      <div className="grid place-items-center">
        <Tile size="lg" circle>
          <SuccessIcon size={48} className="text-primary" aria-hidden />
        </Tile>
        <Heading as="h1" size="lg" className="mt-7">
          送信が完了しました
        </Heading>
        <Text className="mt-2 text-center">
          お問い合わせありがとうございます。
          <br className="block sm:hidden" />
          メッセージを受け取りました。
        </Text>

        <Band className="mt-12">
          <Text>
            通常1〜2日以内にご入力いただいたメールアドレスへご返信いたします。
            返信が届かない場合は、迷惑メールフォルダをご確認ください。
            <br />
            また、受信設定によってメールが届かない場合がありますので、あわせてご確認をお願いいたします。
            <br />
            なお、お問い合わせの内容によっては、ご返信までにお時間をいただく場合がございます。
          </Text>
        </Band>

        <div className="grid grid-cols-1 gap-2 mt-10 w-full md:grid-cols-2">
          <Link href={NAV_MAP.contact.href} size="lg" appearance="outline">
            <LeftIcon size={16} className="text-fg" aria-hidden />
            修正する
          </Link>
          <Link href={NAV_MAP.home.href} size="lg">
            <HomeIcon size={16} className="text-primary-fg" aria-hidden />
            ホームに戻る
          </Link>
        </div>
      </div>
    </Container>
  );
}
