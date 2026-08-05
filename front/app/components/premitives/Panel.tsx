import { ElementType, ReactNode, ComponentProps } from "react";
import { tv } from "tailwind-variants";
import NextLink from "next/link";
import type { VariantProps } from "tailwind-variants";

const variants = tv({
  base: "block bg-panel rounded-2xl border border-outline",
  variants: {
    clickable: {
      true: "cursor-pointer hover:border-focus",
    },
  },
});

type Props<T extends ElementType> = VariantProps<typeof variants> & {
  as?: T;
  children: ReactNode;
} & Omit<ComponentProps<T>, "children">;

export const Panel = <T extends ElementType = "div">({ as, className, children, href, clickable = Boolean(href), ...props }: Props<T>) => {
  const Tag = as || "div";

  if (as === "a" && Boolean(href)) {
    return (
      <NextLink href={href} {...props} className={variants({ className, clickable })}>
        {children}
      </NextLink>
    );
  } else {
    return (
      <Tag {...props} className={variants({ className })}>
        {children}
      </Tag>
    );
  }
};

