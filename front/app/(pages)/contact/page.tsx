"use client";

import { useEffect, useContext, useRef, type SubmitEvent } from "react";
import { useRouter } from "next/navigation";
import { Send as SubmitIcon } from "lucide-react";
import { CONTACT_FIELDS } from "@/app/constants/CONTACT_FIELDS";
import { ContactFormContext } from "@/app/providers/ContactFormProvider";
import { ContactInput } from "@/app/components/compositions/pages/contact/ContactInput";
import { ContactTextarea } from "@/app/components/compositions/pages/contact/ContactTextarea";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";
import { Button } from "@/app/components/premitives/Button";
import { Container } from "@/app/components/premitives/Container";
import { NAV_MAP } from "@/app/constants/NAV_MAP";

export default function Contact() {
  const router = useRouter();
  const isFirstRender = useRef<boolean>(true);
  const formRef = useRef<HTMLFormElement>(null);
  const trapRef = useRef<HTMLInputElement>(null);

  const {
    fieldValues,
    formStatus,
    registerValue,
    updateErrorMessages,
    updateFormStatus,
  } = useContext(ContactFormContext);

  // フォーム内のinput & textareaをまとめて取得する
  function getFormFields() {
    return formRef.current?.querySelectorAll<
      HTMLInputElement | HTMLTextAreaElement
    >("input, textarea");
  }

  // フォーム送信時のバリデーションと状態更新を行う
  function validate(e: SubmitEvent<HTMLFormElement>) {
    e.preventDefault();

    const formFields = getFormFields();

    if (!formFields?.length) return;

    let isValid = true;

    formFields.forEach((field) => {
      const isFieldValid = updateErrorMessages(field);

      if (!isFieldValid) {
        isValid = false;
      }

      registerValue(field);
    });

    if (!isValid) {
      return;
    }

    // Honeypotが空であれば確認画面用の状態へ変更する
    if (trapRef.current?.value === "") {
      updateFormStatus("confirmed");
    } else {
      router.push("/");
    }
  }

  // formStatusがconfirmedになったら確認画面へ遷移する
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (formStatus === "confirmed") {
      router.push("/contact/confirm/");
    }
  }, [formStatus, router]);

  // Contextに入力値が保持されている場合、フォームに復元する
  useEffect(() => {
    const formFields = getFormFields();

    if (!formFields?.length) return;

    formFields.forEach((field) => {
      const fieldName = field.name as keyof typeof CONTACT_FIELDS;
      const value = fieldValues[fieldName];

      if (value !== undefined) {
        field.value = value;
      }
    });
  }, [fieldValues]);

  return (
    <>
      {/* Hero */}
      <Container as="div" size="lg">
        <PageHeading
          heading={NAV_MAP.contact.name}
          text={NAV_MAP.contact.text}
        />
      </Container>

      {/* Contact Form */}
      <Container as="section" size="sm">
        <form noValidate onSubmit={validate} ref={formRef}>
          <div className="space-y-6">
            {/* Honeypot */}
            <input
              type="text"
              name="subject"
              placeholder="〇〇について"
              ref={trapRef}
              className="sr-only"
            />

            {Object.entries(CONTACT_FIELDS).map(([key, field]) => {
              if (field.type === "textarea") {
                return (
                  <ContactTextarea
                    key={key}
                    label={field.label}
                    name={field.name}
                    placeholder={field.placeholder}
                    rows={7}
                    required={field.required}
                  />
                );
              }

              return (
                <ContactInput
                  key={key}
                  label={field.label}
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  required={field.required}
                />
              );
            })}

            <Button type="submit" size="lg" className="w-full">
              <SubmitIcon
                size={16}
                className="text-primary-fg"
                aria-hidden
              />
              確認画面へ
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
