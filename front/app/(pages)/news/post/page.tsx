import { Suspense } from "react";
import Contents from "./Contents";

export default function NewsPage() {
  return (
    <Suspense fallback={null}>
      <Contents />
    </Suspense>
  );
}