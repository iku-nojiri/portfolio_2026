"use client";

import { Sun as LightIcon, Moon as DarkIcon } from "lucide-react";
import { useState } from "react";

export const HeaderActions = () => {
  const [isDark, setIsDark] = useState(true);

  function toggleTheme() {
    setIsDark((prev) => {
      const next = !prev;
      document.body.classList.toggle("dark", next);
      return next;
    });
  }

  return (
    <div className="flex items-center justify-end gap-2">
      <button
        type="button"
        className="inline-flex items-center justify-center w-10 aspect-square rounded-full cursor-pointer bg-button-ghost-bg hover:bg-button-ghost-bg--hover"
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
    </div>
  );
};
