"use client";

import { useState, createContext, ReactNode, ChangeEvent } from "react";

type Fields = {
  name: string;
  furigana: string;
  company?: string;
  email: string;
  subject: string;
  message: string;
};

type ContactFormContext = {
  fields: Fields;
  registerValue: (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
};

export const ContactFormContext = createContext<ContactFormContext>({
  fields: {
    name: "",
    furigana: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  },
  registerValue: () => {},
});

export const ContactFormProvider = ({ children }: { children: ReactNode }) => {
  const [fields, setFields] = useState({
    name: "",
    furigana: "",
    company: "",
    email: "",
    subject: "",
    message: "",
  });

  function registerValue(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    setFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <ContactFormContext.Provider value={{fields, registerValue}}>
      {children}
    </ContactFormContext.Provider>
  );
};
