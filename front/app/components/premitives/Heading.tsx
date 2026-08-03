import { ComponentProps, ReactNode } from "react";
import { tv } from "tailwind-variants";
import { typograhyVariants } from "./shared/variants/typograhyVariants";
import type { VariantProps } from "tailwind-variants";

const variants = tv({
  extend: typograhyVariants,
  variants: {
    weight: {
      normal: "font-normal",
      bold: "font-extrabold",
    },
    size: {
      large: "text-4xl leading-10 sm:text-3xl sm:leading-9",  // 36px
      mediumLarge: "text-3xl leading-9",                      // 30px
      medium: "text-2xl leading-9",                           // 24px
      smallMedium: "text-xl leading-8",                       // 20px
      small: "text-lg leading-7",                             // 18px
      tiny: "text-base leading-7",                            // 16px
    },
    color: {
      default: "text-fg",
      primary: "text-primary",
    },
  },
  defaultVariants: {
    lang: "jp",
    weight: "bold",
    color: "default"
  }
})

type Props = VariantProps<typeof variants> & {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6",
  children: ReactNode,
  className?: string
}

export const Heading = ({as, lang, children, className, weight, size, color}: Props) => {
  const Tag = as;
  return (
    <Tag className={variants({lang, weight, size, color, className})} >{children}</Tag>
  )
}