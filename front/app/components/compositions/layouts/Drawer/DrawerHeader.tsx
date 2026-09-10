import { Heading } from "@/app/components/premitives/Heading";
import { BurgerBtn } from "@/app/components/features/BurgerBtn";

export const DrawerHeader = () => {
  return (
    <header className="md:pr-10 pr-6 pl-4 py-3.5 border-b border-muted">
      <div className="flex justify-between items-center">
        <Heading as="p" size="xs">Menu</Heading>
        <BurgerBtn />
      </div>
    </header>
  );
};
