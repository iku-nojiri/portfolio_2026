import 'dotenv/config'
import { ComponentType } from 'react';
import { House, User, Wrench, CodeXml, Rss, Newspaper, Mail } from 'lucide-react';
import { GithubIcon as Github } from '../components/premitives/GithubIcon';
import type {LucideProps} from 'lucide-react';
import type { CustomIconProps } from '../components/premitives/shared/props/CustomIconProps.types';

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
  icon: ComponentType<LucideProps> | ComponentType<CustomIconProps>;
}

export const NAV_MAP: Record<string, NavItem> = {
  home: {
    name: "Home",
    href: "/",
    icon: House
  },
  about: {
    name: "About",
    href: "/about",
    icon: User
  },
  skills: {
    name: "Skills",
    href: "/skills",
    icon: Wrench
  },
  works: {
    name: "Works",
    href: "/works",
    icon: CodeXml

  },
  blog: {
    name: "Blog",
    href: "/blog",
    icon: Rss
  },
  news: {
    name: "News",
    href: "/news",
    icon: Newspaper
  },
  contact: {
    name: "Contact",
    href: "/contact",
    icon: Mail
  },
  github: {
    name: "Github",
    href: process.env.GITHUB_URL ?? "https://github.co.jp/",
    external: true,
    icon: Github
  },
};