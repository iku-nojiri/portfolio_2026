"use client";

import { useEffect, useRef, useContext } from "react";
import { DrawerContext } from "@/app/providers/DrawerContextProvider";
import { ThemeSwitcher } from "@/app/components/features/themeSwitcher";
import { BurgerBtn } from "@/app/components/features/BurgerBtn";

export const HeaderActions = () => {
  let isFirstRender = useRef(true);
  const btnEl = useRef<HTMLButtonElement | null>(null);
  const { isOpen } = useContext(DrawerContext);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    if (isOpen) return;

    setTimeout(() => {
      btnEl.current?.focus();
    }, 100); // react-burger-menuがbodyにfocusさせるため、100ms後にボタンにfocus処理を発火させる

  }, [isOpen]);

  return (
    <div className="flex items-center justify-end gap-2">
      <ThemeSwitcher />
      <BurgerBtn ref={btnEl} />
    </div>
  );
};
