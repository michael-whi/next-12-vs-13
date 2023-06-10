import dynamic from "next/dynamic";

const ClientProductListPage = dynamic(
  () => import("../../../src/pages/client-product-list"),
  { ssr: false }
);

function ClientRenderPage() {
  return <ClientProductListPage />;
}

export default ClientRenderPage;
