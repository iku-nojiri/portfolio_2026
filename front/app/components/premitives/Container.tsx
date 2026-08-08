import { ElementType, ReactNode, ComponentProps } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

const variants = tv({
  base: "px-6 pt-20 pb-20 md:px-10",
  variants: {
    colored: {
      true: "bg-accent",
      false: "bg-bg"
    },
  },
  defaultVariants: {
    colored: false,
  },
  // compoundVariants: [
  //   {
  //     colored: true,
  //     class: "pt-20 pb-20"
  //   },
  //   {
  //     colored: false,
  //     class: "pt-20 pb-20"
  //   }
  // ]
});

type Props<T extends ElementType> = VariantProps<typeof variants> & {
  as?: T;
  children: ReactNode;
} & Omit<ComponentProps<T>, "children">;

export const Container = <T extends ElementType = "div">({ as, className, children, colored, ...props }: Props<T>) => {
  const Tag = as || "div";

  return (
    <Tag {...props} className={variants({colored, className })}>
      {children}
    </Tag>
  );
}
