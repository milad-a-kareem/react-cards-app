import { TProduct } from "../../redux/product/types";
import ProductCard from "../ProductCard";

import styles from "./ProductList.module.css";

export default function ProductList({ products }: { products: TProduct[] }) {
  return (
    <div className={styles.Container}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}
