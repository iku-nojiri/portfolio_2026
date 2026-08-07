import { tv } from "tailwind-variants"
import { typograhyVariants } from "./typograhyVariants";

export const buttonVariants = tv({
  extend: typograhyVariants,
  base: "rounded-lg inline-flex justify-center items-center gap-1.5 text-sm font-medium leading-5 cursor-pointer transition-colors duration-normal ",
  variants : {
    appearance: {
      primary: "bg-button-primary-bg text-button-primary-fg hover:bg-button-primary-bg--hover",
      secondary: "bg-button-secondary-bg text-button-secondary-fg hover:bg-button-secondary-bg--hover",
      outline: "bg-button-outline-bg text-button-outline-fg border border-outline hover:bg-button-outline-bg--hover",
      ghost: "bg-button-ghost-bg text-button-ghost-fg hover:text-button-ghost-fg--hover hover:bg-button-ghost-bg--hover",
    },
    size: {
      sm: "px-3 py-1.5",
      md: "px-4 py-2",
      lg: "px-6 py-2.5",
    },
    iconPos: {
      left: "flex-row",
      right: "flex-row-reverse",
    },
    disabled: {
      true: "opacity-50 pointer-events-none"
    }
  },
  defaultVariants : {
    lang: "jp",
    appearance: "primary",
    size: "md",
    iconPos: "right",
    disabled: false
  }
});