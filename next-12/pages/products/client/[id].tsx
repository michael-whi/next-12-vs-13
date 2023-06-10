import dynamic from "next/dynamic";

const ClientProductDetailedPage = dynamic(
  () =>
    import("../../../src/pages/client-product-detail/client-product-detail"),
  { ssr: false }
);

function ServerRenderPage() {
  return <ClientProductDetailedPage />;
}

export default ServerRenderPage;
