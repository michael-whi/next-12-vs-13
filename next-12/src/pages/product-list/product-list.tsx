import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { TProductResponse } from "../../types/products";
import Link from "next/link";
import { useRouter } from "next/router";

function ProductListPage({ productList }: { productList: TProductResponse }) {
  const { pathname } = useRouter();
  const renderSide = pathname.includes("server") ? "server" : "client";

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Product list, client side</h1>

        <div className={styles.grid}>
          {!!productList?.products?.length &&
            productList?.products?.map((product) => (
              <Link key={product.id} href={`${renderSide}/${product.id}`}>
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
      </main>
    </div>
  );
}

export default ProductListPage;
