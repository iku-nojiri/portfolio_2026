"use client";

import { useContext } from "react";
import { DrawerContext } from "@/app/providers/DrawerContextProvider";
import { push as Menu } from "react-burger-menu";
import { DrawerHeader } from "./DrawerHeader";
import { DrawerNav } from "./DrawerNav";

export const Drawer = () => {
  const { isOpen } = useContext(DrawerContext);
  return (
    <Menu
      right
      noTransition
      pageWrapId={"burgerWrap"}
      outerContainerId={"burgerOuterContainer"}
      isOpen={isOpen}
      itemListElement="div"
      className="bg-bg"
    >
      <DrawerHeader />
      <DrawerNav />
    </Menu>
  );
};
