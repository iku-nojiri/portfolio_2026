import { ElementType, ReactNode, ComponentProps } from "react";
import { tv } from "tailwind-variants";
import { typograhyVariants } from "./shared/variants/typograhyVariants";
import type { VariantProps } from "tailwind-variants";

const variants = tv({
  extend: typograhyVariants,
  base: "inline-block px-2 py-0.5 text-sm font-medium leading-5 rounded-lg",
  variants: {
    appearance: {
      primary: "text-badge-primary-fg bg-badge-primary-bg",
      secondary: "text-badge-secondary-fg bg-badge-secondary-bg",
      outline: "bg-badge-outline-bg text-badge-outline-fg border border-outline",
      destructive: "text-badge-destructive-fg bg-badge-destructive-bg",
    },
  },
  defaultVariants: {
    appearance: "primary",
  },
});

type Props<T extends ElementType> = VariantProps<typeof variants> & {
  as?: T;
  children: ReactNode;
} & Omit<ComponentProps<T>, "children">;

export const Badge = <T extends ElementType = "p">({ as, className, children, lang, appearance, ...props }: Props<T>) => {
  const Tag = as || "p";

  return (
    <Tag {...props} className={variants({ lang, appearance, className })}>
      {children}
    </Tag>
  );
}
