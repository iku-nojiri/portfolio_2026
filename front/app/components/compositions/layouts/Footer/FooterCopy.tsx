import { Text } from "@/app/components/premitives/Text";

export function FooterCopy() {
  const year = new Date().getFullYear();
  const copyright = process.env.COPYRIGHT ?? `© ${year} Portfolio. All rights reserved.`;

  return (
    <Text as="small" size="sm">
      {copyright}
    </Text>
  );
}