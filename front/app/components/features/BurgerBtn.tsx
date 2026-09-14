"use client";

import type { Ref } from "react";
import { Menu as OpenIcon, X as CloseIcon } from "lucide-react";
import { useContext } from "react";
import { DrawerContext } from "@/app/providers/DrawerContextProvider";

type Props = {
  ref?: Ref<HTMLButtonElement | null>
}

export const BurgerBtn = ({ref}: Props) => {
  const { isOpen, toggleOpen, isPc } = useContext(DrawerContext);

  return (
    <button
      type="button"
      className="lg:hidden custom-button-tile"
      aria-controls="drawer"
      aria-expanded={isOpen}
      aria-label={`メニューを${isOpen ? "閉じる" : "開く"}`}
      onClick={toggleOpen}
      tabIndex={isPc ? -1 : 0}
      ref={ref}
    >
      {isOpen ? (
        <CloseIcon className="text-button-ghost-fg" />
      ) : (
        <OpenIcon className="text-button-ghost-fg" />
      )}
    </button>
  );
};
