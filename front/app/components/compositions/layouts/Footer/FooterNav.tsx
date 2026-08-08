import { NAV_MAP } from "@/app/constants/navMap";
import NextLink from "next/link";

export const FooterNav = () => {
  const GithubIcon = NAV_MAP.github.icon
  const ContactIcon = NAV_MAP.contact.icon
  return (
    <nav className="flex justify-end items-center gap-2">
      <NextLink href={NAV_MAP.github.href} target="_blank">
        <GithubIcon size={20} className="text-fg" />
      </NextLink>
      <NextLink href={NAV_MAP.contact.href}>
        <ContactIcon size={20} className="text-fg" />
      </NextLink>
    </nav>
  );
};
