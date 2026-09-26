import { tv } from "tailwind-variants";

export const fieldVariants = tv({
  base: "block w-full font-noto-sans-jp px-3 py-1 rounded-lg overflow-hidden border border-field-outline bg-field text-sm text-field-fg placeholder:text-field--placeholder",
  variants: {
    disabled: {
      true: "opacity-50 pointer-events-none cursor-not-allowed",
      false: "",
    },
    destructive: {
      true: "border-destructive shadow-[0_0_0_3px_var(--color-field-shadow--destructive)]",
      false: "",
    },
  },
});