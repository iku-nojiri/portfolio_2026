import { ElementType, ReactNode, ComponentProps } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

const variants = tv({
  base: "inline-flex justify-center items-center aspect-square rounded-[10px]",
  variants: {
    size: {
      sm: "w-8",
      md: "w-12",
      lg: "w-20",
    },
    circle: {
      true: "rounded-full"
    },
    appearance: {
      primary: "bg-tile-primary",
      secondary: "bg-tile-secondary",
      destructive: "bg-destructive",
    }
  },
  defaultVariants: {
    size: "md",
    circle: false,
    appearance: "primary"
  },
});

type Props<T extends ElementType> = VariantProps<typeof variants> & {
  as?: T;
  children: ReactNode;
} & Omit<ComponentProps<T>, "children">;

export const Tile = <T extends ElementType = "div">({ as, className, children, size, circle, appearance, ...props }: Props<T>) => {
  const Tag = as || "div";

  return (
    <Tag {...props} className={variants({ size, circle, appearance, className})}>
      {children}
    </Tag>
  );
}
