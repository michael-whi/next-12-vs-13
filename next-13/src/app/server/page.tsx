import ProductListPage from "@/pages/product-list/product-list";

async function getProducts() {
  const productsResponse = await fetch("https://dummyjson.com/products", {
    cache: "no-store",
  });

  const data = await productsResponse.json();
  return data;
}

async function ServerProductsPage() {
  const products = await getProducts();
  return <ProductListPage productList={products} />;
}

export default ServerProductsPage;
