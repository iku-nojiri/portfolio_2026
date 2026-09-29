"use client";

import { CONTACT_FIELDS } from "../constants/CONTACT_FIELDS";
import { useState, createContext, ReactNode } from "react";

type FieldValues = Record<keyof typeof CONTACT_FIELDS, string>;

type ErrorMessages = Record<keyof typeof CONTACT_FIELDS, string>;

type ContactFormContext = {
  fieldValues: FieldValues;
  errorMessages: ErrorMessages;
  registerValue: (
    field: HTMLInputElement | HTMLTextAreaElement,
  ) => void;
  updateErrorMessages: (
    field: HTMLInputElement | HTMLTextAreaElement,
  ) => boolean;
};

export const ContactFormContext = createContext<ContactFormContext>({
  fieldValues: {
    ...CONTACT_FIELDS,
  },
  errorMessages: {
    ...CONTACT_FIELDS,
  },
  registerValue: () => {},
  updateErrorMessages: () => true,
});

export const ContactFormProvider = ({ children }: { children: ReactNode }) => {
  const [fieldValues, setFieldValues] = useState({
    ...CONTACT_FIELDS,
  });

  function registerValue(
    field: HTMLInputElement | HTMLTextAreaElement,
  ) {
    setFieldValues((prev) => ({
      ...prev,
      [field.name]: field.value,
    }));
  }

  const [errorMessages, setErrorMessages] = useState({
    ...CONTACT_FIELDS,
  });

  function updateErrorMessages(
    field: HTMLInputElement | HTMLTextAreaElement,
  ) {
    field.setCustomValidity("");

    if (field.validity.valueMissing) {
      field.setCustomValidity("必須項目です");
    } else if (field.validity.typeMismatch && field.type === "email") {
      field.setCustomValidity("メールアドレスの形式が正しくありません");
    }

    setErrorMessages((prev) => ({
      ...prev,
      [field.name]: field.validationMessage,
    }));

    return field.validity.valid;
  }

  return (
    <ContactFormContext.Provider
      value={{ fieldValues, errorMessages, registerValue, updateErrorMessages }}
    >
      {children}
    </ContactFormContext.Provider>
  );
};
