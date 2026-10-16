"use client";

import {
  useRef,
  useContext,
  useEffect,
  useState,
  type SubmitEvent,
} from "react";
import { useRouter } from "next/navigation";
import { Send as SubmitIcon, ArrowLeft as LeftIcon } from "lucide-react";
import emailjs from "@emailjs/browser";

import { CONTACT_FIELDS } from "@/app/constants/CONTACT_FIELDS";
import { ContactFormContext } from "@/app/providers/ContactFormProvider";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";
import { Button } from "@/app/components/premitives/Button";
import { Container } from "@/app/components/premitives/Container";
import { NAV_MAP } from "@/app/constants/NAV_MAP";
import { Text } from "@/app/components/premitives/Text";
import { Divider } from "@/app/components/premitives/Divider";

export default function Confirm() {
  const router = useRouter();

  const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
  const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY;

  const isFirstRender = useRef(true);
  const isSending = useRef(false);

  const { fieldValues, formStatus, updateFormStatus } =
    useContext(ContactFormContext);

  const [isSubmitting, setIsSubmitting] = useState(false);

  // 送信ボタン押下時にステータスを更新
  function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    if (isSending.current) return;

    updateFormStatus("submitted");
  }

  // EmailJS でメールを送信
  async function submitForm() {
    if (!serviceId || !templateId || !publicKey) {
      updateFormStatus("error");
      return;
    }

    if (isSending.current) return;

    isSending.current = true;
    setIsSubmitting(true);

    try {
      const templateParams = Object.fromEntries(
        Object.values(CONTACT_FIELDS).map((field) => [
          field.name,
          fieldValues[field.name],
        ]),
      );

      await emailjs.send(serviceId, templateId, templateParams, { publicKey });

      updateFormStatus("completed");
    } catch (error) {
      if (error && typeof error === "object") {
        const emailJSError = error as {
          status?: number;
          text?: string;
          message?: string;
        };

        console.error("EmailJS status:", emailJSError.status);
        console.error("EmailJS text:", emailJSError.text);
        console.error("EmailJS message:", emailJSError.message);
        console.error("EmailJS raw error:", error);
      } else {
        console.error("EmailJS error:", error);
      }

      updateFormStatus("error");
    } finally {
      isSending.current = false;
      setIsSubmitting(false);
    }
  }

  // ステータスに応じて送信処理・画面遷移を実行
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;

      if (formStatus !== "confirmed") {
        router.replace(NAV_MAP.contact.href);
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
        router.replace(NAV_MAP.error.href);
        return;

      case "submitted":
        void submitForm();
        return;

      default:
        return;
    }
  }, [formStatus, router]);

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
              {isSubmitting ? "送信中..." : "送信する"}
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
