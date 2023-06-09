import styles from "../../../styles/Home.module.css";
import dynamic from "next/dynamic";

const ClientProductListPage = dynamic(
  () => import("../../src/pages/client-render"),
  { ssr: false }
);

function ClientRenderPage() {
  return <ClientProductListPage />;
}

export default ClientRenderPage;
