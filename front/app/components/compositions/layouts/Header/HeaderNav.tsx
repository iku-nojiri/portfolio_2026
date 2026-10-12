import { NAV_MAP } from "@/app/constants/NAV_MAP";
import { Link } from "@/app/components/premitives/Link";

type HeaderNavKey = Extract<
  keyof typeof NAV_MAP,
  "home" | "about" | "skills" | "works" | "blog" | "news" | "contact"
>;

export const HeaderNav = () => {
  const navItems: HeaderNavKey[] = [
    "home",
    "about",
    "skills",
    "works",
    "blog",
    "news",
    "contact",
  ];

  return (
    <nav className="lg:block hidden">
      {navItems.map((item) => (
        <Link
          key={item}
          lang="en"
          appearance="ghost"
          className="text-base"
          href={NAV_MAP[item].href}
        >
          {NAV_MAP[item].name}
        </Link>
      ))}
    </nav>
  );
};
