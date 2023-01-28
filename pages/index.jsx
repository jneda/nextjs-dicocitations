import Layout from "../components/layout";
import Link from "next/link";

export default function HomePage() {
  return (
    <Layout>
        <h1>Bonjour tout le monde !</h1>
        <p>Rechercher une citation</p>
        <Link href="/quote/new">Ajouter une citation</Link>
    </Layout>
  );
}
