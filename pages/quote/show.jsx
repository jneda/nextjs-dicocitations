import Layout from "../../components/layout";
import Link from "next/link";
import { Op } from "sequelize";
import Quote from "../../models/quote";
import Author from "../../models/author";

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

export async function getServerSideProps(context) {
  const { query, author: authorId, century, sort } = context.query;

  const sortKey = sort === "author" ? [[Author, 'lastName'], [Author, "firstName"]] : [[Author, "century"]];

  const options = {
    include: {
      model: Author,
      where: {
        ...(century && {century: century}),
        ...(authorId && {id: authorId})
      }
    },
    ...(query && { where: { text: {[Op.like]: `%${query}%`} } }),
    order: sortKey
  };

  let quotes = await Quote.findAll(options);
  quotes = quotes.map((quote) => quote.toJSON());


  return {
    props: {
      quotes
    }
  }
}
