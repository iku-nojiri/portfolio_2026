"use client";

import { useContext } from "react";
import { MenuContext } from "@/app/providers/MenuContextProvider";
import { push as Menu } from "react-burger-menu";
import { BurgerBtn } from "@/app/components/features/BurgerBtn";
import { Text } from "@/app/components/premitives/Text";
import { NAV_MAP } from "@/app/constants/navMap";
import { Link } from "@/app/components/premitives/Link";

export const HeaderBurgerMenu = () => {
  const { isOpen } = useContext(MenuContext);
  const navItems = [
    "home",
    "about",
    "skills",
    "works",
    "blog",
    "news",
    "contact",
  ];
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
      <header className="md:px-10 px-6 py-3.5 border-b border-muted">
        <div className="flex justify-between items-center">
          <Text weight="bold">Menu</Text>
          <BurgerBtn />
        </div>
      </header>
      <nav>
        {navItems.map((item) => (
          <Link
            key={item}
            lang="en"
            appearance="ghost"
            className="block"
            href={NAV_MAP[item].href}
          >
            {NAV_MAP[item].name}
          </Link>
        ))}
      </nav>
    </Menu>
  );
};
