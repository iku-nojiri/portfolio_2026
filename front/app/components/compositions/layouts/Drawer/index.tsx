"use client";

import { useRef, useEffect, useContext } from "react";
import { DrawerContext } from "@/app/providers/DrawerContextProvider";
import { push as Menu } from "react-burger-menu";
import { DrawerHeader } from "./DrawerHeader";
import { DrawerNav } from "./DrawerNav";

export const Drawer = () => {
  const menuContent = useRef<HTMLDivElement | null>(null);
  const { isOpen, isPc } = useContext(DrawerContext);

  useEffect(() => {
    if (!isOpen) return;

    if (menuContent.current) {
      const clickableEl = [
        ...menuContent.current?.querySelectorAll("button"),
        ...menuContent.current?.querySelectorAll("a"),
      ];

      clickableEl.forEach((el, index, array) => {
        el.addEventListener("keydown", (e) => {
          if (!(e instanceof KeyboardEvent)) return;

          if (e.key === "Tab" && index === array.length - 1) {
            e.preventDefault();
            clickableEl[0].focus();
          }
        });
      });
    }
  }, [isOpen]);

  return (
    <Menu
      id="drawer"
      right
      noTransition
      isOpen={isOpen}
      pageWrapId="burgerWrap"
      outerContainerId="burgerOuterContainer"
      customBurgerIcon={false}
      customCrossIcon={false}
      itemListElement="div"
      className="bg-bg"
      width={isPc ? 350 : 300}
    >
      <div ref={menuContent}>
        <DrawerHeader />
        <DrawerNav />
      </div>
    </Menu>
  );
};
