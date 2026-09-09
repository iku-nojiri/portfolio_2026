"use client";

import { useState, useEffect, createContext, ReactNode } from "react";

type DrawerContext = {
  isOpen: boolean;
  toggleOpen: () => void;
};

export const DrawerContext = createContext<DrawerContext>({
  isOpen: false,
  toggleOpen: () => {},
});

type Props = {
  children: ReactNode;
};

export const DrawerContextProvider = ({ children }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  function toggleOpen() {
    setIsOpen((prev) => !prev);
  }

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    function handleChange(event: MediaQueryListEvent) {
      if (event.matches) {
        setIsOpen(false);
      }
    }

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return (
    <DrawerContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </DrawerContext.Provider>
  );
};
