import { NAV_MAP } from "@/app/constants/navMap";
import { Link } from "@/app/components/premitives/Link";
import { useContext } from "react";
import { DrawerContext } from "@/app/providers/DrawerContextProvider";

export const DrawerNav = () => {
  const navItems = [
    "home",
    "about",
    "skills",
    "works",
    "blog",
    "news",
    "contact",
  ];

  const {toggleOpen} = useContext(DrawerContext)

  return (
    <nav className="mt-4 space-y-2">
      {navItems.map((item) => {
        const Icon = NAV_MAP[item].icon;
        return (
          <Link
            key={item}
            lang="en"
            appearance="ghost"
            className="flex justify-start"
            href={NAV_MAP[item].href}
            onClick={toggleOpen}
          >
            <Icon />
            {NAV_MAP[item].name}
          </Link>
        );
      })}
    </nav>
  );
};
