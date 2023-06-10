import dynamic from "next/dynamic";

const ServerProductListPage = dynamic(
  () => import("../../../src/pages/product-list/product-list"),
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
