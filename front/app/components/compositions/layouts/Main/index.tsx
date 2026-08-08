import { ReactNode } from "react"

type Props = {
  children: ReactNode;
}

export const Main = ({children}: Props) => {
  return (
    <main className="min-h-screen sm:mt-17">{children}</main>
  )
}
