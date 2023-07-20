import { ReactElement, createContext, useState } from "react";

type CartType = {
  isDropdownOpen: boolean;
  setIsDropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

type CartContextProviderType = {
  children: ReactElement | ReactElement[];
};

export const CartContext = createContext<CartType>({
  isDropdownOpen: false,
  setIsDropdownOpen: () => {},
});

export const CartContextProvider = ({
  children,
}: CartContextProviderType): JSX.Element => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const value: CartType = { isDropdownOpen, setIsDropdownOpen };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
