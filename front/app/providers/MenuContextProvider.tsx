"use client";

import { useState, useEffect, createContext, ReactNode } from "react";

type MenuContext = {
  isOpen: boolean;
  toggleOpen: () => void;
};

export const MenuContext = createContext<MenuContext>({
  isOpen: false,
  toggleOpen: () => {},
});

type Props = {
  children: ReactNode;
};

export const MenuContextProvider = ({ children }: Props) => {
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
    <MenuContext.Provider value={{ isOpen, toggleOpen }}>
      {children}
    </MenuContext.Provider>
  );
};
