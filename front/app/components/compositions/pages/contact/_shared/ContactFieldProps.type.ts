import { CONTACT_FIELDS } from "@/app/constants/CONTACT_FIELDS";

export type ContactFieldProps = {
  label: string;
  name: keyof typeof CONTACT_FIELDS;
  placeholder?: string;
  required?: boolean;
  errorMessage?: string
};