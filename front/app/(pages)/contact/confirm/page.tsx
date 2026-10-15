"use client";

import "dotenv/config";
import {
  useRef,
  useContext,
  useEffect,
  useState,
  type SubmitEvent,
} from "react";
import { useRouter } from "next/navigation";
import { Send as SubmitIcon, ArrowLeft as LeftIcon } from "lucide-react";
import { CONTACT_FIELDS } from "@/app/constants/CONTACT_FIELDS";
import { ContactFormContext } from "@/app/providers/ContactFormProvider";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";
import { Button } from "@/app/components/premitives/Button";
import { Container } from "@/app/components/premitives/Container";
import { NAV_MAP } from "@/app/constants/NAV_MAP";
import { Text } from "@/app/components/premitives/Text";
import { Divider } from "@/app/components/premitives/Divider";

export default function Confirm() {
  const apiUrl = process.env.NEXT_PUBLIC_FORM_API_URL;
  const isFirstRender = useRef<boolean>(true);
  const router = useRouter();

  const { fieldValues, formStatus, updateFormStatus } =
    useContext(ContactFormContext);

  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  // 送信ボタン押下時にステータスを更新
  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();
    updateFormStatus("submitted");
  }

  // ステータスに応じて送信処理・画面遷移を実行
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      if (formStatus !== "confirmed") {
        router.replace("/contact/");
      }
      return;
    }
    
    switch (formStatus) {
      case "init":
        router.replace(NAV_MAP.contact.href);
        return;
      case "completed":
        router.replace(NAV_MAP.complete.href);
        return;
      case "error":
        router.replace("/contact/error/");
        router.replace(NAV_MAP.error.href);
        return;
      case "submitted":
        break;
      default:
        return;
    }

    async function submitForm() {
      if (!apiUrl) {
        updateFormStatus("error");
        // setErrorMessage("送信先が設定されていません。");
        return;
      }

      setIsSubmitting(true);
      setErrorMessage("");

      try {
        const formData = new FormData();

        Object.values(CONTACT_FIELDS).forEach((field) => {
          formData.append(field.name, fieldValues[field.name]);
        });

        const response = await fetch(apiUrl, {
          method: "POST",
          body: formData,
        });

        const result: { status?: string; message?: string } =
          await response.json();

        if (!response.ok || result.status !== "mail_sent") {
          updateFormStatus("error");
          return;
        }

        updateFormStatus("completed");
      } catch {
        updateFormStatus("error");
      } finally {
        setIsSubmitting(false);
      }
    }

    submitForm();
  }, [formStatus, router, apiUrl, fieldValues, updateFormStatus]);

  // 確認状態・送信状態以外では画面を表示しない
  if (formStatus !== "confirmed" && formStatus !== "submitted") {
    return null;
  }

  return (
    <>
      {/* Hero */}
      <Container as="div" size="lg">
        <PageHeading
          heading={NAV_MAP.confirm.name}
          text={NAV_MAP.confirm.text}
        />
      </Container>

      {/* Contact Form */}
      <Container as="section" size="sm">
        <form onSubmit={handleSubmit}>
          {/* 入力内容の確認・表示 */}
          {Object.values(CONTACT_FIELDS).map((field) => (
            <div key={field.name}>
              <Text size="sm">{field.label}</Text>
              <Text size="lg" className="mt-2">
                {fieldValues[field.name]}
              </Text>
              <Divider />
            </div>
          ))}

          {/* 送信エラー */}
          {errorMessage && (
            <p role="alert" className="mt-4 text-red-600">
              {errorMessage}
            </p>
          )}

          {/* 修正・送信ボタン */}
          <div className="grid grid-cols-1 gap-2 mt-8 md:grid-cols-2">
            <Button
              type="button"
              size="lg"
              appearance="outline"
              disabled={isSubmitting}
              onClick={() => updateFormStatus("init")}
            >
              <LeftIcon size={16} className="text-fg" aria-hidden />
              修正する
            </Button>

            <Button type="submit" size="lg" disabled={isSubmitting}>
              <SubmitIcon size={16} className="text-primary-fg" aria-hidden />
              送信する
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
