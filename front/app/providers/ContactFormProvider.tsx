"use client";

import { CONTACT_FIELDS } from "../constants/CONTACT_FIELDS";
import { useState, createContext, ReactNode } from "react";

type FieldValues = Record<keyof typeof CONTACT_FIELDS, string>;
type ErrorMessages = Record<keyof typeof CONTACT_FIELDS, string>;
type FormStatus = "init" | "confirmed" | "completed";
type ContactFormContext = {
  fieldValues: FieldValues;
  errorMessages: ErrorMessages;
  formStatus: FormStatus;
  registerValue: (field: HTMLInputElement | HTMLTextAreaElement) => void;
  updateErrorMessages: (
    field: HTMLInputElement | HTMLTextAreaElement,
  ) => boolean;
  updateFormStatus: (status: FormStatus) => void;
};

const initFieldValues: FieldValues = Object.fromEntries(
  Object.keys(CONTACT_FIELDS).map((name) => [name, ""]),
) as FieldValues;

const initErrorMessages: ErrorMessages = Object.fromEntries(
  Object.keys(CONTACT_FIELDS).map((name) => [name, ""]),
) as ErrorMessages;

export const ContactFormContext = createContext<ContactFormContext>({
  fieldValues: initFieldValues,
  errorMessages: initErrorMessages,
  formStatus: "init",
  registerValue: () => {},
  updateErrorMessages: () => true,
  updateFormStatus: () => {},
});

export function ContactFormProvider({ children }: { children: ReactNode }) {
  const [fieldValues, setFieldValues] =
    useState<FieldValues>(initFieldValues);

  const [errorMessages, setErrorMessages] = useState<ErrorMessages>(
    initErrorMessages,
  );

  const [formStatus, setFormStatus] = useState<FormStatus>("init");

  function registerValue(field: HTMLInputElement | HTMLTextAreaElement) {
    const fieldName = field.name as keyof typeof CONTACT_FIELDS;

    setFieldValues((prev) => ({
      ...prev,
      [fieldName]: field.value,
    }));
  }

  function updateErrorMessages(field: HTMLInputElement | HTMLTextAreaElement) {
    field.setCustomValidity("");

    if (field.validity.valueMissing) {
      field.setCustomValidity("必須項目です");
    } else if (field.validity.typeMismatch && field.type === "email") {
      field.setCustomValidity("メールアドレスの形式が正しくありません");
    }

    const fieldName = field.name as keyof typeof CONTACT_FIELDS;

    setErrorMessages((prev) => ({
      ...prev,
      [fieldName]: field.validationMessage,
    }));

    return field.validity.valid;
  }

  function updateFormStatus(status: FormStatus) {
    setFormStatus(status);
  }

  return (
    <ContactFormContext.Provider
      value={{
        fieldValues,
        errorMessages,
        formStatus,
        registerValue,
        updateErrorMessages,
        updateFormStatus,
      }}
    >
      {children}
    </ContactFormContext.Provider>
  );
}
