import { useEffect, useState } from "react";
import { TProductResponse } from "../../types/products";
import ProductListPage from "../product-list/product-list";

function ClientProductListPage() {
  const [productList, setProductList] = useState<TProductResponse>();

  useEffect(() => {
    async function getProducts() {
      const productsResponse = await fetch("https://dummyjson.com/products");

      setProductList(await productsResponse.json());
    }

    getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <ProductListPage productList={productList} />;
}

export default ClientProductListPage;
