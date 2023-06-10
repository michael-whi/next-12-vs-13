import dynamic from "next/dynamic";
import { TProduct } from "../../../src/types/products";

const ServerProductDetailedPage = dynamic(
  () => import("../../../src/pages/product-details/product-details"),
  { ssr: true }
);

export async function getServerSideProps({ params }) {
  const productDetailsResponse = await fetch(
    `https://dummyjson.com/products/${params.id}`
  );

  return {
    props: {
      product: await productDetailsResponse.json(),
    },
  };
}

function ServerRenderPage({ product }: { product: TProduct }) {
  return <ServerProductDetailedPage product={product} />;
}

export default ServerRenderPage;
