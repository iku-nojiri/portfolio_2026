"use client";

import { useContext } from "react";
import { DrawerContext } from "@/app/providers/DrawerContextProvider";
import { push as Menu } from "react-burger-menu";
import { DrawerHeader } from "./DrawerHeader";
import { DrawerNav } from "./DrawerNav";

export const Drawer = () => {
  const { isOpen, isPc } = useContext(DrawerContext);

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
