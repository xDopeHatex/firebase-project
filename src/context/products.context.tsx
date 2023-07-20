import { createContext, ReactElement, useState } from "react";
import PRODUCTS from "../shop-data.json";

type ProductProviderPropsType = {
  children: ReactElement | ReactElement[];
};

type ProductType = {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
}[];

type ProductContextType = {
  products: ProductType | null;
  setProduct: React.Dispatch<React.SetStateAction<ProductType | null>>;
};

export const ProductContext = createContext<ProductContextType>({
  products: [],
  setProduct: () => null,
});

export const ProductsProvider = ({
  children,
}: ProductProviderPropsType): JSX.Element => {
  const [products, setProduct] = useState<ProductType | null>(PRODUCTS);

  const value: ProductContextType = {
    products,
    setProduct,
  };

  return (
    <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
  );
};
