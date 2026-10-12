import 'dotenv/config'
import { ComponentType } from 'react';
import { House, User, Wrench, CodeXml, Rss, Newspaper, Mail } from 'lucide-react';
import { GithubIcon as Github } from '../components/premitives/GithubIcon';
import type {LucideProps} from 'lucide-react';
import type { CustomIconProps } from '../components/premitives/shared/props/CustomIconProps.types';

type NavItem = {
  name: string;
  href: string;
  external?: boolean;
  icon?: ComponentType<LucideProps> | ComponentType<CustomIconProps>;
  text?: string;
};

export const NAV_MAP = {
  home: {
    name: "Home",
    href: "/",
    icon: House,
    text: "ホームへ戻る"
  },
  about: {
    name: "About",
    href: "/about",
    icon: User,
    text: "私の経歴、経験、そしてWeb開発で大切にしていることについて"
  },
  skills: {
    name: "Skills",
    href: "/skills",
    icon: Wrench,
    text: "アイデアを実現するために使用する技術とツール"
  },
  works: {
    name: "Works",
    href: "/works",
    icon: CodeXml,
    text: "私のスキルと経験をご紹介いたします"
  },
  blog: {
    name: "Blog",
    href: "/blog",
    icon: Rss,
    text: "Web開発に関する技術ブログや学習記録を紹介"
  },
  news: {
    name: "News",
    href: "/news",
    icon: Newspaper,
    text: "最新の成果、プロジェクト、お知らせをご紹介いたします"
  },
  contact: {
    name: "Contact",
    href: "/contact",
    icon: Mail,
    text: "ご質問やご相談など、お気軽にお問い合わせください。"
  },
  confirm: {
    name: "Confirm",
    href: "/contact/confirm",
    text: "ご質問やご相談など、お気軽にお問い合わせください。"
  },
  complete: {
    name: "Complete",
    href: "/contact/complete",
  },
  error: {
    name: "Error",
    href: "/contact/error",
  },
  github: {
    name: "Github",
    href: process.env.GITHUB_URL ?? "https://github.co.jp/",
    external: true,
    icon: Github,
    text: "リポジトリを確認する"
  },
} satisfies Record<string, Readonly<NavItem>>;