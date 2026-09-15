import { NAV_MAP } from "../constants/NAV_MAP";
import { Container } from "../components/premitives/Container";
import { HomeHero } from "../components/compositions/pages/home/HomeHero";
import { Grid } from "../components/premitives/Grid";
import { HomeCard } from "../components/compositions/pages/home/HomeCard";
import { HomeCta } from "../components/compositions/pages/home/HomeCta";

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
      <Container as="div" size="lg" space-y="md" className="flex items-center h-[70dvh]">
        <HomeHero />
      </Container>
      {/* Navigation section */}
      <Container as="section" size="lg" colored>
        <h2 className="sr-only">サイト内ナビゲーション</h2>
        <Grid as="nav">
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
        </Grid>
      </Container>
      {/* CTA Area */}
      <HomeCta />
    </>
  );
}
