import { ComponentProps, ReactNode } from "react";
import { buttonVariants } from "./shared/variants/buttonVariants";
import type { VariantProps } from "tailwind-variants";

type Props = VariantProps<typeof buttonVariants> & ComponentProps<"button"> & {
  children: ReactNode
}

export const Button = ({ children, className, lang, appearance, size, iconPos, disabled, ...props }: Props) => {
  return (
    <button {...props} disabled={disabled} className={buttonVariants({ lang, appearance, size, iconPos, disabled, className })}>
      {children}
    </button>
  )
}