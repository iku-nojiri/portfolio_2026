import { ReactNode } from "react"
import { Heading } from "@/app/components/premitives/Heading"
import { Text } from "@/app/components/premitives/Text"

type Props = {
  heading: ReactNode,
  text: ReactNode
}

export const PageHeading = ({heading, text}: Props) => {
  return (
    <div className="grid place-items-center gap-3">
      <Heading as="h1" size="xxl" color="primary">{heading}</Heading>
      <Text as="p">{text}</Text>
    </div>
  )
}
