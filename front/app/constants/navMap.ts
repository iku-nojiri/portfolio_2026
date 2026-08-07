import 'dotenv/config'

interface NavItem {
  name: string;
  href: string;
  external?: boolean;
}

export const NAV_MAP: Record<string, NavItem> = {
  home: {
    name: "Home",
    href: "/",
  },
  about: {
    name: "About",
    href: "/about",
  },
  skills: {
    name: "Skills",
    href: "/skills",
  },
  works: {
    name: "Works",
    href: "/works",
  },
  blog: {
    name: "Blog",
    href: "/blog",
  },
  news: {
    name: "News",
    href: "/news",
  },
  contact: {
    name: "Contact",
    href: "/contact",
  },
  github: {
    name: "Github",
    href: process.env.GITHUB_URL ?? "https://github.co.jp/",
    external: true
  },
};