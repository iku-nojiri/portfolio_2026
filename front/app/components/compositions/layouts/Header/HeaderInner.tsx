import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export const HeaderInner = ({ children }: Props) => {
  return <div className="lg:grid-cols-[1fr_auto_1fr] grid grid-cols-2 items-center mx-auto py-3.5 w-full max-w-7xl">{children}</div>;
};
