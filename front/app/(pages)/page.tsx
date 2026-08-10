import Image from "next/image";
import { NAV_MAP } from "../constants/navMap";
import { Container } from "../components/premitives/Container";
import { Inner } from "../components/premitives/Inner";
import { HomeHero } from "../components/compositions/pages/home/HomeHero";
import { HomeCard } from "../components/compositions/pages/home/HomeCard";
import { Cta } from "../components/compositions/layouts/Cta";

export default function Home() {
  const navItemsOnCard = [
    "about",
    "skills",
    "works",
    "blog",
    "news",
    "contact",
  ];
  return (
    <>
      {/* Hero */}
      <Container as="div" className="flex items-center h-[70dvh]">
        <Inner size="lg">
          <HomeHero />
        </Inner>
      </Container>
      {/* Navigation section */}
      <Container as="section" colored>
        <Inner size="lg">
          <h2 className="sr-only">サイト内ナビゲーション</h2>
          <nav className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {navItemsOnCard.map((item) => {
              return (
                <HomeCard
                  key={item}
                  pageName={NAV_MAP[item].name}
                  text={NAV_MAP[item].text}
                  icon={NAV_MAP[item].icon}
                  href={NAV_MAP[item].href}
                />
              );
            })}
          </nav>
        </Inner>
      </Container>
      {/* CTA Area */}
      <Cta />
    </>
  );
}
