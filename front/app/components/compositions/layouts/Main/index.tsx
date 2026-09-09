import { ReactNode } from "react"

type Props = {
  children: ReactNode;
}

export const Main = ({children}: Props) => {
  return (
    <main id="burgerWrap" className="min-h-screen mt-17">{children}</main>
  )
}
