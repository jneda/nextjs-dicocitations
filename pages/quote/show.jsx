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

  let quotes = await Quote.findAll({ include: "author" });

  quotes = quotes
    .map((quote) => quote.toJSON())
    .filter((quote) => {
      return (
        checkAuthor(quote, authorId) &&
        checkCentury(quote, century) &&
        checkQuery(quote, query)
      );
    })
    .sort(sort === "author" ? sortByAuthor : sortByCentury);
    
  return {
    props: { quotes },
  };
}

function checkAuthor(quote, authorId) {
  return (
    authorId === "" ||
    typeof authorId === "undefined" ||
    quote.authorId == authorId
  );
}

function checkCentury(quote, century) {
  return (
    century === "" ||
    typeof century === "undefined" ||
    quote.author.century == century
  );
}

function checkQuery(quote, query) {
  return (
    query === "" ||
    typeof query === "undefined" ||
    quote.text.toLowerCase().includes(query.toLowerCase())
  );
}

function sortByAuthor(a, b) {
  if (a.author.lastName < b.author.lastName) {
    return -1;
  } else if (a.author.lastName > b.author.lastName) {
    return 1;
  }
  if (a.author.firstName < b.author.firstName) {
    return -1;
  } else if (a.author.lastName > b.author.lastName) {
    return 1;
  }
  return 0;
}

function sortByCentury(a, b) {
  return a.author.century - b.author.century;
}
