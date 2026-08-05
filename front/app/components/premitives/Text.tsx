import { ElementType, ReactNode, ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { typograhyVariants } from "./shared/variants/typograhyVariants";
import type { VariantProps } from "tailwind-variants";

const variants = tv({
  extend: typograhyVariants,
  base: "leading-6",
  variants: {
    weight: {
      normal: "font-normal",
      bold: "font-extrabold",
    },
    size: {
      large: "text-lg",     // 18px
      medium: "text-base",  // 16px
      small: "text-sm",     // 14px
    },
    color: {
      default: "text-fg",
      muted: "text-muted-fg",
    },
  },
  defaultVariants: {
    lang: "jp",
    weight: "normal",
    size: "medium",
    color: "default" 
  }
});

type TextProps<T extends ElementType> = VariantProps<typeof variants> & {
  as?: T;
  children: ReactNode;
} & Omit<ComponentProps<T>, "children">;

export const Text = <T extends ElementType = "p">({ as, className, children, lang, weight, size, color, ...props }: TextProps<T>) => {
  const Tag = as || "p";

  return (
    <Tag {...props} className={variants({ lang, weight, size, color, className })}>
      {children}
    </Tag>
  );
};