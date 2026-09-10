import { useState } from "react";

export function useTheme() {
  const [isDark, setIsDark] = useState(false);

  function toggleTheme() {
    setIsDark((prev) => {
      const next = !prev;
      document.body.classList.toggle("dark", next);
      return next;
    });
  }

  return {
    isDark,
    toggleTheme
  }
}