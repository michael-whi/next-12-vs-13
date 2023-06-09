import styles from "../../../styles/Home.module.css";
import dynamic from "next/dynamic";

const ServerProductListPage = dynamic(
  () => import("../../src/pages/server-render"),
  { ssr: true }
);

export async function getServerSideProps() {
  const productsResponse = await fetch("https://dummyjson.com/products");

  return {
    props: {
      productList: await productsResponse.json(),
    },
  };
}

function ServerRenderPage({ productList }) {
  return <ServerProductListPage productList={productList} />;
}

export default ServerRenderPage;
