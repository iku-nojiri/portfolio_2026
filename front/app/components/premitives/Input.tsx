import { VariantProps } from "tailwind-variants"
import { fieldVariants } from "./shared/variants/fieldVariants"
import { ComponentProps } from "react"

type Props = VariantProps<typeof fieldVariants> & ComponentProps<"input">

export const Input = ({disabled, destructive, ...props}: Props) => {
  return (
    <input {...props} className={fieldVariants({disabled, destructive})} />
  )
}
