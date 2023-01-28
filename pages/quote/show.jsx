import Layout from "../../components/layout";
import Link from "next/link";
import Quote from "../../models/quote";

export default function ShowQuotes({ quotes }) {
  const quoteRows = quotes.map(({ id, text, author }) => (
    <tr key={id}>
      <td>{`${author.firstName} ${author.lastName}`}</td>
      <td>{text}</td>
      <td>{author.century}</td>
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
          </tr>
        </thead>
        <tbody>
          {quoteRows}
        </tbody>
      </table>
      <nav>
        <ul>
          <li>
            <Link href="/" role="button" className="outline">&larr; Accueil</Link>
          </li>
        </ul>
        <ul>
          <li>
            <Link href="/quote/new" role="button" className="outline">Ajouter une citation</Link>
          </li>
        </ul>
      </nav>
    </Layout>
  );
}

export async function getServerSideProps(context) {
  let quotes = await Quote.findAll({ include: "author" });
  quotes = quotes.map(quote => quote.toJSON());
  console.log(quotes);
  return {
    props: { quotes }
  };
}