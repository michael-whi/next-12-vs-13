import Image from "next/image";
import styles from "@/app/Home.module.css";
import { TProductResponse } from "@/types/products";
import Link from "next/link";

function ProductListPage({
  productList,
  path = "server",
}: {
  productList: TProductResponse;
  path?: string;
}) {
  return (
    <>
      <h1 className={styles.title}>Product list, {path} side</h1>

      <div className={styles.grid}>
        {!!productList?.products?.length &&
          productList?.products?.map((product) => (
            <Link key={product.id} href={`${path}/${product.id}`}>
              <section className={styles.card}>
                <h2>{product.title}</h2>
                <Image
                  alt={product.description}
                  src={product.images[0]}
                  width={100}
                  height={100}
                />
                <p>{product.description}</p>
              </section>
            </Link>
          ))}
      </div>
    </>
  );
}

export default ProductListPage;
