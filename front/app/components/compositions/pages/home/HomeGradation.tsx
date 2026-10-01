"use client";

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export function HomeGradation() {
  const [container, setContainer] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const element = document.querySelector<HTMLElement>(
      '[data-portal="home-hero"]',
    );

    setContainer(element);
  }, []);

  if (!container) return null;

  return createPortal(
    <>
      <div className="absolute top-[-1.58vw] right-[-1.58vw] w-[31.93vw] h-[31.93vw] max-md:hidden bg-linear-to-bl from-purple-600 via-blue-500 to-teal-400 opacity-70 rounded-full blur-3xl animate-gradient-float" />
      <div className="absolute top-[30%] right-[-1.58vw] w-[31.93vw] h-[31.93vw] max-md:hidden bg-linear-to-bl from-purple-600 via-blue-500 to-teal-400 opacity-70 rounded-full blur-3xl animate-gradient-float [animation-delay:-4s]" />
      <div className="absolute bottom-0 right-[1.58vw] w-[39.92vw] h-[39.92vw] max-md:hidden bg-linear-to-tl from-indigo-500 via-fuchsia-500 to-pink-500 opacity-60 rounded-full blur-3xl animate-gradient-float [animation-delay:-8s]" />
    </>,
    container,
  );
}
