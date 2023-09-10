import { TProduct } from "../../redux/product/types";

import styles from "./ProductCard.module.css";

export default function ProductCard({ product }: { product: TProduct }) {
  const { Container, Card, Image, Title, Price, Front, Back, SubTitle } =
    styles;

  return (
    <div className={Container}>
      <div className={Card}>
        <div className={Front}>
          <img className={Image} src={product.image} alt="Product image" />
          <h3 className={Price}>${product.price}</h3>
          <h3 className={Title}>{product.title}</h3>
        </div>
        <div className={Back}>
          <div>
            <h3 className={SubTitle}>Description</h3>
            <p>{product.description}</p>
          </div>

          <div>
            <h3 className={SubTitle}>Rating</h3>
            <h3>{product.rating.rate}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
