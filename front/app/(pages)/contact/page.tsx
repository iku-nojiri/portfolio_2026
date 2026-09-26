"use client";

import { useContext } from "react";
import { ContactFormContext } from "@/app/providers/ContactFormProvider";
import { NAV_MAP } from "../../constants/NAV_MAP";
import { Container } from "../../components/premitives/Container";
import { PageHeading } from "@/app/components/compositions/pages/_shared/PageHeading";
import { Heading } from "@/app/components/premitives/Heading";
import { Text } from "@/app/components/premitives/Text";
import { Input } from "@/app/components/premitives/Input";
import { Textarea } from "@/app/components/premitives/Textarea";

export default function About() {
  const { fields, registerValue } = useContext(ContactFormContext);
  return (
    <>
      {/* Hero */}
      <Container as="div" size="lg">
        <PageHeading
          heading={NAV_MAP.contact.name}
          text={NAV_MAP.contact.text}
        />
      </Container>
      {/* My Journey< */}
      <Container as="section" size="sm">
        <Input
          type="text"
          name="name"
          placeholder="hoge"
          onChange={(e) => {
            registerValue(e);
          }}
        />
        <Input
          type="text"
          name="company"
          placeholder="hoge"
          onChange={(e) => {
            registerValue(e);
          }}
        />
        <Textarea
          name="message"
          rows={5}
          placeholder="hoge"
          onChange={(e) => {
            registerValue(e);
          }}
        />
        <p>{fields.name}</p>
        <p>{fields.company}</p>
        <p>{fields.message}</p>
      </Container>
    </>
  );
}
