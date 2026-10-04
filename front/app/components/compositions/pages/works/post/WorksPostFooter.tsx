import { Container } from "@/app/components/premitives/Container";
import { Heading } from "@/app/components/premitives/Heading";
import { Grid } from "@/app/components/premitives/Grid";
import { WorksCard } from "../WorksCard";
import { Link } from "@/app/components/premitives/Link";
import { NAV_MAP } from "@/app/constants/NAV_MAP";
import { ArrowLeft as LeftIcon } from "lucide-react";

export const WorksPostFooter = () => {
  return (
    <Container as="aside" size="md">
      <Heading as="h2" size="lg">
        Related Works
      </Heading>
      <Grid col={3} className="mt-8">
        <WorksCard />
        <WorksCard />
        <WorksCard />
      </Grid>
      <div className="flex justify-center mt-6">
        <Link href={NAV_MAP.works.href} appearance="ghost">
          <LeftIcon size={16} className="text-fg" aria-hidden />
          制作物一覧に戻る
        </Link>
      </div>
    </Container>
  );
};
