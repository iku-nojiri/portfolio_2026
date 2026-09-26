import { VariantProps } from "tailwind-variants"
import { fieldVariants } from "./shared/variants/fieldVariants"
import { ComponentProps } from "react"

type Props = VariantProps<typeof fieldVariants> & ComponentProps<"textarea">

export const Textarea = ({disabled, destructive, ...props}: Props) => {
  return (
    <textarea {...props} className={fieldVariants({disabled, destructive})}></textarea>
  )
}
