import "dotenv/config";
import { Text } from "@/app/components/premitives/Text";

export const FooterCopy = () => {
  const copyright = process.env.COPYRIGHT;
  return (
    <Text as="small" size="small" color="muted">
      {copyright ?? "© 2026 Portfolio. All rights reserved."}
    </Text>
  );
};
