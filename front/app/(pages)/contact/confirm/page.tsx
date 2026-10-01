"use client";

import { useRef, useContext, useEffect, type SubmitEvent } from "react";
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
  const isFirstRender = useRef<boolean>(true);
  const router = useRouter();
  const { fieldValues, formStatus, updateFormStatus } = useContext(ContactFormContext);

  // function handleSubmit(e: SubmitEvent<HTMLFormElement>) {
  //   e.preventDefault()
  //   updateFormStatus("completed")
  // }

  useEffect(() => {
    if (formStatus !== "confirmed") {
      router.push("/contact/");
    }
  }, [formStatus, router]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    switch (formStatus) {
      // case "completed":
      //   router.push("/contact/conplete/");
      //   break;
      case "init":
        router.back();
        break;
    }
  }, [formStatus, router]);

  if (formStatus !== "confirmed") return null;
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
        <form method="post" action="">
          {Object.values(CONTACT_FIELDS).map((field) => {
            return (
              <div key={field.name}>
                <Text size="sm">{field.label}</Text>
                <Text size="lg" className="mt-2">
                  {fieldValues[field.name]}
                </Text>
                <Divider />

                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    value={fieldValues[field.name]}
                    readOnly
                    className="sr-only"
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    value={fieldValues[field.name]}
                    readOnly
                    className="sr-only"
                  />
                )}
              </div>
            );
          })}

          <div className="grid grid-cols-1 gap-2 mt-8 md:grid-cols-2">
            <Button
              type="button"
              size="lg"
              appearance="outline"
              onClick={() => {
                updateFormStatus("init")
              }}
            >
              <LeftIcon size={16} className="text-fg" aria-hidden />
              修正する
            </Button>

            <Button type="submit" size="lg">
              <SubmitIcon size={16} className="text-primary-fg" aria-hidden />
              送信する
            </Button>
          </div>
        </form>
      </Container>
    </>
  );
}
