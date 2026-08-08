import { NAV_MAP } from "@/app/constants/navMap";
import { Mail } from "lucide-react";
import { GithubIcon as Github } from "@/app/components/premitives/GithubIcon";
import NextLink from "next/link";

export const FooterNav = () => {
  return (
    <nav className="flex justify-end items-center gap-2">
      <NextLink href={NAV_MAP.github.href} target="_blank">
        <Github size={20} className="text-fg" />
      </NextLink>
      <NextLink href={NAV_MAP.contact.href}>
        <Mail size={20} className="text-fg" />
      </NextLink>
    </nav>
  );
};
