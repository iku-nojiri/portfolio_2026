import { ComponentProps, ReactNode } from "react";

type Props = ComponentProps<"div"> & {
  children: ReactNode;
};

export const Band = ({ children, ...props }: Props) => {
  return (
    <div {...props} className={`w-full p-6 bg-bg-subtle rounded-lg ${props.className ?? ""}`}>
      {children}
    </div>
  );
};
