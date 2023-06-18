import { TProduct } from "@/types/products";
import ProductDetailsPage from "@/pages/product-details/product-details";

export async function getProductDetails(id: string) {
  const productDetailsResponse = await fetch(
    `https://dummyjson.com/products/${id}`
  );

  const data = await productDetailsResponse.json();
  return data as TProduct;
}

async function ServerProductDetailsPage({ params }: any) {
  const product = await getProductDetails(params.id);

  return <ProductDetailsPage product={product} />;
}

export default ServerProductDetailsPage;
