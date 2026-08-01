import { ReactNode } from "react";
import { tv } from "tailwind-variants"
import type { VariantProps } from "tailwind-variants";

const style = tv({
  base: "leading-6",
  variants: {
    lang: {
      en: "font-roboto-flex",
      jp: "font-noto-sans-jp",
    },
    weight: {
      normal: "font-normal",
      bold: "font-extrabold",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    color: {
      default: "text-foreground",
      muted: "text-muted-foreground",
    },
  },
  defaultVariants: {
    lang: "jp",
    weight: "normal",
    size: "md",
    color: "default"
  }
})

type Props = VariantProps<typeof style> & {
  as?: "p" | "span" | "strong" | "em" | "small" | "label" | "time",
  className?: string
  children: ReactNode,
};

export const Text = ({ as = "p", lang, className, children, weight, size, color }: Props) => {
  const Tag = as
  return (
    <Tag className={`${style({ lang, weight, size, color })} ${className}`}>
      {children}
    </Tag>
  )
}