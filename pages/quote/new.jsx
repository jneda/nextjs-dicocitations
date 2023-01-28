import Layout from "../../components/layout";
import Link from "next/link";

export default function NewQuote() {
  return (
    <Layout>
      <p>Ajouter une nouvelle citation</p>
      <Link href="/">&larr; Accueil</Link>
    </Layout>
  );
}