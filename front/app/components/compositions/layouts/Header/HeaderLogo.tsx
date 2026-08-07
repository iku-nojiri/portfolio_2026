import { NAV_MAP } from "@/app/constants/navMap";
import NextLink from "next/link";
import { Tile } from "@/app/components/premitives/Tile";
import { Code as CodeIcon } from "lucide-react";
import { Text } from "@/app/components/premitives/Text";

export const HeaderLogo = () => {
  return (
    <div>
      <NextLink href={NAV_MAP.home.href} className="inline-flex items-center gap-2" aria-label="ホーム">
        <Tile as="span" size="sm" className="bg-primary">
          <CodeIcon size={20} className="text-primary-fg" />
        </Tile>
        <Text as="span" lang="en" size="large" weight="bold">
          Portfolio
        </Text>
      </NextLink>
    </div>
  );
};
