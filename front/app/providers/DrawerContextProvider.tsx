"use client";

import { useState, useEffect, createContext, ReactNode } from "react";

type DrawerContext = {
  isOpen: boolean;
  toggleOpen: () => void;
  isPc: boolean;
};

export const DrawerContext = createContext<DrawerContext>({
  isOpen: false,
  toggleOpen: () => {},
  isPc: false,
});

type Props = {
  children: ReactNode;
};

export const DrawerContextProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPc, setIsPc] = useState(false);

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    const mediaQuery = matchMedia("(min-width: 1024px)");

    function handleChange(event: MediaQueryListEvent) {
      setIsPc(event.matches);

      if (event.matches) {
        setIsOpen(false);
      }
    }

    setIsPc(mediaQuery.matches);

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <DrawerContext.Provider value={{ isOpen, toggleOpen, isPc }}>
      {children}
    </DrawerContext.Provider>
  );
};
