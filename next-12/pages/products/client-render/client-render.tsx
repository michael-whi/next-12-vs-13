import Head from "next/head";
import Image from "next/image";
import styles from "../../../styles/Home.module.css";
import { useEffect, useState } from "react";
import { TProductResponse } from "./client-render.types";

function ClientRenderPage() {
  const [productList, setProductList] = useState<TProductResponse>();

  useEffect(() => {
    async function getProducts() {
      const productsResponse = await fetch("https://dummyjson.com/products");

      setProductList(await productsResponse.json());
    }

    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{" "}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <div className={styles.grid}>
          {!!productList?.products?.length &&
            productList?.products?.map((product) => (
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
            ))}
        </div>
      </main>
    </div>
  );
}

export default ClientRenderPage;
