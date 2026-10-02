"use client";

import {
  Home as HomeIcon,
  ArrowLeft as LeftIcon,
  CircleX as ErrorIcon,
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
        <Tile size="lg" appearance="destructive" circle>
          <ErrorIcon size={48} className="text-icon-destructive" aria-hidden />
        </Tile>
        <Heading as="h1" size="lg" className="mt-7">
          送信に失敗しました
        </Heading>
        <Text className="mt-2 text-center">
          申し訳ございません。
          <br className="block sm:hidden" />
          メッセージの送信中にエラーが発生しました。
        </Text>

        <Band className="mt-12 space-y-3">
          <Text>
            お問い合わせを送信できませんでした。以下の原因が考えられます。
          </Text>
          <ul className="list-inside list-disc">
            <Text as="li">通信環境が不安定になっている</Text>
            <Text as="li">入力内容に誤りがある</Text>
            <Text as="li">メールアドレスの形式が正しくない</Text>
            <Text as="li">一時的にサーバーで問題が発生している</Text>
          </ul>
          <Text>
            入力内容や通信環境をご確認のうえ、もう一度お試しください。
          </Text>
        </Band>

        <div className="grid grid-cols-1 gap-2 mt-10 w-full md:grid-cols-2">
          <Link href={NAV_MAP.contact.href} size="lg" appearance="outline">
            <LeftIcon size={16} className="text-fg" aria-hidden />
            入力画面へ戻る
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
