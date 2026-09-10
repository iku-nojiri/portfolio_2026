"use client";

import { Sun as LightIcon, Moon as DarkIcon } from "lucide-react";
import { useTheme } from "@/app/hooks/useTheme";

export const ThemeSwitcher = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      className="custom-button-tile"
      aria-label={`
        ${isDark === true ? "ライトテーマ" : "ダークテーマ"}に切り替える`}
      onClick={toggleTheme}
    >
      {isDark === true ? (
        <LightIcon
          size={20}
          aria-hidden="true"
          className="text-button-ghost-fg"
        />
      ) : (
        <DarkIcon
          size={20}
          aria-hidden="true"
          className="text-button-ghost-fg"
        />
      )}
    </button>
  );
};
