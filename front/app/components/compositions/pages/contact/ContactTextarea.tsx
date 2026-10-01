import { useContext } from "react";

import { Text } from "@/app/components/premitives/Text";
import { Textarea } from "@/app/components/premitives/Textarea";
import { ContactFormContext } from "@/app/providers/ContactFormProvider";

import type { ContactFieldProps } from "./_shared/ContactFieldProps.type";

type Props = ContactFieldProps & {
  rows?: number;
  cols?: number;
};

export const ContactTextarea = ({
  label,
  name,
  placeholder,
  required = false,
  rows,
  cols,
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

      <Textarea
        id={name}
        name={name}
        placeholder={placeholder}
        required={required}
        rows={rows}
        cols={cols}
        destructive={isError}
        aria-invalid={isError}
      />

      <Text as="small" size="sm" destructive>
        {isError && errorMessages[name]}
      </Text>
    </div>
  );
};
