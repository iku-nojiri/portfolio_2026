import { ElementType, ReactNode, ComponentProps } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

const spaceVariants = {
  md: {},
  sm: {},
  none: {},
};

const spaceXVariants = {
  md: {
    base: "px-6 md:px-20",
  },
  none: {
    base: "px-0",
  },
};

const variants = tv({
  slots: {
    base: "",
    inner: "mx-auto w-full",
  },
  variants: {
    "space-y": spaceVariants,
    "space-x": spaceXVariants,
    "space-t": spaceVariants,
    "space-b": spaceVariants,
    colored: {
      true: {
        base: "bg-bg-subtle",
      },
      false: {
        base: "bg-bg",
      },
    },
    size: {
      xs: {
        inner: "max-w-3xl",
      },
      sm: {
        inner: "max-w-4xl",
      },
      md: {
        inner: "max-w-5xl",
      },
      lg: {
        inner: "max-w-7xl",
      },
    },
  },
  compoundVariants: [
    // colored = true -> padding
    {
      colored: true,
      "space-y": "md",
      class: { base: "py-20" },
    },
    {
      colored: true,
      "space-y": "sm",
      class: { base: "py-10" },
    },
    {
      colored: true,
      "space-y": "none",
      class: { base: "py-0" },
    },
    {
      colored: true,
      "space-t": "md",
      class: { base: "pt-20" },
    },
    {
      colored: true,
      "space-t": "sm",
      class: { base: "pt-10" },
    },
    {
      colored: true,
      "space-t": "none",
      class: { base: "pt-0" },
    },
    {
      colored: true,
      "space-b": "md",
      class: { base: "pb-20" },
    },
    {
      colored: true,
      "space-b": "sm",
      class: { base: "pb-10" },
    },
    {
      colored: true,
      "space-b": "none",
      class: { base: "pb-0" },
    },

    // colored = false -> margin & padding
    {
      colored: false,
      "space-y": "md",
      class: { base: "mt-20 pb-20" },
    },
    {
      colored: false,
      "space-y": "sm",
      class: { base: "mt-10 pb-10" },
    },
    {
      colored: false,
      "space-y": "none",
      class: { base: "my-0 py-0" },
    },
    {
      colored: false,
      "space-t": "md",
      class: { base: "mt-20" },
    },
    {
      colored: false,
      "space-t": "sm",
      class: { base: "mt-10" },
    },
    {
      colored: false,
      "space-t": "none",
      class: { base: "mt-0" },
    },
    {
      colored: false,
      "space-b": "md",
      class: { base: "pb-20" },
    },
    {
      colored: false,
      "space-b": "sm",
      class: { base: "pb-10" },
    },
    {
      colored: false,
      "space-b": "none",
      class: { base: "pb-0" },
    },
  ],
  defaultVariants: {
    "space-x": "md",
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
  "space-y": spaceY = colored ? "md" : undefined,
  "space-x": spaceX,
  "space-t": spaceT = !colored ? "md" : undefined,
  "space-b": spaceB,
  ...props
}: Props<T>) => {
  const Tag = as || "div";

  const { base, inner } = variants({
    "space-y": spaceY,
    "space-x": spaceX,
    "space-t": spaceT,
    "space-b": spaceB,
    size,
    colored,
  });

  return (
    <Tag {...props} className={base({ className })}>
      <div className={inner()}>{children}</div>
    </Tag>
  );
};
