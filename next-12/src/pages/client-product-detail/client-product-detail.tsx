import { useEffect, useState } from "react";
import { TProduct } from "../../types/products";
import { useRouter } from "next/router";
import ProductDetailsPage from "../product-details/product-details";

function ClientProductDetailedPage() {
  const [product, setProduct] = useState<TProduct>();
  const { query } = useRouter();

  useEffect(() => {
    async function getProduct() {
      const productsResponse = await fetch(
        `https://dummyjson.com/products/${query.id}`
      );

      setProduct(await productsResponse.json());
    }

    getProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ProductDetailsPage product={product} />;
}

export default ClientProductDetailedPage;
