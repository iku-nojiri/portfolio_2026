"use client";

import { useRouter } from "next/navigation";
import { NAV_MAP } from "@/app/constants/NAV_MAP";
import { Link } from "@/app/components/premitives/Link";
import { Button } from "@/app/components/premitives/Button";
import { Home as HomeIcon } from "lucide-react";
import { ArrowLeft as LeftIcon } from "lucide-react";

export const NotFoundLinks = () => {
  const rounter = useRouter()

  function handleBack() {
    rounter.back()
  }

  return (
    <nav className="flex justify-center items-center gap-2 mt-8">
      <Link href={NAV_MAP.home.href}>
        <HomeIcon size={16} className="text-primary-fg" aria-hidden />
        ホームへ戻る
      </Link>
      <Button type="button" appearance="outline" onClick={handleBack}>
        <LeftIcon size={16} className="text-fg--muted" aria-hidden />
        前のページへ
      </Button>
    </nav>
  );
};
