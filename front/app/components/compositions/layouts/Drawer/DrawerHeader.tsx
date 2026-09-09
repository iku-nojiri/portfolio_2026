import { Text } from "@/app/components/premitives/Text";
import { BurgerBtn } from "@/app/components/features/BurgerBtn";

export const DrawerHeader = () => {
  return (
    <header className="md:px-10 px-6 py-3.5 border-b border-muted">
      <div className="flex justify-between items-center">
        <Text weight="bold">Menu</Text>
        <BurgerBtn />
      </div>
    </header>
  );
};
