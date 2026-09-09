import { MenuContextProvider } from "@/app/providers/MenuContextProvider";
import { HeaderInner } from "./HeaderInner";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { HeaderActions } from "./HeaderActions";
import { HeaderBurgerMenu } from "./HeaderBurgerMenu";

export const Header = () => {
  return (
    <MenuContextProvider>
      <header className="fixed top-0 left-0 right-0 px-6 border-b border-muted bg-bg z-40 md:px-10">
        <HeaderInner>
          <HeaderLogo />
          <HeaderNav />
          <HeaderActions />
        </HeaderInner>
      </header>
      <HeaderBurgerMenu />
    </MenuContextProvider>
  );
};