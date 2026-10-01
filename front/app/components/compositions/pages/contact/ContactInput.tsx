import { useContext } from "react";

import { Input } from "@/app/components/premitives/Input";
import { Text } from "@/app/components/premitives/Text";
import { ContactFormContext } from "@/app/providers/ContactFormProvider";

import type { ContactFieldProps } from "./_shared/ContactFieldProps.type";

type Props = ContactFieldProps & {
  type?: string;
};

export const ContactInput = ({
  label,
  type = "text",
  name,
  placeholder,
  required = false,
}: Props) => {
  const { errorMessages } = useContext(ContactFormContext);
  const isError = !!errorMessages[name];

  return (
    <div className="flex flex-col gap-2">
      <Text
        as="label"
        size="sm"
        htmlFor={name}
        className="cursor-pointer"
        destructive={isError}
      >
        {label}
        {required && "（*必須）"}
      </Text>

      <Input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        destructive={isError}
        aria-invalid={isError}
      />

      <Text as="small" size="sm" destructive>
        {isError && errorMessages[name]}
      </Text>
    </div>
  );
};
