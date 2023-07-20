import { useContext } from "react";
import { ProductContext } from "../../context/products.context";
import ProductCard from "../../components/product-card/products-card.context";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products?.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export default Shop;
