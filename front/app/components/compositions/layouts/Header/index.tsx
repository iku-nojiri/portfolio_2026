import { HeaderInner } from "./HeaderInner";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { HeaderActions } from "./HeaderActions";

export const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 px-6 border-b border-muted bg-bg z-50 md:px-10">
      <HeaderInner>
        <HeaderLogo />
        <HeaderNav />
        <HeaderActions />
      </HeaderInner>
    </header>
  );
};
