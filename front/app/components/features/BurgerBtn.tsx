"use client";

import { Menu as OpenIcon, X as CloseIcon } from "lucide-react";
import { useContext } from "react";
import { DrawerContext } from "@/app/providers/DrawerContextProvider";

export const BurgerBtn = () => {
  const { isOpen, toggleOpen } = useContext(DrawerContext);
  return (
    <button
      type="button"
      className="lg:hidden custom-button-tile"
      aria-controls="drower"
      aria-expanded={isOpen}
      aria-label={`メニューを${isOpen ? "閉じる" : "開く"}`}
      onClick={toggleOpen}
    >
      {isOpen ? (
        <CloseIcon className="text-button-ghost-fg" />
      ) : (
        <OpenIcon className="text-button-ghost-fg" />
      )}
    </button>
  );
};
