"use client";

import { useContext, useRef, type SubmitEvent } from "react";
import { useRouter } from "next/navigation";
import { Send as SubmitIcon } from "lucide-react";
import { ContactFormContext } from "@/app/providers/ContactFormProvider";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";
import { Button } from "@/app/components/premitives/Button";
import { Container } from "@/app/components/premitives/Container";
import { NAV_MAP } from "@/app/constants/NAV_MAP";

export default function Comfirm() {
  const router = useRouter();
  const { fieldValues } = useContext(ContactFormContext);

  return (
    <>
      {/* Hero */}
      <Container as="div" size="lg">
        <PageHeading
          heading={NAV_MAP.confirm.name}
          text={NAV_MAP.confirm.text}
        />
      </Container>
      {/* Contact Fom */}
      <Container as="section" size="sm">
        {(Object.keys(fieldValues) as Array<keyof typeof fieldValues>).map(
          (value) => {
            return <p key={value}>{fieldValues[value]}</p>;
          },
        )}
      </Container>
    </>
  );
}
