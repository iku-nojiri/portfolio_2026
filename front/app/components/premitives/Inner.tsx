import { ElementType, ReactNode, ComponentProps } from "react";
import { tv } from "tailwind-variants";
import type { VariantProps } from "tailwind-variants";

const variants = tv({
  base: "mx-auto w-full",
  variants: {
    size: {
      xs: "max-w-3xl", // 768px
      sm: "max-w-4xl", // 896px
      md: "max-w-5xl", // 1024px
      lg: "max-w-7xl", // 1280px
    }
  },
  defaultVariants: {
    size: "md"
  }
});

type Props = VariantProps<typeof variants> & {
  children: ReactNode,
  className?: string
}

export const Inner = ({ children, className, size }: Props) => {
  return (
    <div className={variants({size, className})}>{children}</div>
  )
}

