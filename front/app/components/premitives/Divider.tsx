import { tv, type VariantProps } from "tailwind-variants";
import type { ComponentProps } from "react";

const variants = tv({
  base: "h-px my-6 bg-muted border-0",
  variants: {
    space: {
      md: "my-6",
      sm: "my-4",
    },
  },
  defaultVariants : {
    space: "md"
  }
});

type Props = VariantProps<typeof variants> & ComponentProps<"hr">;

export function Divider({ space, className, ...props }: Props) {
  return (
    <hr
      {...props}
      className={variants({ space, className })}
    />
  );
}