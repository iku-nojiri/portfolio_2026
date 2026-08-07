import { HeaderInner } from "./HeaderInner";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNav } from "./HeaderNav";
import { HeaderActions } from "./HeaderActions";

export const Header = () => {
  return (
    <header className="border-b border-muted">
      <HeaderInner>
        <HeaderLogo />
        <HeaderNav />
        <HeaderActions />
      </HeaderInner>
    </header>
  );
};
