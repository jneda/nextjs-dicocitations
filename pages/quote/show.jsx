import Layout from "../../components/layout";
import Link from "next/link";

export default function ShowQuotes() {
  return (
    <Layout>
      <p>Afficher les citations</p>
      <Link href="/quote/new">Ajouter une citation</Link>
      <Link href="/">&larr; Accueil</Link>
    </Layout>
  );
}