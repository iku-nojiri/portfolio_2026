"use client";

import { useContext, useRef, type SubmitEvent } from "react";
import { useRouter } from "next/navigation";
import { Send as SubmitIcon } from "lucide-react";
import { ContactFormContext } from "@/app/providers/ContactFormProvider";
import { ContactInput } from "@/app/components/compositions/pages/contact/ContactInput";
import { ContactTextarea } from "@/app/components/compositions/pages/contact/ContactTextarea";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";
import { Button } from "@/app/components/premitives/Button";
import { Container } from "@/app/components/premitives/Container";
import { NAV_MAP } from "@/app/constants/NAV_MAP";

export default function Contact() {
  const router = useRouter();
  const trapRef = useRef<HTMLInputElement>(null);
  const { registerValue, updateErrorMessages } = useContext(ContactFormContext);

  function validate(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formFields = e.currentTarget.querySelectorAll<
      HTMLInputElement | HTMLTextAreaElement
    >("input, textarea");

    let isValid = true;

    formFields.forEach((field) => {
      if (
        !(field instanceof HTMLInputElement) &&
        !(field instanceof HTMLTextAreaElement)
      ) {
        return;
      }

      const isFieldValid = updateErrorMessages(field);

      if (!isFieldValid) {
        isValid = false;
      }
      registerValue(field);
    });

    if (!isValid) {
      return;
    }

    trapRef.current?.value === ""
      ? router.push("/contact/confirm/")
      : router.push("/");
  }

  return (
    <>
      {/* Hero */}
      <Container as="div" size="lg">
        <PageHeading
          heading={NAV_MAP.contact.name}
          text={NAV_MAP.contact.text}
        />
      </Container>
      {/* Contact Fom */}
      <Container as="section" size="sm">
        <form noValidate onSubmit={validate}>
          <div className="space-y-6">
            {
              /* honey pod */
              <input
                type="text"
                name="subject"
                placeholder="〇〇について"
                ref={trapRef}
                className="sr-only"
              />
            }
            <ContactInput
              label="お名前"
              name="name"
              placeholder="山田 太郎"
              required={true}
            />
            <ContactInput
              label="ふりがな"
              name="furigana"
              placeholder="やまだ たろう"
              required={true}
            />
            <ContactInput
              label="会社名"
              name="company"
              placeholder="会社名〇〇"
            />
            <ContactInput
              label="メールアドレス"
              type="email"
              name="email"
              placeholder="your.email@example.com"
              required={true}
            />
            <ContactTextarea
              label="お問い合わせ内容"
              name="message"
              placeholder="お問い合わせ内容を入力してください"
              rows={7}
              required={true}
            />
            <Button type="submit" size="lg" className="w-full">
              <SubmitIcon size={16} className="text-primary-fg" aria-hidden />
              送信する
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
