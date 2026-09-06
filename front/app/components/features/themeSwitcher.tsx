"use client";

import { Sun as LightIcon, Moon as DarkIcon } from "lucide-react";
import { useTheme } from "@/app/hooks/useTheme";

export const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme()

  return (
    <button
      type="button"
      className="custom-button-tile"
      aria-label={
        isDark ? "ライトテーマに切り替える" : "ダークテーマに切り替える"
      }
      onClick={toggleTheme}
    >
      {isDark ? (
        <DarkIcon
          size={20}
          aria-hidden="true"
          className="text-button-ghost-fg"
        />
      ) : (
        <LightIcon
          size={20}
          aria-hidden="true"
          className="text-button-ghost-fg"
        />
      )}
    </button>
  );
};
