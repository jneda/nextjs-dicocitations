import Layout from "../../../components/layout";
import Link from "next/link";
import Quote from "../../../models/quote";
import Author from "../../../models/author";

import styles from "./index.module.css";

export default function ShowQuotes({ quotes }) {
  async function onDeleteClickHandler(e) {
    console.log(e);
    const response = await fetch(`/api/quote/delete?id=${e.target.id}`);
    console.log(await response.json());
  }

  const quoteRows = quotes.map(({ id, text, author }) => (
    <tr key={id}>
      <td>{`${author.firstName} ${author.lastName}`}</td>
      <td>{text}</td>
      <td>{author.century}</td>
      <td><Link href={`/admin/quote/edit/${id}`} className={styles.link}>📝</Link></td>
      <td><span id={id} onClick={onDeleteClickHandler} className={styles.btn}>🗑️</span></td>
    </tr>
  ));

  return (
    <Layout>
      <table role="grid">
        <thead>
          <tr>
            <th scope="col">Auteur</th>
            <th scope="col">Citation</th>
            <th scope="col">Siècle</th>
            <th scope="col">Éditer</th>
            <th scope="col">Supprimer</th>
          </tr>
        </thead>
        <tbody>{quoteRows}</tbody>
      </table>
      <nav>
        <ul>
          <li>
            <Link href="/" role="button" className="outline">
              &larr; Accueil
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/quote/new" role="button" className="outline">
              Ajouter une citation
            </Link>
          </li>
        </ul>
      </nav>
    </Layout>
  );
}

export async function getServerSideProps() {

  let quotes = await Quote.findAll({
    include: Author,
    order: [[Author, 'lastName']]
  });
  quotes = quotes.map((quote) => quote.toJSON());


  return {
    props: {
      quotes
    }
  }
}
