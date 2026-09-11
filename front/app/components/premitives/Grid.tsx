import { ComponentProps, ElementType, ReactNode } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

const variants = tv({
  base: "grid gap-6",
  variants: {
    col: {
      1: "grid-cols-1",
      2: "md:grid-cols-2",
      3: "sm:grid-cols-2 md:grid-cols-3",
    },
  },
  defaultVariants: {
    col: 3,
  },
});

type Props<T extends ElementType> = VariantProps<typeof variants> & {
  as?: T;
  children: ReactNode;
} & Omit<ComponentProps<T>, "children">;

export const Grid = <T extends ElementType = "div">({
  as,
  className,
  children,
  col,
  ...props
}: Props<T>) => {
  const Tag = as || "div";

  return (
    <Tag
      {...props}
      className={variants({
        col,
        className,
      })}
    >
      {children}
    </Tag>
  );
};
