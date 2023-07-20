import "./products-card.styles.scss";
import Button from "../button/button.component";

type ProductCardPropsType = {
  product: { id: number; name: string; imageUrl: string; price: number };
};

const ProductCard = ({ product }: ProductCardPropsType) => {
  const { name, price, imageUrl } = product;

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" type="button">
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
