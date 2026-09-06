import { ThemeSwitcher } from "@/app/components/features/themeSwitcher";
import { BurgerBtn } from "@/app/components/features/BurgerBtn";

export const HeaderActions = () => {
  return (
    <div className="flex items-center justify-end gap-2">
      <ThemeSwitcher />
      <BurgerBtn />
    </div>
  );
};
