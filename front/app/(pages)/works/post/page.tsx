import { Suspense } from "react";
import Contents from "./Contents";

export default function WorksPostPage() {
  return (
    <Suspense fallback={null}>
      <Contents />
    </Suspense>
  );
}