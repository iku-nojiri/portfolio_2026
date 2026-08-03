import NextLink from "next/link";
import { ComponentProps, ReactNode } from "react";
import { buttonVariants } from "./shared/variants/buttonVariants";
import type { VariantProps } from "tailwind-variants";

type Props = VariantProps<typeof buttonVariants> & ComponentProps<typeof NextLink> & {
  href: string,
  children: ReactNode
}

export const Link = ({ children, className, lang, appearance, size, iconPos, disabled, ...props }: Props) => {
  return (
    <NextLink {...props} className={buttonVariants({ lang, appearance, size, iconPos, disabled, className })}>
      {children}
    </NextLink>
  )
}