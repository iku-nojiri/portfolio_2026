"use client"

import { Menu as OpenIcon, X as CloseIcon } from "lucide-react"
import { useContext } from "react"
import { DrawerContext } from "@/app/providers/DrawerContextProvider"

export const BurgerBtn = () => {
  const { isOpen, toggleOpen } = useContext(DrawerContext)
  return (
    <button onClick={toggleOpen} className="lg:hidden custom-button-tile">
      {isOpen ? <CloseIcon /> : <OpenIcon />}
    </button>
  )
}
