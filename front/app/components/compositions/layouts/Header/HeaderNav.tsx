import { NAV_MAP } from "@/app/constants/navMap";
import { Link } from "@/app/components/premitives/Link";

export const HeaderNav = () => {
  const navItems = ["home", "about", "skills", "works", "blog", "news", "contact"];

  return (
    <nav>
      {navItems.map((item) => (
        <Link key={item} lang="en" appearance="ghost" className="text-base" href={NAV_MAP[item].href}>
          {NAV_MAP[item].name}
        </Link>
      ))}
    </nav>
  );
};