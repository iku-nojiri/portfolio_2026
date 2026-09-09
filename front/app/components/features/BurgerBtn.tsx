"use client"

import { Menu as OpenIcon, X as CloseIcon } from "lucide-react"
import { useContext } from "react"
import { MenuContext } from "@/app/providers/MenuContextProvider"

export const BurgerBtn = () => {
  const { isOpen, toggleOpen } = useContext(MenuContext)
  return (
    <button onClick={toggleOpen} className="lg:hidden custom-button-tile">
      {isOpen ? <CloseIcon /> : <OpenIcon />}
    </button>
  )
}
