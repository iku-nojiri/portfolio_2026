"use client";

import { useState, useEffect, useRef, useContext } from "react";
import { DrawerContext } from "@/app/providers/DrawerContextProvider";
import { push as Menu } from "react-burger-menu";
import { DrawerHeader } from "./DrawerHeader";
import { DrawerNav } from "./DrawerNav";

export const Drawer = () => {
  const { isOpen } = useContext(DrawerContext);

  const [isPc, setIsPc] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 640px)");

    function handleMenu() {
      mediaQuery.matches
        ? setIsPc((prev) => (prev = true))
        : setIsPc((prev) => (prev = false));
    }
    handleMenu();
    mediaQuery.addEventListener("change", handleMenu);
  }, []);

  return (
    <Menu
      id="drower"
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
      <DrawerHeader />
      <DrawerNav />
    </Menu>
  );
};
