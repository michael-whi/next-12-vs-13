import Image from "next/image";
import styles from "@/app/Home.module.css";
import { TProduct } from "@/types/products";

function ProductDetailsPage({ product }: { product: TProduct }) {
  return (
    <>
      <h1 className={styles.title}>Product {`${product?.id}`}</h1>

      <div className={styles.grid}>
        {!!product?.id && (
          <section key={product.id} className={styles.card}>
            <h2>{product.title}</h2>
            <Image
              alt={product.description}
              src={product.images[0]}
              width={100}
              height={100}
            />
            <p>{product.description}</p>
          </section>
        )}
      </div>
    </>
  );
}

export default ProductDetailsPage;
