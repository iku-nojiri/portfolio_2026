import { ThemeSwitcher } from "@/app/components/features/themeSwitcher";

export const HeaderActions = () => {
  return (
    <div className="flex items-center justify-end gap-2">
      <ThemeSwitcher />
    </div>
  );
};
