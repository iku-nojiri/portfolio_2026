import { ElementType, ReactNode, ComponentProps } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

const variants = tv({
  slots: {
    base: "px-6 pt-20 pb-20 md:px-10",
    inner: "mx-auto w-full",
  },
  variants: {
    size: {
      xs: {
        inner: "max-w-3xl", // 768px
      },
      sm: {
        inner: "max-w-4xl", // 896px
      },
      md: {
        inner: "max-w-5xl", // 1024px
      },
      lg: {
        inner: "max-w-7xl", // 1280px
      },
    },
    colored: {
      true: {
        base: "bg-bg-subtle",
      },
      false: {
        base: "bg-bg",
      },
    },
  },
  defaultVariants: {
    size: "md",
    colored: false,
  },
});

type Props<T extends ElementType> = VariantProps<typeof variants> & {
  as?: T;
  children: ReactNode;
} & Omit<ComponentProps<T>, "children">;

export const Container = <T extends ElementType = "div">({
  as,
  className,
  children,
  size,
  colored,
  ...props
}: Props<T>) => {
  const Tag = as || "div";
  const { base, inner } = variants({ size, colored });

  return (
    <Tag {...props} className={base({ className })}>
      <div className={inner()}>{children}</div>
    </Tag>
  );
};
