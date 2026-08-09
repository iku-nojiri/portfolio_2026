import 'dotenv/config'
import { ComponentType } from 'react';
import { House, User, Wrench, CodeXml, Rss, Newspaper, Mail } from 'lucide-react';
import { GithubIcon as Github } from '../components/premitives/GithubIcon';
import type {LucideProps} from 'lucide-react';
import type { CustomIconProps } from '../components/premitives/shared/props/CustomIconProps.types';

type NavItem = Readonly<{
  name: string;
  href: string;
  external?: boolean;
  icon: ComponentType<LucideProps> | ComponentType<CustomIconProps>;
  text: string;
}>;

export const NAV_MAP: Record<string, NavItem> = {
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
    text: "私の経歴、経験、そしてウェブ開発への情熱について"
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
    text: "私のスキルと経験を紹介する厳選されたプロジェクト"
  },
  blog: {
    name: "Blog",
    href: "/blog",
    icon: Rss,
    text: "ウェブ開発に関する考え、チュートリアル、インサイト"
  },
  news: {
    name: "News",
    href: "/news",
    icon: Newspaper,
    text: "最新の成果、プロジェクト、お知らせをご覧ください"
  },
  contact: {
    name: "Contact",
    href: "/contact",
    icon: Mail,
    text: "プロジェクトのアイデアがありますか？一緒にあなたのビジョンを実現しましょう"
  },
  github: {
    name: "Github",
    href: process.env.GITHUB_URL ?? "https://github.co.jp/",
    external: true,
    icon: Github,
    text: "リポジトリを確認する"
  },
};