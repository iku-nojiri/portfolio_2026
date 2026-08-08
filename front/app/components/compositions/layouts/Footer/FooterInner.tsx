import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const FooterInner = ({ children }: Props) => {
  return <div className="grid grid-cols-[1fr_1fr] items-center mx-auto py-8 w-full max-w-7xl">{children}</div>;
};
