import NextLink from "next/link";
import { ComponentProps, ReactNode } from "react";
import { buttonVariants } from "./shared/variants/buttonVariants";
import type { VariantProps } from "tailwind-variants";

type Props = VariantProps<typeof buttonVariants> & ComponentProps<typeof NextLink> & {
  href: string,
  children: ReactNode
}

export const Link = ({ children, className, lang, appearance, size, disabled, ...props }: Props) => {
  return (
    <NextLink {...props} className={buttonVariants({ lang, appearance, size, disabled, className })}>
      {children}
    </NextLink>
  )
}